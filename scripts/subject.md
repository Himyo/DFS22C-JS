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

## typeCheckV1
> Créez une fonction `typeCheckV1` qui va prendre en entrer deux parametres `value` et `type`. Retourner `true` si les types correspondent, `false` sinon.
```js
function typeCheckV1(value, type) {
    // TODO
}
console.log(typeCheckV1(1, 'number')); // true
console.log(typeCheckV1(undefined, 'undefined')); // true
console.log(typeCheckV1(null, 'object')); // true
```

## typeCheckV2
> Créez une fonction `typeCheckV2` qui va prendre en entrer deux parametres `value` et `config`.`config` va être un object de conf a verifier de tel que:
```json
{
    "type": String // Le type de value,
    "value": ... // la valeur de value,
    "enum": Array // les valuers possible de value
}
```
```js
function typeCheckV2(value, type) {
    // TODO
}
console.log(type_check_v2({prop1:1}, {type:"object"})); //true
console.log(type_check_v2("foo", {type:"string", value:"foo"})) //true
console.log(type_check_v2("bar", {type:"string", value:"foo"})) //false
console.log(type_check_v2(3, {enum: ["foo", "bar", 3]})) //true

```

## typeCheck
> Créez une function `typeCheck` qui va pouvoir gérer une conf recursivement, exemple:
```json
{
    type: "object",
    properties: {
        prop1: { type: "number" },
        prop2: { type: "string", enum: ["val1", "val2"] },
        prop3: { type: "object", properties: { prop31: "number"} },   
        prop4: { type: "array", properties: [ "boolean"] }
    }
}
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