// games.js

// Dohvati elemente sa stranice
const gameSelect = document.getElementById('game-select');
const gameImage = document.getElementById('game-image');
const gameDescription = document.getElementById('game-description');

// Podaci o igrama — slike i opisi
const games = {
  cs2: {
    img: 'images/cs2.jpg',
    desc: 'Counter-Strike 2 je popularna pucačina iz prvog lica sa taktičkim elementima.'
  },
  lol: {
    img: 'images/lol.jpg',
    desc: 'League of Legends je MOBA igra sa takmičarskim timskim bitkama.'
  },
  gta5: {
    img: 'images/gta5.jpg',
    desc: 'GTA V je akcioni open-world naslov sa bogatom pričom i slobodom kretanja.'
  },
  fc25: {
    img: 'images/fc25.jpg',
    desc: 'FIFA 25 je najnoviji fudbalski simulator sa realističnom grafikom i igrom.'
  }
};

// Funkcija koja menja sliku i opis kada korisnik promeni izbor
function updateGameInfo() {
  const selected = gameSelect.value;
  if (games[selected]) {
    gameImage.src = games[selected].img;
    gameDescription.textContent = games[selected].desc;
  }
}

// Dodajemo event listener za promenu izbora u select meniju
gameSelect.addEventListener('change', updateGameInfo);

// Opcionalno: pozovi odmah da prikaže početne podatke (CS2)
updateGameInfo();
