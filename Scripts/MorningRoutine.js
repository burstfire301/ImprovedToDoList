/**
 * Initializes the page by adding event listeners and setting up functionality.
 */
function initializePage() {
  addCloseButtonToListItems();
  closeButtonHidesListItem();
  clickingOnListItemChecks();
}

// Create a "close" button and append it to each list item
function addCloseButtonToListItems() {
  var myNodelist = document.getElementsByTagName("LI");
  var i;
  for (i = 0; i < myNodelist.length; i++) {
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    myNodelist[i].appendChild(span);
  }
}

// Click on a close button to hide the current list item
function closeButtonHidesListItem() {
  var close = document.getElementsByClassName("close");
  var i;
  for (i = 0; i < close.length; i++) {
    close[i].onclick = function () {
      var div = this.parentElement;
      div.style.display = "none";
    };
  }
}

// Add a "checked" symbol when clicking on a list item
function clickingOnListItemChecks() {
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

// Create a new list item when clicking on the "Add" button
function newElement() {
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
    document.getElementById("morning-routine-list").appendChild(li);
  }

  document.getElementById("myInput").value = "";
}
