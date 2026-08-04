const searchInput = document.getElementById("search");

const apps = document.querySelectorAll(".app-card");


searchInput.addEventListener("input", () => {


    let searchValue = searchInput.value.toLowerCase();



    apps.forEach(app => {


        let appName = app
        .querySelector("h2")
        .textContent
        .toLowerCase();



        if(appName.includes(searchValue)){


            app.style.display = "flex";


        }else{


            app.style.display = "none";


        }


    });


});




// دکمه‌های دانلود

const downloadButtons = document.querySelectorAll(".app-card button");


downloadButtons.forEach(button => {


    button.addEventListener("click", ()=>{


        alert("لینک دانلود این برنامه به زودی اضافه می‌شود 🌊");


    });


});
