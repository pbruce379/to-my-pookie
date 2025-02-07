// Set your start date here (YYYY, MM - 1, DD)
const startDate = new Date(2024, 3, 30); // Example: January 1, 2024

function updateCounter() {
    const now = new Date();
    const diff = now - startDate;

    const months = Math.floor(diff / (1000 * 60 * 60 * 24 * 30.44));
    const days = Math.floor(diff / (1000 * 60 * 60 * 24)) % 30;
    const hours = Math.floor(diff / (1000 * 60 * 60)) % 24;
    const minutes = Math.floor(diff / (1000 * 60)) % 60;
    const seconds = Math.floor(diff / 1000) % 60;

    document.getElementById("months").textContent = months;
    document.getElementById("days").textContent = days;
    document.getElementById("hours").textContent = hours;
    document.getElementById("minutes").textContent = minutes;
    document.getElementById("seconds").textContent = seconds;
}

// Update every second
setInterval(updateCounter, 1000);
updateCounter();