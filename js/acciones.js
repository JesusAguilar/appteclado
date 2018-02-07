//JavaScript
var audio;	
$(document).ready(function(){	
"use strict";
  document.addEventListener("deviceready",function(){
		audio= window.plugins.LowLatencyAudio; //construye la variable audio a un objeto
    	//audio.preloadFX('id', 'ubicacion', que se hace si carga Bien el sonido, que voy a hacer si carga mal el sonido);
		audio.preloadFX('DO','audio/DO.mp3', function(){}, function(msg){alert('Error ' + msg);});
		audio.preloadFX('RE','audio/RE.mp3', function(){}, function(msg){alert('Error ' + msg);});
		audio.preloadFX('MI','audio/MI.mp3', function(){}, function(msg){alert('Error ' + msg);});
		audio.preloadFX('FA','audio/FA.mp3', function(){}, function(msg){alert('Error ' + msg);});
		audio.preloadFX('SOL','audio/SOL.mp3', function(){}, function(msg){alert('Error ' + msg);});
		audio.preloadFX('LA','audio/LA.mp3', function(){}, function(msg){alert('Error ' + msg);});
		audio.preloadFX('SI','audio/SI.mp3', function(){}, function(msg){alert('Error ' + msg);});
		audio.preloadFX('Do','audio/DO-copia.mp3', function(){}, function(msg){alert('Error ' + msg);});
		audio.preloadFX('Re','audio/RE-copia.mp3', function(){}, function(msg){alert('Error ' + msg);});
		audio.preloadFX('Mi','audio/MI-copia.mp3', function(){}, function(msg){alert('Error ' + msg);});
		audio.preloadFX('Fa','audio/FA-copia.mp3', function(){}, function(msg){alert('Error ' + msg);});
		audio.preloadFX('Sol','audio/SOL-copia.mp3', function(){}, function(msg){alert('Error ' + msg);});
		audio.preloadFX('La','audio/LA-copia.mp3', function(){}, function(msg){alert('Error ' + msg);});
		audio.preloadFX('Si','audio/SI-copia.mp3', function(){}, function(msg){alert('Error ' + msg);});
		$('.nota').bind('click', function(){//bind escucha cualquier evento, 'touchstart'para donde den tap en la nota
			$(this).addClass('tocada');//funcionalidad css que agrega clase
			audio.play($(this).attr('id'));//play()reproducir la nota, $(this).attr('id') el atributo de quien lo invoco y lo reproduce	
			}).bind('click',function(){//cierra nota .bind
					$(this).removeClass('tocada');
				});//bind
					
	},false); //deviceready
});//ready