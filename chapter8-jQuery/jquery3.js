$(document).ready(function() {
    showFullName();
    //showHello();
})

// function showHello() {
   /*  $("#helloBtn").click(function() {
        $("#helloWorldText").text("Hello World!!!");
    }) */
// } 


function showFullName() {
    $("#fullNameBtn").on("click", function() {
        alert($("#fname").val() + ' ' + $("#lname").val());
    })
}