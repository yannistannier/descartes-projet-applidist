# Description

Api restful permettant l'authentification

# Build
```
./gradlew bootRepackage 
```


# Deploiement dans le cloud


## install aws eb
```
pip install awsebcli
```

## Creer une Application

Si aucune application EBS existe :
```
eb init
```
nom : spring
choisir eu-west-3, java, application

## Creer un environnement 
```
eb create
```
nom : spring-dev


## Deployer une nouvelle version
```
eb deploy
```