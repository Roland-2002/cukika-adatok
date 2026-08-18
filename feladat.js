// Megkeressük a gombokat az ID-juk alapján, és beállítjuk a működésüket

document.getElementById("gomb-1").onclick = () => {
    alert("Helyes!");
};

document.getElementById("gomb-2").onclick = () => {
    alert("Sajnos nem.");
};

document.getElementById("gomb-3").onclick = () => {
    alert("Sajnos nem.");
};


// Megkeressük az összes válaszlehetőség gombot a letöltött HTML-ben
document.querySelectorAll('.valasz-gomb').forEach(gomb => {
    gomb.addEventListener('click', function() {
        // Vizuális visszajelzés: levesszük a jelölést a többiről, és erre rátesszük
        document.querySelectorAll('.valasz-gomb').forEach(g => g.classList.remove('aktiv'));
        this.classList.add('aktiv');
        
        // ELMENTJÜK a gomb szövegét a telefon rejtett memóriájába
        localStorage.setItem('aktualisValasz', this.innerText); 
        console.log('Ideiglenesen elmentve a memóriába:', this.innerText);
    });
});
