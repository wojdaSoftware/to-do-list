{
    let tasks = [];

    const markTask = (taskIndex) => {
        tasks[taskIndex].done = !tasks[taskIndex].done
        render();
    }

    const addTask = (content) => {
        if (content === "") {
            return;
        }

        tasks.push(
            {
                content: content,
                done: false,
            }
        );
    };

    const removeTask = (taskIndex) => {
        tasks.splice(taskIndex, 1);
        render();
    };

    const bindEvents = () => {
        const removeButtons = document.querySelectorAll(".js-removeButton");

        removeButtons.forEach((removeButton, taskIndex) => {
            removeButton.addEventListener("click", () => {
                removeTask(taskIndex);
            });
        });

        const markButtons = document.querySelectorAll(".js-markButton");

        markButtons.forEach((markButton, taskIndex) => {
            markButton.addEventListener("click", () => {
                markTask(taskIndex);
            });
        });
    }

    const render = () => {
        let htmlString = "";

        for (const task of tasks) {
            htmlString += `
            <li class="section__listItem">
                <button class="section__listButton js-markButton">${task.done ? "&#10004" : ""}</button>
                <p ${task.done ? " style = \"text-decoration: line-through\"" : ""}>${task.content}</p>
                <button class = "section__listButton section__listButton--second js-removeButton"><img src="../images/bin-icon.png" alt="Bin icon" width = 23px></button>
            </li>
            `;
        };

        document.querySelector(".js-taskList").innerHTML = htmlString;

        bindEvents()
    };

    const onFormSubmit = (event) => {
        event.preventDefault();
        const newTask = document.querySelector(".js-newTask");

        addTask(newTask.value.trim());

        render();

        newTask.value = "";
    };

    const init = () => {
        const form = document.querySelector(".js-form")

        render();

        form.addEventListener("submit", onFormSubmit);
    };

    init();
}