document.addEventListener("DOMContentLoaded", ()=> {
    let ProjectsButton = document.getElementById("btn_1");
    let About = document.getElementById("btn_2");
    let Contact = document.getElementById("btn_3");

    document.getElementById("view_1").style.display="block";
    document.getElementById("view_2").style.display="none";

    ProjectsButton.onclick = () => {
        document.getElementById("view_1").style.display="block";
        document.getElementById("view_2").style.display="none";
    };

    About.onclick= () => {
        document.getElementById("view_1").style.display="none";
        document.getElementById("view_2").style.display="block";
    }

})
