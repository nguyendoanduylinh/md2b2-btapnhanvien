"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmployeeManager = void 0;
const employee_1 = require("./employee");
let employees = [];
class EmployeeManager {
    constructor() { }
    addEmployee(employee) {
        employees.push(employee);
        employee_1.Employee._id++;
    }
    showSingleEmployee(id) {
        console.log(`
    Name: ${employees[id]._fname} ${employees[id]._lname}
    Birthday: ${employees[id]._birthday}
    Address: ${employees[id]._address}
    Position: ${employees[id]._position}
    _____________________________`);
    }
    showEmployee() {
        for (let i = 0; i < employees.length; i++) {
            console.log(`
    Name: ${employees[i]._fname} ${employees[i]._lname}
    Birthday: ${employees[i]._birthday}
    Address: ${employees[i]._address}
    Position: ${employees[i]._position}
    _____________________________`);
        }
    }
    deleteEmployee(id) {
        employees.splice(id, 1);
        employee_1.Employee._id--;
    }
    editFname(id, fname) {
        employees[id]._fname = fname;
    }
    editLname(id, lname) {
        employees[id]._lname = lname;
    }
    editBirthday(id, birthday) {
        employees[id]._birthday = birthday;
    }
    editAddress(id, address) {
        employees[id]._address = address;
    }
    editPosition(id, position) {
        employees[id]._position = position;
    }
}
exports.EmployeeManager = EmployeeManager;
