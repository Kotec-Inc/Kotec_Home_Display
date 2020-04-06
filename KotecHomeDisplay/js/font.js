function initFont(){
	this.jsonData = JSON.parse(jsonFont);
}

initFont.prototype.getFont = function() {
	return this.jsonData;
}