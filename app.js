/*
 * SCHOOL MANAGEMENT SYSTEM PROJECT
 * Features
 * Add employee (Principal/Teacher) details.
 * Add Student details.
 * Add subject details.
 * Display salaries of employees.
 * Finding the number of students registered in  particular subject.
 *
 * T = time complexity, S = space complexity, 
 * all methods used here have worst T = O(n)  
 * For a visual demo visit the replit link bellow
 *
 * https://replit.com/@cyber-jev/school-management-system0x1stableversion#index.js
 */

//Initializing empty student, teacher and subject Arrays
 let studentArray = [];
 let teacherArray = [];
 let subjectArray = [];

// MAIN CLASS
class School {
  constructor() {}

  get teacherArray() {//JavaScript ES6 get Accessor
    return teacherArray;
  }
  get studentArray() {//JavaScript ES6 get Accessor
    return studentArray;
  }
  get subjectArray() {//JavaScript ES6 get Accessor
    return subjectArray;
  }
 
  // 
  set teacherArray(teacher) {//JavaScript ES6 set Mutator
    teacherArray.push(teacher);
  }
  set studentArray(student) {//JavaScript ES6 set Mutator
    studentArray.push(student);
  }
  set subjectArray(subject) {//JavaScript ES6 set Mutator
    subjectArray.push(subject);
  }
/*
 * Main function
 * This function runs the program
 * Prompts user for actions they want to perform
 * returns (0)
*/
   main() {
  let mainOption 
  do {
        alert("\nMain Menu \nPress 1. to add Employee \nPress 2. to add Student \nPress 3. to add Subject \nPress 4. Show subject \nPress 5. Show Employee's Salary \nPress 6. Count Students taking a Subject\nPress 7. Exit \n");
      
      mainOption = Number(prompt("Select Option"));
      
    switch (mainOption){
      case 1: // ADD EMPLOYEE
        addEmployee();
        break;
      case 2: // ADD STUDENT
        addStudent();
        break;
      case 3: // ADD SUBJECT
        addSubject();
        break;
      case 4: // SHOW SUBJECT
        showSubjects();
        break;
      case 5: // SHOW EMPLOYEE SALARY
        showEmployeeSalary();
        break;
      case 6: // COUNT STUDENTS IN SUBJECT
        countStudents();
        break;
      case 7: // EXIT MENU
        return 0;
    }
  }
    while (mainOption != 7)
}
}

class Employee extends School {
  constructor() {
    super();
    this._name;
    this._id;
    this._address;
    this._phoneNumber;
    this._email;
    this._basicSalary;
    this._livingExpenses;
  }
  
  get name() {//javascript ES6 get Accessor
    return this._name;
  }
  get id() {//javascript ES6 get Accessor
    return this._id;
  }
  get address() {//javascript ES6 get Accessor
    return this._address;
  }
  get phoneNumber() {//javascript ES6 get Accessor
    return this._phoneNumber;
  }
  get email() {//javascript ES6 get Accessor
    return this._email;
  }
  get basicSalary() {//javascript ES6 get Accessor
    return this._basicSalary;
  }
  getLivingExpenses() {//regular get method to get living Expenses dynamically
    return this._livingExpenses
  }

  // ***employee setter Accessor
  set name(input) {//javascript ES6 set Accessor
    this._name = input.toString();
  }
  set id(input) {//javascript ES6 set Accessor
    this._id = input.toString();
  }
  set address(input) {//javascript ES6 set Accessor
    this._address = input.toString();
  }
  set phoneNumber(input) {//javascript ES6 set Accessor
    this._phoneNumber = input.toString();
  }
  set email(input) {//javascript ES6 set Accessor
    this._email = input.toString();
  }
  set basicSalary(input) {//javascript ES6 set Accessor
    this._basicSalary = Number(input);
  }
  setLivingExpenses(){//regular set method to set living Expenses dynamically
    this._livingExpenses = Math.round((10/100) * this._basicSalary);
  }
}

