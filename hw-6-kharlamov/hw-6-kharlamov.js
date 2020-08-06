
//data to use
const students = [{
  name: "Tanya",
  course: 3,
  subjects: {
    math: [4, 4, 3, 4],
    algorithms: [3, 3, 3, 4, 4, 4],
    data_science: [5, 5, 3, 4]
  }
}, {
  name: "Victor",
  course: 4,
  subjects: {
    physics: [5, 5, 5, 3],
    economics: [2, 3, 3, 3, 3, 5],
    geometry: [5, 5, 2, 3, 5]
  }
}, {
  name: "Anton",
  course: 2,
  subjects: {
    statistics: [4, 5, 5, 5, 5, 3, 4, 3, 4, 5],
    english: [5, 3],
    cosmology: [5, 5, 5, 5]
  }
}];

//function #1
const getSubjects = (obj) => {
  let subjects = Object.keys(obj.subjects);
  let subjectsList = subjects.map(function(el){
    let capitalize = el.charAt(0).toUpperCase() + el.slice(1);
    return capitalize.replace('_', ' ');
  })
  return subjectsList.join(', ');
}

//function #2
const getAverageMark = (obj) => {
  let marks = Object.values(obj.subjects).join().split(',');
  let averageMark = (marks.reduce((num, sum) => +num + +sum, 0) / marks.length).toFixed(2);
  return averageMark;
}

//function #3
const getStudentInfo = (obj) => {
	let studentInfo = {
  	studentCourse: obj.course,
    studentName: obj.name,
    averageMark: getAverageMark(obj)
  }
  return studentInfo;
}

//function #4
const getStudentsNames = (obj) => {
  let studentsNamesList = obj.map(function(el){
  	let names = el.name;
    return names;
  })
  return studentsNamesList.sort();
}

//function #5
const getBestStudent = (obj) => {
    let bestStudent;
    if(getAverageMark(students[0]) > getAverageMark(students[1]) && 
       getAverageMark(students[0]) > getAverageMark(students[2])){
        bestStudent = students[0].name;    
    } else if (getAverageMark(students[1]) > getAverageMark(students[0]) &&
               getAverageMark(students[1]) > getAverageMark(students[2])){
        bestStudent = students[1].name;  
    } else {
        bestStudent = students[2].name;  
    }
    return bestStudent;
}

//function #6
const calculateWordLetters = (str) => {
  let wordObj = {};
  for(item of str){
    if (wordObj[item]){
      wordObj[item]++;
    }
    else{
      wordObj[item] = 1;
      }
    }
  return wordObj;
};

///////// OUTPUT //////////
document.writeln(`Список предметів для студента ${students[0].name}: <strong>${getSubjects(students[0])}</strong> <br>`); //function #1 output
document.writeln(`Список предметів для студента ${students[1].name}: <strong>${getSubjects(students[1])}</strong> <br>`); //function #1 output
document.writeln(`Список предметів для студента ${students[2].name}: <strong>${getSubjects(students[2])}</strong> <br><br>`); //function #1 output

document.writeln(`Середній бал студента ${students[0].name}: <strong>${getAverageMark(students[0])}</strong> <br>`); //function #2 output
document.writeln(`Середній бал студента ${students[1].name}: <strong>${getAverageMark(students[1])}</strong> <br>`); //function #2 output
document.writeln(`Середній бал студента ${students[2].name}: <strong>${getAverageMark(students[2])}</strong> <br><br>`); //function #2 output

document.writeln(`Результат функції №3 в консолі. <br><br>`); //function #3 output info
console.log(getStudentInfo(students[0])); //function #3 output
console.log(getStudentInfo(students[1])); //function #3 output
console.log(getStudentInfo(students[2])); //function #3 output

document.writeln(`Імена студентів за алфавітом <strong>${getStudentsNames(students)}</strong> <br><br>`); //function #4 output

document.writeln(`Найвищий бал у студента: <strong>${getBestStudent(students)}</strong> <br><br>`); //function #5 output

document.writeln(`Результат функції №6 в консолі. <br><br>`); //function #6 output info
console.log(calculateWordLetters('phenomenon')); //function #6 output


