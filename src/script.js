const form = document.querySelector("#form");
const mainInput = document.querySelector("#mainInput");

const userList = document.querySelector("#ListPrintHere");

const getNumber = document.querySelector("#getNumber");
const userNeedItem = document.querySelector("#userNeedItem");

const userNeedPrint = document.querySelector("#userNeedPrint");

const userListArray = [];

form.addEventListener("click", () => {
  let formInput = mainInput.value;
  userListArray.push(formInput);

  if (formInput === "") {
    alert("Please enter a number");
  } else {
    userList.innerHTML = "";

    for (item of userListArray) {
      const listItem = document.createElement("h5");
      listItem.innerText = item;
      userList.appendChild(listItem);
    }

    mainInput.value = "";
  }
});

function randomIndex(array) {
  const randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
}

userNeedItem.addEventListener("click", () => {
  let getFormInput = getNumber.value;
  let test = randomIndex(userListArray);

  for (Item of userListArray) {
    const listItem = document.createElement("h5");
    userNeedPrint.innerText = test;
    userNeedPrint.appendChild(Item);
  }
});