// **principal class inherits from employee
class Principal extends Employee {
  constructor() {
    super();
    this._bonus
  }
  // **get bonus
  get bonus() {
    if (this._bonus == undefined){
      return '"Please set principal bonus first"'
    }else{
      return this._bonus
    }
    
  }
  // set bonus
  set bonus(input) {
    this._bonus = Number(input);
  }
  // calculate principal salary
  get salary() {
    if (this._bonus == undefined){
      return '"Please set principal bonus first"'
    }
    return this._basicSalary + this._livingExpenses + this._bonus;
  }
}
// **teacher class also inherits from employee
class Teacher extends Employee {
  constructor() {
    super();
    this._classNo
  }
  //calculate teacher salary
  get salary() {
    return this._basicSalary + this._livingExpenses + 20;
  }
}
// **Subject class
class Subject extends School {//Yet to understand this guy
  constructor() {//found how to implement this yet?
    super();
    this._subjectName;

  }
  // subject name getter
  get subjectName() {
    return this._subjectName;
  }
  // subject name setter
  set subjectName(input) {
    this._subjectName = input.toString();
  }
}

// **Student class
class Student extends Subject {
  constructor() {
    super();
    this._id;
    this._name;
    this._level;
  }
  //***student getters
  get id() {
    return this._id
  }
  get name() {
    return this._name
  }
  get level() {
    return this._level
  }

  //**student setters
  set id(input) {
    return this._id = input.toString()
  }
  set name(input) {
    return this._name = input.toString()
  }
  set level(input) {
    return this._level = input.toString()
  }
}

// There can only be one school and one principal so we create only one instance of them
let school = new School();
let principal = new Principal();

/*
* The code below consists of
* METHODS that are called in our main function
*/
// ADD EMPLOOYEE
const addEmployee = () => {
    alert("Employee Menu \nPress 1. Principal \nPress 2. Teacher \nPress 7. Main Menu\n");
    const employee = Number(prompt("Select Option"));
    if (employee  === 1) addPrincipal();
    if (employee === 2) addTeacher();
}
// ADD PRINCIPAL
const addPrincipal = () => {
    alert("Principal menu")
    principal.name = prompt("Enter Name");
    principal.id = prompt("Enter ID Number");
    principal.address = prompt("Enter Address");
    principal.phoneNumber = prompt("Enter Phone Number");
    principal.email = prompt("Enter Email");
    principal.basicSalary = prompt("Enter Basic Salary")
    principal.bonus = prompt('Enter Bonus')
    principal.setLivingExpenses()
    alert("Pricipal Added\n");
}
// ADD TEACHER
const addTeacher = () => {
  let teacher = new Teacher();
    alert("Teacher Menu")
    teacher.name = prompt("Enter Name");
    teacher.id = prompt("Enter ID Number");
    teacher.address = prompt("Enter Address");
    teacher.phoneNumber = prompt("Enter Phone Number");
    teacher.email = prompt("Enter Email");
    teacher.basicSalary = prompt("Enter Basic Salary");
    teacher.setLivingExpenses();
    school.teacherArray = teacher;
    alert("Teacher Added\n");
}
// ADD STUDENT
const addStudent = () => {
    let student = new Student();
    alert("Student Menu");
    student.name = prompt("Enter student name");
    student.id = prompt("Enter student ID");
    student.level = prompt("Enter student level");
    school.studentArray = student;
}
// ADD SUBJECT
const addSubject = () => {
  alert(` Teachers: ${showNames(teacherArray)}\n Students: ${showNames(studentArray)}`)
  
   alert('Subject Menu \n1. Add new Subject \n2. Add Techer Of A Subject \n3. Add Student Taking A Subject\n7. Main Menu\n');
   let option = Number(prompt('Select Option'));
   if (option === 1){
     let subject = new Subject();
     subject.subjectName = prompt("Enter Subject Name");
     school.subjectArray = subject;
   }
   if (option === 2){
      let teacher = prompt('Enter Teacher Name');
      let subject = prompt('Enter Subject Name');
      assignPerson(teacher,subject,teacherArray);
    }
   if (option === 3){
     let student = prompt('Enter Student Name');
     let subject = prompt('Enter Subject Name');
     assignPerson(student,subject,studentArray);
   }
}
// WORKed ON THE assignPerson() to get T = O(n) rether than 
const assignPerson = (name,subject,array) => {
   //naive/bruteforce method; T = O(n^2), S = O(1)
   // for(let i = 0; i < subjectArray.length; i++){
   //   if(subjectArray[i]["_subjectName"] == subject){
   //     for (let j = 0; j < aray.length; j++){
   //      if(array[j]["_name"] == name){
   //        subjectArray[i]['Teacher'] = array[j];
   //      }  
   //     }
   //   }
   // }

  //Optimized method using hash map; T = O(n), S = O(n)
   let map = {};
   for (let i = 0; i < subjectArray.length; i++){
     if (subjectArray[i]["_subjectName"] == subject){
        map[subject] = i;
     }
   }

   if (subject in map){
     for (let j = 0; j < array.length; j++){
        if(array[j]["_name"] == name){
          subjectArray[map[subject]][name] = array[j];
         } 
     }
   }
}

