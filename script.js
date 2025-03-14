// List of all Clash Royale cards
const cards = [
    'Archer', 'Giant', 'Fireball', 'Mega Minion', 'Queen', 'Knight', 'Baby Dragon', 'Cannon', 'Bowler', 'Hog Rider',
    'Goblin Barrel', 'Golem', 'Lightning', 'Inferno Tower', 'Night Witch', 'P.E.K.K.A', 'Zap', 'Rocket', 'X-Bow', 'Graveyard',
    'Miner', 'Electro Wizard', 'Ice Spirit', 'Tornado', 'Skeletons', 'Valkyrie', 'Princess', 'Witch', 'Royal Giant', 'Elixir Collector',
    'Goblin Gang', 'Mega Minion', 'Electro Dragon', 'Furnace', 'Royal Hogs', 'Balloon', 'Arrows', 'Freeze', 'Bats', 'Log',
    'Barbarian Barrel', 'Giant Skeleton', 'Lightning', 'Hunter', 'Magic Archer', 'Ice Golem', 'Cannon Cart', 'Clash Royale', 'Wall Breakers',
    'Bomb Tower', 'Tornado', 'Graveyard', 'Barbarian Hut', 'Spells', 'Fire Spirits', 'Electro Giant', 'Giant Hog', 'Earthquake'
];

// Function to generate a random deck of 8 cards
function generateRandomDeck() {
    const shuffled = cards.sort(() => 0.5 - Math.random()); // Shuffle the array randomly
    return shuffled.slice(0, 8); // Take the first 8 cards after shuffling
}

// Function to display the generated deck
function displayDeck(deck) {
    const deckContainer = document.getElementById('deckContainer');
    deckContainer.innerHTML = ''; // Clear previous deck
    deck.forEach(card => {
        const cardElement = document.createElement('div');
        cardElement.className = 'card';
        cardElement.textContent = card;
        deckContainer.appendChild(cardElement); // Add each card to the deck display
    });
}

// Function to export the deck to clipboard (with verification)
function exportDeck() {
    const deck = [...document.querySelectorAll('.card')].map(card => card.textContent).join(', '); // Get all cards
    navigator.clipboard.writeText(deck).then(() => {
        // Create the verification message
        const message = document.createElement('div');
        message.className = 'verification-message';
        message.textContent = "Deck copied to clipboard! You can now paste it into your Clash Royale deck.";

        // Append the message to the body
        document.body.appendChild(message);

        // Automatically remove the message after a few seconds
        setTimeout(() => {
            message.remove();
        }, 3000); // Message disappears after 3 seconds
    }).catch(err => {
        alert("Failed to copy deck. Please try again.");
    });
}



// Event listeners
document.getElementById('generateButton').addEventListener('click', () => {
    const deck = generateRandomDeck(); // Generate random deck
    displayDeck(deck); // Display the generated deck
});

document.getElementById('exportButton').addEventListener('click', exportDeck); // Set up export function
