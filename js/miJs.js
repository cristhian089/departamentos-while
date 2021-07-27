

let capital ="";
let nombreDepartamento="";
let ruta="";
let validador=false;

let boton = document.getElementById("buscar");

//funcion
const buscar =()=>{
    let departamento = prompt("elegir departamento \n 1.Amazonas \n 2.Antioquia  \n 3.Arauca \n 4.Atlántico \n 5.Bolívar \n 6.Boyacá \n 7.Caldas \n 8.Caquetá \n 9.Casanare \n 10.Cauca \n 11.Cesar \n 12.Chocó \n 13.Córdoba \n 14.Cundinamarca \n 15.Guainía \n 16.Guaviare \n 17.Huila \n 18.La Guajira \n 19.Magdalena \n 20.Meta\n 21.Nariño \n 22.Norte de Santander \n 23.Putumayo \n 24.Quindío \n 25.Risaralda \n 26.San Andrés y Providencia \n 27.Santander \n 28.Sucre \n 29.Tolima \n 30.Valle del Cauca \n 31.Vaupés \n 32.Vichada \n 33.Salir del programa");
 
    while (departamento !=="33") {
        validador=false;
        switch (departamento) {
            case "1":
                nombreDepartamento="Amazonas";
                capital ="Leticia";
                ruta= "https://www.municipio.com.co/municipio-leticia.html";
                validador=true;
                break;
        
            case "2":
                nombreDepartamento="Antioquia";
                ruta= "https://www.municipio.com.co/municipio-medellin.html";
                capital ="Medellín";
                validador=true;
                break;
        
            case "3":
                nombreDepartamento="Arauca";
                capital ="Arauca";
                ruta= "https://www.municipio.com.co/municipio-arauca.html";
                validador=true;
                break;
        
            case "4":
                nombreDepartamento="Atlántico";
                capital ="Barranquilla";
                ruta="https://www.municipio.com.co/municipio-barranquilla.html";
                validador=true;
                break;
        
            case "5":
                nombreDepartamento="Bolívar";
                capital ="Cartagena de Indias";
                ruta="https://www.municipio.com.co/municipio-cartagena-de-indias.html";
                validador=true;
                break;
            case "6":
                nombreDepartamento="Boyacá";
                capital ="Tunja";
                ruta="https://www.municipio.com.co/municipio-tunja.html";
                validador=true;
                break;
            case "7":
                nombreDepartamento="Caldas";
                capital ="Manizales";
                ruta="https://www.municipio.com.co/municipio-manizales.html";
                validador=true;
                break;
            case "8":
                nombreDepartamento="Caquetá";
                capital ="Florencia";
                ruta="https://www.municipio.com.co/municipio-florencia-caq.html";
                validador=true;
                break;
            case "9":
                nombreDepartamento="Casanare";
                capital ="Yopal";
                ruta="https://www.municipio.com.co/municipio-yopal.html";
                validador=true;
                break;
            case "10":
                nombreDepartamento="Cauca";
                capital ="Popayán";
                ruta="https://www.municipio.com.co/municipio-popayan.html";
                validador=true;
                break;
            case "11":
                nombreDepartamento="Cesar";
                capital ="Valledupar";
                ruta="https://www.municipio.com.co/municipio-valledupar.html";
                validador=true;
                break;
            case "12":
                nombreDepartamento="Chocó";
                capital ="Quibdó";
                ruta="https://www.municipio.com.co/municipio-quibdo.html";
                validador=true;
                break;
            case "13":
                nombreDepartamento="Córdoba";
                capital ="Montería";
                ruta="https://www.municipio.com.co/municipio-monteria.html";
                validador=true;
                break;
            case "14":
                nombreDepartamento="Cundinamarca";
                capital ="Bogotá";
                ruta="https://www.municipio.com.co/municipio-bogota.html";
                validador=true;
                break;
            case "15":
                nombreDepartamento="Guainía";
                capital ="Inírida";
                ruta="https://www.municipio.com.co/municipio-inirida.html";
                validador=true;
                break;
            case "16":
                nombreDepartamento="Guaviare";
                capital ="San José del Guaviare";
                ruta="https://www.municipio.com.co/municipio-san-jose-del-guaviare.html";
                validador=true;
                break;
            case "17":
                nombreDepartamento="Huila";
                capital ="Neiva";
                ruta="https://www.municipio.com.co/municipio-neiva.html";
                validador=true;
                break;
            case "18":
                nombreDepartamento="La Guajira";
                capital ="Riohacha";
                ruta="https://www.municipio.com.co/municipio-riohacha.html";
                validador=true;
                break;
            case "19":
                nombreDepartamento="Magdalena";
                capital ="Santa Marta";
                ruta="https://www.municipio.com.co/municipio-santa-marta.html";
                validador=true;
                break;
            case "20":
                nombreDepartamento="Meta";
                capital ="Villavicencio";
                ruta="https://www.municipio.com.co/municipio-villavicencio.html";
                validador=true;
                break;
            case "21":
                nombreDepartamento="Nariño";
                capital ="San Juan de Pasto";
                ruta="https://www.municipio.com.co/municipio-san-juan-de-pasto.html";
                validador=true;
                break;
            case "22":
                nombreDepartamento="Norte de Santander";
                capital ="San José de Cúcuta";
                ruta="https://www.municipio.com.co/municipio-cucuta.html";
                validador=true;
                break;
            case "23":
                nombreDepartamento="Putumayo";
                capital ="Mocoa";
                ruta="https://www.municipio.com.co/municipio-mocoa.html";
                validador=true;
                break;
            case "24":
                nombreDepartamento="Quindío";
                capital ="Armenia";
                ruta="https://www.municipio.com.co/municipio-armenia-qui.html";
                validador=true;
                break;
            case "25":
                nombreDepartamento="Risaralda";
                capital ="Pereira";
                ruta="https://www.municipio.com.co/municipio-pereira.html";
                validador=true;
                break;
            case "26":
                nombreDepartamento="San Andrés y Providencia";
                capital ="San Andrés";
                ruta="https://www.municipio.com.co/municipio-san-andres-de-cuerquia-sap.html#city";
                validador=true;
                break;
            case "27":
                nombreDepartamento="Santander";
                capital ="Bucaramanga";
                ruta="https://www.municipio.com.co/municipio-bucaramanga.html";
                validador=true;
                break;
            case "28":
                nombreDepartamento="Sucre";
                capital ="Sincelejo";
                ruta="https://www.municipio.com.co/municipio-sincelejo.html";
                validador=true;
                break;
            case "29":
                nombreDepartamento="Tolima";
                capital ="Ibagué";
                ruta="https://www.municipio.com.co/municipio-ibague.html";
                validador=true;
                break;
            case "30":
                nombreDepartamento="Valle del Cauca";
                capital ="Cali";
                ruta="https://www.municipio.com.co/municipio-cali.html";
                validador=true;
                break;
            case "31":
                nombreDepartamento="Vaupés";
                capital ="Mitú";
                ruta="https://www.municipio.com.co/municipio-mitu.html";
                validador=true;
                break;
            case "32":
                nombreDepartamento="Vichada";
                capital ="Puerto Carreño";
                ruta="https://www.municipio.com.co/municipio-puerto-carreno.html";
                validador=true;
                break;
            case "33":
                
                break;
        
            default:
                validador=false;
                break;
        }
         if (validador) {       
            alert("la capital del departamento "+ departamento + ". "+ nombreDepartamento+" es " +capital);
        } else {
            
            alert("Respuesta no valida intentelo de nuevo ");
        }
    
        alert("elije un departamento para saber la capital");
        departamento = prompt("elegir departamento \n 1.Amazonas \n 2.Antioquia  \n 3.Arauca \n 4.Atlántico \n 5.Bolívar \n 6.Boyacá \n 7.Caldas \n 8.Caquetá \n 9.Casanare \n 10.Cauca \n 11.Cesar \n 12.Chocó \n 13.Córdoba \n 14.Cundinamarca \n 15.Guainía \n 16.Guaviare \n 17.Huila \n 18.La Guajira \n 19.Magdalena \n 20.Meta\n 21.Nariño \n 22.Norte de Santander \n 23.Putumayo \n 24.Quindío \n 25.Risaralda \n 26.San Andrés y Providencia \n 27.Santander \n 28.Sucre \n 29.Tolima \n 30.Valle del Cauca \n 31.Vaupés \n 32.Vichada \n 33.Salir del programa");
    }
        

}


//evento 
boton.onclick =function () {
    buscar();
}

 
   
   

    


   
