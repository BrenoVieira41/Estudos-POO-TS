import prompt from 'prompt-sync';

class Personagem {
  constructor(
    public nome: string,
    public vida: number,
    public energia: number,
    public ataque: number,
    public defesa: number
  ) { }
}

let pikachu = new Personagem('Pikachu', 100, 100, 80, 30);

let teclado = prompt();
let option = 0;

while (option !== 9) {
  console.log('+========= Pokemon =========+');
  console.log('|1. Treinar ataque          |');
  console.log('|2. Treinar defesa          |');
  console.log('|3. Imprimir resultado      |');
  console.log('|9. Sair                    |');
  console.log('+===========================+');

  option = +teclado('Escolha uma ação:   ');

  switch (option) {
    case 1:
      pikachu.ataque += 2;
      console.log('novo ataque = ', pikachu.ataque);
      break;
    case 2:
      pikachu.defesa += 2;
      console.log('novo ataque = ', pikachu.defesa);
      break;
    case 3:
      console.log(pikachu);
      break;
    default:
      break;
  }
}
