#!/usr/bin/env bash
#
# Copy Jekyll site to S3 bucket
#
####################################
#
# Custom vars
#
export S3_BUCKET="s3://.../"
export DISTRIBUTION_ID=...
####################################

set -e # halt script on error
set -v # echo on

export TEMPFILE='mktemp'

echo "Building site..."
JEKYLL_ENV=production bundle exec jekyll build

echo "Removing .html extension"
find _site/ -type f ! -iname 'index.html' -iname '*.html' -print0 | while read -d $'\0' f; do mv "$f" "${f%.html}"; done

echo "Copying files to server..."
aws s3 sync _site/ $S3_BUCKET --size-only --exclude "*" --include "*.*" --delete --acl public-read | tee -a $TEMPFILE
echo "Copying files with content type..."
aws s3 sync _site/ $S3_BUCKET --size-only --content-type text/html --exclude "*.*" --delete --acl public-read | tee -a $TEMPFILE
#invalidate only modified files
grep "upload\|deleted" $TEMPFILE | sed -e "s|.*upload.*to $S3_BUCKET|/|" | sed -e "s|.*delete: $S3_BUCKET|/|" | sed -e 's/index.html//' | sed -e 's/\(.*\).html/\1/' | tr '\n' ' ' | xargs aws cloudfront create-invalidation --distribution-id $DISTRIBUTION_ID --paths