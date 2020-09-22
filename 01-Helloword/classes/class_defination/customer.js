var customer = /** @class */ (function () {
    function customer(firstName, lastname) {
        this.firstName = firstName;
        this.lastName = lastname;
    }
    customer.prototype.getAge = function () {
        return this.age;
    };
    customer.prototype.setAge = function (age) {
        this.age = age;
    };
    Object.defineProperty(customer.prototype, "salary", {
        get: function () {
            return this._salary;
        },
        set: function (value) {
            this._salary = value;
        },
        enumerable: false,
        configurable: true
    });
    return customer;
}());
var cs = new customer("debasisha", "pradhan");
//cs.firstName="debasish";
//cs.lastName ="pradhan";
console.log("First name is :" + cs.firstName);
console.log("Last name is :" + cs.lastName);
cs.setAge(31);
cs.salary = 10000;
console.log("age is :" + cs.getAge());
console.log("salary is :" + cs.salary);
