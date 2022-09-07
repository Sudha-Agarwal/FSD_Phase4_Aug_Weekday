const person = {
    fullName: function(City, Country){
        return this.firstName + " " + this.lastName + " " + City + " " + Country

    }
}

const person1 = {
    firstName: "ABC",
    lastName: "XYZ"   
}


const person2 = {
    firstName: "ABC1",
    lastName: "XYZ1"   
}

var arr = ["Delhi", "India"]
console.log(person.fullName.apply(person2, arr));

console.log(person.fullName.call(person2, "Delhi", "India"));

let fullName = person.fullName.bind(person1);
console.log(fullName("Delhi","India"));

