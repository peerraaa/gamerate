const gameSelect = document.getElementById('game-select');
const gameImage = document.getElementById('game-image');
const gameDescription = document.getElementById('game-description');

const gamesData = {
    cs2: {
        name: "Counter-Strike 2",
        description: "Counter-Strike 2 je popularna pucačina iz prvog lica sa taktičkim elementima.",
        image: "images/cs2.jpg",
    },
    lol: {
        name: "League of Legends",
        description: "League of Legends je MOBA igra sa dinamičnim timskim borbama i strategijom.",
        image: "images/lol.jpg",
    },
    gta5: {
        name: "GTA V",
        description: "GTA V je akcioni open world naslov sa bogatom pričom i slobodom kretanja.",
        image: "images/gta5.jpg",
    },
    fc25: {
        name: "FIFA 25",
        description: "FIFA 25 je fudbalska simulacija sa realističnim mečevima i taktikama.",
        image: "images/fc25.jpg",
    }
};

function updateGameInfo() {
    const key = gameSelect.value;
    if (gamesData[key]) {
        gameImage.src = gamesData[key].image;
        gameImage.alt = gamesData[key].name;
        gameDescription.textContent = gamesData[key].description;
    }
}

gameSelect.addEventListener('change', updateGameInfo);
updateGameInfo();

// Ocene zvezdice
const stars = document.querySelectorAll('.star');
let selectedRating = 0;

stars.forEach(star => {
    star.addEventListener('click', () => {
        selectedRating = parseInt(star.dataset.rating);
        stars.forEach(s => s.classList.remove('selected'));
        for (let i = 0; i < selectedRating; i++) {
            stars[i].classList.add('selected');
        }
    });
});

// Submit ocene
const submitRating = document.getElementById('submit-rating');
const thankYou = document.getElementById('thank-you');

submitRating.addEventListener('click', () => {
    if(selectedRating === 0) {
        alert('Molimo izaberite ocenu!');
        return;
    }
    thankYou.classList.remove('hidden');
    setTimeout(() => thankYou.classList.add('hidden'), 2500);
    // reset rating
    stars.forEach(s => s.classList.remove('selected'));
    selectedRating = 0;
});

// Predlozi novu igru
const suggestForm = document.getElementById('suggest-form');
const suggestThank = document.getElementById('suggest-thank');

suggestForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const newName = document.getElementById('game-name').value.trim();
    const newDesc = document.getElementById('game-desc').value.trim();
    let newImage = document.getElementById('game-image-url').value.trim();

    if (!newName || !newDesc) return;

    if (!newImage) {
        newImage = "https://via.placeholder.com/320x180?text=No+Image";
    }

    const key = newName.toLowerCase().replace(/\s+/g, '-');

    if (gamesData[key]) {
        alert("Igra već postoji u listi.");
        return;
    }

    // Dodaj novu igru u objekat i u dropdown listu
    gamesData[key] = {
        name: newName,
        description: newDesc,
        image: newImage,
    };

    const option = document.createElement('option');
    option.value = key;
    option.textContent = newName;
    gameSelect.appendChild(option);

    // Reset forme
    suggestForm.reset();

    // Prikaži poruku zahvalnosti
    suggestThank.classList.remove('hidden');
    setTimeout(() => suggestThank.classList.add('hidden'), 3000);
});
