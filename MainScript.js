// Function that deals with the button that displays the form
function formButtonClick() {
    // Creats a variable "form" and assigns the values of the form to be shown to the variable
    var form = document.getElementById("formToBeShown");
    // Creates another variable "isShown" which is assigned the value of if the form is being shown or not currently
    var isShown = form.style.display;
    // If the form is not being shown right now
    if (isShown == "none") {
        // Then show the form
        document.getElementById("formToBeShown").style.display = "block";
    }
    // Else if the form is being shown right now
    else {
        // Then don't show the form
        document.getElementById("formToBeShown").style.display = "none";
    }
}

// Function that deals with the button that leads to a random wonder from the home page
function randomButtonClick() {
    // Generates an array containing the html of each wonder
    const pages = ["Christ.html", "Colosseum.html", "Itza.html", "Machu.html", "Petra.html", "Pyramid.html", "Taj.html", "Wall.html"];
    // Generates a number from 0-7 to access the specified wonder in the array at that position
    var randomNum = Math.floor(Math.random() *8);
    // Sends the user to the random wonder
    location.href = pages[randomNum];
}
