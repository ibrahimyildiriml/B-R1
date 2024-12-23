
// Canlı Ziyaretçi Sayacı
document.addEventListener("DOMContentLoaded", () => {
    const totalVisitors = 1000000; // 1 milyon
    fetch("http://localhost:3000/visitor")
        .then(response => response.json())
        .then(data => {
            const currentVisitor = data.currentVisitor;
            document.getElementById("counter").textContent = currentVisitor;
        })
        .catch(error => {
            console.error("Sayaç yüklenemedi:", error);
        });
});
    