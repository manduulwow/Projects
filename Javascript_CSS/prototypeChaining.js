let obj = function() {
    this.a = 1;
    this.b = 2;
}


let obj1 = new obj();

obj.prototype.b = 22;
obj.prototype.c = 10;

console.log(obj1.a);
//obj1 already has property b so wont get obj b so b = 2
console.log(obj1.b);
//obj1 don't have property c so it will inherit c = 10;
console.log(obj1.c);

