{
    const tasks = [
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
        }

        document.querySelector(".js-taskList").innerHTML = htmlString;
    };

    const init = () => {
        render();
    };

    init();
}