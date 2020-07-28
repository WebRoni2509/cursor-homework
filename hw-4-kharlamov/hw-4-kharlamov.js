
const students = ['Олександр', 'Ігор', 'Олена', 'Іра', 'Олексій', 'Світлана'];
const themes = ['Диференційне рівняння', 'Теорія автоматів', 'Алкоритми і структури даних'];
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
    pairs.push([male[i] + ' та ' + female[i]])
  }
 return pairs;
}

const projectForStudents = () => {
  let studentsProject = [];
  let pairs = createPairs();
  for(let i = 0; i < themes.length; i++){
    studentsProject.push([pairs[i] + ', '+ themes[i]]);
  }
  console.log(studentsProject)
  return studentsProject;
}

document.writeln(projectForStudents()); //Project for pair of students
document.writeln(createPairs()); //Pairs of students

