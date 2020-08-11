
const ukraine = { tax: 0.195, middleSalary: 1789, vacancies: 11476 };
const latvia = { tax: 0.25, middleSalary: 1586, vacancies: 3921 };
const litva = { tax: 0.15, middleSalary: 1509, vacancies: 1114 };

//function #1
function getMyTaxes(sal) {
	const taxesAmount = this.tax * sal;
  return taxesAmount;
}

//function #2
function getMiddleTaxes(country) {
	const middleTax = this.tax * this.middleSalary;
  return middleTax;
}

//function #3
function getTotalTaxes(country) {
  const taxesTotalAmount = this.tax * this.middleSalary * this.vacancies;
  return taxesTotalAmount;
}

//function #4
function getMySalary(country) {
  
}

document.writeln(`Сума податків для сплати: <strong>${getMyTaxes.call(ukraine, 25000)}</strong><br><br>`); //function #1 output

document.writeln(`Середній податок ІТ - спеціаліста в Україні: <strong>${getMiddleTaxes.call(ukraine)}</strong><br>`); //function #2 output
document.writeln(`Середній податок ІТ - спеціаліста в Латвії: <strong>${getMiddleTaxes.call(latvia)}</strong><br>`); //function #2 output
document.writeln(`Середній податок ІТ - спеціаліста в Литві: <strong>${getMiddleTaxes.call(litva)}</strong><br><br>`); //function #2 output

document.writeln(`Сільки всього податків платять IT-спеціалісти в Україні: <strong>${getTotalTaxes.call(ukraine)}</strong><br>`); //function #3 output
document.writeln(`Сільки всього податків платять IT-спеціалісти в Латвії: <strong>${getTotalTaxes.call(latvia)}</strong><br>`); //function #3 output
document.writeln(`Сільки всього податків платять IT-спеціалісти в Литві: <strong>${getTotalTaxes.call(litva)}</strong><br>`); //function #3 output


