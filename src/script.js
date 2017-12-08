    //----------------------customizaveis------------------------
		                                                        
	var formatoImg = '.jpg'; // formato
	var quantSlides = 5;     // numero de imagens
	var tempoM = 6000;     	 // tempo para a transicao de slides
	var nomeImg = 'image';   // nome padrao das imagens
	
    //----------------------customizaveis -----------------------
		
	var cont = 0;            // contador 
	var span = document.getElementById("span");            // mostrar informacao
	var slides = document.getElementsByClassName('col-01'); // objeto com tres divs
	var botao = document.getElementsByClassName("botoes");  // objeto com dois botoes
	var divBot = document.getElementById('linhabot');       // container para os botoes
	var inter;                                              // seta o intervalo
	var timer3;                                             // timer para desativar botao
	var container = document.getElementsByClassName("carrocel-container"); // objeto com o container
	var a = 2;  // posicao da ultima <div></div>
	
	
	
	
	// comecar slideshow
    autoSlide();
	
	
	// ajustar o intervalo
    inter = setInterval("autoSlide()", tempoM);

	
	
	// funções de botão
	botao[0].onclick = function(){
		botao[0].disabled = true;
	    	    		
		clearInterval(inter);
	    autoSlide2();
		inter = setInterval("autoSlide2()",tempoM);
		
		
		
	}
	
	
	botao[1].onclick = function(){
		botao[1].disabled = true;
	    		
		clearInterval(inter);
		autoSlide();
		inter = setInterval("autoSlide()",tempoM);
	
		
	}
	
	// funcao de container
	container[0].onmouseover = function(){
		
		botao[0].style.display = 'inline';
		botao[1].style.display = 'inline';
		
	}
	container[0].onmouseout = function(){
		
		botao[0].style.display = 'none';
		botao[1].style.display = 'none';
		
		
	}
	
	
	 
	
	
	
	// funcões restantes
	
	function autoSlide(){
		
		if(cont === quantSlides){
			cont =0
			cont +=1;
		}else{
			cont +=1;
		}
		
		
		troca();
		rotate();
		
		
		
		
	    
	}
	
	function autoSlide2(){
		if(cont === 1){
				cont = quantSlides +1;
				cont -=1;
			
		}else if(cont ==0){
				cont = 1;
		}else{
				cont -=1;
		}
		
		troca();
		rotate2();
		
	}
	
	
	


function rotate(){
	botao[0].disabled = true;
	botao[1].disabled = true;
	if(a == 2){
		
		
		if(cont === quantSlides + 1){
				slides[2].style.backgroundImage = 'url("imagens/'+nomeImg+1+formatoImg+'")';
		}else{
			slides[2].style.backgroundImage = 'url("imagens/'+nomeImg+(cont)+formatoImg+'")';
		}
		slides[2].style.opacity = 1;
		slides[0].style.opacity = 0;
		slides[2].style.transform = "translate("+0+"%)"
		slides[1].style.transform = "translate("+-100+"%)";
		slides[0].style.transform = "translate("+100+"%)";
		
		
		a = 1;
		
	}
	else if(a == 1){
		
		if(cont === quantSlides + 1){
				slides[0].style.backgroundImage = 'url("imagens/'+nomeImg+1+formatoImg+'")';
		}else{
			slides[0].style.backgroundImage = 'url("imagens/'+nomeImg+(cont)+formatoImg+'")';
		}
		
		slides[0].style.opacity = 1;
		slides[1].style.opacity = 0;
		slides[2].style.transform = "translate("+-100+"%)"
		slides[1].style.transform = "translate("+100+"%)";
		slides[0].style.transform = "translate("+0+"%)";
		a = 0;
		
	}
	else if(a == 0){
	
		
		
		if(cont === quantSlides + 1){
				slides[1].style.backgroundImage = 'url("imagens/'+nomeImg+1+formatoImg+'")';
		}else{
			slides[1].style.backgroundImage = 'url("imagens/'+nomeImg+(cont)+formatoImg+'")';
		}
		
		slides[1].style.opacity = 1;
		slides[2].style.opacity = 0;
		slides[2].style.transform = "translate("+100+"%)"
		slides[1].style.transform = "translate("+0+"%)";
		slides[0].style.transform = "translate("+-100+"%)";
		
		a = 2;
		
	}
	span.textContent = cont + " / " + quantSlides;
	
	
	
	
}
function rotate2(){
	botao[0].disabled = true;
	botao[1].disabled = true;
	
	if(a == 2){
		
		
		
			slides[0].style.backgroundImage = 'url("imagens/'+nomeImg+(cont)+formatoImg+'")';
		
		slides[2].style.opacity = 0;
		slides[0].style.opacity = 1;
		slides[2].style.transform = "translate("+-100+"%)"
		slides[1].style.transform = "translate("+100+"%)";
		slides[0].style.transform = "translate("+0+"%)";
		
		
		a = 0;
		
	}
	else if(a == 1){
		
		
			slides[1].style.backgroundImage = 'url("imagens/'+nomeImg+(cont)+formatoImg+'")';
		
		
		slides[0].style.opacity = 0;
		slides[1].style.opacity = 1;
		slides[2].style.transform = "translate("+100+"%)"
		slides[1].style.transform = "translate("+0+"%)";
		slides[0].style.transform = "translate("+-100+"%)";
		a = 2;
		
	}
	else if(a == 0){
		
		
		
		
			slides[2].style.backgroundImage = 'url("imagens/'+nomeImg+(cont)+formatoImg+'")';
		
		
		slides[1].style.opacity = 0;
		slides[2].style.opacity = 1;
		slides[2].style.transform = "translate("+0+"%)"
		slides[1].style.transform = "translate("+-100+"%)";
		slides[0].style.transform = "translate("+100+"%)";
		
		a = 1;
		
	}
	span.textContent = cont + " / " + quantSlides;
	
	
	
	
}

	
	
	
	function troca(){
		timer3 = setTimeout("activateButton()",500);
		
	}
	
	function activateButton(){
		botao[0].disabled = false;
        botao[1].disabled = false;
		clearTimeout(timer3);
	}
	
	

	
	
		

	 
	 
	 
	 
	
	
	
	


	
	
		
		
		
	
	
	
		
