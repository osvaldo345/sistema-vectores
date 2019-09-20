import Registros from "./Registros.js"

export default class Articulos {
    constructor(tableAgenda) {
        this._tableAgenda = tableAgenda;
        this._actividades = [];
        this._initTables2();
    }

    _initTables2() {
        //localStorage.removeItem("actividades");
        let actividades = JSON.parse(localStorage.getItem("actividades"));
        if (!actividades) {
            return;
        }
        actividades.forEach((tareas, index) => {
            console.log(tareas);
            tareas.final = new Date(tareas.final);
            this._addContacto(new Registros(tareas));
        });
    }

    _cancelEdit(row, tareas) {
        row.cells[0].innerHTML = tareas.num;
        row.cells[1].innerHTML = tareas.nombre;
        row.cells[2].innerHTML = tareas.precio;
        row.cells[3].innerHTML = tareas.cantidad;
        row.cells[4].innerHTML = tareas.descripcion;
        row.cells[5].innerHTML = "";
        this._addEditDeleteToRow(row, tareas);
    }


    _addEditDeleteToRow(row, tareas) {
        let btnDelete = document.createElement("input");
        btnDelete.type = "button";
        btnDelete.value = 'Eliminar';
        btnDelete.className = 'btn btn-danger';

       
        row.cells[5].innerHTML = '';
        row.cells[5].appendChild(btnDelete);
        btnDelete.addEventListener('click', () => {
            this._actividades.splice(tareas, 1);
            row.innerHTML = "";
            localStorage.setItem("actividades", JSON.stringify(this._actividades));
            return;
        });
    }

    _addContacto(tareas) {
        let row = this._tableAgenda.insertRow(-1);
        let cellnum = row.insertCell(0);
        let cellNombre = row.insertCell(1);
        let cellPrecio = row.insertCell(2);
        let cellCantidad = row.insertCell(3);
        let cellDescripcion = row.insertCell(4);
        row.insertCell(5);


        cellnum.innerHTML = tareas.num;
        cellNombre.innerHTML = tareas.nombre;
        cellPrecio.innerHTML = tareas.precio;
        cellCantidad.innerHTML = tareas.cantidad;
        cellDescripcion.innerHTML = tareas.descripcion;
        this._addEditDeleteToRow(row, tareas);


        let objTareas = {
            num: tareas.num,
            tarea: tareas.nombre,
            precio: tareas.precio,
            cantidad: tareas.cantidad,
            descripcion: tareas.descripcion

        }
        this._actividades.push(objTareas);
        localStorage.setItem("actividades", JSON.stringify(this._actividades));
    }

      /////////////////alfabeticamente//////////////////
    _alfabeticamente(a, b) {
        if (a.tarea < b.tarea) {
            return -1;
        }
        if (a.tarea > b.tarea) {
            return 1;
        }
        return 0;
    }
    _alfa() {
        this._actividades.sort(this._alfabeticamente);
    }
    mostrarAlfabeticamente() {
        this._actividades.sort(this._alfabeticamente);
        localStorage.setItem("actividades", JSON.stringify(this._actividades));
        location.reload();
    }
    ///////////////////////////////////////////////////////////////
    _numericamente(a, b) {
        if (a.final < b.final) {
            return -1;
        }
        if (a.final > b.final) {
            return 1;
        }
        return 0;
    }
    _num() {
        this._actividades.sort(this._numericamente);
    }
    mostrarNumericamente() {
        this._actividades.sort(this._numericamente);
        localStorage.setItem("actividades", JSON.stringify(this._actividades));
        location.reload();
    }


    _findId(num) {
        let found = -1

        this._actividades.forEach((tareas, index) => {
            if (tareas.num === num) {
                found = index;
                return;
            }
        });
        return found;
    }


    addEmployee2(tareas) {
        let found = this._findId(tareas.num);
        if (found >= 0){
            swal.fire({
                type: "error",
                tittle: "error",
                text: "esta tarea ya esta registrada"
            });
            return;
        }
        this._addContacto(tareas);
        localStorage.setItem("actividades", JSON.stringify(this._actividades));
        console.log(localStorage.getItem("actividades"));
    }






}