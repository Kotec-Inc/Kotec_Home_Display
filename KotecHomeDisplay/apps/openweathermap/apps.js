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