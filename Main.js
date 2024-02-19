function initializePage() {
  addListenerToList();
  showMorningRoutine();
}

function addListenerToList() {
  // Add a "checked" symbol when clicking on a list item
  var list = document.querySelector("ul");
  list.addEventListener(
    "click",
    function (ev) {
      if (ev.target.tagName === "LI") {
        ev.target.classList.toggle("checked");
      }
    },
    false
  );
}

function showMorningRoutine() {
  // clear the list
  const ul = document.getElementById("routine-list");
  ul.innerHTML = "";

  // add items to list
  addItemToList("get up");
  addItemToList("turn on pc");
  addItemToList("drink water");
  addItemToList("shower");
  addItemToList("teeth");
}

function showNightTimeRoutine() {
  // clear the list
  const ul = document.getElementById("routine-list");
  ul.innerHTML = "";

  // add items to list
  addItemToList("dishes");
  addItemToList("brush teeth");
  addItemToList("diary");
  addItemToList("go to bed");
}

function showGetHomeRoutine() {
  // clear the list
  const ul = document.getElementById("routine-list");
  ul.innerHTML = "";

  // add items to list
  addItemToList("wash hands");
  addItemToList("drink water");
  addItemToList("check calendar");
  addItemToList("social media");
  addItemToList("unpack bag");
  addItemToList("wash face");
}

function addItemToList(value) {
  // create a new list item
  var li = document.createElement("li");
  var t = document.createTextNode(value);
  li.appendChild(t);

  // create a close button
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);

  // add functionality to close button
  span.onclick = function () {
    var div = this.parentElement;
    div.style.display = "none";
  };

  // add close button to list item
  li.appendChild(span);

  // add list item to list
  document.getElementById("routine-list").appendChild(li);
}

// Create a new list item when clicking on the "Add" button
function newElementFromAdd() {
  // create a new list item
  var li = document.createElement("li");
  var inputValue = document.getElementById("myInput").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);

  // create a close button
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);

  // add functionality to close button
  span.onclick = function () {
    var div = this.parentElement;
    div.style.display = "none";
  };

  // add close button to list item
  li.appendChild(span);

  if (inputValue === "") {
    alert("You must write something!");
  } else {
    document.getElementById("routine-list").appendChild(li);
  }

  document.getElementById("myInput").value = "";
}
