class Vector2D{
    //Vectores
    #x
    #y
    constructor(xInit, yInit) //Errores en encapsulamiento, declaracion erronea del constructor, setters y getters.
    {
        this.x = xInit  
        this.y = yInit
    }
    get x(){
        return this.#x;
    }
    get y(){
        return this.#y;
    }
    set x(nuevaX){
        this.#x=nuevaX;
    }
    set y(nuevaY){
        this.#y=nuevaY;
    }

    mostrar()//Enseña de forma matematica el vector
    {
        const vector_mat = `(${this.x},${this.y})`
        return vector_mat
    }
    calcularMagnitud()
    {
        const magnitud = Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2))
        return magnitud
    }

}
const v1 = new Vector2D(3, 2)  //Instanciacion erronea de metodos
const v2 = new Vector2D(5, 7)

const suma = ((v1.x + v2.x) + (v1.y + v2.y))
        

console.log(v1.calcularMagnitud())
console.log(v2.calcularMagnitud())
console.log(suma)

