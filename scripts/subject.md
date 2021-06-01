# Enoncés

## UC First
> Créez une fonction `ucFirst` qui va prendre un parametre `word` et retourner, si c'est une string, `word` avec la premiere lettre en majuscule. Sinon retourner le texte `Merci de mettre une string valable`.
```js
function ucFirst(word) {
    // TODO
}
console.log(ucFirst("word")); // Word
console.log(ucFirst("")); // 
console.log(ucFirst("w")); // W 
console.log(ucFirst(1)); // Merci de mettre une string valable
```

## Capitalize
> Créez une fonction `capitalize` qui va prendre un parametre `sentence` et retourner, si c'est une string, chaque mot dans `sentence` avec la premier lettre en majuscule. Sinon retourner le texte `Merci de mettre une string valable`.
```js
function capitalize(word) {
    // TODO
}
console.log(capitalize("word word another word")); // Word Word Another Word
console.log(capitalize("")); // 
console.log(capitalize("w")); // W
console.log(capitalize("number 1")); // Number 1
console.log(capitalize(1)); // Merci de mettre une string valable
```
## camelCase
> Créez une fonction `camelCase` qui va prendre un parametre `sentence` et retourner, si c'est une string, tout les mots de `sentence` coller et avec la premier lettre en majuscule. Sinon retourner le texte `Merci de mettre une string valable`.
```js
function camelCase(word) {
    // TODO
}
console.log(camelCase("word word another word")); // WordWordAnotherWord
console.log(camelCase("")); // 
console.log(camelCase("w")); // W
console.log(camelCase("number 1")); // Number1
console.log(camelCase(1)); // Merci de mettre une string valable
```
## snake_case
> Créez une fonction `snake_case` qui va prendre un parametre `sentence` et retourner, si c'est une string, tout les mots de `sentence` join par des `_`. Sinon retourner le texte `Merci de mettre une string valable`.
```js
function snake_case(word) {
    // TODO
}
console.log(snake_case("word word another word")); // word_word_another_word
console.log(snake_case("")); // 
console.log(snake_case("w")); // w
console.log(snake_case("number 1")); // number_1
console.log(snake_case(1)); // Merci de mettre une string valable
```
## L33t Sp34k
> Créez une fonction `leet` qui va prendre un parametre `sentence` et retourner, si c'est une string, `sentence` en remplacant les voyelles de tel que `[A=>4, E=>3, I=>1, O=>0 ,U=> (_), Y=>7]`
. Sinon retourner le texte `Merci de mettre une string valable`.
```js
function leet(word) {
    // TODO
}
console.log(leet('BADBADNOTGOOD - "In Your Eyes" (Feat. Charlotte Day Wilson)')); // B4DB4DN0TG00D - "1N 70(_)R 373S" (F34T. CH4RL0TT3 D47 W1LS0N)
console.log(leet("")); // w
console.log(leet(1)); // Merci de mettre une string valable
```
## Prop Access
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