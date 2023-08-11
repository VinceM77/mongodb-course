use# ia-mongodb-cours-2021

test one two, c'est super les markdown's 

## instalation 


docker compose up (-d) => créer la bdd sur docker (à vérifier)
docker compose down => supprimer la bdd sur docker

dans le terminal on lance docker exec -it mongos-db /bin/bash => accéder à l'espace de travail 

mongosh --username root --authenticationDatabase admin --password => pour se connecter au server via mongosh
password test123*

## Commandes utiles 

- show dbs => lister les bdd
- use<db> => se connecter à une bdd
- show collections => lister les collections

db=> représente le contexte courant(la bdd courante) 

## dossier workspace

Le dossier workspace est monté dans le container. Il est accessible dans le container /workspace.

## raccourci 

Lorsquevous êtes dans le container, à la place de taper mongosh --username root --authenticationDatabase admin --password 
On peut utiliser le raccourci bash connect.sh








