class baseObject{
    constructor(public width:number=0,public length:number=0){
    }
}

class Rectangle extends baseObject{
    constructor(w:number,l:number){
        super(w,l);
    }

    calcSize():number{
        return this.width * this.length;
    }
}

var rectangle:Rectangle = new Rectangle(5,2);

console.log(rectangle.calcSize());