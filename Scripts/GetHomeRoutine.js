const readItemsFromFile = () => {
  fetch("../Routines/MorningRoutine.json")
    .then((response) => response.json())
    .then((data) => {
      const itemList = document.getElementById("morning-routine-list");
      data.items.forEach((item) => {
        const li = document.createElement("li");
        li.textContent = item;
        itemList.appendChild(li);
      });
    })
    .catch((error) => console.error("Error fetching JSON:", error));
};
