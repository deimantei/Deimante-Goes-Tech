//OBJECTS


//1st example

// let person = {
//     first_name:'Mukul',
//     last_name: 'Latiyan',
//     //method
//     getFunction: function(){
//         return (`The name of the person is 
//     ${person.first_name } ${person.last_name}`)
//     },
//     //object within object
//     phone_number: {
//     mobile:'12345',
//     landline:'6789'
//     }
// }

//2nd example

// function person(first_name,last_name){
//     this.first_name = first_name;
//     this.last_name = last_name;
//     this.displayFullName = () => {
//         return this.first_name + ' ' + this.last_name;
//     }
// }

//3rd example

// const personTempl = {
//     first_name : '',
//     last_name : '',
//     displayFullName: function(){
//         return this.first_name + ' ' + this.last_name;
//     }
// }


//4th example
// class Person {
//     constructor(firstname,lastname){
//         this.firstname = firstname;
//         this.lastname = lastname;
//     }
//     displayFullName() {
//         return this.firstname + ' ' + this.lastname;
//     }
// } 

//ENCAPSULATION


//1st example

// class Person{
//     constructor(name, id) {
//         this.name = name;
//         this.id = id;
//     }
//     add_Address(add){
//         this.add = add;
//     }
//     getDetails(){
//     console.log(`Name is ${this.name},Address is: ${
//     this.add}`);
//     }
// }
//     let person1 = new Person('Arturs',25);
//     person1.add_Address('Riga');
//     person1.getDetails();

//2nd example

// function person(fname, lname) {
//     let firstname = fname;
//     let lastname = lname;
    
//     let getDetails_noaccess = function() {
//          return (`First name is: ${firstname} Last name is: ${lastname}`);
//     }

//     this.getDetails_access = function() {
//         return (`First name is: ${firstname }, Last name is: ${lastname}`);
//     }
//     }

//     let person1 = new person('Janis', 'Liepins');
//     console.log(person1.firstname);
//     console.log(person1.getDetails_noaccess);
//     console.log(person1.getDetails_access());

//3rd example

class Person{
    constructor(firstname, lastname) {
        this.firstname = firstname;
        this.lastname = lastname;
    }
    getFullDetails() {
        return 'Full name:' + this.firstname + ' ' + this.lastname;
    }
}

class Employee extends Person{
    constructor(firstname, lastname, position, salary){
    super(firstname, lastname); //call the constructor of the superclass
    this.position = position;
    this.salary = salary;
    }
    
    NonRedefFunc(){
        console.log('This function is not overriden');
    }
    
    getFullName() {
        return super.getFullDetails();
    }
    getFullDetails(){ //override
        return super.getFullDetails() +
        ", Position : " + this.position + ", Salary: " + this.salary;
    }
}