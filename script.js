const questions = [
    {
        text: "Какой предмет вас интересует больше всего?",
        answers: [
            { text: "Английский язык", next: 1 },
            { text: "Математика", next: 1 },
            { text: "Французский язык", next: 1 },
            { text: "Химия", next: 1 },
            { text: "Физика", next: 1 },
            { text: "Литература", next: 1 },
            { text: "Другой", next: 1 },
            { text: "История", next: 1 },
            { text: "География", next: 1 },
            { text: "Биология", next: 1 },
            { text: "Информатика", next: 1 },
            { text: "Немецкий язык", next: 1 },
            { text: "Другой", next: 1 },
        ]
    },
    {
        text: "Какую цель вы хотите достичь с помощью обучения?",
        answers: [
            { text: "Сдать экзамен", next: 2 },
            { text: "Повысить квалификацию", next: 2 },
            { text: "Изучить что-то новое", next: 2 }
        ]
    },
    {
        text: "Какой формат обучения вам предпочтителен?",
        answers: [
            { text: "Онлайн-занятия", next: 3 },
            { text: "Самостоятельное изучение", next: 3 },
            { text: "Групповые занятия", next: 3 }
        ]
    },
    {
        text: "С какими трудностями вы сталкиваетесь при обучении?",
        answers: [
            { text: "Недостаток времени", next: 4 },
            { text: "Непонимание материала", next: 4 },
            { text: "Отсутствие мотивации", next: 4 }
        ]
    },
    {
        text: "Как быстро вы хотите достичь своих целей?",
        answers: [
            { text: "В течение месяца", next: 5 },
            { text: "В течение трех месяцев", next: 5 },
            { text: "Не спешу", next: 5 }
        ]
    },
    {
        text: "Что вас мотивирует учиться?",
        answers: [
            { text: "Достижение целей", next: 6 },
            { text: "Помощь другим", next: 6 },
            { text: "Личное развитие", next: 6 }
        ]
    },
    {
        text: "Какой уровень знаний у вас уже есть в этом предмете?",
        answers: [
            { text: "Начальный", next: 7 },
            { text: "Средний", next: 7 },
            { text: "Продвинутый", next: 7 }
        ]
    },
    {
        text: "Сколько времени в неделю вы готовы уделять учебе?",
        answers: [
            { text: "1-2 часа", next: 8 },
            { text: "3-5 часов", next: 8 },
            { text: "Больше 5 часов", next: 8 }
        ]
    },
    {
        text: "Как вы оцениваете свои способности к самообучению?",
        answers: [
            { text: "Очень хорошо", next: 9 },
            { text: "Нормально", next: 9 },
            { text: "Нужна помощь", next: 9 }
        ]
    },
    {
        text: "Какой аспект обучения для вас важен?",
        answers: [
            { text: "Качество материалов", next: 10 },
            { text: "Опыт преподавателей", next: 10 },
            { text: "Поддержка и обратная связь", next: 10 }
        ]
    },
    {
        text: "Вы пробовали учиться самостоятельно?",
        answers: [
            { text: "Да, и это сложно", next: 11 },
            { text: "Да, и мне нравится", next: 11 },
            { text: "Нет, не пробовал", next: 11 }
        ]
    },
    {
        text: "Какие методы обучения вам нравятся?",
        answers: [
            { text: "Интерактивные задания", next: 12 },
            { text: "Теоретические материалы", next: 12 },
            { text: "Практика", next: 12 }
        ]
    },
    {
        text: "Сколько раз вы меняли курсы или методики обучения?",
        answers: [
            { text: "Часто", next: 13 },
            { text: "Редко", next: 13 },
            { text: "Никогда", next: 13 }
        ]
    },
    {
        text: "Какую дополнительную поддержку вы ищете?",
        answers: [
            { text: "Чат с преподавателем", next: 14 },
            { text: "Групповые обсуждения", next: 14 },
            { text: "Запись на дополнительные занятия", next: 14 }
        ]
    },
    {
        text: "Ваши ответы показывают, что наши курсы идеально подходят для ваших целей. Хотите узнать больше?",
        answers: [
            { text: "Да, хочу узнать больше!", action: "learn_more" },
            { text: "Может быть позже", action: "later" },
            { text: "Нет, не интересно", action: "not_interested" }
        ]
    }
];

let currentQuestionIndex = 0;

const quizContainer = document.getElementById("quiz-container");
const resultContainer = document.getElementById("result-container");

function showQuestion() {
    const question = questions[currentQuestionIndex];
    quizContainer.innerHTML = `<p>${question.text}</p>`;
    
    question.answers.forEach(answer => {
        const button = document.createElement("button");
        button.textContent = answer.text;
        button.onclick = () => {
            if (answer.next !== undefined) {
                currentQuestionIndex = answer.next;
                showQuestion();
            } else {
                handleEnd(answer.action);
            }
        };
        quizContainer.appendChild(button);
    });
}

function handleEnd(action) {
    quizContainer.classList.add("hidden");
    resultContainer.classList.remove("hidden");
    
    if (action === "learn_more") {
        resultContainer.innerHTML = `
            <p>Мы рады, что вы заинтересованы в наших курсах! Чтобы узнать больше, подписывайтесь на наш Instagram или звоните нам!</p>
            <button id="instagram-button">Instagram</button>
            <button id="whatsapp-button">WhatsApp</button>
        `;
        document.getElementById("instagram-button").onclick = () => {
            window.open('https://www.instagram.com/bilim_az/', '_blank');
        };
        document.getElementById("whatsapp-button").onclick = () => {
            window.open('https://wa.me/994503190092', '_blank');
        };
    } else if (action === "later") {
        resultContainer.innerHTML = `
            <p>Не теряйте связи! Подпишитесь на нас и оставайтесь в курсе самых интересных предложений и уроков!</p>
            <button id="subscribe-button">Подписаться</button>
        `;
        document.getElementById("subscribe-button").onclick = () => {
            window.open('https://www.instagram.com/bilim_az/', '_blank');
        };
    } else if (action === "not_interested") {
        resultContainer.innerHTML = `
            <p>Если вы передумаете или захотите узнать больше о наших курсах, мы всегда готовы помочь!</p>
            <p>Подпишитесь на наши обновления, чтобы быть в курсе новостей и акций!</p>
            <button id="subscribe-button">Подписаться</button>
        `;
        document.getElementById("subscribe-button").onclick = () => {
            window.open('https://www.instagram.com/bilim_az/', '_blank');
        };
    }
}

showQuestion();

