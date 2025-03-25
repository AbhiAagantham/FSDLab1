const student ={
    name: "John",
    age: 20,
    getAge:function(){
        console.log("Age is ",this.age)
    }
}

const person1={
    name:"Abhi"
}
person1.__proto__=student;