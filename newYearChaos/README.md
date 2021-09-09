# New Year Chaos

É dia de ano novo e as pessoas estão na fila para o passeio na montanha-russa do País das Maravilhas. Cada pessoa usa um adesivo indicando sua posição inicial na fila de 1 para n . Qualquer pessoa pode subornar a pessoa diretamente à sua frente para trocar de posição, mas ela ainda usa seu adesivo original. Uma pessoa pode subornar no máximo duas outras .

Determine o número mínimo de subornos que ocorreram para chegar a um determinado pedido de fila. Imprima o número de subornos ou, se alguém tiver subornado mais de duas pessoas, imprima Too chaotic.

Exemplo

q=[1,2,3,5,4,6,7,8]

Se pessoa 5 suborno pessoa 4, a fila ficará assim: . Apenas 1 suborno é necessário. Imprimir 1.

q=[4,1,2,3]

Pessoa 4 teve que subornar 3 pessoas para chegar à posição atual. Imprimir Too chaotic.

Descrição da função

Complete a função minimumBribes no editor abaixo.

minimumBribes tem o (s) seguinte (s) parâmetro (s):

int q [n] : as posições das pessoas depois de todos os subornos
Devoluções

Nenhum valor é retornado. Imprima o número mínimo de subornos necessários ou Too chaoticse alguém subornou mais do que 2 pessoas.
Formato de entrada

A primeira linha contém um inteiro t, o número de casos de teste.

Cada um dos próximos t pares de linhas são os seguintes:
- A primeira linha contém um número inteiro t, o número de pessoas na fila
- A segunda linha tem n inteiros separados por espaço que descrevem o estado final da fila.

 cont = 0;
    for (let i = q.length -1 ; i >= 0; i--){
        console.log( 'i normal '+i);
        if (q[i] > i+1){
            if(q[i]-(i+1) >= 3){
                return "Too chaotic";
            }
            console.log('cont: '+ cont)
        }
    }
        return cont;