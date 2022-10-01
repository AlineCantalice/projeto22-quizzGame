import { prisma } from "../src/config/database";

async function main() {
    
    await prisma.question.createMany({
        data: [
          { question: 'Quantos planetas Terra cabem dentro do Sol?' }, 
          { question: 'Em que lugar vivem mais cangurus do que pessoas?' },
          { question: 'Quantos olhos a maior parte das aranhas têm?' },
          { question: 'O que mede a Escala Mercalli?' },
          { question: 'Qual das alternativas contém apenas nomes de rios?' },
          { question: 'Quanto mede uma girafa?' },
          { question: 'Qual a ciência que estuda a atmosfera da Terra e a climatologia?' },
          { question: 'Quantos braços tem um polvo?' },
          { question: 'Qual das alternativas contém apenas animais cujos esqueletos são externos?' },
          { question: 'Qual das alternativas traz apenas nomes de grandes inventores?' },
          { question: 'Indique quais as respectivas invenções dos inventores Alexander Graham Bell e Galileu Galilei.' },
          { question: 'Nesses pares, ambos são mamíferos:' },
          { question: 'Quanto tempo o vidro demora para se decompor?' },
          { question: 'De que são constituídos os diamantes?' },
          { question: 'Em que ordem aparecem as cores do arco-íris sempre?' },
          { question: 'Qual dessas aves não voa?' },
          { question: 'A quem foi atribuído pela primeira vez o Prêmio Nobel da Paz?' },
          { question: 'O que é um Papiloscopista?' },
          { question: 'Qual é respectivamente o animal terrestre mais lento e o mais veloz?' },
          { question: 'Método de seleção em que predomina o mérito. Essa é a definição de qual conceito da Sociologia?' },
          { question: 'O que é Ortorexia?'},
          { question: 'Qual desses autores brasileiros escreveu O Guarani e O Gaúcho?'},
          { question: 'Qual o significado da expressão “calcanhar de Aquiles”?'},
          { question: 'O etanol é produzido através de qual fonte de energia?'},
          { question: 'Qual destas, apesar do seu nome, não é considerada um tipo de força?'},
          { question: 'Qual desses não é um instrumento meteorológico?'},
          { question: 'Este é um exemplo de palíndromo:'},
          { question: 'Homem Vitruviano é um desenho de qual artista famoso?'},
          { question: 'Em qual das alternativas constam apenas maravilhas do mundo?'},
          { question: 'Palavra “paz” soletrada através do alfabeto fonético da Otan:'},
          { question: 'O Dia do Fico é anualmente celebrado em que data?'},
          { question: 'Listras azuis e brancas intercaladas e um sol no canto superior esquerdo caracterizam a bandeira de qual país da América do Sul?'},
          { question: 'Complete a frase: ___ ao vencedor!'},
          { question: 'As cantigas de Escárnio e Maldizer pertencem a qual escola literária?'},
          { question: 'Quantos dias, aproximadamente, a Lua demora para dar uma volta à Terra?'},
          { question: 'O português é a língua oficial nesses três países:'},
          { question: 'Qual a unidade que mede a intensidade do som?'},
          { question: 'Em que país nasceu o Conde Drácula?'},
          { question: 'Que tipo de tempestade é um haboob?'},
          { question: 'Que capital asiática tem uma Cidade Imperial e uma Cidade Proibida?'},
          { question: 'Que autor da antiguidade clássica escreveu As Bacantes?'},
          { question: 'Que país foi dividido em 1949?'},
          { question: 'Que povo foi o primeiro a utilizar a bússola?'},
          { question: 'Qual era o deus romano do amor?'},
          { question: 'Que personagem da mitologia grega era metade homem metade cavalo?'},
          { question: 'Segundo que meridiano acertamos os nossos relógios?'},
          { question: 'Como se chama o passarinho amarelo amigo de Snoopy?'},
          { question: 'Que número se repete 3 vezes quando se menciona a altura em metros, do Monte Everest?'}
        ],
        skipDuplicates: true
      });

      await prisma.answer.createMany({
        data: [
          // Answers of the question 1
          { answer: 'Um milhão', questionId: 1, correct: true },
          { answer: 'Dois milhões', questionId: 1, correct: false },
          { answer: 'Seiscentos', questionId: 1, correct: false },
          { answer: 'Cento e cinquenta', questionId: 1, correct: false },

          // Answers of the question 2
          { answer: 'Austrália', questionId: 2, correct: true },
          { answer: 'Nova Zelândia', questionId: 2, correct: false },
          { answer: 'Indonésia', questionId: 2, correct: false },
          { answer: 'África do Sul', questionId: 2, correct: false },

          // Answers of the question 3
          { answer: 'Oito', questionId: 3, correct: true },
          { answer: 'Seis', questionId: 3, correct: false },
          { answer: 'Quatro', questionId: 3, correct: false },
          { answer: 'Dois', questionId: 3, correct: false },

          // Answers of the question 4
          { answer: 'A intensidade sísmica de acordo com os danos provocados', questionId: 4, correct: true },
          { answer: 'A resistência dos minerais', questionId: 4, correct: false },
          { answer: 'A magnitude de um terremoto', questionId: 4, correct: false },
          { answer: 'A intensidade dos ventos', questionId: 4, correct: false },

          // Answers of the question 5
          { answer: 'Nilo, Amazonas, Mississipi', questionId: 5, correct: true },
          { answer: 'Tocantins, Bering, Ganges', questionId: 5, correct: false },
          { answer: 'São Francisco, Douro, Antártico', questionId: 5, correct: false },
          { answer: 'Danúbio, Jordão, Morto', questionId: 5, correct: false },

          // Answers of the question 6
          { answer: 'Entre 4,8 e 5,5 metros', questionId: 6, correct: true },
          { answer: 'Entre 5 e 6 metros', questionId: 6, correct: false },
          { answer: '4 metros', questionId: 6, correct: false },
          { answer: '2,5 metros', questionId: 6, correct: false },

          // Answers of the question 7
          { answer: 'Meteorologia', questionId: 7, correct: true },
          { answer: 'Astronomia', questionId: 7, correct: false },
          { answer: 'Metereologia', questionId: 7, correct: false },
          { answer: 'Horologia', questionId: 7, correct: false },

          // Answers of the question 8
          { answer: 'Oito', questionId: 8, correct: true },
          { answer: 'Dez', questionId: 8, correct: false },
          { answer: 'Seis', questionId: 8, correct: false },
          { answer: 'Sete', questionId: 8, correct: false },

          // Answers of the question 9
          { answer: 'Caracóis, caranguejos e lagostas', questionId: 9, correct: true },
          { answer: 'Besouros, peixes e formigas', questionId: 9, correct: false },
          { answer: 'Caracóis, lulas e aranhas', questionId: 9, correct: false },
          { answer: 'Borboletas, caranguejos e peixes', questionId: 9, correct: false },

          // Answers of the question 10
          { answer: 'Alexander Graham Bell, Bartolomeu de Gusmão, Galileu Galilei', questionId: 10, correct: true },
          { answer: 'Stephen Poplawski, Tarsila do Amaral, Amalie Auguste Melitta Bentz', questionId: 10, correct: false },
          { answer: 'Machado de Assis, Oscar Niemeyer e Dmitri Mendeleiev', questionId: 10, correct: false },
          { answer: 'Alfred Nobel, José Bonifácio, Leonardo da Vinci', questionId: 10, correct: false },

          // Answers of the question 11
          { answer: 'Telefone e termômetro', questionId: 11, correct: true },
          { answer: 'Lâmpada e avião', questionId: 11, correct: false },
          { answer: 'Relógio e giroscópio', questionId: 11, correct: false },
          { answer: 'Celular e televisão', questionId: 11, correct: false },

          // Answers of the question 12
          { answer: 'Baleia azul e golfinhos', questionId: 12, correct: true },
          { answer: 'Girafas e tartarugas', questionId: 12, correct: false },
          { answer: 'Macacos e sapos', questionId: 12, correct: false },
          { answer: 'Porcos e pinguins', questionId: 12, correct: false },

          // Answers of the question 13
          { answer: 'tempo indeterminado', questionId: 13, correct: true },
          { answer: '1 milhão de anos', questionId: 13, correct: false },
          { answer: '4000 anos', questionId: 13, correct: false },
          { answer: '1000 anos', questionId: 13, correct: false },

          // Answers of the question 14
          { answer: 'Carbono', questionId: 14, correct: true },
          { answer: 'Ósmio', questionId: 14, correct: false },
          { answer: 'Bóhrio', questionId: 14, correct: false },
          { answer: 'Rênio', questionId: 14, correct: false },

          // Answers of the question 15
          { answer: 'Vermelho, laranja, amarelo, verde, azul, anil (ou índigo) e violeta', questionId: 15, correct: true },
          { answer: 'Vermelho, laranja, violeta, anil (ou índigo), azul, verde e amarelo', questionId: 15, correct: false },
          { answer: 'Amarelo, violeta, laranja, verde, vermelho, anil (ou índigo) e azul', questionId: 15, correct: false },
          { answer: 'Amarelo, laranja, vermelho, azul, anil (ou índigo), verde e violeta', questionId: 15, correct: false },

          // Answers of the question 16
          { answer: 'Pinguim', questionId: 16, correct: true },
          { answer: 'Cegonha', questionId: 16, correct: false },
          { answer: 'Pato', questionId: 16, correct: false },
          { answer: 'Corvo', questionId: 16, correct: false },

          // Answers of the question 17
          { answer: 'Frédéric Passy e Henry Dunant', questionId: 17, correct: true },
          { answer: 'Henri Becquerel e Marie Curie', questionId: 17, correct: false },
          { answer: 'Frédéric Passy', questionId: 17, correct: false },
          { answer: 'Martin Luther King Jr.', questionId: 17, correct: false },

          // Answers of the question 18
          { answer: 'Profissional especializado em identificação humana', questionId: 18, correct: true },
          { answer: 'Indivíduo responsável por crianças órfãs', questionId: 18, correct: false },
          { answer: 'Pessoa que tem uma pequena saliência cônica na língua', questionId: 18, correct: false },
          { answer: 'Indivíduo que se dedica ao estudo de papiros', questionId: 18, correct: false },

          // Answers of the question 19
          { answer: 'Bicho-preguiça e guepardo', questionId: 19, correct: true },
          { answer: 'Tartaruga e leão', questionId: 19, correct: false },
          { answer: 'Coala e cavalo', questionId: 19, correct: false },
          { answer: 'Caracol e tubarão', questionId: 19, correct: false },

          // Answers of the question 20
          { answer: 'Meritocracia', questionId: 20, correct: true },
          { answer: 'Aristocracia', questionId: 20, correct: false },
          { answer: 'Tirania', questionId: 20, correct: false },
          { answer: 'Fidalguia', questionId: 20, correct: false },

          // Answers of the question 21
          { answer: 'Obsessão pelo consumo de alimentos saudáveis', questionId: 21, correct: true },
          { answer: 'Transtorno alimentar caracterizado pela perda de apetite', questionId: 21, correct: false },
          { answer: 'Preocupação exagerada em ter um corpo elegante', questionId: 21, correct: false },
          { answer: 'Distúrbio alimentar que provoca a ingestão excessiva de alimentos', questionId: 21, correct: false },

          // Answers of the question 22
          { answer: 'José de Alencar', questionId: 22, correct: true },
          { answer: 'Aluísio de Azevedo', questionId: 22, correct: false },
          { answer: 'Gonçalves de Magalhães', questionId: 22, correct: false },
          { answer: 'José de Anchieta', questionId: 22, correct: false },

          // Answers of the question 23
          { answer: 'O ponto mais vulnerável de alguém', questionId: 23, correct: true },
          { answer: 'A característica predominante das pessoas', questionId: 23, correct: false },
          { answer: 'Parte em que as pessoas concentram a sua força', questionId: 23, correct: false },
          { answer: 'Fuga dos problemas', questionId: 23, correct: false },

          // Answers of the question 24
          { answer: 'Biomassa', questionId: 24, correct: true },
          { answer: 'Geotérmica', questionId: 24, correct: false },
          { answer: 'Hidrelétrica', questionId: 24, correct: false },
          { answer: 'Eólica', questionId: 24, correct: false },

          // Answers of the question 25
          { answer: 'Força eletromotriz', questionId: 25, correct: true },
          { answer: 'Força centrípeta', questionId: 25, correct: false },
          { answer: 'Força de atrito', questionId: 25, correct: false },
          { answer: 'Força normal', questionId: 25, correct: false },

          // Answers of the question 26
          { answer: 'Etilômetro', questionId: 26, correct: true },
          { answer: 'Barógrafo', questionId: 26, correct: false },
          { answer: 'Termômetro', questionId: 26, correct: false },
          { answer: 'Anemômetro', questionId: 26, correct: false },

          // Answers of the question 27
          { answer: 'Roma é amor.', questionId: 27, correct: true },
          { answer: 'O rato roeu a roupa do rei de Roma.', questionId: 27, correct: false },
          { answer: 'Quem tem boca vai à Roma.', questionId: 27, correct: false },
          { answer: 'O que é, o que é? Feito para andar e não anda?', questionId: 27, correct: false },

          // Answers of the question 28
          { answer: 'Leonardo da Vinci', questionId: 28, correct: true },
          { answer: 'Michelangelo', questionId: 28, correct: false },
          { answer: 'Donatello', questionId: 28, correct: false },
          { answer: 'Van Gogh', questionId: 28, correct: false },

          // Answers of the question 29
          { answer: 'Pirâmides do Egito, Coliseu de Roma, Cristo Redentor', questionId: 29, correct: true },
          { answer: 'Muralha da China, Taj Mahal, Pirâmide do Sol', questionId: 29, correct: false },
          { answer: 'Torre Eiffel, Machu Picchu, Colosso de Rodes', questionId: 29, correct: false },
          { answer: 'Big Ben, Torre de Pisa, Jardins Suspensos da Babilônia', questionId: 29, correct: false },

          // Answers of the question 30
          { answer: 'Papa - alfa - zulu', questionId: 30, correct: true },
          { answer: 'Paz - Aurélio - zulu', questionId: 30, correct: false },
          { answer: 'Pisces - alfa - zelo', questionId: 30, correct: false },
          { answer: 'Pá - amor - zuuum', questionId: 30, correct: false },

          // Answers of the question 31
          { answer: '9 de janeiro', questionId: 31, correct: true },
          { answer: '19 de novembro', questionId: 31, correct: false },
          { answer: '7 de setembro', questionId: 31, correct: false },
          { answer: '19 de abril', questionId: 31, correct: false },

          // Answers of the question 32
          { answer: 'Uruguai', questionId: 32, correct: true },
          { answer: 'Argentina', questionId: 32, correct: false },
          { answer: 'Namíbia', questionId: 32, correct: false },
          { answer: 'Japão', questionId: 32, correct: false },

          // Answers of the question 33
          { answer: 'Alvíssaras', questionId: 33, correct: true },
          { answer: 'Quimeras', questionId: 33, correct: false },
          { answer: 'Cócoras', questionId: 33, correct: false },
          { answer: 'Oblações', questionId: 33, correct: false },

          // Answers of the question 34
          { answer: 'Trovadorismo', questionId: 34, correct: true },
          { answer: 'Barroco', questionId: 34, correct: false },
          { answer: 'Classicismo', questionId: 34, correct: false },
          { answer: 'Modernismo', questionId: 34, correct: false },

          // Answers of the question 35
          { answer: '28 dias', questionId: 35, correct: true },
          { answer: '31 dias', questionId: 35, correct: false },
          { answer: '1 dia', questionId: 35, correct: false },
          { answer: '15 dias', questionId: 35, correct: false },

          // Answers of the question 36
          { answer: 'Guiné Equatorial, Cabo Verde e Angola', questionId: 36, correct: true },
          { answer: 'Guiné-Bissau, África do Sul e Brasil', questionId: 36, correct: false },
          { answer: 'Macau, Timor-Leste e Moçambique', questionId: 36, correct: false },
          { answer: 'Venezuela, Angola e Portugal', questionId: 36, correct: false },

          // Answers of the question 37
          { answer: 'Decibel', questionId: 37, correct: true },
          { answer: 'Hertz', questionId: 37, correct: false },
          { answer: 'Frequência', questionId: 37, correct: false },
          { answer: 'Compasso', questionId: 37, correct: false },

          // Answers of the question 38
          { answer: 'Transilvânia', questionId: 38, correct: true },
          { answer: 'Polônia', questionId: 38, correct: false },
          { answer: 'Irlanda', questionId: 38, correct: false },
          { answer: 'Escócia', questionId: 38, correct: false },

          // Answers of the question 39
          { answer: 'tempestade de areia', questionId: 39, correct: true },
          { answer: 'tempestade de granizo', questionId: 39, correct: false },
          { answer: 'tempestade de neve', questionId: 39, correct: false },
          { answer: 'tempestade de relâmpagos', questionId: 39, correct: false },

          // Answers of the question 40
          { answer: 'Pequim', questionId: 40, correct: true },
          { answer: 'Nova Delhi', questionId: 40, correct: false },
          { answer: 'Cingapura', questionId: 40, correct: false },
          { answer: 'Seul', questionId: 40, correct: false },

          // Answers of the question 41
          { answer: 'Eurípides', questionId: 41, correct: true },
          { answer: 'Sófocles', questionId: 41, correct: false },
          { answer: 'Homero', questionId: 41, correct: false },
          { answer: 'Plutarco', questionId: 41, correct: false },

          // Answers of the question 42
          { answer: 'Alemanha', questionId: 42, correct: true },
          { answer: 'Bélgica', questionId: 42, correct: false },
          { answer: 'Áustria', questionId: 42, correct: false },
          { answer: 'Dinamarca', questionId: 42, correct: false },

          // Answers of the question 43
          { answer: 'chineses', questionId: 43, correct: true },
          { answer: 'gregos', questionId: 43, correct: false },
          { answer: 'romanos', questionId: 43, correct: false },
          { answer: 'mesopotâmicos', questionId: 43, correct: false },

          // Answers of the question 44
          { answer: 'Cupido', questionId: 44, correct: true },
          { answer: 'Apolo', questionId: 44, correct: false },
          { answer: 'Baco', questionId: 44, correct: false },
          { answer: 'Eros', questionId: 44, correct: false },

          // Answers of the question 45
          { answer: 'Centauro', questionId: 45, correct: true },
          { answer: 'Sátiro', questionId: 45, correct: false },
          { answer: 'Górgona', questionId: 45, correct: false },
          { answer: 'Tártaro', questionId: 45, correct: false },

          // Answers of the question 46
          { answer: 'Meridiano de Greenwich', questionId: 46, correct: true },
          { answer: 'Meridiano do Equador', questionId: 46, correct: false },
          { answer: 'Meridiano Central', questionId: 46, correct: false },
          { answer: 'Meridiano Internacional', questionId: 46, correct: false },

          // Answers of the question 47
          { answer: 'Woodstock', questionId: 47, correct: true },
          { answer: 'Magoo', questionId: 47, correct: false },
          { answer: 'Wile', questionId: 47, correct: false },
          { answer: 'Bobby', questionId: 47, correct: false },

          // Answers of the question 48
          { answer: '8', questionId: 48, correct: true },
          { answer: '7', questionId: 48, correct: false },
          { answer: '6', questionId: 48, correct: false },
          { answer: '5', questionId: 48, correct: false },
        ],
        skipDuplicates: true
      });
}

main()
  .catch(e => {
    console.log(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });