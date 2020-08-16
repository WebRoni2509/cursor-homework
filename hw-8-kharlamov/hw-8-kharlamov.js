
class Student{
  constructor(course, university, fullName){
    this.university = university;
    this.course = course;
    this.fullName = fullName;
    this.marks = [5, 4, 4, 5];
    this.isStudent = true;
  }
  getStudentInfo(){
    const studentInfo = `Студент ${this.course} го курсу ${this.university}, ${this.fullName}`;
    return studentInfo;
  }
  get _studentMarks(){
    if(this.isStudent){
      return this.marks;
    }
    else{
      return null;
    }
  }
  set _studentMarks(mark){
    if(this.isStudent){
      const newMarks = this.marks.push(mark);
      return newMarks;
      // return [...this.marks, mark]; - хотів зробити таким методом без .push(), але щось не получається :)
    }
    else{
      return null;
    }
  }
  getAverageMark(){
    const averageMark = this.marks.reduce((num, sum) => num + sum, 0) / this.marks.length;
    if(this.isStudent){
      return averageMark;
    }
    else{
      return null;
    }   
  }
  dismissStudent(){
    this.isStudent = false;
  }
  recoverStudent(){
    this.isStudent = true;
  }
};

const student = new Student('1', 'Вищої Школи Психотерапії м.Одеса', 'Остап Бендер');
document.writeln(`#1 <strong>${student.getStudentInfo()}</strong><br><br>`);
document.writeln(`#2 Оцінки студента: <strong>${student.marks}</strong><br><br>`);
student.studentMarks = 3;
document.writeln(`#3 Усі оцінки студента: <strong>${student.marks}</strong><br><br>`);
document.writeln(`#4 Середній бал студента: <strong>${student.getAverageMark()}</strong><br><br>`)
student.dismissStudent();
document.writeln(`#5 Усі оцінки студента після виключення: <strong>${student._studentMarks}</strong><br><br>`);
student.recoverStudent()
document.writeln(`#6 Усі оцінки студента після поновлення: <strong>${student._studentMarks}</strong><br><br>`);

class BudgetStudent extends Student {
  constructor(course, university, fullName){
    super(course, university, fullName);
    setInterval(() => {
      this.getScolarship();
    } ,30000);
  }
  getScolarship(){
    if(this.getAverageMark() > 4 || this.isStudent !== false){
      console.log('Ви отримали 1400 грн. стипендії');
    }
    else{
      console.log('В MacDonalds завжди є "ВІЛЬНА КАСА ))))"');
    }
  }
};

const newStudent = new BudgetStudent('2', 'Тернопільської ветеринарної академії', 'Доктор Хлус');
document.writeln(`#7 <strong>${newStudent.getStudentInfo()}</strong><br><br>`);
// newStudent.dismissStudent();
// newStudent.recoverStudent();
