const article = {
  title: "How to code",
  description: "You can learn to code. Error is nothing to be afraid of.",
};
function myFunction() {
  document.getElementById("article").innerHTML += `
  <div>${article.title}</div>
  <div>${article.description}</div>
  `}
  
