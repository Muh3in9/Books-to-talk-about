document.addEventListener("DOMContentLoaded", function() {
    var modeSwitch = document.getElementById('mode-switch');
    var container = document.querySelector('.container');
  
    modeSwitch.addEventListener('change', function() {
      if (modeSwitch.checked) {
        container.classList.add('dark-mode');
      } else {
        container.classList.remove('dark-mode');
      }
    });
  });
  
  document.addEventListener("DOMContentLoaded", function() {
    var taskInput = document.getElementById('taskInput');
    var addTaskBtn = document.getElementById('addTaskBtn');
    var taskList = document.getElementById('taskList');
  
    addTaskBtn.addEventListener('click', function() {
      var taskText = taskInput.value.trim();
      if (taskText !== '') {
        var li = document.createElement('li');
        li.textContent = taskText;
        var removeBtn = document.createElement('button');
        removeBtn.textContent = 'Remove';
        removeBtn.classList.add('remove-btn');
        removeBtn.addEventListener('click', function() {
          taskList.removeChild(li);
        });
        li.appendChild(removeBtn);
        taskList.appendChild(li);
        taskInput.value = '';
      }
    });
  });
  
