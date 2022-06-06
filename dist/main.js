"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const employeeMng_1 = require("./employeeMng");
const employee_1 = require("./employee");
let emManager = new employeeMng_1.EmployeeManager();
let em1 = new employee_1.Employee("Abc", "Def", "12/03", "HN", "Manager");
let em2 = new employee_1.Employee("Ghi", "Jkl", "23/04", "SG", "Vice-manager");
let em3 = new employee_1.Employee("Mno", "Pqr", "19/05", "DN", "Employee");
emManager.addEmployee(em1);
emManager.addEmployee(em2);
emManager.addEmployee(em3);
emManager.showEmployee();
emManager.deleteEmployee(1); //Xoa em2
emManager.showEmployee(); // Con em1 va em3
emManager.editFname(1, "Stw"); //Sua em3
emManager.showSingleEmployee(1);
emManager.editLname(1, "Stw"); //Sua em3
emManager.showSingleEmployee(1);
emManager.editBirthday(1, "Stw"); //Sua em3
emManager.showSingleEmployee(1);
emManager.editAddress(1, "Stw"); //Sua em3
emManager.showSingleEmployee(1);
emManager.editPosition(1, "Stw"); //Sua em3
emManager.showSingleEmployee(1);
