document.addEventListener('DOMContentLoaded', () => {



    const form =document.querySelector('#new-task-form');
    const input = document.querySelector('#new-task-input');
    const list_el = document.querySelector('#tasks');
    const submit_btn = document.querySelector('#new-task-submit');
    
    //By defauld the submit button is disabled
    submit_btn.disabled = true;
    document.querySelector('#new-task-input').onkeyup = () => {
        if (document.querySelector('#new-task-input').value.length > 0) {
            submit_btn.disabled = false;
        } else {
            submit_btn.disabled = true;
        };
    };


    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Write alerm for the users when they submit an empty form of tasks
        const task = input.value;
        if (!task) {
            alert(" Please fill out the task!");

            return;
        }

        // Create Variables
        const task_el = document.createElement('div');
        task_el.classList.add('task');
        list_el.appendChild(task_el);

        const task_content_el = document.createElement('div');
        task_content_el.classList.add('content');
        task_el.appendChild(task_content_el);

        const task_input_el = document.createElement('input');
        task_input_el.classList.add('text');
        task_input_el.type = "text";
        task_input_el.value = task;
        task_input_el.setAttribute("readonly", "redonly");
        task_content_el.appendChild(task_input_el);

        const task_actions_el = document.createElement('div');
        task_actions_el.classList.add('actions');
        task_el.appendChild(task_actions_el);

        const task_edit_el = document.createElement('button');
        task_edit_el.classList.add('edit');
        task_edit_el.innerHTML = "Edit";
        task_actions_el.appendChild(task_edit_el);

        const task_delete_el = document.createElement('button');
        task_delete_el.classList.add('delete');
        task_delete_el.innerHTML = "Delete"
        task_actions_el.appendChild(task_delete_el);

        task_edit_el.addEventListener('click', () => {

            if (task_edit_el.innerText.toLowerCase() == "edit") {
                task_input_el.removeAttribute("readonly");
                task_input_el.focus();
                task_edit_el.innerText = "Save";
            } else {
                task_input_el.setAttribute("readonly", "readonly");
                task_edit_el.innerText = "Edit";
            }
        });

        task_delete_el.addEventListener('click', () => {
            list_el.removeChild(task_el);
        });

        // Clear out the input field
        input.value = "";

        // Disable the submit button
        submit_btn.disabled = true;
    });

});