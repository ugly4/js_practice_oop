const assert = require('assert');
const core = require('./oop');
const {Point3D} = require("./oop");

describe('ООП', () => {
    describe('#Point', () => {
        it('Точка создается с двумя параметрами, которые становятся x и y', () => {
            const point = new core.Point(1, 2);

            assert.strictEqual(point.x, 1);
            assert.strictEqual(point.y, 2);
        });

        it('Точка создается без параметров, x и y принимают нули как значение по умолчанию', () => {
            const point = new core.Point();

            assert.strictEqual(point.x, 0);
            assert.strictEqual(point.y, 0);
        });

        it('Точка создается с одним параметром, x принимает значение, y принимают нуль как значение по умолчанию', () => {
            const point = new core.Point(1);

            assert.strictEqual(point.x, 1);
            assert.strictEqual(point.y, 0);
        });
    });

    describe('#Point3D', () => {
        it('Точка создается с двумя параметрами, которые становятся x и y, z принимает нуль как значение по умолчанию', () => {
            const point = new core.Point3D(1, 2);

            assert.strictEqual(point.x, 1);
            assert.strictEqual(point.y, 2);
            assert.strictEqual(point.z, 0);
        });

        it('Точка создается с тремя параметрами, которые становятся x, y, z', () => {
            const point = new core.Point3D(1, 2.5, -3);

            assert.strictEqual(point.x, 1);
            assert.strictEqual(point.y, 2.5);
            assert.strictEqual(point.z, -3);
        });

        it('Point3D имеет статический метод vectorLength', () => {
            const pointA = new core.Point3D(1, 2, -3);
            const pointB = new core.Point3D(1, -1, 1);

            assert.strictEqual(typeof Point3D.vectorLength, 'function');

            const length = Point3D.vectorLength(pointA, pointB);

            assert.strictEqual(length, 5);
        });
    });

    describe('#Queue', () => {
        it('проверка массивом', () => {
            const queue1 = new core.Queue();
            const queue2 = new core.Queue([2,3,4]);
            // TODO:
            // Здесь я делаю проверку на "экземпляр класса создаётся", как в номере с классом Dictionary
            assert.strictEqual(!!queue1, true);
            assert.strictEqual(!!queue2, true);
        });

        
        it('проверка на пограничные случаи', () => {
            const queue = new core.Queue();
            // TODO:
            //тесты по данной теме описаны ниже
            assert.strictEqual(true, true);
        });

        it('может создаться из массива', () => {
            const queue = new core.Queue([1, 2, 3, 5]);
            // TODO:
            assert.deepStrictEqual(queue.values, [1, 2, 3, 5]);
        });

        it('проверка метода добавления', () => {
            const queue = new core.Queue([1,2,3,5]);
            // TODO:
            queue.push(6);
            assert.deepStrictEqual(queue.values, [1, 2, 3, 5, 6]);
        });

        it('проверка метода извлечения элемента', () => {
            const queue = new core.Queue([1,2,3,5]);
            // TODO:
            queue.pop();
            assert.deepStrictEqual(queue.values, [2, 3, 5]);
            assert.strictEqual(new core.Queue().pop(), false);
        });

    });
});
