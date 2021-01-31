const participateButton = document.getElementById("participate");

participateButton.addEventListener("click", () => {
  $.ajax({
    url: "/quiz",
    type: "GET",
    success: function (res) {
      window.location.pathname = "/quiz";
    },
    error: function () {
      alert("Exam doesn't started yet!");
    },
  });
});
