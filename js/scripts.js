$(document).ready(function() {
  $("form#new-task").submit(function(event) {
    event.preventDefault();

    var inputtedTaskName = $("input#new-task-name").val();
    var inputtedDescription = $("input#new-description").val();
    var newTask = { taskName: inputtedTaskName, description: inputtedDescription };

    $("ul#tasks").append("<li><span class='task'>" + newTask.taskName + " " + newTask.description + "</span></li>");

    $("input#new-task-name").val("");
    $("input#new-description").val("");

    $(".task").last().click(function() {
      $("#show-task").show();
      $(".task-name").text(newTask.taskName);
      $(".description").text(newTask.description);
    });
  });
});
