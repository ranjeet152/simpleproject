let label = document.querySelectorAll("label");
label.forEach((Label)=>{
    Label.innerHTML = Label.innerText
    .split("")
    .map(
        (letters,i)=>
        `<span style="transition-delay:${i*60}ms">${letters}</span>`
    )
    .join("");
});

// switch between login and logout page
let containerForm = document.querySelector(".cohtainer-form");
let loginLink = document.querySelector(".loginLink");
let logoutLink = document.querySelector(".logoutLink");

logoutLink.addEventListener("click",()=>{
    containerForm.classList.add("active");
})

loginLink.addEventListener("click",()=>{
    containerForm.classList.add("active");
})