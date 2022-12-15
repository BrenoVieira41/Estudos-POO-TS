import { question } from 'readline-sync'

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

let option = 0;

while (option !== 9) {
  console.log('+========= Pokemon =========+');
  console.log('|1. Treinar ataque          |');
  console.log('|2. Treinar defesa          |');
  console.log('|3. Descansar               |');
  console.log('|4. Imprimir resultado      |');
  console.log('|9. Sair                    |');
  console.log('+===========================+');

  option = +question('Escolha sabiamente:   ');

  const validate = pikachu.energia <= 10 ? false : true;
  const newSkill = (Math.floor(Math.random() * 5));
  const tiredness = (value: number) => (Math.floor(Math.random() * value));

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
      console.log('se sentindo revigorado!');
      break;
    case 4:
      console.log(pikachu);
      break;
    default:
      break;
  }
}
