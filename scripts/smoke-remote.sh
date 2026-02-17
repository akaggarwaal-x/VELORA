#!/usr/bin/env bash
set -euo pipefail

BASE_URL="${1:-}"
if [[ -z "$BASE_URL" ]]; then
  echo "Usage: $0 https://your-domain"
  exit 1
fi

for path in /api/health /api/products /sitemap.xml /robots.txt; do
  echo "Checking $BASE_URL$path"
  curl -sSf "$BASE_URL$path" > /dev/null
  echo "  OK"
done

echo "Remote smoke tests passed."
