/*header*/
let header= document.getElementById('header');
window.addEventListener("scroll", function(event) {
      if(window.pageYOffset>100){

        header.style.background = "rgba(3, 83, 163, 0.3)";

      }
      else{
        header.style.background = "#0353a4";
        
      }
  });

/*Menu ativo*/
function mostrarAtivo(tag){
  var tag_li = document.getElementById('lista_menu');
  var tag_a = tag_li.getElementsByTagName('a');
  for (i=0; i<tag_a.length; i++ )
  {
      tag_a[i].style.color = "";
  }
      tag.style.color = "#000000";
  }

  const titulo = document.querySelector(".mudarEscrita");
typeWrite(titulo);

  function typeWrite(elemento){
    const textoArray = elemento.innerHTML.split('');
    elemento.innerHTML = ' ';
    textoArray.forEach(function(letra, i){   
      
   let mytime = setTimeout(function(){
        elemento.innerHTML += letra;
        
    }, 120 * i)
  });
  
  setTimeout(() => typeWrite(titulo),14000)
}



function addClass(el) {
  menu.removeClass('active');
  $(el).addClass('active');
};

