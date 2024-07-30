$(document).ready(function() {
    // Call the function to get the data
    getData();

    function getData() {
        // Make an AJAX request to the server
        $.ajax({
            url: 'http://localhost:3000/tasks',
            method: 'GET',
            success: function(data) {
                // Loop through the data
                data.forEach(function(task) {
                    // Append the data to the table
                    $('#tbody').append(`
                        <tr>
                            <td>${task.title}</td>
                            <td>${task.description}</td>
                            <td>${task.completed}</td>
                            <td>
                                <button class="btn btn-primary edit" data-id="${task._id}">Edit</button>
                                <button class="btn btn-danger delete" data-id="${task._id}">Delete</button>
                            </td>
                        </tr>
                    `);
                });

                // Attach event handlers to the dynamically created buttons
                $('.edit').click(function() {
                    let taskId = $(this).data('id');
                    editTask(taskId);
                });

                $('.delete').click(function() {
                    let taskId = $(this).data('id');
                    deleteTask(taskId);
                });
            }
        });
    }

    function editTask(taskId) {
        // Implement edit task functionality here
        console.log('Edit task with ID:', taskId);
        // You can redirect to an edit page or open a modal for editing
    }

    function deleteTask(taskId) {
        // Implement delete task functionality here
        console.log('Delete task with ID:', taskId);
        $.ajax({
            url: `http://localhost:3000/tasks/${taskId}`,
            method: 'DELETE',
            success: function() {
                alert('Task deleted successfully');
                // Reload the data
                $('#tbody').empty();
                getData();
            }
        });
    }
});
