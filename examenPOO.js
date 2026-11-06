class Departamento{
    #nombreDpto
    #listaEmpleado = []
    constructor(departamento){
        this.#nombreDpto = departamento
        this.#listaEmpleado 
    }
    agragarEmpleado(Empleado){
        this.#listaEmpleado.push(Empleado)
    }
    mostrarNomina(){
        console.log(`${this.#nombreDpto}`)
        console.log("Lista de empleados")
        for(let i = 0; i < this.#listaEmpleado.length; i++)
            console.log(this.#listaEmpleado[i])
    }
}
class Empleado {
    #id
    #nombre
    #salarioBase    
    constructor(identificacion, nombre, salariobase){
        this.#id = identificacion
        this.#nombre = nombre
        this.#salarioBase = salariobase
    }
    getNombre(){
        return `Nombre del empleado: ${this.#nombre}, su identificados: ${this.#id}`
    }
    getSalario(){
        return`Salario del empleado ${this.#id}:${this.#salarioBase}mxn`
    }
    setSalario(nuevoSalario){
        if(nuevoSalario < 0){
            return `Asignacion de salario invalido`
        }
        else{
        this.#salarioBase = nuevoSalario
        console.log( `Nuevo salario asignado: ${this.#salarioBase}mxn`)
        }
    }
    calcularPagoTotal(){
        return `${this.#nombre} percibe un salario de ${this.#salarioBase}`
    }

}
class Gerente extends Empleado{
    #bono
    constructor(identificacion, nombre, salariobase, bono){
        super(identificacion, nombre, salariobase)
        this.#bono = bono
    }
    getNombre(){
        return super.getNombre()
    }
    getSalario(){
        return super.getSalario()
    }
    setSalario(nuevoSalario){
        return super.setSalario(nuevoSalario)
    }
    getBono(){
        return `${this.#bono}` 
    }
    setBono(nuevoBono){
        if(nuevoBono < 0){
            return `Asignacion de bono invalido`
        }
        this.#bono = nuevoBono
        return `Nuevo bono asignado: ${this.#bono}mxn`
    }
    calcularPagoTotal(){
        return super.calcularPagoTotal() + this.#bono
    }
}
class Desarollador extends Empleado{
#lenguaje
    constructor(identificacion, nombre, salariobase, lenguaje){
        super(identificacion, nombre, salariobase)
        this.#lenguaje = lenguaje
    }
    getNombre(){
        return super.getNombre()
    }
    getSalario(){
        return super.getSalario()
    }
    setSalario(nuevoSalario){
        super.setSalario(nuevoSalario)
    }
    getLenguaje(){
        return `Lenguaje: ${this.#lenguaje}`
    }
    setLenguaje(nuevoLenguaje){
        this.#lenguaje = nuevoLenguaje
        console.log(`Asignacion de lenguaje valido, nuevo lenguaje: ${this.#lenguaje}`)
    }
}
const gerente1 = new Gerente("123456", "Pepe", 23450.50, 500.45)
console.log(gerente1.this#nombre)
gerente1.setSalario(50000.35)

const dev1 = new Desarollador("5678", "Juan", 23450.95, "Java")
console.log(dev1.getNombre())
console.log(dev1.this.#lenguaje)
dev1.setLenguaje("Python")

const recursosHumanos = new Departamento("Recursos Humanos")
recursosHumanos.agragarEmpleado(dev1)
recursosHumanos.agragarEmpleado(gerente1)

