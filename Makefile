.PHONY: install start stop logs test

help: ## Display available commands
	@fgrep -h "##" $(MAKEFILE_LIST) | fgrep -v fgrep | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-30s\033[0m %s\n", $$1, $$2}'

install: ## Install php deps
	@echo "Lancement de l'installation du projet"
	yarn install


start: ## Start dev environment en daemon mode
	@echo "Démarrage du projet sur votre environement local"
	yarn dev

test: ## Start tests
	@echo "Lancement des tests du projet"
	yarn test
