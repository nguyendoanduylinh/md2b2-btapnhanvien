import { Employee } from "./employee";

let employees: Employee[] = [];

export class EmployeeManager {
  constructor() {}
  addEmployee(employee: Employee) {
    employees.push(employee);
    Employee._id++;
  }
  showSingleEmployee(id: number) {
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
  deleteEmployee(id: number) {
    employees.splice(id, 1);
    Employee._id--;
  }
  editFname(id: number, fname: string) {
    employees[id]._fname = fname;
  }
  editLname(id: number, lname: string) {
    employees[id]._lname = lname;
  }
  editBirthday(id: number, birthday: string) {
    employees[id]._birthday = birthday;
  }
  editAddress(id: number, address: string) {
    employees[id]._address = address;
  }
  editPosition(id: number, position: string) {
    employees[id]._position = position;
  }
}
