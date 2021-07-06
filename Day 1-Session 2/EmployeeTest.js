"use strict";
exports.__esModule = true;
var EmployeeTest = /** @class */ (function () {
    function EmployeeTest(employee) {
        var _this = this;
        this.display = function () {
            console.log('ID:' + _this.employee.id);
            console.log('name:' + _this.employee.name);
            console.log('Salary:' + _this.employee.Salary);
            console.log('Permanent Staff: ' + _this.employee.Permanent);
            // console.log('Department ID: '+this.employee.id);
            // console.log('Department Name: '+this.employee.name);
            // console.log('Skill 1: '+this.employee.id+", "+this.employee.name );
            // console.log('Skill 1: '+this.employee.id+", "+this.employee.name);
            // console.log('Skill 1: '+this.employee.id+", "+this.employee.name);
        };
        this.employee = employee;
    }
    return EmployeeTest;
}());
var employee = { id: 3, name: "jhon", Salary: 10000,
    Permanent: true };
var obj = new EmployeeTest(employee);
obj.display();
