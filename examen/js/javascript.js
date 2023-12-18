function getRandomInt3(max) {
  return Math.floor(Math.random() * max);
}

window.onload = function() {

  const hora = setInterval(hora2, 10);
  /*Guardas*/
  let valoreshistorial = localStorage.getItem('historial');

  if (valoreshistorial) {
    historial = JSON.parse(valoreshistorial);
  }


 



  /*BOLA*/
  const tiempo = setInterval(incrementarContador, 10);


  /*CODIFICAR*/
  
 

};

function hora2(params) {
  /*FECHA*/
  const miFecha = document.getElementById('mifecha');
  fecha =new Date();
  if (fecha.getDay()==1) {
    dia="Lunes";
  }else if (fecha.getDay()==2){
    dia="Martes";
  }else if (fecha.getDay()==3){
    dia="Miercoles";
  }else if (fecha.getDay()==4){
    dia="Jueves";
  }else if (fecha.getDay()==5) {
    dia="Viernes";
  }else if (fecha.getDay()==6){
    dia="Sabado"
  }else if (fecha.getDay()==7){
    dia="Domingo"
  }else{

  }




  miFecha.innerHTML="hoy es "+dia+""+fecha.getDate()+" del "+fecha.getMonth()+" de "+fecha.getFullYear() +" y son las "+fecha.getHours()+":"+fecha.getMinutes()+":"+fecha.getSeconds() ;

}
Hash=0;
   let historial=[];

function codificar2(params) {
  
 document.getElementById('miFormulario').addEventListener('submit', function(event) {
    event.preventDefault();
    
  /* const modal = document.getElementById('Iniciar'); */
   decodificado=document.getElementById('decodificado').value
   /* modal.style.display = 'none'; */
   console.log(decodificado);
   

  
  let array = decodificado.split("");
  let tamano="";
    for (let index = 0; index < array.length; index++) {
      tamano+="9";
     /*  console.log(tamaño); */
      
    }
/*   console.log("fuera"+tamaño); */
    
  Hash=getRandomInt3(tamano);

  console.log(array);
  console.log(array.length);
  console.log(Hash); 
  
    
  

  historial.unshift(Hash);
  historial.unshift(decodificado);

 localStorage.setItem('historial', JSON.stringify(historial));
  console.log(historial)
  console.log(historial.slice(0,1));

  codificado.innerHTML= Hash ;
  });




}
 


function descodificar2(params) {
  
  document.getElementById('miFormulario').addEventListener('submit', function(event) {
     event.preventDefault();
     
   /* const modal = document.getElementById('Iniciar'); */
    decodificado=document.getElementById('decodificado').value
    /* modal.style.display = 'none'; */
    /* console.log(decodificado); */
    
    /* historial.indexOf(Hash); */
    console.log(historial.indexOf(decodificado));
    posicion=historial.indexOf(decodificado);
    console.log("el nombre buscado es:"+historial.slice(posicion+2,posicion+3));

    codificado.innerHTML= historial.slice(posicion+2,posicion+3) ;

   
   });
 
 
 
 
 }










/*BOLAA*/
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
function getRandomInt2(max) {
  return Math.floor(Math.random() * max);
}
contador=0;
let tamx=50;
let tamy=50;
let contador2=0;
let topex =innerWidth-tamx;
let topey =innerHeight-tamy;
let sentido=0;
let sentidoy=1;

window.onresize=function (){
  topex=innerWidth-tamx;
    topey =innerHeight-tamy;
 };
   
 function incrementarContador() {
aleatorio=getRandomInt(topex);
color=getRandomInt2(999999);
   //let ancho = innerWidth;
 
 /*   console.log(topex); */
     bola.style.top=contador+"px";
 
     if (contador<topex /* && sentido==0 */) {
      /*  console.log("entra a la derecha"); */
       contador+=5;
     }else{
      
       if (contador>=topey ) {
        contador=0;
        console.log("entra a la derecha");
         bola.style.top=contador+"px";
         bola.style.left=aleatorio+"px";
         bola.style.color="#"+color;
       
     }

     }    
     }
 
   /*CODIFICAR*/
      