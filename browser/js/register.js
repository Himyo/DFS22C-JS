function validateForm() {
    validateName();
    validateEmail();
    validateTel();
    validateMdp();
}

function validateName() {
    const nom = document.forms["forms1"]["nom"].value;
    const prenom = document.forms["forms1"]["prenom"].value;
    if(nom === "" && prenom === "" ) {
        alert("nom ou prénom pas remplie");
        return false;
    }
}

function validateEmail() {
    const mail = document.forms["forms1"]["mail"].value;
    const mailformat = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
    if(!mail.match(mailformat)) {
        alert("mail invalide");
        return false;
    }
}

function validateTel() {
    const tel = document.forms["forms1"]["tel"].value;
    const telformat = /^\d+$/;
    if(tel.toString().length !== 10 || !tel.match(telformat)) {
        alert("téléphone non conforme");
        return false;
    }
}

function validateMdp() {
    const mdp = document.forms["forms1"]["mdp"].value;
    const mdpformat = [a-zA-Z]+/\d/g;
    if(mdp.toString().length > 8 && !mdp.match(mdpformat)) {
        alert("mdp non conforme");
        return false;
    }
}