const btn = document.getElementById("btn");
const textInput = document.getElementById("input");
const newList = document.createElement("ul");
document.body.append(newList);

// --------------------------- v2
// attempt 2: hardcodes input field
// btn.addEventListener("click", test1);

// function test1() {
//   if (textInput.value) {
//     let newElement = document.createElement("li");
//     newElement.textContent = textInput.value;
//     newList.append(newElement);
//   }
// }

// --------------------------- v3

// attempt 3: can pass different variables to add to another list
// btn.addEventListener('click', e => addLi(textInput.value))

const leftList = document.getElementById("left-list");
const rightList = document.getElementById("right-list");
const radioLeft = document.getElementById("radio-left");
const radioRight = document.getElementById("radio-right");

function addLi(location, value) {
  if (value) {
    let newElement = document.createElement("li");
    newElement.textContent = value;
    location.append(newElement);
  } else {
    alert("Enter a value before clicking the button");
  }
}

btn.addEventListener("click", replySelection);

function replySelection() {
  var radioReply = document.getElementsByName("select-list");
  if (radioReply[0].checked) {
    addLi(leftList, textInput.value);
  } else if (radioReply[1].checked) {
    addLi(rightList, textInput.value);
  } else {
    console.log("nothing selected"); // addressed with default radio selection
  }
}
