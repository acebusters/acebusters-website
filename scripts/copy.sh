#!/usr/bin/env bash

TEMPFILE='mktemp'
rm -f $TEMPFILE

SOURCE=s3://$SOURCE/
DEST_BUCKET=s3://$DEST_BUCKET/

echo "Copying files to server..."
aws s3 sync $SOURCE $DEST_BUCKET --size-only --exclude "*" --include "*.*" --delete --acl public-read | tee -a $TEMPFILE

# exit on error
if [[ ${PIPESTATUS[0]} != 0 ]]; then exit ${PIPESTATUS[0]}; fi

echo "Copying files with content type..."
aws s3 sync $SOURCE $DEST_BUCKET --size-only --content-type text/html --exclude "*.*" --delete --acl public-read | tee -a $TEMPFILE

# exit on error
if [[ ${PIPESTATUS[0]} != 0 ]]; then exit ${PIPESTATUS[0]}; fi

if [ "$DISTRIBUTION_ID" ]; then
  echo "Invalidating CloudFront distribution..."
  grep "upload\|deleted" $TEMPFILE | sed -e "s|.*upload.*to $DEST_BUCKET|/|" | sed -e "s|.*delete: $DEST_BUCKET|/|" | sed -e 's/index.html//' | sed -e 's/\(.*\).html/\1/' | tr '\n' ' ' | xargs aws cloudfront create-invalidation --distribution-id $DISTRIBUTION_ID --paths
  # exit on error
  if [[ $? != 0 ]]; then exit $?; fi
fi

rm -f $TEMPFILE
