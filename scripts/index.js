// UC First
// Met la 1ère lettre en MAJ 
function ucFirst(value) {
    // Vérifie que la value est bien de type string
    if (typeof value === "string") {
        return value.charAt(0).toUpperCase() + value.slice(1); // Transforme le character a la position 0 de value en majuscule et le concatene a la value en retirant tout les characteres avant le 2eme
    }
    return "Merci de mettre une string valable";
}

// Capitalize
// Met la 1ère lettre de chaque mot en MAJ
function capitalize(sentence) {
    // Vérifie que la value est bien de type string
    if (typeof sentence !== "string") {
        return "Merci de mettre une string valable";
    }
    
    return sentence
        .split(" ") // Sépare la phrase en la d´ecoupant au niveau du parametre donner 
        .map(word => ucFirst(word)) // Attention a bien utiliser map et non forEach
        .join(" ");
}
// camelCase
// Capitalize puis colle les mots
function camelCase(sentence) {
    if (typeof sentence !== "string") {
        return "Merci de mettre une string valable";
    } 
    return capitalize(sentence)
        .split(" ")
        .join("");
        
}
