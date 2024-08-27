type Puesto = 'Developer' | 'Project Manager' | 'Marketing' | 'Desinger'


class Empleado {

    nombre: string
    sueldo: number
    fecha_de_contratacion: string
    id_empleado: number
    puesto: Puesto
    constructor(
        nombre: string,
        sueldo: number,
        fecha_de_contratacion: string,
        puesto: Puesto,
        id_empleado: number
    ) {
        this.nombre = nombre
        this.sueldo = sueldo
        this.fecha_de_contratacion = fecha_de_contratacion
        this.id_empleado = id_empleado
        this.puesto = puesto
    }

    aumentarSueldo( aumento){
        this.sueldo = this.sueldo + aumento 
        return this.sueldo
    }

    presentarme(): void{
        alert('Hola me llamo '+ this.nombre +' y trabajo como ' + this.puesto )
    }
}

class Pasante extends Empleado {
    tiempoPruebaEnMeses: number
    activo: boolean
    constructor(
        nombre: string,
        sueldo: number,
        fecha_de_contratacion: string,
        id_empleado: number,
        puesto: Puesto,
        tiempoPruebaEnMeses: number
    ){
        super(nombre,sueldo,fecha_de_contratacion,puesto,id_empleado)
        this.tiempoPruebaEnMeses = tiempoPruebaEnMeses
        this.activo = true
    }

    presentar() : void {
        alert('Hola , soy el pasante '+ this.nombre + ' y trabajo como '+ this.puesto)
    }
    finalizarPasantia(){
        this.activo = false
    }
}




export { Empleado, Puesto ,Pasante}