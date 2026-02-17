#!/usr/bin/env bash
set -euo pipefail

REGISTRY="${1:-https://registry.npmjs.org}"

echo "== Velora network doctor =="
echo "Registry: $REGISTRY"
echo

echo "[1/5] Node & npm versions"
node -v
npm -v

echo
echo "[2/5] npm config snapshot"
npm config get registry
npm config list | sed -n '/; "env" config from environment/,$p' || true

echo
echo "[3/5] DNS + TCP reachability"
REG_HOST="$(echo "$REGISTRY" | sed -E 's#https?://([^/]+)/?.*#\1#')"
getent hosts "$REG_HOST" || true
nc -vz "$REG_HOST" 443 || true

echo
echo "[4/5] curl HEAD check"
if curl -sSIf "$REGISTRY" >/tmp/velora_registry_head.txt; then
  head -n 5 /tmp/velora_registry_head.txt
else
  echo "curl failed to reach registry"
fi

echo
echo "[5/5] npm ping"
if npm ping --registry="$REGISTRY"; then
  echo "npm ping succeeded ✅"
else
  echo "npm ping failed ❌"
  echo "If error=403, this is network policy/proxy allowlist and not app code."
fi
