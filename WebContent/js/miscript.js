/**
 * 
 */

$(document).ready(function(){
	var orden="primero";
	var primero=0;
	var segTexto="";
	var segundo=0;
	var simbolo="";
	var resultado=0;
	var text="";
	
	$("#borrado").on("click",function(e){
		//Reiniciar programa y resultados.
		$("#resultado").text("0");
		orden="primero";
		primero=0;
		segTexto="";
		segundo=0;
		simbolo="";
		text="";
	});
	
	
	$(".numeros").on("click",function(e){
		if($("#resultado").text()==="0"){
			$("#resultado").empty();
		}
		text=$(this).text();
		
		
		if(orden==="primero"){
			$("#resultado").text($("#resultado").text()+text);
			primero = parseInt($("#resultado").text());
		}else if(orden==="segundo"){
			segTexto=segTexto+$(this).text();
			segundo=parseInt(segTexto);
			$("#resultado").text(segTexto + $(this).text());
		}
		
	});
	
	
	$(".simbolos").on("click",function(e){
		simbolo=$(this).text();
		if(orden=="primero"){
			orden="segundo";
			if(simbolo=="X"){
				
			}else if(simbolo=="/"){
				
			}else if(simbolo=="+"){
				
			}else if(simbolo=="-"){
				
			}
		}else if(orden=="segundo"){
			orden="primero";
			if(simbolo=="X"){
				
			}else if(simbolo=="/"){
				
			}else if(simbolo=="+"){
				
			}else if(simbolo=="-"){
				
			}
		}
	});
	
	
})
