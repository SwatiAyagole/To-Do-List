function addTask() {
    var taskInput = document.getElementById("taskInput");
    var taskList = document.getElementById("taskList");
  
    if (taskInput.value.trim() !== "") {
      var listItem = '<li>' +
                       '<span>' + taskInput.value + '</span>' +
                       '<button class="cancel-btn" onclick="removeTask(this)">Cancel</button>' +
                       '<button class="edit-btn">Edit</button>' +
                     '</li>';
  
      taskList.innerHTML += listItem;
  
      taskInput.value = "";
    }
  }
  
  function removeTask(element) {
    element.parentNode.remove();
  }
  
  function editTask(event) {
    var target = event.target;
    if (target.classList.contains('edit-btn')) {
        var listItem = target.parentNode;
        var span = listItem.querySelector('span');
        var text = span.innerText;
        var newText = prompt('Edit the task:', text);
        if (newText !== null && newText.trim() !== '') {
            span.innerText = newText;
        }
    }
  }