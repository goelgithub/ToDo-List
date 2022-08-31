const task = document.querySelector("#task");
const button = document.querySelector("button");
const tasklist = document.querySelector(".todo-list");
const tick = document.querySelector(".fa-check");

button.addEventListener(
    "click",
    function (e) {
        if (task.value === "") {
            alert("Enter Something");

        }
        else {
            addTask(task.value);
            task.value = "";
        }


    }
)

const addTask = (item) => {
    const listItem = document.createElement("li");
    listItem.innerHTML = `
    ${item}
    <span>
    <i class="fa fa-check"></i>
    <i class="fa fa-circle-minus"></i>
    </span>
    `;

    listItem.querySelector(".fa-check").addEventListener(
        "click",
        function () {
            listItem.classList.toggle("done");
            this.remove();
        }
    )

    listItem.querySelector(".fa-circle-minus").addEventListener(
        "click",
        function () {
            listItem.remove();
        }
    )
    tasklist.appendChild(listItem);
}