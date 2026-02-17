# Smoke test commands

After deployment URL is available, run:

```bash
curl -sSf https://<your-domain>/api/health
curl -sSf https://<your-domain>/api/products
curl -sSf https://<your-domain>/sitemap.xml
curl -sSf https://<your-domain>/robots.txt
```

Manual checks:
1. Submit `/bulk-export` form and verify record in DB.
2. Login via `/admin/login` and verify access to `/admin`.
3. Download `/api/admin/export-leads` and check CSV structure.


Pre-check (before running app):
```bash
./scripts/doctor-network.sh
```
