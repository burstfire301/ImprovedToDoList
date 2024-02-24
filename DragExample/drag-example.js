const list = document.getElementById("sortable-list");
let draggedItem = null;

list.addEventListener("dragstart", (e) => {
  draggedItem = e.target;
  e.dataTransfer.setData("text/plain", ""); // Required for Firefox
});

list.addEventListener("dragover", (e) => {
  e.preventDefault(); // Allow drop
  const afterElement = getDragAfterElement(list, e.clientY);
  const currentElement = document.querySelector(".dragging-over");
  if (currentElement) {
    currentElement.classList.remove("dragging-over");
  }
  if (afterElement == null) {
    list.appendChild(draggedItem);
  } else {
    list.insertBefore(draggedItem, afterElement);
  }
});

function getDragAfterElement(list, y) {
  const draggableElements = [...list.querySelectorAll("li:not(.dragging)")];

  return draggableElements.reduce(
    (closest, child) => {
      const box = child.getBoundingClientRect();
      const offset = y - box.top - box.height / 2;
      if (offset < 0 && offset > closest.offset) {
        return { offset: offset, element: child };
      } else {
        return closest;
      }
    },
    { offset: Number.NEGATIVE_INFINITY }
  ).element;
}

list.addEventListener("dragend", () => {
  draggedItem = null;
  const currentElement = document.querySelector(".dragging-over");
  if (currentElement) {
    currentElement.classList.remove("dragging-over");
  }
});
