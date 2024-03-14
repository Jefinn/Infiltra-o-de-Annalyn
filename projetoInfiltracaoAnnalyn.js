//Variáveis Globais
const cavaleiroSoneca = true
const arqueiroAcordado = false
const prisioneiroAcordado = true

console.log('Seja Bem-vindo ao jogo');

console.log('\nInfiltração de Annalyn'.toUpperCase());
console.log('Ajude Annalyn encontra sua amiga perdida com seu fiél cão');

console.log('\nIntrodução');

console.log('Annalyn, uma garota corajosa com um cachorro de estimação feroz e leal.')
console.log('Infelizmente, ocorre um desastre, pois sua melhor amiga foi sequestrada enquanto procurava frutas na floresta.')
console.log('Annalyn tentará encontrar e libertar sua melhor amiga, opcionalmente levando seu cachorro com ela nesta missão.')

console.log('\nDepois de algum tempo seguindo a trilha de sua melhor amiga, ela encontra o acampamento onde sua melhor amiga está presa.')
console.log('Acontece que existem dois sequestradores: um cavaleiro poderoso e um arqueiro astuto.')

//Menu de opções
console.log('\nEscolha uma opção para poder salvar sua amiga...')

linhaHorizontal(30)
console.log('1. Ataque Rápido');
console.log('2. Espião');
console.log('3. Sair do Jogo')
linhaHorizontal(30)

const readlineSync = require('readline-sync');
let escolha = readlineSync.question('\nInsira numero: ');

if (parseInt(escolha) == 1) {
    ataqueRapido()
};
if (parseInt(escolha) == 2) {
    espiao()
};
if (parseInt(escolha) == 3) {
    console.log('Saindo do jogo...')
    return
};

while (escolha > 3) {
    console.log('\nEscolha somente as opções apresentada!!!'.toUpperCase())

    console.log('\nEscolha uma opção para poder salvar sua amiga...')

    //Menu de opções
    linhaHorizontal(30)
    console.log('1. Ataque Rápido');
    console.log('2. Espião');
    console.log('3. Sair do Jogo')
    linhaHorizontal(30)

    const readlineSync = require('readline-sync');
    let escolha = readlineSync.question('\nInsira numero: ');

    if (parseInt(escolha) == 1) {
        ataqueRapido()
    };
    if (parseInt(escolha) == 2) {
        espiao()
    };
    if (parseInt(escolha) == 3) {
        console.log('Saindo do jogo...')
        break
    };
};


//Funções da opção de estratégia que usuário pode escolher
function ataqueRapido() {
    if (cavaleiroSoneca) {
        console.log('\nO cavaleiro estava dormindo e não te viu passando');
        console.log('Fique agora atento ao ' + 'arqueiro'.toUpperCase());

        //Menu de opções
        console.log('\nEscolha uma opção para poder salvar sua amiga...')
        linhaHorizontal(30)
        console.log('1. Sinalizar prisioneiro');
        console.log('2. Continuar espionado');
        console.log('3. Sair do Jogo')
        linhaHorizontal(30)

        const readlineSync = require('readline-sync');
        let escolha = readlineSync.question('\nInsira numero: ');

        if (parseInt(escolha) == 1) {
            sinalizaPrisioneiro()
        };
        if (parseInt(escolha) == 2) {
            espiao()
        };
        if (parseInt(escolha) == 3) {
            console.log('Saindo do jogo...')
            return
        };

        while (escolha > 3) {
            console.log('\nEscolha somente as opções apresentada!!!'.toUpperCase())

            console.log('\nEscolha uma opção para poder salvar sua amiga...')

            //Menu de opções
            linhaHorizontal(30)
            console.log('1. Sinalizar prisioneiro');
            console.log('2. Continuar espionado');
            console.log('3. Sair do Jogo')
            linhaHorizontal(30)

            const readlineSync = require('readline-sync');
            let escolha = readlineSync.question('\nInsira numero: ');

            if (parseInt(escolha) == 1) {
                sinalizaPrisioneiro()
            };
            if (parseInt(escolha) == 2) {
                espiao()
            };
            if (parseInt(escolha) == 3) {
                console.log('Saindo do jogo...')
                break
            };
        };

    } else {
        console.log('\nSe ferrou')
        console.log('Cavaleiro e Arqueiro estão acordado. Você foi capturado')
        console.log('\nFim de jogo'.toUpperCase())
    }
};

