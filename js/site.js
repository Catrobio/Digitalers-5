
function ventanaCondicional(){
    let nombre = prompt("¿Como te llamas?");    
    let apellido = prompt("¿cual es tu apellido?");    
    if(nombre == "Ignacio" || apellido == "Pacheco"){
        alert("El nombre es: "+nombre+" "+apellido);
    }
    else{
        alert("El nombre no es valido")
    }
}


function nido(){
    let edad = parseInt(prompt("¿Cuantos años tienes?"));
    if(edad >= 18)
    {
        let registro = prompt("¿Tienes registro?");
        if(registro == "Si")
        {
            let vigente = prompt("¿Tienes registro vigente?");
            if(vigente == "Si")
            {
                alert("Puedo manejar auto");
            }
            else
            {                
                alert("Debe renovar el registro");    
            }
        }
        else{
            alert("Debe sacar el registro");
        }
        
    }     
    else{
        alert("No cumple");
    }
}


function condicioalMultiple(){    
    let edad =  parseInt( prompt("¿Cuantos años tienes?"));

    if(edad >= 18)
    {
        alert("Puedo tomar alcohol");
    } 
    if(edad >= 16){
        alert("Puedes ver The Witcher en Netflix");
    }    
    if(edad >= 10){
        alert("Puedes las Tortugas Ninjas");
    }
    else{
        alert("No cumple");
    }
}


function IfMatias(){    
    let edad =  parseInt( prompt("¿Cuantos años tienes?"));

    if(edad >= 18)
    {
        alert("Puedo tomar alcohol");
    } 
    else if(edad >= 16){
        alert("Puedes ver The Witcher en Netflix");
    }    
    else if(edad >= 10){
        alert("Puedes las Tortugas Ninjas");
    }
    else{
        alert("No cumple");
    }
}

function casosCami(){
    let edad =  18;
    switch (true) {
        case (edad >= 18):
            alert('Podes ver The Witcher');
            break;
        case (edad >= 16):
            alert('Podes beber y ver The Witcher');
            break;
      }

}

function casos(){
    let pro = prompt("¿Cuantos años tienes?");
    let edad = parseInt(pro);
    switch (edad) {
        case 18:
            alert("Puedo tomar alcohol");
            break;
        case 16:
            alert("Puedes ver The Witcher en Netflix");
            break;
        case 10:
                alert("Puedes las Tortugas Ninjas");
        default:
            alert("No cumple");
            break;
    }
}
function ternario(){
    let numero1 = 10;
    let numero2 = 20;
    let variable = (numero1 > numero2) ?  numero2 : numero1;

    let a = 10;
    let resultado = (a >= 18) ? 'Puede manejar auto'                    
                    : (a >= 16) ? 'Puede ver la serie'
                    : (a >= 10)? 'Puede ver las tortugas' 
                    : 'No cumple';

    alert(variable);
    alert(resultado);
}

function cicloWhile(){
    let x = 0;
     while (x < 100) {
        let y = (x % 2 == 0) ?document.writeln(x) : false;
        alert(x);
        x++;              
     }         
}

cicloWhile();
