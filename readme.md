# Kotec Home Display

Kotec Home Display, permet d'afficher sur n'importe quel appareil ayant une connection internet
et un navigateur web compatible, divers information comme :
- L'heure
- La méteo (OpenWeatherMap)
- Le cours du Bitcoin (Cryptocompare)

Vous pouvez aussi developper vos propres sous-application (nommée "apps").

# Comment ça fonctionne
Kotec Home Display, utilise les langages du web (HTML/CSS et JS) pour l'affichage et JSON pour la gestions des données. Il suffit de télécharger les fichiers, puis d'ouvrir index.html, dans votre navigateur web pour profiter pleinement de ses fonctionnalités.

Il y a 2 afficheur :
- L'afficheur d'icone, fait 8x8.
- L'afficheur de text, est composer de 8 digits, chacun d'eux fait 3x8.

La couleur de chaque pixel, est définie par un code hexa décimale.

L'affichage du text se fait caractère par caractère. Kotec Home Display récupère le code ASCII de chaque caractère puis récupère le digits correspondant dans le fichier **fonts/font.json**.

Seule les caractères suivants sont disponible pour le moment : 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, +, °, C, € et "espace".

Les fichiers de type **.json** ne contient pas de données json brut mais une variable JS, par exemple `var jsonNomApplication = ` contenant les données json. (J'ai rencontrer un problèmes de cross domaine en essayant de charger les fichiers **.json**, au format json. Vu que le fichier est ouvert en local, j'ai contourner le problème avec une variable JS et garder le format de fichier pour plus de lisibilité).

