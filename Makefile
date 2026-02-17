SHELL := /bin/bash

.PHONY: doctor bootstrap dev ci smoke

doctor:
	./scripts/doctor-network.sh

bootstrap:
	./scripts/deploy-quickstart.sh

dev:
	npm run dev

ci:
	npm ci
	npm run build

smoke:
	@echo "Set BASE_URL before running, e.g. BASE_URL=https://veloraorganics.com make smoke"
	@test -n "$$BASE_URL" || (echo "BASE_URL is required" && exit 1)
	curl -sSf $$BASE_URL/api/health
	curl -sSf $$BASE_URL/api/products
	curl -sSf $$BASE_URL/sitemap.xml
	curl -sSf $$BASE_URL/robots.txt
