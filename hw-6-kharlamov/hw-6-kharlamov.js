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
  return marks.join(', ')
}

console.log(getAverageMark(students[1]))

document.writeln(`Список предметів для студента ${students[0].name}: <strong>${getSubjects(students[0])}</strong> <br>`); //function #1 output
document.writeln(`Список предметів для студента ${students[1].name}: <strong>${getSubjects(students[1])}</strong> <br>`); //function #1 output
document.writeln(`Список предметів для студента ${students[2].name}: <strong>${getSubjects(students[2])}</strong> <br><br>`); //function #1 output

document.writeln(`Середній бал студента ${students[0].name}: <strong>${getAverageMark(students[0])}</strong> <br>`); //function #2 output
document.writeln(`Середній бал студента ${students[1].name}: <strong>${getAverageMark(students[1])}</strong> <br>`); //function #2 output
document.writeln(`Середній бал студента ${students[2].name}: <strong>${getAverageMark(students[2])}</strong> <br>`); //function #2 output
