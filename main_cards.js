function showCards() {
    document.getElementById('final-card-container').innerHTML += localStorage.getItem('card');
}