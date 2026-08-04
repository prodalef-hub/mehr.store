const searchInput = document.getElementById("search");
const apps = document.querySelectorAll(".app-card");


searchInput.addEventListener("input", function () {

    const value = searchInput.value.toLowerCase();


    apps.forEach(app => {

        const name = app.querySelector("h2").textContent.toLowerCase();


        if (name.includes(value)) {

            app.style.display = "flex";

        } else {

            app.style.display = "none";

        }

    });

});
