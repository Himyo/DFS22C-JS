## Scripts

### PascalCase
> Ecrire une fonction `pascalCase` qui va prendre un parametre `sentence` qui transforme chaque première lettre de chaque mot en majuscule et supprime les espaces. Si `sentence` n'est pas un string retourner le texte `Merci de mettre une string valable`
```js
function pascalCase(sentence) { 
    // TODO 
}
console.log(pascalCase("sentence in pascalCase")) // SentenceInPascalCase
```

### Palindrome
> Créer une fonction `palindrome(word)` qui vérifie si un mot est un palindrome et retourne un `boolean`. Si `word` n'est pas un string  retourner le texte `Merci de mettre une string valable`
```js
function palindrome(word) {
    // TODO
}
console.log(palindrome('kayak')) // true
console.log(palindrome('noname')) // false
console.log(palindrome(1)) //Merci de mettre une string valable
```

## FindLongestWord
> Écrire une fonction `findLongestWord(sentence)` qui permet de trouver le mot le long plus d’une chaîne de caractère
```js
function findLongestWord(sentence) {
    // TODO
}
findLongestWord("Le chemin le plus cours n'est pas toujours le meilleur"); // toujours
```

### Merge
> Créer une méthode `merge` qui prend en paramètres des objets et les fusionnent.
```js
const wu = {
    a: [{ x: 2 }, { y: 4 }],
    b: 1
};
const tang = {
    a: { z: 3 },
    b: [2, 3],
    c: 'foo'
};
const clan = {
    a: { t: 5 },
    c: 'foo'
};
const expectedResult1 = {
    "a": [{ "x": 2 }, { "y": 4}, { "z": 3 }],
    "b": [1, 2, 3],
    "c": "foo"
}
const expectedResult2 = {
    "a": [{"z": 3}, { "t": 5 }],
    "b": [2, 3],
    "c": ["foo", "foo"]
}

console.log(merge(wu, tang) === expectedResult1); 
console.log(merge(tang, clan) === expectedResult2); 
```

### L33t Sp34k
> Créez une fonction `leet` qui va prendre un parametre `sentence` et retourner, si c'est une string, `sentence` en remplacant les voyelles de tel que `[A=>4, E=>3, I=>1, O=>0 ,U=> (_), Y=>7]` **ET EN GARDANT LA CASTE**
. Sinon retourner le texte `Merci de mettre une string valable`.
```js
function leet(word) {
    // TODO
}
console.log(leet('BADBADNOTGOOD - "In Your Eyes" (Feat. Charlotte Day Wilson)')); // B4DB4DN0TG00D - "1n 70(_)r 373s" (F34t. Ch4rl0tt3 D47 W1ls0N)
console.log(leet("")); // w
console.log(leet(1)); // Merci de mettre une string valable
```
### Prop Access
> Créez une fonction `propAccess` qui va prendre en entrer deux parametres `object` et `path`. `path` va representer le chemin jusqu'à une valeur dans l'objet `object` par exemple prenez l'objet `farm` suivant:
```js
const farm = {
    animal: {
        type: { name: 'cow' },
        color: "verte",
    }
}
```
> - Une valeur valide de `path` serai `animal.type.name`. 
> - Une valeur invalide de `path` serai `animal.color.opacity`.\
 Si la valeur de `path` est valide retourner la valeur au bout du chemin. Sinon retourner le text `"<invalidPath> does not exist"` where `<invalidPath>` jusqu'a l'attribut manquant. Si le `path` est vide renvoyer `object`
```js
function propAccess(object, path) {
    // TODO
}
const farm = {
    animal: {
        type: { name: 'cow' },
        color: "verte",
        bonus: {
            sparkly: true,
            3: "No at least 7"
        }
    }
}
console.log(propAccess(farm, "animal.type.name")) // "cow" 
console.log(propAccess(farm, "animal.affiliation.name")) // "animal.affiliation does not exist" 
console.log(propAccess(farm, "animal.bonus.3")) // "No at least 7" 

```

## Automate
> Créez une fonction `automate` qui va prendre en parametre un array d'objet `scripts` chaque objet sera défini de tel que:
```json
{
    "function": Function,
    "toTest": Array,
    "expectedResult": Array
}
```
> Retourner le nom de la fonction, la/les valeurs tester, ainsi que le resultat. Si le resultat est différent de celui attendu afficher le resultat attendu.