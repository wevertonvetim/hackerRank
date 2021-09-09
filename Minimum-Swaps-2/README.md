# Minimun Swaps 2

Você recebe uma matriz não ordenada que consiste em inteiros consecutivos [1, 2, 3, ..., n] sem quaisquer duplicatas. Você tem permissão para trocar quaisquer dois elementos. Encontre o número mínimo de trocas necessárias para classificar a matriz em ordem crescente.

Exemplo

arr[7, 1, 3, 2, 4, 5, 6]

Execute as seguintes etapas:

i   arr                         swap (indices)
0   [7, 1, 3, 2, 4, 5, 6]   swap (0,3)
1   [2, 1, 3, 7, 4, 5, 6]   swap (0,1)
2   [1, 2, 3, 7, 4, 5, 6]   swap (3,4)
3   [1, 2, 3, 4, 7, 5, 6]   swap (4,5)
4   [1, 2, 3, 4, 5, 7, 6]   swap (5,6)
5   [1, 2, 3, 4, 5, 6, 7]

Levou 5 trocas para classificar a matriz.

Descrição da função

Complete a função minimumSwaps no editor abaixo.

minimumSwaps tem o (s) seguinte (s) parâmetro (s):

int arr [n]: uma matriz não ordenada de inteiros
Devoluções

int: o número mínimo de trocas para classificar a matriz
Formato de entrada

A primeira linha contém um inteiro n, o tamanho de arr.
A segunda linha contém inteiros n separados por espaço arr[i] .