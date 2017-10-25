#!/usr/bin/env bash
#
# Copy Jekyll site to S3 bucket
#
####################################
#
# Custom vars
#
#S3_BUCKET="www-staging.acebusters.com"
#DISTRIBUTION_ID=E3QZ021461XQL5
####################################

set -e # halt script on error

S3_BUCKET=s3://$S3_BUCKET/

echo "Building site..."
JEKYLL_ENV=production bundle exec jekyll build

echo "Removing .html extension"
find _site/ -type f ! -iname 'index.html' -iname '*.html' -print0 | while read -d $'\0' f; do mv "$f" "${f%.html}"; done

SOURCE=_site/ DEST_BUCKET=$S3_BUCKET ./scripts/copy.sh
