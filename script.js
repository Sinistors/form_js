let form = document.querySelector("#form");

form.addEventListener("submit", (e) =>
{
    console.log("ui");
    e.preventDefault();


    let container = document.createElement("div");

    let name = document.createElement("p");
    name.innerHTML = "<span class=\"bold\">Nom : </span> " + document.querySelector("#name").value;
    container.append(name);
    let firstName = document.createElement("p");
    firstName.innerHTML = "<span class=\"bold\">Prenom :</span> " + document.querySelector("#firstName").value;
    container.append(firstName);






    document.querySelector("body").append(container);

})