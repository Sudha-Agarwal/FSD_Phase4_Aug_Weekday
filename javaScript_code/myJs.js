document.getElementById("p1").innerHTML = "Added By JS";
        //will open popup window
        //alert("Hi");
        //will print on screen
        document.write("By document.write method");

        //will not print on screen
        console.log("written using console.log");

        //problem statement - print sum of two numbers
        document.write(1+2);

        var x = 10; //dataType is number
        var x = "20"; //dataType is String now
        //introduced in ES6 - two more ways to declare a variable
        //let and const

        let y = 10;
          y = 20;

         const z = 10;
         //z = 20;
          i = 20;

          x = x + 10;
          //this can be written as
          //Assignment operator
          x+=10; x-=10 
          x/=10;
          console.log(10 + "5");//string concatenation

          console.log("Hello" + "World"); //string concatenation

          console.log(typeof false);
          x = 10;
          y = "10";

           console.log(x == y); //this will return true because it will only check the value not the type

           console.log(x === y) //false because it will check value and type

           console.log(x !== y) // return true

           console.log(x >= y);

           console.log(x <= y);

           //logical and
           console.log(x == y && x == 0);

           //logical or
           console.log(x == y || x == 0);

           console.log(!true);
         console.log(++x);

         var student1 = 8.9;
         var student2 = 7.6;
         
         //Arrays
         //There are two ways to create an array

         let numbers = [1,2,3,4,5];

         let numbers_1 = new Array(1,2,3,4,5);


        // int [] numbers = new int[5]; //java code

        //int [] numbers = [1,2,3,4,5]; //java code

        console.log(numbers[5]);

        numbers[6] = 6;

        delete numbers[2];

        console.log(numbers[5]);

        console.log(numbers);

        //push and pop to add and remove elements from an array at the end
        //shift(remove) and unshift(add) to add and remove the elements from an array in the beginning

        console.log(numbers.pop());

        numbers.push(10);

        console.log(numbers);

        numbers.unshift(0);

        console.log(numbers);

        console.log(numbers.shift());

        //splice() - is used to add or remove elements from middle

        numbers.splice(2,0,9);

        console.log(numbers);

        numbers.splice(3,1);
        console.log(numbers);

        for(let i=0;i<numbers.length;i++){
            console.log(numbers[i]);
        }

        for(let x in numbers){
            console.log(x);
        }

        //Object creation
        person1_old = {
            name:"ABC",
            age:25,
            height:165,
            weight:70,

            talk : function(){
                console.log(this.name + " is talking");
            }
        }

        person2_old = {
            name:"DEF",
            age:30,
            height:185,
            weight:75,

            talk : function(){
                console.log(this.name + " is talking");
            }
        }


        console.log(person1_old.name);

        person1_old.talk();

        console.log(person2_old.name);

        let obj = {a:10};

        //functions definition
        function show(x){
            console.log("show is called with value " + x.a)
        }

        show(obj); //function calling

        //constructor functions - they are used to construct the objects

        function Person(name,age,height,weight){
            this.name = name;
            this.age = age;
            this.height = height;
            this.weight = weight;

            this.talk = function(){
                return (this.name + "is talking");
            }
        }

        console.log(Person.prototype);

        Person.prototype.eat = function(){
            console.log(this.name + " is eating");
        }


        let person = new Person("ABC",25,165,70);
        let peron2 = new Person("DEF",25,165,70);
        console.log(person.name);
        console.log(person.talk());

        //classes were introduced in ES6(EcmaScript2015)

        class PersonClass{
            constructor(name,age,height,weight){
            this.name = name;
            this.age = age;
            this.height = height;
            this.weight = weight; 
            }

            showDetails(){
                console.log("Name: " + this.name + "Age: " + this.age);
                console.log(`Name: ${this.name} Age: ${this.age}`);

            }
        }

        var PersonObj = new PersonClass("ABC",25,165,70);
        PersonObj.showDetails();

        class StudentClass extends PersonClass{
            constructor(name,age,height,weight,RollNo){
                super(name,age,height,weight);
                this.RollNo = RollNo;
            }

            showDetails(){
                super.showDetails();
                console.log(`RollNo: ${this.RollNo}`);
            }
        }

        var StudentObj = new StudentClass("ABC",25,165,70, 100);
        StudentObj.showDetails();

        



        



     
















