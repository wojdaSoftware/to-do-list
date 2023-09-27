{
    let tasks = [];
    let hideFinished = false;

    const markTask = (taskIndex) => {
        tasks = tasks.map((task, index) => index === taskIndex ? { ...task, done: !tasks[taskIndex].done } : task);

        render();
    };

    const addTask = (content) => {
        if (content === "") return;

        tasks = [...tasks, { content: content }]
    };

    const removeTask = (taskIndex) => {
        tasks = tasks.filter((task, index) => index !== taskIndex);

        render();
    };

    const bindMarkEvents = () => {
        const markButtons = document.querySelectorAll(".js-markButton");

        markButtons.forEach((markButton, taskIndex) => {
            markButton.addEventListener("click", () => {
                markTask(taskIndex);
            });
        });
    };

    const bindRemoveEvents = () => {
        const removeButtons = document.querySelectorAll(".js-removeButton");

        removeButtons.forEach((removeButton, taskIndex) => {
            removeButton.addEventListener("click", () => {
                removeTask(taskIndex);
            });
        });
    };

    const markAllTasks = () => {
        tasks = tasks.map((task) => ({ ...task, done: true }))

        render();
    };

    const bindMarkAllEvent = () => {
        const markAllButton = document.querySelector(".js-markAllButton");

        if (markAllButton) {
            markAllButton.addEventListener("click", markAllTasks);
        };
    };

    const toggleHideTasks = () => {
        hideFinished = !hideFinished

        render();
    };

    const bindHideEvent = () => {
        const hideButton = document.querySelector(".js-hideButton");

        if (hideButton) {
            hideButton.addEventListener("click", toggleHideTasks);
        };
    };

    const renderTasks = () => {
        let htmlString = "";

        for (const task of tasks) {
            if (hideFinished) {
                htmlString += `
                <li class="list__listItem ${task.done ? "list__listItem--hidden" : ""}">
                    <button class="list__button js-markButton">${task.done ? "&#10004" : ""}</button>
                    <p class = "list__paragragh" ${task.done ? "style = \"text-decoration: line-through\"" : ""}>${task.content}</p>
                    <button class = "list__button list__button--second js-removeButton">🗑️</button>
                </li>
                `;
            } else {
                htmlString += `
                <li class="list__listItem ">
                    <button class="list__button js-markButton">${task.done ? "&#10004" : ""}</button>
                    <p class = "list__paragragh" ${task.done ? "style = \"text-decoration: line-through\"" : ""}>${task.content}</p>
                    <button class = "list__button list__button--second js-removeButton">🗑️</button>
                </li>
                `;
            };
        };

        document.querySelector(".js-taskList").innerHTML = htmlString;
    };

    const renderButtons = () => {
        let htmlString = "";

        if (tasks.length > 0) {
            htmlString = `
        <button class="header__button js-markAllButton" ${tasks.every(({ done }) => done) ? "disabled" : ""}>Finish all</button>
        <button class="header__button js-hideButton">Hide finished</button>
        `
        };

        document.querySelector(".js-buttonsContainer").innerHTML = htmlString;

    };

    const render = () => {
        renderTasks();
        renderButtons();

        bindMarkEvents();
        bindRemoveEvents();
        bindMarkAllEvent();
        bindHideEvent();
    };

    const onFormSubmit = (event) => {
        event.preventDefault();
        const newTask = document.querySelector(".js-newTask");

        addTask(newTask.value.trim());

        render();

        newTask.value = "";
        newTask.focus();
    };

    const init = () => {
        const form = document.querySelector(".js-form")

        render();

        form.addEventListener("submit", onFormSubmit);
    };

    init();
}