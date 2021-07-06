import {Employee} from"./employee";
class EmployeeTest{
    employee:Employee;
    constructor(employee:Employee){
        this.employee=employee;
    }
     display=():void=>{
console.log('ID:'+this.employee.id);
console.log('name:'+this.employee.name);
console.log('Salary:'+this.employee.Salary);
console.log('Permanent Staff: '+this.employee.Permanent);
// console.log('Department ID: '+this.employee.id);
// console.log('Department Name: '+this.employee.name);
// console.log('Skill 1: '+this.employee.id+", "+this.employee.name );
// console.log('Skill 1: '+this.employee.id+", "+this.employee.name);
// console.log('Skill 1: '+this.employee.id+", "+this.employee.name);
    }
}
const employee:Employee={id:3,name:"jhon",Salary:10000,
Permanent:true};
let obj=new EmployeeTest(employee);
obj.display();