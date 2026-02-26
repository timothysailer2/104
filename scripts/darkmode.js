// Load saved mode
document.addEventListener("DOMContentLoaded", function(){

    const toggleBtn = document.getElementById("darkModeToggle");

    // Apply saved preference
    if(localStorage.getItem("darkMode") === "enabled"){
        document.body.classList.add("dark-mode");
    }

    toggleBtn.addEventListener("click", function(){

        document.body.classList.toggle("dark-mode");

        // Save preference
        if(document.body.classList.contains("dark-mode")){
            localStorage.setItem("darkMode","enabled");
        }else{
            localStorage.setItem("darkMode","disabled");
        }
    });

});