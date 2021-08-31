# Two String

Dadas duas strings, determine se elas compartilham uma substring comum. Uma substring pode ter apenas um caractere.

Exemplo

s1 = "and"
s2 = "art"

Estes compartilham a substring comum .

s1 = "be"
s2 = "cat"

Eles não compartilham uma substring.

Descrição da função

Complete a função twoStrings no editor abaixo.

twoStrings tem o (s) seguinte (s) parâmetro (s):

string s1: uma string
string s2: outra string
Devoluções

string: ou YES ou NO

Formato de entrada

A primeira linha contém um único inteiro p, o número de casos de teste.

Os seguintes p pares de linhas são os seguintes:

A primeira linha contém string s1 .
A segunda linha contém string s2 .

Restrições

s1 e s2 consistem em caracteres no intervalo ascii [az].

1 <= p <= 10
1 <= |s1|,|s2| <= 10^5

Formato de saída

Para cada par de strings, retorne YES ou NO.