Pour tenir dans la variable, le code json doit être minifier (avec par exemple https://codebeautify.org/jsonminifier).

# Créer sont apps
Premièrement il vous faut un dossier au nom de votre application sans majuscule, ni caractère spéciaux.
La hiérachie du dossier de votre apps doit contenir les fichiers suivants obligatoirement :
 - init.json
 - apps.js
 
### init.json
Ce fichier comprend toute les informations nécessaire au fonction de base de Kotec Home Display.  
Par exemple le **init.json** de l'apps Open Weather Map (non minifier):
```
{
  "nom": "Open Weather Map",
  "version": "0.0.1",
  "description": "Chaine météo en temps réel avec l'API Open Weater Map",
  "auteur": "Kotec",
  "animated" : true,
  "nbrAnim" : 2,
  "timeAnim": 600,
  "refresh": 0,
  "icone" : [
				[
					["#000000", "#000000", "#FFD700", "#000000", "#000000", "#FFD700", "#000000", "#000000"],
					["#FFD700", "#000000", "#000000", "#000000", "#000000", "#000000", "#000000", "#FFD700"],
					["#000000", "#000000", "#FFD700", "#FFD700", "#FFD700", "#FFD700", "#000000", "#000000"],
					["#000000", "#000000", "#FFD700", "#FFD700", "#FFD700", "#FFFFFF", "#FFFFFF", "#000000"],
					["#000000", "#FFFFFF", "#FFFFFF", "#FFD700", "#FFFFFF", "#FFFFFF", "#FFFFFF", "#FFFFFF"],
					["#FFFFFF", "#FFFFFF", "#FFFFFF", "#FFD700", "#FFFFFF", "#FFFFFF", "#FFFFFF", "#FFFFFF"],
					["#FFFFFF", "#FFFFFF", "#FFFFFF", "#FFFFFF", "#FFFFFF", "#FFFFFF", "#FFFFFF", "#FFFFFF"],
					["#000000", "#FFFFFF", "#FFFFFF", "#FFFFFF", "#FFFFFF", "#FFFFFF", "#FFFFFF", "#000000"]
				],
				[
					["#000000", "#000000", "#000000", "#000000", "#000000", "#000000", "#000000", "#000000"],
					["#000000", "#000000", "#000000", "#000000", "#000000", "#000000", "#000000", "#000000"],
					["#000000", "#000000", "#FFD700", "#FFD700", "#FFD700", "#FFD700", "#000000", "#000000"],
					["#000000", "#000000", "#FFD700", "#FFD700", "#FFD700", "#FFFFFF", "#FFFFFF", "#000000"],
					["#000000", "#FFFFFF", "#FFFFFF", "#FFD700", "#FFFFFF", "#FFFFFF", "#FFFFFF", "#FFFFFF"],
					["#FFFFFF", "#FFFFFF", "#FFFFFF", "#FFD700", "#FFFFFF", "#FFFFFF", "#FFFFFF", "#FFFFFF"],
					["#FFFFFF", "#FFFFFF", "#FFFFFF", "#FFFFFF", "#FFFFFF", "#FFFFFF", "#FFFFFF", "#FFFFFF"],
					["#000000", "#FFFFFF", "#FFFFFF", "#FFFFFF", "#FFFFFF", "#FFFFFF", "#FFFFFF", "#000000"]
				]
			]
}
```  
`"nom" : ` Nom de votre application.  
`"version" : ` Version actuelle de votre application.  
`"description" : ` Courte déscription de votre application.   
`"auteur" : ` Votre nom ou pseudo.  
`"animated" : ` Si l'icone de votre application peux s'animer : true, sinon false.  
`"nbrAnim" : ` Nombre d'animation disponible.  
`"timeAnim" : ` Vitesse d'animation de votre icone en ms.  
`"refresh" : ` Vitesse de rafraichissement du text afficher en ms. Si 0ms pas de rafraichissement.    
`"icone" : ` Le graphisme de votre apps en 8x8. Le code hexa décimale définie la couleur du pixel.    

Une fois votre **init.json** fini vous faudra le minifier.  
#### ATTENTION ! La varible doit être contenu sur une seule ligne. Il est conseiller de garder une copie du fichier sous format json qui est plus lisible.  
Par exemple le fichier **init.json** de l'apps Open Weather Map :  
`var jsonOpenweathermap = '{"nom":"Open Weather Map","version":"0.0.1","description":"Chaine météo en temps réel avec l\'API Open Weater Map","auteur":"Kotec","animated":true,"nbrAnim":2,"timeAnim":600,"refresh":0,"icone":[[["#000000","#000000","#FFD700","#000000","#000000","#FFD700","#000000","#000000"],["#FFD700","#000000","#000000","#000000","#000000","#000000","#000000","#FFD700"],["#000000","#000000","#FFD700","#FFD700","#FFD700","#FFD700","#000000","#000000"],["#000000","#000000","#FFD700","#FFD700","#FFD700","#FFFFFF","#FFFFFF","#000000"],["#000000","#FFFFFF","#FFFFFF","#FFD700","#FFFFFF","#FFFFFF","#FFFFFF","#FFFFFF"],["#FFFFFF","#FFFFFF","#FFFFFF","#FFD700","#FFFFFF","#FFFFFF","#FFFFFF","#FFFFFF"],["#FFFFFF","#FFFFFF","#FFFFFF","#FFFFFF","#FFFFFF","#FFFFFF","#FFFFFF","#FFFFFF"],["#000000","#FFFFFF","#FFFFFF","#FFFFFF","#FFFFFF","#FFFFFF","#FFFFFF","#000000"]],[["#000000","#000000","#000000","#000000","#000000","#000000","#000000","#000000"],["#000000","#000000","#000000","#000000","#000000","#000000","#000000","#000000"],["#000000","#000000","#FFD700","#FFD700","#FFD700","#FFD700","#000000","#000000"],["#000000","#000000","#FFD700","#FFD700","#FFD700","#FFFFFF","#FFFFFF","#000000"],["#000000","#FFFFFF","#FFFFFF","#FFD700","#FFFFFF","#FFFFFF","#FFFFFF","#FFFFFF"],["#FFFFFF","#FFFFFF","#FFFFFF","#FFD700","#FFFFFF","#FFFFFF","#FFFFFF","#FFFFFF"],["#FFFFFF","#FFFFFF","#FFFFFF","#FFFFFF","#FFFFFF","#FFFFFF","#FFFFFF","#FFFFFF"],["#000000","#FFFFFF","#FFFFFF","#FFFFFF","#FFFFFF","#FFFFFF","#FFFFFF","#000000"]]]}';
`  

### apps.js
Ce fichier contient le programme de votre apps. Il contient aussi les principales fonctions.  
Par exemple le **apps.js** de l'apps Open Weather Map :   
``` 
var apiOpenweathermap;

function initOpenweathermap(){
	myApps = initKotec.getData()[selected];
	this.jsonData = JSON.parse(jsonOpenweathermap);
}

initOpenweathermap.prototype.getName = function() {
	return this.jsonData.nom;
}

initOpenweathermap.prototype.getDescription = function() {
	return this.jsonData.description;
}

initOpenweathermap.prototype.getVersion = function() {
	return this.jsonData.version;
}

initOpenweathermap.prototype.getAuteur = function() {
	return this.jsonData.auteur;
}

initOpenweathermap.prototype.getIcons = function() {
	return this.jsonData.icone;
}

initOpenweathermap.prototype.getRefresh = function() {
	return this.jsonData.refresh;
}

initOpenweathermap.prototype.getAnimated = function(){
	return this.jsonData.animated;
}

initOpenweathermap.prototype.getNbrAnim = function(){
	return this.jsonData.nbrAnim;
}

initOpenweathermap.prototype.getTimeAnim = function(){
	return this.jsonData.timeAnim;
}

function loadData(){
	var xhr = getXMLHttpRequest();	
	// Chargement du fichier
	xhr.open("GET", 'http://api.openweathermap.org/data/2.5/weather?q='+ myApps.city +','+ myApps.country +'&units=metric&appid=' + myApps.key , false);
	xhr.send(null);
	if(xhr.readyState != 4 || (xhr.status != 200 && xhr.status != 0)) // Code == 0 en local
		throw new Error("Impossible de charger la carte nommée \"" + nom + "\" (code HTTP : " + xhr.status + ").");
	var json = xhr.responseText;
	this.meteoData = JSON.parse(json);
	this.meteoData.lastCall = Date.now();
	console.log("Appel de l'API");
	console.log(this.meteoData);
}

loadData.prototype.getTemperature = function(){
	console.log(this.meteoData.main.temp);
	return Number.parseFloat(this.meteoData.main.temp).toPrecision(3);
}

loadData.prototype.getLastCall = function(){
	return this.meteoData.lastCall;
}

function appsOpenweathermap(){
	if(apiOpenweathermap === undefined){
		console.log("loadData Meteo");
		apiOpenweathermap = new loadData();
	}
	else{
		if(Date.now() - apiOpenweathermap.getLastCall() > 10 * 60 * 1000 ){ // Si on est supérieur à 10min (en ms) on rappel l'API 
			apiOpenweathermap = '';
			apiOpenweathermap = new loadData();
		}
	}
	
	temp = apiOpenweathermap.getTemperature();
	if(temp > 0)
		text = " +"+ temp +"°C";
	else
		text = " -"+ temp +"°C";
	//console.log(text);
	return text;
}
```
La fonction `initOpenweathermap()` permet d'initialisé les données de l'application.  
La fonction `appsOpenweathermap()` permet de retourner les données à afficher.    
Ces fonctions son obligatoire pour le bon fonctionnement de Kotec Home Display. Le nom des fonctions principale est important, pour plus de lisibilité et évité les doublons, il vaut mieux y inclure le nom de votre apps.  

Ici la fonction `loadData()` permet de récupérer via une API des données météo. Elle est donc optionel.

### Activer son apps
Lors du chargement de la page index.html, le script va charger les données disponible dans le fichier **apps/initApps.json**. (non minifier ici)   
```
{
  "list": [
    {
      "name": "horloge",
      "initFunction": "initHorloge",
      "startFunction": "appsHorloge"
    },
    {
      "name": "openweathermap",
      "initFunction": "initOpenweathermap",
      "startFunction": "appsOpenweathermap",
      "key" : "*******",
      "city" : "Grenoble",
      "country" : "fr"
    },
    {
      "name": "cryptocompare",
      "initFunction": "initCryptocompare",
      "startFunction": "appsCryptocompare",
      "key" : "******",
      "coin" : "BTC",
      "monney" : "EUR"
    }
  ]
}
```  
Les trois données suivante sont obligatoire :  
`"name" : ` Correspond au nom du dossier de votre apps.  
`"initFunction" : ` Correspond au nom de votre fonction init.  
`"startFunction" : ` Correspond au nom de la fonction apps.  

Vous pouvez ajouter dans ce fichier autant de données que nécessaire au fonctionnemment de votre apps, comme par exemple pour l'apps Open Weather Map :   
`"key" : "*******"` Votre clé API.  
`"city" : "Grenoble"` La ville dont vous voulez la météo.  
`"country" : "fr"` Le pays ou la ville se situe.  

C'est données sont accéssible grâce à la variable **myApps**.  
