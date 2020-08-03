
const students = ['Олександр', 'Ігор', 'Олена', 'Іра', 'Олексій', 'Світлана'];
const themes = ['Диференційне рівняння', 'Теорія автоматів', 'Алгоритми і структури даних'];
const marks = [4, 5, 5, 3, 4, 5];

const createPairs = () => {
  let pairs = [];
  let male = [];
  let female = [];
  for(let i = 0; i < students.length; i++){
    if(students[i] === 'Олександр' || students[i] === 'Ігор' || students[i] === 'Олексій' ){
      male.push(students[i])
    }else{
      female.push(students[i])
    }
  }
  for(let i = 0; i < male.length; i++){
    pairs.push([' ' + male[i] + ' та ' + female[i]])
  }
 return pairs;
}

const projectForStudents = () => {
  let studentsProject = [];
  let pairs = createPairs();
  for(let i = 0; i < themes.length; i++){
    studentsProject.push([pairs[i] + ', '+ themes[i] + '']);
  }
  return studentsProject;
}

const setMarks = () => {
  let studentsWithMarks = [];
  for(let i = 0; i < students.length; i++){
    studentsWithMarks.push([' ' + [students[i], ' ' + marks[i]]]);
  }
  return studentsWithMarks;
}

const setRandomMarks = () => {
  let studentsWithRandomMarks = [];
  let pairs = createPairs();
  let pairsWithProject = projectForStudents();
  for(let i = 0; i < pairsWithProject.length; i++){
    studentsWithRandomMarks.push([pairs[i] + ', ' + themes[i] + ', ' + Math.floor(Math.random() * 5 + 1 )])
  }
  return studentsWithRandomMarks;
}

document.writeln(`${createPairs()} <br>`); //Pairs of students
document.writeln(`${projectForStudents()} <br>`); //Project for pair of students
document.writeln(`${setMarks()} <br>`); //Set marks for students
document.writeln(`${setRandomMarks()} <br>`);