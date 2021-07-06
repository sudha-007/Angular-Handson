// let a
// a="Anuj Singh"
// console.log((<string>a).endsWith("gh"));
// let b:number
// let c:boolean
// let d:number[]=[1,2,3,4,5]
// let e:any
// enum color{a,b,c}
// color.a
// color.b
// color.c
// console.log(a)
// console.log(color.a)
var Point = /** @class */ (function () {
    function Point(x, y) {
        var _this = this;
        this.distance = function () {
            console.log("Distance is" + (_this.x - _this.y));
        };
        this.x = x;
        this.y = y;
    }
    return Point;
}());
var point = new Point(5, 1);
console.log(point.distance());
