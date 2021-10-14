function deleteItem() {
    document.querySelector(".listItem").remove();
    document.querySelector("#favchapter").focus();
}


function addBookChapter() {
    let chapterName = document.querySelector("#favchapter").value;
    if (chapterName != "") {
        let list = document.querySelector(".list");

        let listItem = document.createElement("li");
        listItem.setAttribute("class", "listItem");
        listItem.textContent = chapterName;

        let deleteButton = document.createElement("button");
        deleteButton.textContent = "X";
        deleteButton.setAttribute("class", "deleteButton");
        deleteButton.addEventListener("click", deleteItem);

        list.appendChild(listItem);
        listItem.appendChild(deleteButton);

        
        document.querySelector("#favchapter").focus();
        document.querySelector("#favchapter").value = "";
    }

}


document.querySelector("#submitButton").addEventListener("click", addBookChapter);