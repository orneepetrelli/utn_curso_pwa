class Empleado {
    constructor(nombre, sueldo, fecha_de_contratacion, puesto, id_empleado) {
        this.nombre = nombre;
        this.sueldo = sueldo;
        this.fecha_de_contratacion = fecha_de_contratacion;
        this.id_empleado = id_empleado;
        this.puesto = puesto;
    }
    aumentarSueldo(aumento) {
        this.sueldo = this.sueldo + aumento;
        return this.sueldo;
    }
    presentarme() {
        alert('Hola me llamo ' + this.nombre + ' y trabajo como ' + this.puesto);
    }
}
class Pasante extends Empleado {
    constructor(nombre, sueldo, fecha_de_contratacion, id_empleado, puesto, tiempoPruebaEnMeses) {
        super(nombre, sueldo, fecha_de_contratacion, puesto, id_empleado);
        this.tiempoPruebaEnMeses = tiempoPruebaEnMeses;
        this.activo = true;
    }
    presentar() {
        alert('Hola , soy el pasante ' + this.nombre + ' y trabajo como ' + this.puesto);
    }
    finalizarPasantia() {
        this.activo = false;
    }
}
export { Empleado, Pasante };
