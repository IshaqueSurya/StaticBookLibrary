$(document).ready(function () {
    $("#login-button").on("click", function (event) {
        
        var email = $("#email-text").val();
        var pass = $("#pass-text").val();
        if (email == "" || pass == "") {
            event.preventDefault();
            $("#status").text("Please enter all the details correctly!");    
        } else if (email == "project1@gmail.com" && pass == "abcd1234"){
            $("#status").empty();
        } else {
            event.preventDefault();
            $("#status").text("Invalid credentials!");
        }
    });

    $("#registration-button").on("click", function (event) {
        
        var firstName = $("#first-name-text").val();
        var lastName = $("#last-name-text").val();
        var email = $("#email-text").val();
        var pass = $("#pass-text").val();

        if (firstName == "" || lastName == "" || email == "" || pass == "") {
            event.preventDefault();
            $("#status").text("Please enter all the details correctly!");    
        } else {
            $("#status").empty();
        }
    })
});