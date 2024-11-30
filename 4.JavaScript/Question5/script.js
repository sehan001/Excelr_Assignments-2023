const cells = document.querySelectorAll(".cell");
let draggedCell = null;

cells.forEach((cell) => {
    cell.addEventListener("dragstart", handleDragStart);
    cell.addEventListener("dragover", handleDragOver);
    cell.addEventListener("dragenter", handleDragEnter);
    cell.addEventListener("dragleave", handleDragLeave);
    cell.addEventListener("drop", handleDrop);
    cell.addEventListener("dragend", handleDragEnd);
});

function handleDragStart(e) {
    draggedCell = this;
    e.dataTransfer.effectAllowed = "move";
    e.dataTransfer.setData("text/html", this.innerHTML);
}

function handleDragOver(e) {
    if (e.preventDefault) {
        e.preventDefault();
    }
    e.dataTransfer.dropEffect = "move";
    return false;
}

function handleDragEnter(e) {
    if (this !== draggedCell) {
        this.classList.add("over");
    }
}

function handleDragLeave(e) {
    if (this !== draggedCell) {
        this.classList.remove("over");
    }
}

function handleDrop(e) {
    if (e.stopPropagation) {
        e.stopPropagation();
    }

    if (draggedCell !== this) {
        // Swap the innerHTML and data-number attributes
        const tempInnerHTML = this.innerHTML;
        const tempDataNumber = this.getAttribute("data-number");

        this.innerHTML = draggedCell.innerHTML;
        this.setAttribute("data-number", draggedCell.getAttribute("data-number"));

        draggedCell.innerHTML = tempInnerHTML;
        draggedCell.setAttribute("data-number", tempDataNumber);

        // Change the color of the dragged cell
        draggedCell.classList.remove("dragged");
        this.classList.add("dragged");
    }

    return false;
}

function handleDragEnd(e) {
    cells.forEach((cell) => {
        cell.classList.remove("over");
    });
}
