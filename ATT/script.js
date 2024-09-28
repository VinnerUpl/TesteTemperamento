document.addEventListener('DOMContentLoaded', () => {
    // Elementos do DOM
    const instructions = document.getElementById('instructions');
    const part1 = document.getElementById('part1');
    const part2 = document.getElementById('part2');
    const result = document.getElementById('result');

    // Questões
    const questions1 = [
        { a: "Quando você está em um ambiente novo, você tende a explorá-lo completamente.", b: "Tende a ser receoso em novos ambientes." },
        { a: "Quando alguém lhe ofende de forma inesperada, você já tem uma resposta.", b: "Não reage rapidamente às ofensas inesperadas." },
        { a: "Para você, é muito fácil emitir sua opinião em meio a um grupo de 'semi-conhecidos'.", b: "Não consegue elaborar uma opinião sem se sentir muito seguro antes." },
        { a: "Para você, a comunicação e a oportunidade de se posicionar são imprescindíveis.", b: "Você suporta por um bom tempo quando não pode se posicionar." },
        { a: "É muito fácil tomar uma atitude em ações em grupo.", b: "Possui dificuldades em tomar decisões em meio a um grupo." },
        { a: "Você é o primeiro a se manifestar em dinâmicas de grupo.", b: "Você espera que outro dê o primeiro passo em dinâmicas de grupo." },
        { a: "Você se sente desconfortável vivendo apenas o óbvio e o previsível.", b: "Para você, uma vida previsível e estável é mais confortável." },
        { a: "Você possui um tom de voz elevado.", b: "Seu tom de voz é mais manso/vacilante/baixo." },
        { a: "Você precisa se expressar constantemente.", b: "Se expressar constantemente lhe cansa muito." },
        { a: "É muito difícil guardar para si quando não gosta de algo; logo fala.", b: "Não tem certeza de como se expressar de imediato se não gostar de algo." },
        { a: "Não tem problema nenhum em ter assunto com as pessoas.", b: "Tem dificuldade em ter assunto com as pessoas." },
        { a: "É considerado uma pessoa agitada.", b: "Te veem como calmo ou lento." },
        { a: "Quer resolver tudo para ontem e agita os que o cercam com sua agitação.", b: "Tem paciência para resolver ou, se está ansioso, não agita os outros." },
        { a: "Sente que faz muito esforço para não ser precipitado.", b: "Sente que faz muito esforço para tomar decisões mais rápidas, pensando menos." },
        { a: "Tende a tirar conclusões rápidas sem pensar muito.", b: "Tende a pensar demais para enfim chegar a uma conclusão." },
        { a: "Sua presença não passa despercebida.", b: "Sua presença é naturalmente mais contida." },
        { a: "Por você, a vida seria aventura constante e imprevisível.", b: "Por você, a vida seria previsível e totalmente segura sem desafios ou mudanças repentinas." },
        { a: "Você tem muita facilidade em lidar com coisas, pessoas e situações.", b: "Você se sente mais confortável dentro de si, com seus pensamentos e emoções." },
        { a: "Novidades e desafios constantes renovam seu ânimo.", b: "Novidades e desafios constantes lhe deixam ansioso ou cansado." }
    ];

    const questions2 = [
        { a: "Você tem uma visão muito flexível sobre a vida.", b: "Para você, a vida tem certos e errados muito marcados." },
        { a: "Você se adapta com muita facilidade a novas coisas, pessoas e situações.", b: "Você possui certa dificuldade com novidades e mudanças." },
        { a: "Você se relaciona facilmente com todos os tipos de pessoas, inclusive as que são muito diferentes de você, sem esforço algum.", b: "Os relacionamentos costumam ser mais forçosos e espinhosos com pessoas que não pensam igual a você em assuntos que lhe são muito importantes." },
        { a: "As emoções lhe são muito fortes no momento dos acontecimentos, porém, não duram muito.", b: "As emoções lhe afetam por um período prolongado, precisa se esforçar para superar." },
        { a: "Quando se lembra de coisas do passado, pode ou não se lembrar com detalhes, mas não sente nada. A lembrança é só uma lembrança.", b: "Quando se lembra de coisas do passado, a emoção é revivida intensamente, parece que aconteceu ontem ou que ainda está acontecendo." },
        { a: "Quando toma uma decisão, leva muito em conta como aquilo vai afetar seu emocional e o emocional das outras pessoas, você prioriza a harmonia.", b: "Para você, uma decisão deve ser tomada com base na verdade, não importando o que você ou os outros vão sentir." },
        { a: "Você naturalmente consegue flexibilizar suas decisões.", b: "Você é teimoso em suas decisões, sofre ao precisar flexibilizar." },
        { a: "Você tende a se sentir atraído por aquilo que dá prazer ao seu físico.", b: "Você tende a se atrair por ideais complexos e ideias profundas." },
        { a: "Quando chega em um ambiente com estímulos emocionais (uma festa, por exemplo), você se sente facilmente envolvido, comovido e atraído.", b: "Quando chega em uma festa, você cria uma certa barreira/resistência ou julgamento." },
        { a: "Quando combina algo, compreende facilmente quando há uma mudança.", b: "Quando combina algo, não compreende tão fácil quando algo muda e demora a aceitar." },
        { a: "Quando opinam de forma oposta à sua, automaticamente, sem sofrimento, você entende que é natural da vida e tudo continua normal.", b: "Quando opinam de forma oposta à sua, seu interior se perturba, é difícil aceitar e, dependendo, você não consegue agir normalmente com a pessoa." },
        { a: "A vida muda, é assim mesmo e está tudo bem!", b: "A vida muda e isso me faz sentir que não tenho controle!" },
        { a: "A paz interior é tão importante para mim que prefiro me abster de contendas.", b: "Minha paz interior não pode sobrepor a verdade. Se tenho paz com as pessoas por meio da negação do que é certo para mim, não tenho paz!" }
    ];

    // Função para gerar as questões
    const generateQuestions = (questions, containerId, prefix) => {
        const container = document.getElementById(containerId);
        questions.forEach((question, index) => {
            const questionElement = document.createElement('div');
            questionElement.className = 'question';
            questionElement.innerHTML = `
                Questão ${index + 1}:
                <div>
                    <label><input type="radio" name="${prefix}${index + 1}" value="A"> A - ${question.a}</label>
                </div>
                <div>
                    <label><input type="radio" name="${prefix}${index + 1}" value="B"> B - ${question.b}</label>
                </div>
            `;
            container.appendChild(questionElement);
        });
    };

    generateQuestions(questions1, 'questions-part1', 'q1');
    generateQuestions(questions2, 'questions-part2', 'q2');

    // Inicialmente, exibe as instruções
    instructions.classList.remove('hidden');

    // Função para mostrar um elemento e ocultar outro
    const showElement = (elementToShow, elementToHide) => {
        elementToShow.classList.remove('hidden');
        elementToHide.classList.add('hidden');
    };

    // Função para validar se todas as questões foram respondidas
    const validateAnswers = (part) => {
        const totalQuestions = part === 1 ? questions1.length : questions2.length;
        for (let i = 1; i <= totalQuestions; i++) {
            if (!document.querySelector(`input[name="q${part}${i}"]:checked`)) {
                return false;
            }
        }
        return true;
    };

    // Event listeners para os botões
    document.getElementById('start-part1').addEventListener('click', () => {
        showElement(part1, instructions);
    });

    document.getElementById('submit-part1').addEventListener('click', () => {
        if (validateAnswers(1)) {
            showElement(part2, part1);
        } else {
            alert('Por favor, responda todas as questões da Parte 1.');
        }
    });

    document.getElementById('submit-part2').addEventListener('click', () => {
        if (validateAnswers(2)) {
            showElement(result, part2);
            showResult();
        } else {
            alert('Por favor, responda todas as questões da Parte 2.');
        }
    });

    document.getElementById('restart').addEventListener('click', () => {
        location.reload();
    });

    // Função para exibir o resultado
    const showResult = () => {
        const scores = { A: 0, B: 0 };

        const collectScores = (prefix, total) => {
            for (let i = 1; i <= total; i++) {
                const answer = document.querySelector(`input[name="${prefix}${i}"]:checked`);
                if (answer) scores[answer.value]++;
            }
        };

        collectScores('q1', questions1.length);
        collectScores('q2', questions2.length);

        const temperament = scores.A > scores.B ? "Extrovertido" : "Introvertido";
        const detail = temperament === "Extrovertido" ? "Você tende a ser uma pessoa mais comunicativa e sociável." : "Você tende a ser mais reservado e reflexivo.";
        
        result.innerHTML = `
            <h2>Resultado</h2>
            <p>Seu temperamento é: <strong>${temperament}</strong></p>
            <p>${detail}</p>
        `;
    };
});
s