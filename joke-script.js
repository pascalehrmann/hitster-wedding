// Joke APIs
const JOKE_APIS = [
    {
        name: 'Official Joke API',
        url: 'https://official-joke-api.appspot.com/random_joke',
        format: (data) => `${data.setup}\n\n${data.punchline}`
    },
    {
        name: 'JokeAPI',
        url: 'https://v2.jokeapi.dev/joke/Any?safe-mode',
        format: (data) => {
            if (data.type === 'single') {
                return data.joke;
            } else {
                return `${data.setup}\n\n${data.delivery}`;
            }
        }
    },
    {
        name: 'Random Useless Fact',
        url: 'https://uselessfacts.jsondiffpatch.com/api/v2/random',
        format: (data) => `Fun Fact: ${data.text}`
    }
];

// DOM Elements
const newJokeBtn = document.getElementById('newJokeBtn');
const copyBtn = document.getElementById('copyBtn');
const jokeText = document.getElementById('jokeText');
const notification = document.getElementById('notification');

let currentJoke = '';

// Event Listeners
newJokeBtn.addEventListener('click', fetchJoke);
copyBtn.addEventListener('click', copyJoke);

// Fetch Joke
async function fetchJoke() {
    newJokeBtn.disabled = true;
    showNotification('Loading...', 'loading');

    try {
        // Randomly select an API
        const api = JOKE_APIS[Math.floor(Math.random() * JOKE_APIS.length)];

        const response = await fetch(api.url);

        if (!response.ok) {
            throw new Error('Failed to fetch joke');
        }

        const data = await response.json();
        currentJoke = api.format(data);

        jokeText.textContent = currentJoke;
        showNotification('New joke loaded!', 'success');

    } catch (error) {
        console.error('Error:', error);
        jokeText.textContent = 'Oops! Failed to load a joke. Try again!';
        showNotification('Error loading joke', 'error');
    } finally {
        newJokeBtn.disabled = false;
    }
}

// Copy Joke to Clipboard
function copyJoke() {
    if (!currentJoke) {
        showNotification('No joke to copy!', 'error');
        return;
    }

    navigator.clipboard.writeText(currentJoke).then(() => {
        showNotification('Joke copied to clipboard!', 'success');
    }).catch(() => {
        showNotification('Failed to copy', 'error');
    });
}

// Show Notification
function showNotification(message, type) {
    notification.textContent = message;
    notification.className = `notification show ${type}`;

    if (type !== 'loading') {
        setTimeout(() => {
            notification.classList.remove('show');
        }, 3000);
    }
}

// Load initial joke on page load
window.addEventListener('DOMContentLoaded', fetchJoke);
