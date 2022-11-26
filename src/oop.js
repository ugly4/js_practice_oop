/**
 * Напишите класс геометрической точки, принимающей в конструкторе координаты X и Y
 * Если координаты не переданы - 0,0; Аналогично если только 1 координата.
 * Со звездочкой: реализовать метод, который возвращает расстояние от точки до центра координат (0, 0)
 */
class Point {

    constructor(X = 0, Y = 0){
        this.x = X;
        this.y = Y;
    }

    distanceToCenter(){
        return Math.sqrt(this.x*this.x + this.y*this.y);
    }
}

/**
 * Напишите класс геометрической точки в трехмерном пространстве (x, y, z),
 * который будет наследоваться от точки в двумерном пространстве.
 * Реализовать статический метод, который возвращает расстояние между Point3D.
 */
class Point3D extends Point {

    constructor(x, y, z = 0){
        super(x, y);
        this.z = z;
    }

    static vectorLength(a, b) {
        return Math.sqrt(Math.pow(b.x - a.x, 2) + Math.pow(b.y - a.y, 2) + Math.pow(b.z - a.z, 2));
    }
}

/**
 * Напишите класс "очередь", в котором можно добавить элемент в конец и получить из начала.
 * Предусмотреть 2 варианта инициализации - массивом в конструкторе (из него создается очередь) и без параметров.
 * Со звездочкой: написать тесты методы класса (oop.spec.js)
 */
class Queue {

    constructor(array = []){
        this.values = array;
    }

    add(x){
        this.values.push(x);
    }

    isEmpty() {
        return this.values.length === 0;
    }

    getElement(){
        if (this.isEmpty()) return false;
        return this.values[0];
    }

    deleteElement(){
        if (this.isEmpty()) return false;
        return this.values.shift();
    }
    
}

module.exports = {
    Point,
    Point3D,
    Queue,
};
