export class Employee {
  static _id: number = 0;
  _fname: string;
  _lname: string;
  _birthday: string;
  _address: string;
  _position: string;
  constructor(
    fname: string,
    lname: string,
    birthday: string,
    address: string,
    position: string
  ) {
    this._fname = fname;
    this._lname = lname;
    this._birthday = birthday;
    this._address = address;
    this._position = position;
  }
  get fname() {
    return this._fname;
  }
  set fname(fname) {
    this._fname = fname;
  }
  get lname() {
    return this._lname;
  }
  set lname(lname) {
    this._lname = lname;
  }
  get birthday() {
    return this._birthday;
  }
  set birthday(birthday) {
    this._birthday = birthday;
  }
  get address() {
    return this._address;
  }
  set address(address) {
    this._address = address;
  }
  get position() {
    return this._position;
  }
  set position(position) {
    this._position = position;
  }
}
