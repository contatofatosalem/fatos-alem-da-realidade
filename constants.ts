import type { Article } from './types';

// Helper to get today's date in the desired format
const getTodaysDateFormatted = () => {
  const months = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
  const today = new Date();
  const day = today.getDate();
  const month = months[today.getMonth()];
  const year = today.getFullYear();
  return `${day} de ${month}, ${year}`;
}

export const mockArticles: Article[] = [
  {
    id: 2,
    title: 'A Guerra de Israel x Irã: A Guerra Que Nunca Acaba',
    excerpt: 'Durante a noite de 13 de agosto de 2025, as sirenes de alerta soaram em Israel. Não eram fogos de artifício, mas o início de um novo capítulo no conflito histórico com o Irã, uma guerra travada nas sombras por décadas.',
    imageUrl: 'https://i.imgur.com/bHBcKJn.jpeg', // Explosion
    category: 'Conflitos Globais',
    author: 'Equipe Fatos',
    date: getTodaysDateFormatted(),
    readTime: 15,
    content: [
      { type: 'paragraph', text: 'Durante a noite de 13 de agosto de 2025, as sirenes de alerta foram acionadas mais uma vez nas principais áreas urbanas de Israel. O céu foi iluminado pela trajetória dos mísseis, explosões e um sentimento generalizado de apreensão. Não era uma celebração, não se tratava de fogos de artifício; era um conflito armado. De um lado, estava Israel, e do outro, o Irã. O mundo mais uma vez testemunhava, com ansiedade, o aumento da violência.'},
      { type: 'paragraph', text: 'Mas, afinal, qual foi a origem disso tudo?'},
      { type: 'paragraph', text: 'O evento que desencadeou essa escalada foi a Operação Leão em Ascensão, que teve início em 13 de junho de 2025. O objetivo de Israel era claro: neutralizar o programa nuclear iraniano e impedir que Irã desenvolvesse armas atômicas. Para alcançar esse fim, Israel lançou uma série de ataques coordenados de grande impacto, atingindo instalações de pesquisa e enriquecimento de urânio, eliminando 20 líderes militares iranianos por meio de drones e mísseis, e realizando ataques cirúrgicos que resultaram na morte de seis cientistas nucleares. O cenário assemelhava-se a uma narrativa de ficção, porém, era a dura realidade.'},
      { type: 'image', src: 'https://i.imgur.com/eDBvpxE.jpeg', caption: 'Visão de um drone durante a "Operação Leão em Ascensão", focada em neutralizar o programa nuclear iraniano.'},
      { type: 'paragraph', text: 'A resposta do Irã não demorou: retaliação com mísseis contra Israel, seguida por novos contra-ataques israelenses. Uma sequência de ações que agora estampa manchetes de jornais, sites e emissoras de televisão ao redor do globo.'},
      { type: 'paragraph', text: 'No entanto, ao analisar esse evento isoladamente, poder-se-ia concluir que Israel foi o provocador inicial. Contudo, a história é mais complexa. Em outubro de 2024, meses antes da Operação Leão em Ascensão, Israel já havia destruído os sistemas de defesa antiaérea iranianos, os quais protegiam as instalações nucleares. Essa ação foi claramente uma preparação para o que estava por vir.'},
      { type: 'paragraph', text: 'Mas por que tal ação foi tomada? Porque, dias antes, o Irã havia lançado 180 mísseis contra Israel.'},
      { type: 'paragraph', text: 'Dessa forma, podemos questionar: o Irã foi o primeiro agressor?'},
      { type: 'paragraph', text: 'Essa também não é uma conclusão precisa. O ataque iraniano foi uma resposta a operações secretas israelenses, incluindo a troca de pagers utilizados por membros do governo iraniano e do Hezbollah por dispositivos explosivos. Esses artefatos, ao serem acionados, resultaram na morte de dezenas de pessoas e feriram milhares, incluindo civis não envolvidos diretamente no conflito.'},
      { type: 'paragraph', text: 'O ciclo de violência persiste. Meses antes, em 2024, o Irã havia lançado 300 drones e mísseis contra Israel como retaliação ao bombardeio da embaixada iraniana em Damasco, na Síria, que causou 16 mortes.'},
      { type: 'paragraph', text: 'Esses eventos representam apenas uma parte do quadro. Em 2023, o Hamas realizou um grande ataque terrorista contra Israel, conhecido como Operação Dilúvio de Al-Aqsa, que resultou em 1.195 mortes, aproximadamente 250 pessoas sequestradas e marcou um capítulo traumático na história da região.'},
      { type: 'paragraph', text: 'O envolvimento do Irã nesse contexto remonta a eventos anteriores. Em 2022, cientistas iranianos, como Ayoub Entezari e Kamran Aghamolaei, foram assassinados sob circunstâncias suspeitas, e em 2020, Mohsen Fakhrizadeh, um proeminente cientista nuclear iraniano, foi morto em um ataque com metralhadora controlada remotamente.'},
      { type: 'paragraph', text: 'Esses exemplos ilustram como Israel e Irã, apesar de não compartilharem fronteiras diretas, têm travado uma guerra por meio de proxies, utilizando atentados, operações clandestinas e ataques indiretos ao longo de décadas.'},
      { type: 'paragraph', text: 'A longa raiz do conflito entre Israel e Irã. Também em 2010, o mundo conheceu o vírus Stuxnet, um dos mais sofisticados e destrutivos já criados. Diferente dos ataques comuns de hackers, o Stuxnet nasceu de uma operação conjunta de Israel e teve um alvo específico: a rede de computadores do programa nuclear iraniano. Outros vírus, como o Duqu e o Flame, também participaram do ataque cibernético. Mas a arma digital escapou do controle. Stuxnet, Duqu e Flame caíram nas mãos de hackers e passaram a infectar computadores de pessoas comuns no mundo todo.'},
      { type: 'image', src: 'https://i.imgur.com/f6lbXBa.jpeg', caption: 'O vírus Stuxnet, uma arma cibernética sofisticada, representa a guerra travada no mundo digital.'},
      { type: 'paragraph', text: 'Uma tecnologia criada para atingir o Irã acabou se voltando contra inocentes. Ainda assim, impressiona que o Irã insista em manter um programa nuclear — entrar nesse projeto é, para qualquer cientista, praticamente assinar uma sentença de morte.'},
      { type: 'paragraph', text: '2006: O Hezbollah e o apoio iraniano. Voltando alguns anos, chegamos a 2006, quando uma guerra civil devastava o Líbano. Do território libanês, o grupo Hezbollah disparava míssil após míssil contra Israel, com apoio direto da Guarda Revolucionária Iraniana, que fornecia proteção, munição e suporte técnico. Em 2000, a virada do milênio, o aiatolá Ali Khamenei — o mesmo que ainda hoje governa o Irã — assumiu a liderança suprema do país, declarando que Israel era um “tumor cancerígeno” que precisava ser removido do Oriente Médio.'},
      { type: 'paragraph', text: 'Não à toa, Israel jamais acreditou em suas negações de envolvimento com ataques terroristas. Anos 1980: quando Israel e Irã eram aliados. Aqui a história começa a ficar quase absurda. Entre 1980 e 1988, o maior inimigo do Irã não era Israel, mas o vizinho Iraque. Essa foi a Guerra Irã-Iraque, travada em terra, mar e ar. Nesse contexto, Israel foi aliado secreto do Irã, enquanto os Estados Unidos apoiavam o Iraque. Israel chegou a negociar milhões de dólares em armamentos com Teerã, em troca de fornecimento de petróleo.'},
      { type: 'paragraph', text: 'Mais do que isso: quando o Irã falhou em neutralizar o programa nuclear iraquiano, quem agiu em segredo para destruí-lo foi justamente o serviço secreto israelense. Nos palanques, os líderes iranianos atacavam Israel com discursos inflamados. Mas, nos bastidores, cerca de 100 consultores e técnicos israelenses chegaram a operar dentro de bases militares no Irã.'},
      { type: 'paragraph', text: '1979: A revolução que mudou tudo, a verdadeira virada veio em 1979, com a Revolução Iraniana. A monarquia foi derrubada e substituída por uma república teocrática, na qual o poder político passou a estar submetido à autoridade religiosa dos aiatolás. O novo regime rompeu todos os laços diplomáticos com o Ocidente, incluindo Israel. Esse foi o ponto zero do ódio moderno que marca as relações entre os dois países até hoje.'},
      { type: 'image', src: 'https://i.imgur.com/v1fcS78.jpeg', caption: 'A Revolução Iraniana de 1979, um ponto de virada que redefiniu as alianças no Oriente Médio.'},
      { type: 'paragraph', text: '1948–1979: quando eram aliados declarados. Antes disso, no período da dinastia Pahlavi, a história era outra. O Irã foi um dos primeiros países muçulmanos a reconhecer o Estado de Israel, em 1948. Ambos se tornaram aliados estratégicos. Israel investiu em infraestrutura dentro do Irã e até colaborou em projetos militares de desenvolvimento de mísseis. Iranianos e israelenses chegaram a se ver como parceiros frente ao mundo árabe. Mas esse ciclo de amizade durou pouco.'},
      { type: 'image', src: 'https://i.imgur.com/h9G1Bez.jpeg', caption: 'Antes da revolução, Irã e Israel mantinham laços de cooperação, incluindo parcerias militares e estratégicas.'},
      { type: 'paragraph', text: 'Memória histórica de milhares de anos. Se recuarmos ainda mais no tempo, encontramos exemplos de solidariedade, como quando, durante a Segunda Guerra Mundial, o Irã acolheu mais de 116 mil refugiados judeus da Polônia, mesmo em meio à fome que assolava seu povo.'},
      { type: 'paragraph', text: 'Por outro lado, o registro de atritos é ainda mais antigo: no século VI a.C., o nobre persa Hamã teria planejado exterminar todos os judeus em terras persas. O plano foi frustrado pela rainha Ester, e o episódio é lembrado até hoje no feriado judaico de Purim.'},
      { type: 'paragraph', text: 'Ciclos de amizade e ódio. A relação entre persas e judeus sempre oscilou entre momentos de cooperação e períodos de perseguição. É uma história marcada por alianças improváveis, traições profundas e memórias de ódio que atravessaram gerações. O conflito atual não começou em 2023, nem em 2025, mas sim há séculos, talvez milênios.'},
      { type: 'paragraph', text: 'O desafio é quebrar o ciclo de “olho por olho, dente por dente”. A convivência pacífica já foi possível no passado. Resta a pergunta: alguém terá coragem de dar o primeiro passo rumo à paz?'},
      { 
        type: 'video',
        videoId: 'tJ1jDwto8w8',
        caption: 'Uma análise em vídeo sobre o complexo e histórico conflito entre Israel e Irã.'
      }
    ]
  },
  {
    id: 1,
    title: 'Tragédia Aeronáutica na Índia: Único Sobrevivente da Queda do Boeing 787',
    excerpt: 'A análise detalhada da queda de um Boeing 787 da Air India em 2025, que resultou em 279 vítimas. Em meio à catástrofe, uma história de sobrevivência improvável emerge: a de Vishwash Kumar Ramesh, o único passageiro que sobreviveu ao desastre.',
    imageUrl: 'https://i.imgur.com/kR1cvQr.jpeg',
    category: 'Sobrevivência',
    author: 'Equipe Fatos',
    date: getTodaysDateFormatted(),
    readTime: 16,
    content: [
      {
        type: 'paragraph',
        text: 'Em 12 de junho de 2025, um Boeing 787 da Air India caiu logo após uma descolagem, resultando em um dos desastres aéreos mais significativos da história. A aeronave transportou um total de 242 pessoas, sendo 230 passageiros e 12 tripulantes. O número de mortos confirmados chegou a 279 vítimas, incluindo pessoas em solo, superando as 298 fatalidades do incidente da Malaysia Airlines em 2014.',
      },
      {
        type: 'paragraph',
        text: 'Os holofotes globais rapidamente se voltaram para a tragédia. Como é habitual em acidentes aéreos, os números ganharam destaque: o número de passageiros, vítimas, altitude em metros e segundos até o impacto. Embora esses números ajudem a compreender a escalada da tragédia, eles também corrigem o risco de ofuscar o aspecto humano da história — as vidas a bordo daquele avião.',
      },
      {
        type: 'paragraph',
        text: 'Entre esses números, um se destaca como o mais impressionante: apenas um sobrevivente.',
      },
      {
        type: 'paragraph',
        text: 'Este sobrevivente, chamado Vishwash Kumar Ramesh, sentado na poltrona 11A, torna-se o ponto central desta trágica narrativa.',
      },
      {
        type: 'paragraph',
        text: 'A Breve Duração do Voo',
      },
      {
        type: 'paragraph',
        text: 'O Boeing 787, uma aeronave moderna com 57 metros de comprimento, 60 metros de envergadura e capacidade para voar 13.530 km sem reabastecimento — mais de um quarto da Terra —, conseguiu subir apenas 190 metros em seu voo final.',
      },
      {
        type: 'paragraph',
        text: 'Trinta segundos após a descolagem, o avião começou a perder altitude, culminando em uma queda violenta.',
      },
      {
        type: 'paragraph',
        text: 'A História de Vishwash Kumar Ramesh',
      },
      {
        type: 'paragraph',
        text: 'Vishwash Kumar Ramesh, de 40 anos, nascido e criado em Londres, onde residia com a esposa e o filho, decidiu visitar parentes em seu país de origem com seu irmão mais velho, Ajay Kumar Ramesh, de 45 anos.',
      },
      {
        type: 'paragraph',
        text: 'A viagem foi idílica: reuniões familiares, culinária tradicional e celebração de sua herança. No entanto, em 12 de junho, enquanto o Brasil comemorava o Dia dos Namorados, Vishwash e Ajay se preparavam para retornar a Londres, com apenas um deles conseguindo voltar para casa.',
      },
      {
        type: 'paragraph',
        text: 'Por acaso, eles não reservam assentos juntos no voo. Vishwash ocupou o assento 11A, perto da asa, enquanto Ajay sentou em outro lugar. Parecia irrelevante, pois eles esperavam se reunir em casa em breve. O destino, no entanto, tinha interesses diferentes.',
      },
      {
        type: 'paragraph',
        text: 'O Momento da Decolagem',
      },
      {
        type: 'paragraph',
        text: 'Para muitos passageiros, a descolagem causa uma sensação de desconforto. A sensação da trilha sonora subindo enquanto o estômago parece revirar é universalmente reconhecida. Será que Vishwash sentiu medo? Ele nunca revelou tais sentimentos em entrevistas. A realidade é que ele mal teve a chance de reagir. De 5 a 10 segundos após a decolagem, ele detectará uma anomalia. Parecia que o avião havia parado no ar. As luzes internas piscaram em tons de verde e branco. Em vez de subir, a aeronave parecia suspensa, lutando para se estabilizar a uma altitude anormalmente baixa. Na cabine, os passageiros ainda não tinham assimilado a situação. Não houve pânico, nem despedidas. Em poucos instantes, a tragédia era iminente.',
      },
      {
        type: 'image',
        src: 'https://i.imgur.com/BjXoN4r.jpeg',
        caption: 'Concepção artística da aeronave em chamas durante a queda.',
      },
      {
        type: 'paragraph',
        text: 'Testemunhas em solo registraram imagens impressionantes do Boeing 787 pairando no ar. A aeronave não estava subindo, parecendo lutar contra o resultado. O trem de pouso nem sequer havia sido recolhido. Os flaps das asas também estavam na posição errada. Seria uma falha mecânica? Um mau funcionamento do sistema? Nenhum passageiro tinha certeza. Na cabine, dois pilotos experientes tentaram salvar a aeronave: o Capitão Sumeet Sabharwal e o Primeiro Oficial Clive Kundar, com mais de 9.000 horas de voo acumuladas. No entanto, mesmo com toda a experiência, não foi suficiente. Houve tempo apenas para uma comunicação final com a torre de controle. As últimas palavras da cabine foram: "Mayday, sem propulsão, perdendo potência, sem sustentação". Poucos segundos depois, o avião colidiu com um prédio: o refeitório de uma faculdade de medicina, que estava lotado durante o horário de almoço. O impacto resultou em uma enorme bola de fogo que matou cerca de 50 pessoas em solo e feriu muitas outras. Dentro da comunicação, o caos reinou.',
      },
      {
        type: 'image',
        src: 'https://i.imgur.com/CmCx2Us.jpeg',
        caption: 'Destroços do Boeing 787 e equipes de resgate no local do acidente.',
      },
      {
        type: 'paragraph',
        text: 'Para Vishwash Kumar Ramesh, o único sobrevivente do assento 11A, seu pensamento inicial após o impacto foi: "Estou morto". No entanto, ele ainda estava vivo. Preso em seu assento, cercado por fogo e fumaça, ele notou uma pequena abertura na fuselagem perto da saída de emergência. Testemunhando o horror ao seu redor – uma comissária de bordo e dois passageiros queimando vivos, pessoas reduzidas a meras figuras, em silêncio – Vishwash sabia que, se não escapasse, teria o mesmo destino. Ferido, com sangue no rosto e dores por todo o corpo, ele se protegeu com o cinto de segurança preso. Usando as pernas, forçou a saída, queimando as mãos enquanto navegava pelo metal em chamas, e rastejou para fora do avião. Lá fora, em meio a destruções, corpos e chamas, ele não conseguiu acreditar no que via. Onde estava seu irmão, Ajay? Por que ele havia sobrevivido e todos os outros não?',
      },
      {
        type: 'paragraph',
        text: 'Jornais chegaram a especular que ele poderia ter sido apenas um pedestre atingido por destroços. No entanto, a verdade foi confirmada: Vishwash era o único passageiro sobrevivente. A solidão da sobrevivência. Resgatado pelas equipes de choque, Vishwash foi levado ao hospital mais próximo. Ele falou repetidamente por Ajay até receber a notícia que mais temia: seu irmão estava entre os mortos. Das 242 pessoas a bordo, apenas ele sobreviveu. Ainda no hospital, ele encontrou forças para ligar para sua família em Londres e na Índia, resumindo sua sobrevivência em duas palavras: "Estou bem".',
      },
      {
        type: 'image',
        src: 'https://i.imgur.com/ETXLHgx.jpeg',
        caption: 'Bombeiros trabalham em meio aos destroços carbonizados da aeronave.',
      },
      {
        type: 'paragraph',
        text: 'Acidentes aéreos são normalmente analisados por meio de estatísticas. De acordo com um estudo do MIT de 2024, a probabilidade de morrer em um acidente de avião é de 1 em 13,7 milhões. Para efeito de comparação, entre 1968 e 1977, essa chance era de 1 em 350.000. A segurança da aviação melhorou significativamente, mas não para todos. No caso do voo da Air India, Vishwash desafiou todas as probabilidades. Estudos indicam que os passageiros sentados na parte traseira da aeronave têm uma taxa de sobrevivência maior (taxa de mortalidade de 32%), enquanto na frente, o risco é de 38%. No centro, onde ele estava sentado, a taxa é ainda pior: 39% de mortalidade. Portanto, estatisticamente, não se esperava que Vishwash sobrevivesse. Mas ele sobreviveu. Um sobrevivente. A tragédia na Índia ceifou centenas de vidas, destruiu famílias e deixou uma marca na história da aviação global. Também foi demonstrada a resiliência de um homem: Vishwash Kumar Ramesh, o passageiro do assento 11A, que desafiou todas as estatísticas e emergiu vivo dos destroços. Em meio a estatísticas e probabilidades, permanece a lembrança de que cada vítima tinha uma história, uma vida, uma família. E, por acaso, apenas uma dessas histórias poderia continuar a ser escrita.',
      },
      {
        type: 'video',
        videoId: 'Bt2y5bMYKj0',
        caption: 'Documentário detalhando os momentos da tragédia e a investigação que se seguiu.'
      }
    ],
  },
];