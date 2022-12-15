"use strict";
exports.__esModule = true;
var readline_sync_1 = require("readline-sync");
var Personagem = /** @class */ (function () {
    function Personagem(nome, vida, energia, ataque, defesa) {
        this.nome = nome;
        this.vida = vida;
        this.energia = energia;
        this.ataque = ataque;
        this.defesa = defesa;
    }
    return Personagem;
}());
var pikachu = new Personagem('Pikachu', 100, 100, 80, 30);
var option = 0;
while (option !== 9) {
    console.log('+========= Pokemon =========+');
    console.log('|1. Treinar ataque          |');
    console.log('|2. Treinar defesa          |');
    console.log('|3. Descansar               |');
    console.log('|4. Imprimir resultado      |');
    console.log('|9. Sair                    |');
    console.log('+===========================+');
    option = +(0, readline_sync_1.question)('Escolha sabiamente:   ');
    var validate = pikachu.energia <= 10 ? false : true;
    var newSkill = (Math.floor(Math.random() * 5));
    var tiredness = function (value) { return (Math.floor(Math.random() * value)); };

    switch (option) {
        case 1:
            if (validate) {
                pikachu.ataque += newSkill;
                pikachu.energia -= tiredness(5);
            }
            console.log('novo ataque = ', pikachu.ataque);
            break;
        case 2:
            if (validate) {
                pikachu.defesa += newSkill;
                pikachu.energia -= tiredness(5);
            }
            console.log('novo defesa =', pikachu.defesa);
            break;
        case 3:
            pikachu.energia += tiredness(30);
            console.log('se sentindo revigorado!', pikachu.energia);
            break;
        case 4:
            console.log(pikachu);
            break;
        default:
            break;
    }
}
