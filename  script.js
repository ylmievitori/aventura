const avanca = document.querySelectorAl('.btn-proximo');
const reiniciarBtn = document.getElementById('.btn-reinicia')

vanca.forEach(button => {
button.addEventLitener('clik', function(){
      
    const atual = document.querySelector('.ativo');
    const proximoPasso = 'passo-'+this.getAttribute('data-proximo');
atual.classList.remove('ativo');
const proximoElemento= document.getElementById(proximoPasso);

if (proximoElemento){
    proximoElemento.classList.add('ativo');
  }else{
         console.error(`Elemento com ID "${proximoPasso}" não encomtrado.` )

     
  }


}

});






