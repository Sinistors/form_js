let form = document.querySelector("#form");

form.addEventListener("submit", (e) =>
{
    e.preventDefault();


    let container = document.querySelector("#container");
    container.innerHTML = "";

    let name = document.createElement("p");
    name.innerHTML = "<span class=\"bold\">Nom : </span> " + document.querySelector("#name").value;
    container.append(name);
    let firstName = document.createElement("p");
    firstName.innerHTML = "<span class=\"bold\">Prenom :</span> " + document.querySelector("#firstName").value;
    container.append(firstName);
    let age = document.createElement("p");
    age.innerHTML = "<span class=\"bold\">Age :</span> " + document.querySelector("#age").value + " ans";
    container.append(age);

    let genderRadios = document.getElementsByName("gender");
    let gender = document.createElement("p");
    genderRadios.forEach(element => 
    {
        if (element.checked)
        {
            gender.innerHTML = "<span class=\"bold\">Genre :</span> " + element.value;
        } 
    });
    container.append(gender);

    let job = document.createElement("p");
    job.innerHTML = "<span class=\"bold\">Metier :</span> " + document.querySelector("#job").value;
    container.append(job);


    let hobbyCheckboxes = document.getElementsByName("hobby");
    let hobbies = document.createElement("p");
    hobbies.innerHTML = "<span class=\"bold\">Hobbies :</span> ";
    hobbyCheckboxes.forEach(element => 
    {
        if (element.checked)
        {
            hobbies.innerHTML += " " + element.value;
        } 
    });
    container.append(hobbies);

    let region = document.createElement("p");
    region.innerHTML = "<span class=\"bold\">Region :</span> " + document.querySelector("#region").value;
    container.append(region);

    let linkedinLink = document.createElement("p");
    linkedinLink.innerHTML = "<span class=\"bold\">LinkedIn :</span> <a href=\"\">" + document.querySelector("#linkedin").value + "</a>";
    container.append(linkedinLink);



});