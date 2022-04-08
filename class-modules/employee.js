class Employee {
    constructor(name, id, email, getName, getId, getEmail, getRole) {
    this.name = name 
    this.id = id 
    this.email = email 
    this.getName = getName()
    this.getId = getId()
    this.getEmail = getEmail()
    this.getRole = getRole(Employee)
  
  }}
  
  