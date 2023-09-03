{
    let tasks = [
        {
            content: "Task example",
            done: false,
        },
        {
            content: "Task example (done)",
            done: true,
        },
    ];

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

    const render = () => {
        let htmlString = "";

        for (const task of tasks) {
            htmlString += `
            <li${task.done ? " style = \"text-decoration: line-through\"" : ""}>
                <button class="js-markButton">Done</button>
                ${task.content}
                <button class = "js-removeButton">Delete</button>
            </li>
            `;
        };

        document.querySelector(".js-taskList").innerHTML = htmlString;

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
    };

    const onFormSubmit = (event) => {
        event.preventDefault();

        addTask(document.querySelector(".js-newTask").value.trim());

        render();
    };

    const init = () => {
        const form = document.querySelector(".js-form")

        render();

        form.addEventListener("submit", onFormSubmit);
    };

    init();
}