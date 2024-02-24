const list = document.getElementById("routine-list");
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
  const candidateElements = [...list.querySelectorAll("li:not(.dragging)")];

  return candidateElements.reduce(
    (closest, candidate) => {
      const box = candidate.getBoundingClientRect();
      const offset = y - box.top - box.height / 2;
      if (offset < 0 && offset > closest.offset) {
        return { offset: offset, element: candidate };
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
