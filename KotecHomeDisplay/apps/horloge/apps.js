function initHorloge(){
	var xhr = getXMLHttpRequest();
		
	// Chargement du fichier
	xhr.open("GET", 'Apps/Horloge/application.json', false);
	xhr.send(null);
	if(xhr.readyState != 4 || (xhr.status != 200 && xhr.status != 0)) // Code == 0 en local
		throw new Error("Impossible de charger la carte nommée \"" + nom + "\" (code HTTP : " + xhr.status + ").");
	var json = xhr.responseText;
	this.jsonData = JSON.parse(json);
}

initHorloge.prototype.getName = function() {
	return this.jsonData.nom;
}

initHorloge.prototype.getDescription = function() {
	return this.jsonData.description;
}

initHorloge.prototype.getVersion = function() {
	return this.jsonData.version;
}

initHorloge.prototype.getAuteur = function() {
	return this.jsonData.auteur;
}

initHorloge.prototype.getIcons = function() {
	return this.jsonData.icone;
}

initHorloge.prototype.getRefresh = function() {
	return this.jsonData.refresh;
}

initHorloge.prototype.getAnimated = function(){
	return this.jsonData.animated;
}

initHorloge.prototype.getNbrAnim = function(){
	return this.jsonData.nbrAnim;
}

initHorloge.prototype.getTimeAnim = function(){
	return this.jsonData.timeAnim;
}

function appsHorloge(){
	var date = new Date(Date.now());
	text = date.getHours().toString().padStart(2, 0) + ":" + date.getMinutes().toString().padStart(2, 0) + ":" + date.getSeconds().toString().padStart(2, 0);
	//console.log(text);
	return text;
}