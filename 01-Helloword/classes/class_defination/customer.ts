class customer{

    firstName: string;
    lastName: string;
    private age: number;
    private _salary: number;

    constructor(firstName: string,lastname: string)
    {
        this.firstName=firstName;
        this.lastName=lastname;
    }

    public getAge(): number
    {
        return this.age;
    }

    public setAge(age: number): void
    {
        this.age=age;
    }

    public get salary()
    {
        return this._salary;
    }

    public set salary(value: number)
    {
        this._salary=value;
    }

}

let cs = new customer("debasisha","pradhan");
//cs.firstName="debasish";
//cs.lastName ="pradhan";

console.log("First name is :"+ cs.firstName);
console.log("Last name is :"+ cs.lastName)
cs.setAge(31);
cs.salary=10000;
console.log("age is :"+cs.getAge())
console.log("salary is :"+cs.salary);