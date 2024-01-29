
function birthday(name, dbirth) {
  let today = new Date();
  
  if (
    this.dbirth.getMonth() == today.getMonth() &&
    this.dbirth.getDate() == today.getDate()
    ) {
      document.write("Happy Birthday!!");
    } else {
      document.write("none");
    }
    
  }
  
  let student = new Object();
  student.name = "김태호";
  student.dbirth = new Date("1999-01-29");
  student.birthday = birthday;
  
  student.birthday(this.name, this.dbirth);
