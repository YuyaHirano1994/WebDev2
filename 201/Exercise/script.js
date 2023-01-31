$(document).ready(function () {
  $("#addTask").click(function () {
    const text = $(".textBox").val();
    const deleteBtn = $("<button>").attr("id", "delete").addClass("fas fa-trash-alt");
    const doneBtn = $("<button>").attr("id", "done").addClass("fas fa-check");
    const div = $("<div>");
    if (text) {
      const newTask = div.html(text);
      newTask.append(deleteBtn).append(doneBtn);
      $(".notCompleted").append(newTask);
      $(".textBox").val("");
    } else {
      alert("Error: Please enter a task first");
    }
  });

  $(document).on("click", "#done", function () {
    const target = $(this).parent("div");
    target.fadeOut(1000, function () {
      $(".completed").append(target);
      target.fadeIn(1000);
    });
    this.remove();
  });

  $(document).on("click", "#delete", function () {
    const target = $(this).parent("div");
    target.fadeOut(1000, function () {
      target.remove();
    });
  });
});
