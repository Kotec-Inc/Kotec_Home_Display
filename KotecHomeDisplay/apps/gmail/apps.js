function initGmail(){
	var xhr = getXMLHttpRequest();
		
	// Chargement du fichier
	xhr.open("GET", 'Apps/Gmail/application.json', false);
	xhr.send(null);
	if(xhr.readyState != 4 || (xhr.status != 200 && xhr.status != 0)) // Code == 0 en local
		throw new Error("Impossible de charger la carte nommée \"" + nom + "\" (code HTTP : " + xhr.status + ").");
	var json = xhr.responseText;
	this.jsonData = JSON.parse(json);
}

initGmail.prototype.getName = function() {
	return this.jsonData.nom;
}

initGmail.prototype.getDescription = function() {
	return this.jsonData.description;
}

initGmail.prototype.getVersion = function() {
	return this.jsonData.version;
}

initGmail.prototype.getAuteur = function() {
	return this.jsonData.auteur;
}

initGmail.prototype.getIcons = function() {
	return this.jsonData.icone;
}

initGmail.prototype.getRefresh = function() {
	return this.jsonData.refresh;
}

initGmail.prototype.getAnimated = function(){
	return this.jsonData.animated;
}

function appsGmail(){
	//var date = new Date(Date.now());
	text = " 0";
	//console.log(text);
	return text;
}