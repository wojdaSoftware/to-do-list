{
    let tasks = [
        {
            content: "example task",
            done: false,
        },
        {
            content: "gugu gaga",
            done: true,
        },
    ];

    const render = () => {
        let htmlString = "";

        for (const task of tasks) {
            htmlString += `
            <li${task.done ? " style = \"text-decoration: line-through\"" : ""} >
                ${task.content}
            </li>
            `;
        };

        document.querySelector(".js-taskList").innerHTML = htmlString;
    };

    const addTask = (content) => {
        tasks.push(
            {
                content: content,
                done: false,
            }
        );
    };

    const onFormSubmit = (event) => {
        event.preventDefault();

        addTask(document.querySelector(".js-newTask").value);
        render();
    };

    const init = () => {
        const form = document.querySelector(".js-form")
        form.addEventListener("submit", onFormSubmit);
        render();
    };

    init();
}