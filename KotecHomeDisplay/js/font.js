function initFont(){
	var xhr = getXMLHttpRequest();
		
	// Chargement du fichier
	xhr.overrideMimeType("application/json");
	xhr.open("GET", './Fonts/font.json', false);
	xhr.send(null);
	if(xhr.readyState != 4 || (xhr.status != 200 && xhr.status != 0)) // Code == 0 en local
		throw new Error("Impossible de charger la carte nommée \"" + nom + "\" (code HTTP : " + xhr.status + ").");
	var json = xhr.responseText;
	this.jsonData = JSON.parse(json);
}

initFont.prototype.getFont = function() {
	return this.jsonData;
}