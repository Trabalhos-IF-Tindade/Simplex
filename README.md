# Algoritmo Simplex

Este projeto implementa o algoritmo Simplex em JavaScript para resolver problemas de Programação Linear (PL). O algoritmo Simplex é uma técnica usada para encontrar a solução ótima de um problema de otimização linear, onde tanto a função objetivo quanto as restrições são representadas por equações lineares.

## Descrição

O código executa o algoritmo Simplex de forma recursiva, com o objetivo de maximizar uma função `Z`. A solução envolve o uso de variáveis básicas e não básicas, a escolha de elementos pivô e a atualização da tabela Simplex até que a solução ótima seja encontrada. O código segue o seguinte fluxo de execução:

1. **Escolha da Coluna Pivô**: Seleciona a variável que mais melhora o valor de `Z`, analisando a linha da função objetivo.
2. **Escolha da Linha Pivô**: Determina a restrição que mais limita o aumento da variável da coluna pivô.
3. **Atualização da Linha Pivô**: Realiza operações para normalizar a linha pivô.
4. **Atualização das Demais Linhas**: Atualiza todas as outras linhas com base na nova linha pivô para garantir que a matriz continue representando um sistema viável.
5. **Verificação da Solução Ótima**: Repete o processo até que não seja mais possível melhorar o valor da função objetivo `Z`.

## Estrutura do Projeto

- **coeficientes**: Matriz que representa a tabela do Simplex com os coeficientes das variáveis de decisão e as folgas (variáveis artificiais). A última coluna contém os valores do lado direito das restrições (valores b).
- **variaveis**: Lista com os nomes das variáveis de decisão e as variáveis de folga.
- **varBasica**: Lista que rastreia quais variáveis estão na base em cada iteração do algoritmo.
- **Funções principais**:
  - `simplex`: Função recursiva que realiza o processo completo do Simplex.
  - `encontrarColunaPivo`: Encontra a coluna pivô na função objetivo.
  - `encontrarLinhaPivo`: Encontra a linha pivô utilizando a razão mais restritiva.
  - `atualizarLinhaPivo`: Atualiza a linha pivô, dividindo-a pelo elemento pivô.
  - `atualizarLinhasRestantes`: Atualiza as outras linhas da tabela após a modificação da linha pivô.

## Instalação e Execução

Este projeto não requer bibliotecas externas e pode ser executado diretamente em qualquer ambiente JavaScript (como Node.js ou no console de um navegador). Siga as instruções abaixo para executá-lo:

1. Clone ou baixe o repositório.
2. Abra o arquivo `.js` no seu ambiente JavaScript.
3. Execute o código diretamente.

### Exemplo de Execução

A tabela de coeficientes fornecida como entrada para o algoritmo é:

```
[[1, -3, -2, 0, 0, 0, 0],
 [0, 2,  1, 1, 0, 0, 100],
 [0, 1,  1, 0, 1, 0, 80],
 [0, 1,  0, 0, 0, 1, 40]]
```

As variáveis básicas iniciais são `['z', 'f1', 'f2', 'f3']`, e as variáveis não básicas são `['z', 'x1', 'x2', 'f1', 'f2', 'f3']`.

O algoritmo irá iterar sobre esta tabela, realizando operações na tabela Simplex até que a solução ótima seja encontrada.

## Como Funciona

1. **Entrada**: O algoritmo recebe a matriz de coeficientes que representa o sistema de equações lineares da função objetivo e das restrições.
2. **Processamento**: O algoritmo itera sobre as variáveis, escolhendo pivôs e atualizando a tabela Simplex.
3. **Saída**: Quando uma solução ótima é encontrada, o valor de `Z` e as variáveis básicas com seus respectivos valores são exibidos no console.

## Exemplo de Saída

```
┌─────────┬────┬──────┬─────┬──────┬──────┬──────┬─────┐
│ (index) │ 0  │  1   │  2  │  3   │  4   │  5   │  6  │
├─────────┼────┼──────┼─────┼──────┼──────┼──────┼─────┤
│    0    │ 1  │ -3   │ -2  │  0   │  0   │  0   │  0  │
│    1    │ 0  │  2   │  1  │  1   │  0   │  0   │ 100 │
│    2    │ 0  │  1   │  1  │  0   │  1   │  0   │ 80  │
│    3    │ 0  │  1   │  0  │  0   │  0   │  1   │ 40  │
└─────────┴────┴──────┴─────┴──────┴──────┴──────┴─────┘
Variáveis Básicas: ['z', 'f1', 'f2', 'f3']
Z = 160 Para:
f1 = 0
f2 = 0
f3 = 40
```

## Considerações Finais

Este projeto é uma implementação educacional do algoritmo Simplex e pode ser estendido para incluir mais funcionalidades, como controle de tolerâncias para coeficientes, soluções degeneradas, e cenários de maximização/minimização de funções com mais restrições.

### Sugestões de Melhoria:
- Implementar verificações de viabilidade e otimalidade para cenários de múltiplas soluções ou soluções degeneradas.
- Permitir a entrada de problemas de maximização/minimização via interface gráfica ou arquivos de entrada.

### Referências:
- [Algoritmo Simplex - Wikipédia](https://pt.wikipedia.org/wiki/Algoritmo_simplex)
- [Programação Linear](https://www.ime.usp.br/~coelho/otimizacao/aulas/simplex.html)

---

Luís Felipe Marques Tomé
João Carlos Costa Carvalho
Gabriel Sateles