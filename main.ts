import { EmployeeManager } from "./employeeMng";
import { Employee } from "./employee";

let emManager = new EmployeeManager();
let em1 = new Employee("Abc", "Def", "12/03", "HN", "Manager");
let em2 = new Employee("Ghi", "Jkl", "23/04", "SG", "Vice-manager");
let em3 = new Employee("Mno", "Pqr", "19/05", "DN", "Employee");

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
