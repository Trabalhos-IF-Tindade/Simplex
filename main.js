let coeficientes =
    [[1, -3, -2, 0, 0, 0, 0],
    [0, 2, 1, 1, 0, 0, 100],
    [0, 1, 1, 0, 1, 0, 80],
    [0, 1, 0, 0, 0, 1, 40]]

let varBasica = ['z', 'f1', 'f2', 'f3']

let variaveis = ['z', 'x1', 'x2', 'f1', 'f2', 'f3']

function simplex(coeficientes, variaveis, varBasica) {
    console.table(coeficientes);
    console.table(varBasica)
    let indexColunaPivo = encontrarColunaPivo(coeficientes);

    if (indexColunaPivo == null) {
        console.log(`Z = ${coeficientes[0][coeficientes[0].length - 1]} Para:`)
        for(let i = 1 ; i < varBasica.length ; i++){
            console.log(`${varBasica[i]} = ${coeficientes[i][coeficientes[0].length - 1]}`)
        }
        return coeficientes;
    }

    let indexLinhaPivo = encontrarLinhaPivo(coeficientes, indexColunaPivo);

    varBasica[indexLinhaPivo] = variaveis[indexColunaPivo]

    coeficientes = atualizarLinhaPivo(coeficientes, indexLinhaPivo, indexColunaPivo);

    coeficientes = atualizarLinhasRestantes(coeficientes, indexLinhaPivo, indexColunaPivo);

    return simplex(coeficientes, variaveis, varBasica);
}

function encontrarColunaPivo(coeficientes) {
    let menor = 0;
    let indexColumn = null;

    for (let i = 0; i < coeficientes[0].length; i++) {
        if (coeficientes[0][i] < menor) {
            menor = coeficientes[0][i];
            indexColumn = i;
        }
    }
    return indexColumn;
}
0
function encontrarLinhaPivo(coeficientes, indexColumn) {
    let menor = Infinity;
    let indexLinha = null;
    let ultimaColuna = coeficientes[0].length - 1;

    for (let i = 1; i < coeficientes.length; i++) {
        let valor = coeficientes[i][ultimaColuna] / coeficientes[i][indexColumn];
        if (valor > 0 && valor < menor) {
            menor = valor;
            indexLinha = i;
        }
    }
    return indexLinha;
}

function atualizarLinhaPivo(coeficientes, indexLinha, indexColumn) {
    let elementoPivo = coeficientes[indexLinha][indexColumn];

    for (let i = 0; i < coeficientes[indexLinha].length; i++) {
        coeficientes[indexLinha][i] = coeficientes[indexLinha][i] / elementoPivo;
    }
    return coeficientes;
}

function atualizarLinhasRestantes(coeficientes, linhaPivo, colunaPivo) {
    let ultimaColuna = coeficientes[0].length;

    for (let linha = 0; linha < coeficientes.length; linha++) {
        if (linha === linhaPivo) {
            continue;
        }

        let multiplicador = coeficientes[linha][colunaPivo];
        for (let coluna = 0; coluna < ultimaColuna; coluna++) {
            coeficientes[linha][coluna] = coeficientes[linha][coluna] - multiplicador * coeficientes[linhaPivo][coluna];
        }
    }
    return coeficientes;
}


simplex(coeficientes, variaveis, varBasica);

