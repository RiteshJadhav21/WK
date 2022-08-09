// console.log(process_emps([1981, 1977], calcAge));
emp_list = [1981, 1977, 1976];
for (emp of emp_list) {
  debugger;
  console.log(emp);
}

for (i in emp_list) {
  console.log(emp_list[i]);
}

function getAges(list_dobs) {
  const ages = [];
  for (dob of list_dobs) {
    ages.push(2022 - dob);
  }
  return ages;
}
// console.log(getAges(emp_list));

function calcAge(dob) {
  console.log(2022 - dob);
  // let age_l = 2022 - dob;
  // return age_l;
}

const calAge_Arr = (dob) => {
  console.log(2022 - dob);
};
const newAges = [];
// newAges.push();
// console.log(emp_list.forEach(calcAge));
// emp_list.forEach(calcAge);

// newAges.push(emp_list.forEach(calAge_Arr));
// console.log(newAges);

emp_list.forEach(calAge_Arr);
