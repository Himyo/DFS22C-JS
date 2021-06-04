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

function leet(sentence) {
    if(typeof sentence === 'string') {
        let result = sentence
            .split('')
            .map(word => {
                switch (word) {
                    case 'A':
                        return 4
                    case 'E':
                        return 3
                    case 'I':
                        return 1
                    case 'O':
                        return 0
                    case 'U':
                        return '_'
                    case 'Y':
                        return 7
                    default:
                        return word
                        break;
                }
            })
            .join("");
        return result;
    }
    return "Merci de mettre une string valable";
}

const leet2 = (str, translator = {"a": "4", "e": "3", "i": "1", "o": "0", "u": "_", "y": "/"}) => { 
    if(typeof str !== "string" || str.length === 0) return str;
    return str
        .split('')
        .reduce((a, c) => 
            { 
                a += (translator.hasOwnProperty(c.toLowerCase())) ? translator[c.toLowerCase()] : c;
                return a;
            }, 
        "");
} 

function leet3(phrase) { 
    const trans = { A: "4", E: "3", I: "1", O: "0", U: "(_)", Y: "7" }; 
    if (typeof phrase !== "string") return ("Merci de mettre une string valide"); 
    return phrase 
        .toUpperCase() 
        .replace(/[a,e,i,o,u,y]/gi, y => trans[y]); 
}

const leet4 = string => {
    const map = {'A': '4', 'E':'3', 'I':'1', 'O':'0', 'U':'(_)', 'Y':'7'};
    const split = string.split('');
    const res = split.map(char => {
        const uppercaseChar = char.toUpperCase();
        return Boolean(map[uppercaseChar]) ? map[uppercaseChar] : char;
    });
    return res.join('');
};

console.log(leet('BADBADNOTGOOD - "In Your Eyes" (Feat. Charlotte Day Wilson)')); // B4DB4DN0TG00D - "1N 70(_)R 373S" (F34T. CH4RL0TT3 D47 W1LS0N)
console.log(leet("")); // w
console.log(leet(1)); // Merci de mettre une string valable