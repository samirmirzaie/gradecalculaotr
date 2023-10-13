// Program Title
console.log("hi");

// Button Clicker
document.getElementById("btn").addEventListener("click", btnClicked);

function btnClicked() {
  //INPUT
  let client = +document.getElementById("client-in").value;
  let structure = +document.getElementById("structure-in").value;
  let structure2 = +document.getElementById("structure2-in").value;
  let client2 = +document.getElementById("client2-in").value;
  let project = +document.getElementById("project-in").value;

  // PROCESS
  let grade = (client + structure + structure2 + client2 + project) / 5;

  // OUTPUT
  document.getElementById("output").innerHTML = grade;
}