//Função Espião
function espiao() {
    if (cavaleiroSoneca === true && arqueiroAcordado === true) {
        console.log('Está propicio para espionagem!!!')
        console.log('Cavaleiro está dormindo, mas arqueiro está acordado')

        //Menu de opções
        console.log('\nEscolha uma opção para poder salvar sua amiga...')

        linhaHorizontal(30)
        console.log('1. Sinalizar prisioneiro');
        console.log('2. Continuar espionado');
        console.log('3. Sair do Jogo')
        linhaHorizontal(30)

        const readlineSync = require('readline-sync');
        let escolha = readlineSync.question('\nInsira numero: ');

        if (parseInt(escolha) == 1) {
            sinalizaPrisioneiro()
        }
        if (parseInt(escolha) == 2) {
            espiao()
        };
        if (parseInt(escolha) == 3) {
            console.log('Saindo do jogo...')
            return
        };

        while (escolha > 3) {
            console.log('\nEscolha somente as opções apresentada!!!'.toUpperCase())

            console.log('\nEscolha uma opção para poder salvar sua amiga...')

            //Menu de opções
            linhaHorizontal(30)
            console.log('1. Sinalizar prisioneiro');
            console.log('2. Continuar espionado');
            console.log('3. Sair do Jogo')
            linhaHorizontal(30)

            const readlineSync = require('readline-sync');
            let escolha = readlineSync.question('\nInsira numero: ');

            if (parseInt(escolha) == 1) {
                sinalizaPrisioneiro()
            }
            if (parseInt(escolha) == 2) {
                espiao()
            };
            if (parseInt(escolha) == 3) {
                console.log('Saindo do jogo...')
                break
            };
        };

    } else {
        console.log('Os dois estão dormindo')
        console.log('Está perdendo tempo observando!!!')
    };
};

//Funcção Sinaliza para Prisioneiro 
function sinalizaPrisioneiro() {
    if (prisioneiroAcordado == true && arqueiroAcordado == false) {
        console.log('\nCom prisioneiro acordado você usou sons de passaro para avisar ele')
        console.log('Como arqueiro estava dormindo, se deu bem!')
        console.log('pois os arqueiros são treinados em sinalização de pássaros para que possam interceptar a mensagem.')

        //Chamando a função 
        prisioneiroLivre()

    } else {
        console.log('\nVocê arranjou um grande ' + 'problema'.toUpperCase())
        console.log('\nArqueiro estava acordado!!!'.toUpperCase())
        console.log('\nOs arqueiros são treinados em sinalização de pássaros para que possam interceptar a mensagem.')
        console.log('Você foi capturado')
        console.log('\nFim de jogo!!!'.toUpperCase())
    };
};

//Função Liberta Prisioneiro 
function prisioneiroLivre() {
    if (arqueiroAcordado == true) {
        console.log('Pessíma escolha!!!')
        console.log('Arqueiro está acordado')
        console.log('\nFim de jogo!!!'.toUpperCase())
    }

    if (arqueiroAcordado == false) {
        console.log('\nGrande oportunidade')
        console.log('Você está com seu cachorro ?')

        console.log('1. Sim');
        console.log('2. Não');

        const readlineSync = require('readline-sync');
        let escolha = readlineSync.question('\nInsira um numero: ');

        if (parseInt(escolha) == 1) {
            console.log('\nParabéns, com seu cachorro você consegui resgatar sua amiga')
            console.log('O cavaleiro tem medo de cachorro e o arqueiro não terá tempo de se preparar antes que Annalyn e o prisioneiro possam escapar.')
            console.log('\nFim de Jogo'.toUpperCase())
        };

        if (parseInt(escolha) == 2) {
            console.log('Sem seu cachorro, vai ser dificil salvar sua amiga')

            console.log('\nQuer tentar a sorte ?')
            console.log('1. Sim');
            console.log('2. Não');

            const readlineSync = require('readline-sync');
            let escolha = readlineSync.question('\nInsira um numero: ');

            if (parseInt(escolha) == 1) {
                if (prisioneiroAcordado == true && arqueiroAcordado == false && cavaleiroSoneca == true) {
                    console.log('\nParabéns, você conseguiu salvar sua amiga')
                    console.log('Com os cochilo do arqueiro e cavalheiro')
                    console.log('\nFim de Jogo'.toUpperCase())

                } else {
                    console.log('\nO cavalheiro estava acordado')
                    console.log('E viu você tentando salva sua amiga')
                    console.log('\nFim de Jogo'.toUpperCase())
                };
            };
        };
    };
};

// Função para imprimir uma linha horizontal
function linhaHorizontal(width) {
    console.log('-'.repeat(width));
}