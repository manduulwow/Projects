const obj = {
    name: "Manduul",
    age: 25,
    getInfo: function() {
        return `Name : ${this.name} age : ${this.age}`;
    }
}

console.log(obj.getInfo());

const getInfo = obj.getInfo.bind({name: "John", age: 30});

console.log(getInfo());



