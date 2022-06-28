.PHONY: help build test deps clean

help:  ## Display this help
	@awk 'BEGIN {FS = ":.*##"; printf "\nUsage:\n  make \033[36m<target>\033[0m\n\nTargets:\n"} \
		/^[a-zA-Z_-]+:.*?##/ { printf "  \033[36m%-10s\033[0m %s\n", $$1, $$2 }' $(MAKEFILE_LIST)

install: ## Download all the packages
	@go get ./...
	@cd web && npm i && cd ..

lint-frontend:
	@cd web && npm i && npm exec eslint .

lint-backend:
	@go install "github.com/golangci/golangci-lint/cmd/golangci-lint@latest"
	@golangci-lint run ./...

lint: lint-frontend lint-backend ## Lint bookstairs' source code

build-frontend:
	@cd web && npm i && npm run build

build-backend:
	@goreleaser release --rm-dist --snapshot

build: build-frontend build-backend ## Build executable files

test-frontend:
	@cd web && npm i && npm run test

test-backend:
	@go install "github.com/rakyll/gotest@latest"
	@gotest -v -coverprofile=coverage.out -covermode=atomic ./...

test: test-frontend test-backend ## Run all the tests for frontend and backend

deps: ## Bump all the go module and node packages
	@go mod verify
	@go mod tidy -v
	@go get -u ./...
	@cd web && npx --yes npm-check-updates -u --reject eslint-config-airbnb-typescript && npm update --loglevel=error && cd ..

clean: ## Clean up build files
	@rm -rf web/build/*
	@rm -rf dist/
