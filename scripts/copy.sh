#!/usr/bin/env bash

set -e
set -v
set -o pipefail

TEMPFILE='mktemp'
rm -f $TEMPFILE

echo "Copying files to server..."
aws s3 sync $SOURCE $DEST_BUCKET --size-only --exclude "*" --include "*.*" --delete --acl public-read | tee -a $TEMPFILE

echo "Copying files with content type..."
aws s3 sync $SOURCE $DEST_BUCKET --size-only --content-type text/html --exclude "*.*" --delete --acl public-read | tee -a $TEMPFILE

if [ "$DISTRIBUTION_ID" ]; then
  echo "Invalidating CloudFront distribution..."
  aws cloudfront create-invalidation --distribution-id $DISTRIBUTION_ID --paths '/*'
fi

rm -f $TEMPFILE
