function initKotecHomeDisplay(appsData){	
	for(var x = 0; x < 8; x++){
		for(var y = 0; y < 8; y++){
			var marginTop = x * (police + adjuste) + 2;
			var marginLeft = y * (police + adjuste) + 2;
			var parent = document.getElementById('icone');
			var newChild = '<div id="img_pixel_' + x +'_' + y +'" style="width: ' + police + 'px; height: ' + police + 'px; background-color: black; margin-top: ' + marginTop + 'px; margin-left: ' + marginLeft + 'px; position: absolute"></div>';
			parent.insertAdjacentHTML('beforeend', newChild);
		}
	}
	
	for(var i = 0; i < digits; i++){
		for(var x = 0; x < digits; x++){
			for(var y = 0; y < digits; y++){
				var marginTop = x * (police + adjuste) + 2;
				var marginLeft = (y * (police + adjuste) + 2) + ((72 + police + adjuste) * i);
				
				var parent = document.getElementById('text');
				var newChild = '<div id="txt_pixel_'+ i +'_' + x +'_' + y +'" style="width: ' + police + 'px; height: ' + police + 'px; background-color: black; margin-top: ' + marginTop + 'px; margin-left: ' + marginLeft + 'px; position: absolute"></div>';
				parent.insertAdjacentHTML('beforeend', newChild);
			}
		}
	}	
}

function debug(appsData){
	var parent = document.getElementById('debug');
	while(parent.childElementCount){
		parent.removeChild(parent.lastChild);
	}
	
	var newChild = '<div style="color: white;"><b>Debug</b><br>Nom : '+ appsData.getName() +'<br> Description : '+ appsData.getDescription() + '<br>Version : '+ appsData.getVersion() +'<br>Auteur : '+ appsData.getAuteur() +'<br> Refresh : '+ appsData.getRefresh() +'ms</div>';
	parent.insertAdjacentHTML('beforeend', newChild);
}

function affichageIcone(){
	var appsData = new window[initFunction]();
	var Icons = appsData.getIcons();
	//console.log(Icons);
	if(appsData.getAnimated() == false){
		for(var x = 0; x < 8; x++){
			for(var y = 0; y < 8; y++){
				var child = document.getElementById("img_pixel_"+ x +"_"+ y);
					child.style.backgroundColor = Icons[x][y];
			}
		}	
	}
	else{
		if(animSelect >= appsData.getNbrAnim())
			animSelect = 0;
		
		for(var x = 0; x < 8; x++){
			for(var y = 0; y < 8; y++){
				var child = document.getElementById("img_pixel_"+ x +"_"+ y);
					child.style.backgroundColor = Icons[animSelect][x][y];
			}
		}
		animSelect++;
	}
}

function affichageText(){
	console.log("Affichage du texte");
	var text = window[startFunction]();
	clearAff();
	var txtTaille = text.length;
	if(txtTaille > digits)
		txtTaille = digits;
	
	for (var i = 0; i < txtTaille; i++){
		var charAff = text.charCodeAt(i);
		//console.log(charAff);
		for(var x = 0; x < digits; x++){
			for(var y = 0; y < digits; y++){
				var child = document.getElementById("txt_pixel_"+ i +"_"+ x +"_"+ y);
				child.style.backgroundColor = font[charAff][x][y];
				//console.log(font[charAff]);
			}
		}
	}
}
	
function clearAff(){
	for (var i = 0; i < 8; i++){
		for(var x = 0; x < 8; x++){
			for(var y = 0; y < 8; y++){
				var child = document.getElementById("txt_pixel_"+ i +"_"+ x +"_"+ y);
				child.style.backgroundColor = "#000";
			}
		}
	}
}