//Задача №1

function parseCount(number){
    const parseNumber = Number.parseInt(number);
    const err = new Error ("Невалидное значение")
    if (Number.isNaN(parseNumber)){
        throw err;
    }
    return parseNumber;
}

function validateCount(number) {
    try {
        return parseCount(number);
      } catch (error) {
        return error;
      }
}

//Задача №2

class Triangle {
    constructor (a, b, c){
        if (a + b < c || a + c < b || c+b < a) {
            throw "Треугольника с такими сторонами не существует";
        }
        this.a = a;
        this.b = b;
        this.c = c;
    }

    getPerimeter () {
        return this.a + this.b + this.c;
    }
    getArea () {
        const p = this.getPerimeter() / 2;
        return number(Math.sqrt(p*(p-this.a)*(p-this.b)*(p-this.c)).toFixed(3));
    }
}
function getTriangle(a, b, c){
    try {
        return new Triangle(a, b, c);
    }
    catch (error){
        return{
            getPerimeter: () => "Ошибка! Треугольник не существует",
            getArea: () => "Ошибка! Треугольник не существует",
        }
    }
}
