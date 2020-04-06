var apiCryptocompare;

function initCryptocompare(){
	myApps = initKotec.getData()[selected];
	this.jsonData = JSON.parse(jsonCryptocompare);
}

initCryptocompare.prototype.getName = function() {
	return this.jsonData.nom;
}

initCryptocompare.prototype.getDescription = function() {
	return this.jsonData.description;
}

initCryptocompare.prototype.getVersion = function() {
	return this.jsonData.version;
}

initCryptocompare.prototype.getAuteur = function() {
	return this.jsonData.auteur;
}

initCryptocompare.prototype.getIcons = function() {
	return this.jsonData.icone;
}

initCryptocompare.prototype.getRefresh = function() {
	return this.jsonData.refresh;
}

initCryptocompare.prototype.getAnimated = function(){
	return this.jsonData.animated;
}

function loadCryptocompare(){
	var xhr = getXMLHttpRequest();	
	// Chargement du fichier
	xhr.open("GET", 'https://min-api.cryptocompare.com/data/price?fsym=BTC&tsyms=EUR&api_key=' + myApps.key , false);
	xhr.send(null);
	if(xhr.readyState != 4 || (xhr.status != 200 && xhr.status != 0)) // Code == 0 en local
		throw new Error("Impossible de charger la carte nommée \"" + nom + "\" (code HTTP : " + xhr.status + ").");
	var json = xhr.responseText;
	this.data = JSON.parse(json);
	this.data.lastCall = Date.now();
	
	console.log("Appel de l'API");
	console.log(this.data);
}

loadCryptocompare.prototype.getPrix = function(){
	console.log(this.data.EUR);
	return this.data.EUR;
}

loadCryptocompare.prototype.getLastCall = function(){
	return this.data.lastCall;
}

function appsCryptocompare(){
	if(apiCryptocompare === undefined){
		console.log("loadData Cryptocompare");
		apiCryptocompare = new loadCryptocompare();
	}
	else{
		if(Date.now() - apiCryptocompare.getLastCall() > 10 * 60 * 1000 ){ // Si on est supérieur à 10min (en ms) on rappel l'API 
			apiCryptocompare = '';
			apiCryptocompare = new loadCryptocompare();
		}
	}
	
	prix = apiCryptocompare.getPrix();
	text = prix + '€';
	//console.log(text);
	return text;
}