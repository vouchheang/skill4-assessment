const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const fullname = urlParams.get('fullname')
console.log(fullname);

const age = urlParams.get('age')
console.log(age);