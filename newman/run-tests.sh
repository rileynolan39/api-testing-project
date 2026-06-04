#!/bin/bash

echo "========================================"
echo "Running API Test Collection"
echo "========================================"

COLLECTION="../collections/API_Testing_Collection.json"
ENVIRONMENT="../environments/Local_Environment.json"
REPORT_DIR="./reports"

mkdir -p "$REPORT_DIR"

newman run "$COLLECTION" \
  -e "$ENVIRONMENT" \
  -r cli,html \
  --reporter-html-export "$REPORT_DIR/newman-report.html"

EXIT_CODE=$?

echo ""
echo "========================================"

if [ $EXIT_CODE -eq 0 ]; then
    echo "All tests completed successfully."
else
    echo "One or more tests failed."
fi

echo "Report generated:"
echo "$REPORT_DIR/newman-report.html"
echo "========================================"

exit $EXIT_CODE