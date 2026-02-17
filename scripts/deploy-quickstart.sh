#!/usr/bin/env bash
set -euo pipefail

if [[ ! -f .env.local ]]; then
  cp .env.example .env.local
  echo "Created .env.local from .env.example"
fi

unset http_proxy https_proxy HTTP_PROXY HTTPS_PROXY || true
unset npm_config_http_proxy npm_config_https_proxy || true

npm config set registry https://registry.npmjs.org

echo "Installing dependencies..."
npm install

echo "Generating Prisma client..."
npm run prisma:generate || true

echo "Starting dev server..."
npm run dev
