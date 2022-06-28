.PHONY: help build test deps clean

help:  ## Display this help
	@awk 'BEGIN {FS = ":.*##"; printf "\nUsage:\n  make \033[36m<target>\033[0m\n\nTargets:\n"} \
		/^[a-zA-Z_-]+:.*?##/ { printf "  \033[36m%-10s\033[0m %s\n", $$1, $$2 }' $(MAKEFILE_LIST)

install: ## Download all the packages.
	@go get ./...
	@cd web && npm i --loglevel=error -d && cd ..

build: ## Build executable files
	@cd web && npm run build && cd ..
	@goreleaser release --rm-dist --snapshot

test: ## Run tests
	@go install "github.com/rakyll/gotest@latest"
	@gotest -v -coverprofile=coverage.out -covermode=atomic ./...

deps: ## Bump all the go module and node packages
	@go mod verify
	@go mod tidy -v
	@go get -u ./...
	@cd web && npx --yes npm-check-updates -u --reject eslint-config-airbnb-typescript && npm update --loglevel=error && cd ..

clean: ## Clean up build files
	@rm -rf dist/
	@rm -rf web/build/*
