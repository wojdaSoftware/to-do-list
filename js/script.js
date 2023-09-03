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

    const removeTask = (index) => {
        tasks.splice(index, 1);
        render();
    };

    const render = () => {
        let htmlString = "";

        for (const task of tasks) {
            htmlString += `
            <li${task.done ? " style = \"text-decoration: line-through\"" : ""}>
                ${task.content}
                <button class = "js-removeButton">Delete</button>
            </li>
            `;
        };

        document.querySelector(".js-taskList").innerHTML = htmlString;

        const removeButtons = document.querySelectorAll(".js-removeButton");

        removeButtons.forEach((removeButton, index) => {
            removeButton.addEventListener("click", () => {
                removeTask(index)
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