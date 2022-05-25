const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]

toggleButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active')
})

fetch("https://api.github.com/users/mojahmed/repos")
    .then(function (response) {
        return response.json()
    })
    .then(function (data) {
        console.log(data);
        let projects = data

        let projectSection = document.getElementById("projects");
        let projectList = projectSection.querySelector("ul");
        for (let i = 0; i < projects.length; i++) {

            let projectElement = document.createElement("a");
            projectElement.href = `${projects[i].html_url}`
            projectElement.innerText = `${projectElement.textContent = projects[i].name}`



            projectList.appendChild(projectElement);
        }
    })
let today = new Date();
var thisYear = today.getFullYear();



let footer = document.querySelector("#copyright");

if (footer) {
    let copyright = document.createElement("p")
    copyright.innerHTML = `&copy; Mohammed Ahmed ${thisYear}`;
    footer.appendChild(copyright);

}
document.getElementById("my-pic").addEventListener("click", function () {
    alert("Welcome to my website !");
});