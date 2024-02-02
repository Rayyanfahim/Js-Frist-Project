const form = document.querySelector("#form");
const mainInput = document.querySelector("#mainInput");

const userList = document.querySelector("#printHere");

const getNumber = document.querySelector("#getNumber");
const userNeed = document.querySelector("#userNeed");

const userListArray = [];

form.addEventListener("submit", (e) => {
  e.preventDefault;
  const formInput = mainInput.value;
  userListArray.push(formInput);

  userList.innerHTML = "";

  for (item of userListArray) {
    const listItem = document.createElement("h5");
    listItem.innerText = item;
    userList.appendChild(listItem);
  }
  console.log(userListArray);
  // mainInput.value = "";
});

function ranomize(array) {
  const randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
}

// setInterval(() => {
//   console.log(userListArray);
// }, 1000);
