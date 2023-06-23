
document.addEventListener('DOMContentLoaded', function () {

    // By default the submit button is disabled
    document.querySelector('#submit').disabled = true;

    // Activate the submit button when the onkeyup event happens
    document.querySelector('#task').onkeyup = () => {
        if (document.querySelector('#task').value.length > 0) {
            document.querySelector('#submit').disabled = false;
        } else {
            document.querySelector('#submit').disabled = true;
        }
    }

    // Take input from the user and add the task to the list of tasks
    document.querySelector('form').onsubmit = function () {

        // Create the variables
        const task = document.querySelector('#task').value;

        // Create elements
        const li = document.createElement('li');
        li.innerHTML = task;

        // Add the new element to the list of tasks
        document.querySelector('#tasks').append(li);

        // Clear out the input field
        document.querySelector('#task').value = '';

        // Disable the submit button
        document.querySelector('#submit').disabled = true;

        // Stop the form from submitting
        return false;
    };
});