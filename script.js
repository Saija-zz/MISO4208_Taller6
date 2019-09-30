function generarColores(){
	var txtArea = document.getElementById("css-rules");
	
	var saturacion = document.getElementById("saturacion");
	
	var brillo = document.getElementById("brillo");
	
	var saturacionAleatoria = 1;
	var brilloAleatorio = 1;
	
	if(saturacion.checked){
		saturacionAleatoria = getRandomArbitrary(0,1);
	}
	
	if(brillo.checked){
		brilloAleatorio = getRandomArbitrary(0,1);
	}
	
	
	var min = 0;
	var max = 360;
	var max_1 = max - 1;
	
	var cuantosColores = 5;
	
	var division = max / cuantosColores;
	
	var aleatorio = getRandomInt(min, max);
	
	txtArea.value = saturacion.checked?"Saturacion Aleatoria: Activada!\n": "Sin generacion de saturacion ! :(\n";
	txtArea.value += brillo.checked?"Brillo Aleatorio: Activado!\n": "Sin generacion de brillo ! :(\n";
	
	txtArea.value += "Valor inicial = " + aleatorio + "\n";
	txtArea.value += max + " / "  + cuantosColores + " = " + division + "\n";
	txtArea.value += "siguientes valores de la paleta = \n";
	
	var colores=[];
	
	colores[0] = hsvToRgb(aleatorio / 360, saturacionAleatoria, brilloAleatorio);
	
	for(var i=1; i<=4; i++){
		var cosa = aleatorio + (division * i);
		
		if(cosa > max_1){
			cosa = cosa - max_1; 
		}
		
		colores[i] = hsvToRgb(cosa / 360, saturacionAleatoria, brilloAleatorio);
		
		txtArea.value += cosa + " - ";
	}
	
	//debugArray(colores);
	
	setColores(colores);
		
}

function setColores(arrayColores){
	var nombElem = "color";
	
	var txtArea = document.getElementById("css-rules");
	
	for(var i=1; i<6; i++){
		var elemento = document.getElementById(nombElem + i);
		
		var reglaCSS = "rgb(" + arrayColores[i - 1] + ")";
		
		txtArea.value += reglaCSS + "\n";
		
		elemento.style.backgroundColor =  reglaCSS;
	}
}



function limpiar(){
	var txtArea = document.getElementById("css-rules");
	
	var saturacion = document.getElementById("saturacion");
	
	var brillo = document.getElementById("brillo");
	
	var nombElem = "color";
	
	txtArea.value = "";
	saturacion.checked = false;
	brillo.checked = false;
	
	for(var i=1; i<6; i++){
		var elemento = document.getElementById(nombElem + i);
		
		elemento.style.backgroundColor =  "rgb(255,255,255)";
	}
	
}

//Retorna un entero aleatorio entre min (incluido) y max (excluido)
//¡Usando Math.round() te dará una distribución no-uniforme!
function getRandomInt(min, max) {
	return Math.floor(Math.random() * (max - min)) + min;
}

//Retorna un número aleatorio entre min (incluido) y max (excluido)
function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}

function debugArray(array){
	for(elem in array){
		console.log("[" + elem + "] = " + array[elem]);
	}
}





