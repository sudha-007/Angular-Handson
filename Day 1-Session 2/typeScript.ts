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


class Point{
    x:number;
    y:number;

    constructor(x,y){
        this.x=x;
        this.y=y;
    }
    distance=()=>{
        console.log("Distance is"+ (this.x-this.y));
    }
}

let point=new Point(5,1)
console.log(point.distance());