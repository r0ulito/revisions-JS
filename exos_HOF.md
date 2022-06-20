# Recréez la fonction Array.prototype.map() avec la signature suivante => 'myMap(arr, func)' elle doit donc prendre un array et une fonction en paramètre

Que faire dedans ?

1. Créer un array vide newArr (par exemple)
2. Boucler sur l'array passé en argument à myMap
3. Appeller `func` sur chaque element de `arr`
4. Push le résultat de `func` dans newArr
5. Return newArr après la fin de la boucle

Vous ne devez utiliser ni forEach ni aucune fonction provenant de Array.prototype (Donc toute les fonction qui s'écrivent array.func() sont interdites, sauf push, bien évidemment)

# Recréez la fonction Array.prototype.filter() avec la signature suivante => 'myFilter(arr, func)' elle doit donc prendre un array et une fonction en paramètre

Que faire dedans ?

1. Créer un array vide filteredArr (par exemple)
2. Boucler sur l'array passé en argument à myFilter
3. Appeller `func` sur chaque element de `arr`
4. Push le résultat de `func` dans filteredArr SI le retour de `func` == true
5. Return filteredArr après la fin de la boucle

Vous ne devez utiliser ni forEach ni aucune fonction provenant de Array.prototype (Donc toute les fonction qui s'écrivent array.func() sont interdites)

# Recréez la fonction Array.prototype.reduce() avec la signature suivante => 'myReduce(arr, func, initialValue)' elle doit donc prendre un array, une fonction et la valeur initiale en paramètre

Que faire dedans ?

1. Initialiser l'accumulateur avec 0 ou `initialValue`
2. Boucler sur l'array passé en argument à myReduce
3. Appeller `func` avec comme paramètre l'élement courant et l'accumulateur
4. Return l'accumulateur après la fin de la boucle

Vous ne devez utiliser ni forEach ni aucune fonction provenant de Array.prototype (Donc toute les fonction qui s'écrivent array.func() sont interdites)
