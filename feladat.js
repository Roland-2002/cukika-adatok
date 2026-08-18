// Megkeressük az összes válaszlehetőség gombot a letöltött HTML-ben
document.querySelectorAll('.valasz-gomb').forEach(gomb => {
    gomb.addEventListener('click', function() {
        // Vizuális visszajelzés: levesszük a jelölést a többiről, és erre rátesszük
        document.querySelectorAll('.valasz-gomb').forEach(g => g.classList.remove('aktiv'));
        this.classList.add('aktiv');
        
        // ELMENTJÜK a gomb szövegét a telefon rejtett memóriájába
        const valasz = this.getAttribute('valasz');
        localStorage.setItem('aktualisValasz', valasz); 
        console.log('Ideiglenesen elmentve a memóriába:', this.innerText);
    });
});
