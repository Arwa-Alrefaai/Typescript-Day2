
  class Persons{
    fname: string ;
    lname: string ; 
    age: number ;
    jobtitle: string ;

      constructor(firstname: string, lastname: string , agee: number , jobtit: string ){
        this.fname = firstname ;
        this.lname = lastname ;
        this.age = agee;
        this.jobtitle = jobtit ;
      }
  
 printinf(){
     return `Hello there my Name: ${this.fname} ${this.lname}, and I am ${this.age}years old and i am a ${this.jobtitle } `;
}
  }
let person1 = new Persons("Arwa","Alrefaai",50,"gtrhe");
let person2 = new Persons("Taim", "Abdullah", 15, "gtrhe");
let person3 = new Persons("Zein", "Abdullah", 20, "gtrhe");

 
console.log(person1.printinf());
console.log("-------------------");
console.log(person2.printinf());
console.log("-------------------");
console.log(person1.printinf());
console.log("-------------------------------------------------");

//-----------------------------------------Ex1-2--------------------------------------------
class person extends Persons {
    salary : number;

    constructor(firstname: string, lastname: string, agee: number, jobtit: string, salary : number){
        super(firstname, lastname, agee, jobtit)
        this.salary = salary;
    }
    printinf() {
        return `Hello there my Name: ${this.fname} ${this.lname}, and I am ${this.age}years old and i am a ${this.jobtitle},and I get ${this.salary} `;
    }
}
let doc1 = new person("arwa","alrefai",50,"gvghthrhjbuzj",1500)
console.log(doc1.printinf())