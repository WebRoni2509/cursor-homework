
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


document.writeln(`Сума податків для сплати: <strong>${getMyTaxes.call(ukraine, 25000)}</strong><br><br>`); //function #1 output
document.writeln(`Середній податок ІТ - спеціаліста в Україні: <strong>${getMiddleTaxes.call(ukraine)}</strong><br>`); //function #2 output
document.writeln(`Середній податок ІТ - спеціаліста в Латвії: <strong>${getMiddleTaxes.call(latvia)}</strong><br>`); //function #2 output
document.writeln(`Середній податок ІТ - спеціаліста в Литві: <strong>${getMiddleTaxes.call(litva)}</strong><br>`); //function #2 output

