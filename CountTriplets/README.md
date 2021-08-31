# Count triplets

Você recebe uma matriz e precisa encontrar o número de tripetos de índices (i,j,k) de modo que os elementos nesses índices estão em progressão geométrica para uma dada razão comum r e i < j < k.

Exemplo
 
arr = [1, 4, 16, 64] r = 4

Existem  [1, 4, 16] e [4, 16, 64]  em índices (0, 1, 2) e (1, 2, 3) . Retornar 2.

Descrição da função

Complete a função countTriplets no editor abaixo.

countTriplets tem o (s) seguinte (s) parâmetro (s):

int arr [n]: uma matriz de inteiros
int r : a proporção comum
Devoluções

int: o número de trigêmeos
Formato de entrada

A primeira linha contém dois inteiros separados por espaço n e r, o tamanho de arr e a proporção comum.
A próxima linha contém n inteiros separados por espaço arr[i].

Restrições

1 <= n <= 10^5
1 <= r <= 10^9
1 <= arr[i] <= 10^9

