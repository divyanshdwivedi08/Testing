class Customer{
    firstName : string;
    lastName : string;
    constructor(theFirst:string, theLast:string){
        this.firstName=theFirst;
        this.lastName=theLast;
    }
}
let customer = new Customer("Divyansh","Dwivedi");
console.log(customer.firstName);
console.log(customer.lastName);