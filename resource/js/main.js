//! Inizializzo un lazy load del DOM


//^ Scroll-Listener della 3a Section
// Seleziona la sezione che vuoi monitorare
let targetSection = document.querySelector(".section-to-load");

// Funzione che controlla se la section è nel viewport
function whenIsee() {
    let rect = targetSection.getBoundingClientRect();
    let isInView = rect.top >= 0 && rect.bottom <= window.innerHeight;

    if (isInView) {
        console.log("Seen Section.");
        spawncarousel();
        window.removeEventListener("scroll", whenIsee);
    }
}

// Funzione che esegue il caricamento del contenuto
function spawncarousel() {
    let content = document.createElement("c-card");
    content.textContent = "Carousel Lazy Loaded.";
    targetSection.appendChild(content);
}

// Aggiungo l'evento scroll
window.addEventListener("scroll", whenIsee);
