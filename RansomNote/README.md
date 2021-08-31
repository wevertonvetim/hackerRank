# Ranson Node

Harold é um sequestrador que escreveu uma nota de resgate, mas agora ele está preocupado que isso seja rastreado até ele por meio de sua caligrafia. Ele encontrou uma revista e quer saber se pode cortar palavras inteiras dela e usá-las para criar uma réplica indetectável de sua nota de resgate. As palavras em sua nota diferenciam maiúsculas de minúsculas e ele deve usar apenas palavras inteiras disponíveis na revista. Ele não pode usar substrings ou concatenação para criar as palavras de que precisa.

Dadas as palavras na revista e as palavras na nota de resgate, imprima Yesse ele pode replicar sua nota de resgate exatamente usando palavras inteiras da revista; caso contrário, imprima No.

Exemplo
 magazine = "ataque ao amanhecer"  note = "Ataque ao amanhecer"

A revista tem todas as palavras certas, mas há uma incompatibilidade de maiúsculas e minúsculas. A resposta é No.

Descrição da função

Conclua a função checkMagazine no editor abaixo. Deve imprimir Yes se a nota pode ser formada usando a revista, ou NO.

checkMagazine tem os seguintes parâmetros:

revista string [m]: as palavras na revista
nota de corda [n]: as palavras na nota de resgate

Impressões

string: qualquer Yes um ou No, nenhum valor de retorno é esperado
Formato de entrada

A primeira linha contém dois inteiros separados por espaço,m e n, o número de palavras no magazine e a note, respectivamente.

A segunda linha contém m strings separadas por espaço, cada magazine[i].
A terceira linha contém n strings separadas por espaço, cada note[i].