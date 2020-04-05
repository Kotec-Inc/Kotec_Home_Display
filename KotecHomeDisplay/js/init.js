function initKotecAllApps(){
	var xhr = getXMLHttpRequest();
		
	// Chargement du fichier
	xhr.open("GET", 'Apps/init.json', false);
	xhr.send(null);
	if(xhr.readyState != 4 || (xhr.status != 200 && xhr.status != 0)) // Code == 0 en local
		throw new Error("Impossible de charger la carte nommée \"" + nom + "\" (code HTTP : " + xhr.status + ").");
	var json = xhr.responseText;
	this.jsonData = JSON.parse(json);	
}

initKotecAllApps.prototype.getData = function(){
	return this.jsonData.list;
}

initKotecAllApps.prototype.getCountApps = function(){
	return this.jsonData.list.length;
}