# Kotec Home Display

Kotec Home Display, permet d'afficher sur n'importe quel appareil ayant une connection internet
et un navigateur web compatible, divers information comme :
- L'heure
- La méteo (OpenWeatherMap)
- Le cours du Bitcoin (Cryptocompare)

Vous pouvez aussi developper vos propres sous-application (nommée "apps").

# Comment ça fonctionne
Kotec Home Display, utilise les langages du web (HTML/CSS et JS) pour l'affichage et JSON pour la gestions des données. Il suffit de télécharger les fichiers, puis d'ouvrir index.html, dans votre navigateur web pour profiter pleinement de ses fonctionnalités.

# Créer sont apps
La hiérachie du dossier de votre apps doit contenir les fichiers suivants obligatoirement
 - init.json
 - apps.js
 
### init.json
Ce fichier comprend toute les informations nécessaire au fonction de base de Kotec Home Display
```
{
  "nom": "Horloge",
  "version": "0.0.1",
  "description": "Une simple horloge.",
  "auteur": "Kotec",
  "animated" : true,
  "nbrAnim" : 4,
  "timeAnim": 1000,
  "refresh": 500,
  "icone" : [
		[
			["#000000", "#FFFFFF", "#FFFFFF", "#FFFFFF", "#FFFFFF", "#FFFFFF", "#000000", "#000000"],
			["#FFFFFF", "#000000", "#000000", "#FFFFFF", "#000000", "#000000", "#FFFFFF", "#000000"],
			["#FFFFFF", "#000000", "#000000", "#FFFFFF", "#000000", "#000000", "#FFFFFF", "#000000"],
			["#FFFFFF", "#000000", "#000000", "#FFFFFF", "#000000", "#000000", "#FFFFFF", "#000000"],
			["#FFFFFF", "#000000", "#000000", "#000000", "#000000", "#000000", "#FFFFFF", "#000000"],
			["#FFFFFF", "#000000", "#000000", "#000000", "#000000", "#000000", "#FFFFFF", "#000000"],
			["#000000", "#FFFFFF", "#FFFFFF", "#FFFFFF", "#FFFFFF", "#FFFFFF", "#000000", "#000000"],
			["#000000", "#000000", "#000000", "#000000", "#000000", "#000000", "#000000", "#000000"]
		],
		[
			["#000000", "#FFFFFF", "#FFFFFF", "#FFFFFF", "#FFFFFF", "#FFFFFF", "#000000", "#000000"],
			["#FFFFFF", "#000000", "#000000", "#000000", "#000000", "#000000", "#FFFFFF", "#000000"],
			["#FFFFFF", "#000000", "#000000", "#FFFFFF", "#000000", "#000000", "#FFFFFF", "#000000"],
			["#FFFFFF", "#000000", "#000000", "#FFFFFF", "#FFFFFF", "#FFFFFF", "#FFFFFF", "#000000"],
			["#FFFFFF", "#000000", "#000000", "#000000", "#000000", "#000000", "#FFFFFF", "#000000"],
			["#FFFFFF", "#000000", "#000000", "#000000", "#000000", "#000000", "#FFFFFF", "#000000"],
			["#000000", "#FFFFFF", "#FFFFFF", "#FFFFFF", "#FFFFFF", "#FFFFFF", "#000000", "#000000"],
			["#000000", "#000000", "#000000", "#000000", "#000000", "#000000", "#000000", "#000000"]			
		],
		[
			["#000000", "#FFFFFF", "#FFFFFF", "#FFFFFF", "#FFFFFF", "#FFFFFF", "#000000", "#000000"],
			["#FFFFFF", "#000000", "#000000", "#000000", "#000000", "#000000", "#FFFFFF", "#000000"],
			["#FFFFFF", "#000000", "#000000", "#FFFFFF", "#000000", "#000000", "#FFFFFF", "#000000"],
			["#FFFFFF", "#000000", "#000000", "#FFFFFF", "#000000", "#000000", "#FFFFFF", "#000000"],
			["#FFFFFF", "#000000", "#000000", "#FFFFFF", "#000000", "#000000", "#FFFFFF", "#000000"],
			["#FFFFFF", "#000000", "#000000", "#FFFFFF", "#000000", "#000000", "#FFFFFF", "#000000"],
			["#000000", "#FFFFFF", "#FFFFFF", "#FFFFFF", "#FFFFFF", "#FFFFFF", "#000000", "#000000"],
			["#000000", "#000000", "#000000", "#000000", "#000000", "#000000", "#000000", "#000000"]			
		],
		[
			["#000000", "#FFFFFF", "#FFFFFF", "#FFFFFF", "#FFFFFF", "#FFFFFF", "#000000", "#000000"],
			["#FFFFFF", "#000000", "#000000", "#000000", "#000000", "#000000", "#FFFFFF", "#000000"],
			["#FFFFFF", "#000000", "#000000", "#FFFFFF", "#000000", "#000000", "#FFFFFF", "#000000"],
			["#FFFFFF", "#FFFFFF", "#FFFFFF", "#FFFFFF", "#000000", "#000000", "#FFFFFF", "#000000"],
			["#FFFFFF", "#000000", "#000000", "#000000", "#000000", "#000000", "#FFFFFF", "#000000"],
			["#FFFFFF", "#000000", "#000000", "#000000", "#000000", "#000000", "#FFFFFF", "#000000"],
			["#000000", "#FFFFFF", "#FFFFFF", "#FFFFFF", "#FFFFFF", "#FFFFFF", "#000000", "#000000"],
			["#000000", "#000000", "#000000", "#000000", "#000000", "#000000", "#000000", "#000000"]			
		]

	]
}
```
