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
    el.charAt(0).toUpperCase() + el.slice(1);
    return el.replace('_', ' ');
  })
  return subjectsList;
}
document.writeln(`Список предметів для студента ${students[0].name}: <strong>${getSubjects(students[0])}</strong> <br>`);
