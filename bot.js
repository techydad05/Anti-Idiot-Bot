// Import the discord.js module
import { Client, GatewayIntentBits, Partials } from 'discord.js';
import questions from './questions.js';
import 'dotenv/config';

// Create a new client instance with the required intents
const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
        GatewayIntentBits.DirectMessages
    ],
    partials: [Partials.Channel, Partials.Message, Partials.User]
}); 

client.once('ready', () => {
    console.log('Ready!', questions.length);
    console.log(`Logged in as ${client.user.tag}!`);
});

// Settings
const numQuestions = process.env.NUM_QUESTIONS || 3; // Number of questions to ask, default to 3 if not specified
const timePerQuestion = process.env.TIME_PER_QUESTION || 60000; // Time per question in milliseconds, default to 60 seconds if not specified

// Function to get random citizenship questions
function getRandomQuestions() {
    const shuffled = questions.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, numQuestions);
}

client.on('messageCreate', async message => {
    if (message.author.bot) return;

    console.log(`Received message from ${message.author.username}: ${message}`);
    // Check if the message starts with "!idiot?"
    if (message.content.startsWith('!idiot?') && message.member.permissions.has('ADMINISTRATOR')) {
        const userToDM = message.mentions.users.first() || message.author;
        const adminUser = message.author; // Store the admin user

        // Prompt the user to accept the test
        const promptMessage = await message.channel.send(`<@${userToDM.id}>, do you accept the test? Type "yes" to start.`);
        
        const confirmFilter = response => response.author.id === userToDM.id && response.content.toLowerCase() === 'yes';
        const confirmCollector = message.channel.createMessageCollector({ filter: confirmFilter, time: 60000 });

        confirmCollector.on('collect', async response => {
            confirmCollector.stop();

            const selectedQuestions = getRandomQuestions();

            try {
                const dmChannel = await userToDM.createDM();

                let currentQuestionIndex = 0;
                let score = 0;

                const askNextQuestion = async () => {
                    if (currentQuestionIndex < selectedQuestions.length) {
                        const currentQuestion = selectedQuestions[currentQuestionIndex];
                        const questionText = `${currentQuestion.question}\n` +
                                             `A) ${currentQuestion.options[0]}\n` +
                                             `B) ${currentQuestion.options[1]}\n` +
                                             `C) ${currentQuestion.options[2]}\n` +
                                             `D) ${currentQuestion.options[3]}`;

                        const timerMessage = await dmChannel.send(questionText);

                        let timeLeft = timePerQuestion / 1000;
                        const countdownInterval = setInterval(async () => {
                            if (timeLeft > 0) {
                                timeLeft -= 5;
                                const progress = "▓".repeat((timePerQuestion / 1000 - timeLeft) / 5) + "░".repeat(timeLeft / 5);
                                await timerMessage.edit(`${questionText}\n\nTime left: ${timeLeft} seconds\n${progress}`);
                            } else {
                                clearInterval(countdownInterval);
                            }
                        }, 5000); // Update every 5 seconds

                        const filter = response => response.author.id === userToDM.id;

                        const collector = dmChannel.createMessageCollector({ filter, max: 1, time: timePerQuestion });

                        collector.on('collect', message => {
                            clearInterval(countdownInterval);
                            const userAnswer = message.content.trim().toLowerCase();
                            const correctAnswer = currentQuestion.answer.toLowerCase();

                            // Map user answers to options
                            const answerMap = {
                                'a': currentQuestion.options[0].toLowerCase(),
                                'b': currentQuestion.options[1].toLowerCase(),
                                'c': currentQuestion.options[2].toLowerCase(),
                                'd': currentQuestion.options[3].toLowerCase()
                            };

                            if (answerMap[userAnswer] === correctAnswer) {
                                score++;
                            }
                            currentQuestionIndex++;
                            askNextQuestion();
                        });

                        collector.on('end', collected => {
                            if (collected.size === 0) {
                                dmChannel.send('Time is up! Please respond faster next time.');
                                currentQuestionIndex++;
                                askNextQuestion();
                            }
                        });
                    } else {
                        const resultMessage = `Thank you for answering all the questions! Your score is ${score}/${selectedQuestions.length}.`;
                        dmChannel.send(resultMessage);
                        adminUser.send(`User ${userToDM.username} completed the test with a score of ${score}/${selectedQuestions.length}.`);
                    }
                };

                askNextQuestion();

                message.channel.send(`Questions sent to ${userToDM.username}`);
            } catch (error) {
                console.error('Error sending DM:', error);
                message.channel.send('Unable to send a DM to the user.');
            }
        });

        confirmCollector.on('end', collected => {
            if (collected.size === 0) {
                message.channel.send(`<@${userToDM.id}> did not respond in time.`);
            }
        });
    }
});

client.login(process.env?.TOKEN);