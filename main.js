import Articulos from "./Articulos.js";
import Registros from "./Registros.js";

class Main {
    constructor() {
        this._agenda = new Articulos(document.querySelector("#agenda"));

        document.querySelector("#btnAdd").addEventListener("click", () => {
            let form = document.querySelector("#form");
            if (form.checkValidity() === true) {
            let num = document.querySelector("#num").value;
            let nombre = document.querySelector("#nombre").value;
            let precio = document.querySelector("#precio").value;
            let cantidad = document.querySelector("#cantidad").value;
            let descripcion = document.querySelector("#descripcion").value;
            

            let objTareas = {
                num: num,
                nombre: nombre,
                precio: precio,
                cantidad: cantidad,
                descripcion: descripcion
            }


            let tareas = new Registros(objTareas);

            this._agenda.addEmployee2(tareas);
        }
        form.classList.add("was-validated");
        });
        document.querySelector("#btnNom").addEventListener("click", () => {
            this._agenda.mostrarAlfabeticamente();
        });
        document.querySelector("#btnDias").addEventListener("click", () => {
            this._agenda.mostrarNumericamente();
        });

    }


}

new Main();