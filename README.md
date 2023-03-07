## Recréez la fonction [Array.prototype.map()](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/map) avec la signature suivante => 'myMap(arr, fn)' elle doit donc prendre un array et une fonction en paramètre

Que faire dedans ?

1. Créer un array vide newArr (par exemple)
2. Boucler sur l'array passé en argument à myMap
3. Appeller `fn` sur chaque element de `arr`
4. Push le résultat de `fn` dans newArr
5. Return newArr après la fin de la boucle

🚧 Vous ne pouvez utiliser **QUE** la méthode de tableau `push`. ForEach, map, filter, etc. ne sont pas autorisées. 🚧

<hr>

## Recréez la fonction [Array.prototype.filter()](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/filter) avec la signature suivante => 'myFilter(arr, fn)' elle doit donc prendre un array et une fonction en paramètre

Que faire dedans ?

1. Créer un array vide filteredArr (par exemple)
2. Boucler sur l'array passé en argument à myFilter
3. Appeller `fn` sur chaque element de `arr`
4. Push le résultat de `fn` dans filteredArr SI le retour de `fn` vaut true
5. Return filteredArr après la fin de la boucle

🚧 Vous ne pouvez utiliser **QUE** la méthode de tableau `push`. ForEach, map, filter, etc. ne sont pas autorisées. 🚧

<hr>

## Recréez la fonction [Array.prototype.reduce()](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce) avec la signature suivante => 'myReduce(arr, fn, initialValue)' elle doit donc prendre un array, une fonction et la valeur initiale en paramètres

Que faire dedans ?

1. Initialiser l'accumulateur avec 0 ou `initialValue`
2. Boucler sur l'array passé en argument à myReduce
3. Appeller `fn` avec comme paramètre l'élement courant et l'accumulateur
4. Return l'accumulateur après la fin de la boucle

🚧 Vous ne pouvez utiliser **QUE** la méthode de tableau `push`. ForEach, map, filter, etc. ne sont pas autorisées. 🚧
