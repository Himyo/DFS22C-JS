
window.addEventListener('DOMContentLoaded', () => {
    function validateForm(form) {
        const { nom, prenom, mail, tel, mdp } = form;
        // const nom = form.nom

        validateName(nom);
        validateName(prenom);
        validateEmail(mail);
        validateTel(tel);
        validateMdp(mdp);
    }

    function validateName(nom) {
        if(nom.value === "") {
            alert("nom ou prénom pas remplie");
            return false;
        }
        console.log(nom.name, nom.value)
    }

    function validateEmail(mail) {
        const mailformat = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
        if(!mail.value.match(mailformat)) {
            alert("mail invalide");
            return false;
        }
        console.log(mail.name, mail.value)
    }

    function validateTel(tel) {
        const telformat = /^\d+$/;
        if(tel.value.toString().length !== 10 || !tel.value.match(telformat)) {
            alert("téléphone non conforme");
            return false;
        }
        console.log(tel.name, tel.value)
    }

    function validateMdp(mdp) {
        const mdpformat = /[0-9A-Za-z.@]+:[0-z]+/g;
        if(mdp.value.toString().length > 8 && !mdp.match(mdpformat)) {
            alert("mdp non conforme");
            return false;
        }
        console.log(mdp.name, mdp.value)
    }

    document.querySelector('button').addEventListener('click', () => {
        const form = document.forms['form'];
        validateForm(form);
    });
});