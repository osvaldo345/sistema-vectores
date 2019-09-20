export default class Registros {
    constructor(tareas) {
        this._num = tareas.num
        this._nombre =  tareas.nombre;
        this._precio = tareas.precio;
        this._cantidad = tareas.cantidad;
        this._descripcion = tareas.descripcion;
       
    }

    get num(){
        return this._num;
    }

    get nombre(){
        return this._nombre;
    }

    get precio(){
        return this._precio;
    }
    get cantidad(){
        return this._cantidad;
    }
    get descripcion(){
        return this._descripcion;
    }

    _getNumberAsTwoDigits(final) {
        if (final < 10){
            return "0" + final;
        }
        return final;
    }

}