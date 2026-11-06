class Vector2D{
    //Vectores
    #x
    #y
    constructor(x, y)
    {
        this.#x = x
        this.#y = y
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
const v1 = new Vector2D(3, 2)
const v2 = new Vector2D(5, 7)

const suma = ((v1.x + v2.x) + (v1.y + v2.y))
        
console.log(v1.this.#x)
console.log(v2.this.#y)
console.log(v1.calcularMagnitud())
console.log(v2.calcularMagnitud())
console.log(suma)

