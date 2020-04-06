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

La couleur de chaque pixel, est définie par un code hexa.

# Créer sont apps
La hiérachie du dossier de votre apps doit contenir les fichiers suivants obligatoirement
 - init.json
 - apps.js
 
### init.json
Ce fichier comprend toute les informations nécessaire au fonction de base de Kotec Home Display.  
Par exemple le **init.json** de l'horloge de base (non minifier):
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
`"nom" : ` Nom de votre application.  
`"version" : ` Version actuelle de votre application.  
`"description" : ` Courte déscription de votre application.   
`"auteur" : ` Votre nom ou pseudo.  
`"animated" : ` Si l'icone de votre application peux s'animer : true, sinon false.  
`"nbrAnim" : ` Nombre d'animation disponible.  
`"timeAnim" : ` Vitesse d'animation de votre icone en ms.  
`"refresh" : ` Vitesse de rafraichissement du text afficher en ms.  
`"icone" : ` Le graphisme de votre apps en 8x8. Le code hexa décimale définie la couleur du pixel.  


Une fois votre **init.json** fini vous faudra, le minifier (avec par exemple https://codebeautify.org/jsonminifier)

`var jsonNomDeVotreApplication = '{"nom":"Horloge","version":"0.0.1","description":"Une simple horloge.","auteur":"Kotec","animated":true,"nbrAnim":4,"timeAnim":1000,"refresh":500,"icone":[[["#000000","#FFFFFF","#FFFFFF","#FFFFFF","#FFFFFF","#FFFFFF","#000000","#000000"],["#FFFFFF","#000000","#000000","#FFFFFF","#000000","#000000","#FFFFFF","#000000"],["#FFFFFF","#000000","#000000","#FFFFFF","#000000","#000000","#FFFFFF","#000000"],["#FFFFFF","#000000","#000000","#FFFFFF","#000000","#000000","#FFFFFF","#000000"],["#FFFFFF","#000000","#000000","#000000","#000000","#000000","#FFFFFF","#000000"],["#FFFFFF","#000000","#000000","#000000","#000000","#000000","#FFFFFF","#000000"],["#000000","#FFFFFF","#FFFFFF","#FFFFFF","#FFFFFF","#FFFFFF","#000000","#000000"],["#000000","#000000","#000000","#000000","#000000","#000000","#000000","#000000"]],[["#000000","#FFFFFF","#FFFFFF","#FFFFFF","#FFFFFF","#FFFFFF","#000000","#000000"],["#FFFFFF","#000000","#000000","#000000","#000000","#000000","#FFFFFF","#000000"],["#FFFFFF","#000000","#000000","#FFFFFF","#000000","#000000","#FFFFFF","#000000"],["#FFFFFF","#000000","#000000","#FFFFFF","#FFFFFF","#FFFFFF","#FFFFFF","#000000"],["#FFFFFF","#000000","#000000","#000000","#000000","#000000","#FFFFFF","#000000"],["#FFFFFF","#000000","#000000","#000000","#000000","#000000","#FFFFFF","#000000"],["#000000","#FFFFFF","#FFFFFF","#FFFFFF","#FFFFFF","#FFFFFF","#000000","#000000"],["#000000","#000000","#000000","#000000","#000000","#000000","#000000","#000000"]],[["#000000","#FFFFFF","#FFFFFF","#FFFFFF","#FFFFFF","#FFFFFF","#000000","#000000"],["#FFFFFF","#000000","#000000","#000000","#000000","#000000","#FFFFFF","#000000"],["#FFFFFF","#000000","#000000","#FFFFFF","#000000","#000000","#FFFFFF","#000000"],["#FFFFFF","#000000","#000000","#FFFFFF","#000000","#000000","#FFFFFF","#000000"],["#FFFFFF","#000000","#000000","#FFFFFF","#000000","#000000","#FFFFFF","#000000"],["#FFFFFF","#000000","#000000","#FFFFFF","#000000","#000000","#FFFFFF","#000000"],["#000000","#FFFFFF","#FFFFFF","#FFFFFF","#FFFFFF","#FFFFFF","#000000","#000000"],["#000000","#000000","#000000","#000000","#000000","#000000","#000000","#000000"]],[["#000000","#FFFFFF","#FFFFFF","#FFFFFF","#FFFFFF","#FFFFFF","#000000","#000000"],["#FFFFFF","#000000","#000000","#000000","#000000","#000000","#FFFFFF","#000000"],["#FFFFFF","#000000","#000000","#FFFFFF","#000000","#000000","#FFFFFF","#000000"],["#FFFFFF","#FFFFFF","#FFFFFF","#FFFFFF","#000000","#000000","#FFFFFF","#000000"],["#FFFFFF","#000000","#000000","#000000","#000000","#000000","#FFFFFF","#000000"],["#FFFFFF","#000000","#000000","#000000","#000000","#000000","#FFFFFF","#000000"],["#000000","#FFFFFF","#FFFFFF","#FFFFFF","#FFFFFF","#FFFFFF","#000000","#000000"],["#000000","#000000","#000000","#000000","#000000","#000000","#000000","#000000"]]]}';`

Le fichier **init.json** ne contient donc pas de données json brut mais une variable JS contenant les données json.   
(J'ai rencontrer un problèmes de cross domaine en essayant de charger le fichier *init.json*, au format json, vu que le fichier est ouvert en local).

## ATTENTION ! La varible doit être contenu sur une seule ligne. Il est conseiller de garder une copie du fichier sous format json qui est plus lisible.

### apps.js
Ce fichier contient le programme de votre apps. Il contient aussi les principales fonctions.
Par exemple : 