// SHOW SUBJECTS
const showSubjects = () => {
    alert(getSubjects())
}

// SHOW EMPLOYEE SALARY
const showEmployeeSalary = () => {
    alert("Salary Menu \nPress 1. Principal \nPress 2. Teacher\nPress 7. Main Menu\n");
    const employeeOption = Number(prompt("Select Option"));
    if (employeeOption === 1) showPrincipalSalary();
    if (employeeOption === 2) showTeacherSalary();
}

// SHOW PRINCIPAL SALARY
const showPrincipalSalary = () => {
   if(principal.name == undefined) alert('No Principal avialable')
   else alert(`Principal ${principal.name}'s Salary: $${principal.salary}`);   
}

// SHOW TEACHER SALARY
const showTeacherSalary = () => {
    const teacherName = prompt("Enter Teacher's name")
    if(calculateTeacherSalary(teacherName) === undefined) alert("Teacher not found")
    else alert(`${teacherName}'s Salary:  $${calculateTeacherSalary(teacherName)}`)
}

// COUNT STUDENTS TAKING A SUBJECT
const countStudents = () => {
  
  let subject = prompt('Enter Subject');
  let count;
  for (let i = 0; i < subjectArray.length; i++){
    if(subjectArray[i]["_subjectName"] == subject){
      count =  Object.keys(subjectArray[i]).length - 2;
      console.log(count)
    }
  }
  
  if(count === undefined) alert(`Subject Not Found`);
  else if (count <= 0) alert(`No Student Offer This Subject`);
  else if (count = 1) alert(`${count} Student`);
  else alert(`${count} Students`);
}
// CALCULATE TEACHER SALARY
const  calculateTeacherSalary = (name) => {//Regular get method
    // this block shows the salary of the teacher name inputed
    for (let i = 0; i < teacherArray.length; i++) {
      if ("_name" in teacherArray[i]){
        if (teacherArray[i]["_name"] == name){
          return teacherArray[i]._basicSalary + teacherArray[i]._livingExpenses + 20
        } 
      }
    }
}
// GET SUBJECTS
const getSubjects = () => {
   let subjects = []
   for(let i = 0; i < subjectArray.length; i++){
      subjects.push(subjectArray[i]["_subjectName"])
    }
   if (subjects.length <= 0) return "No Subjects yet";
   else return subjects;
}

// SHOW names Of Teachers or students
const showNames = (array) => {
  names = [];
  for (let i = 0; i < array.length; i++){
    names.push(array[i]["_name"])
  }
  return names
}


school.main();
