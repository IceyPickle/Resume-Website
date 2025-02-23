/* ========== Matrix Theme Background ========== */

document.addEventListener("DOMContentLoaded", () => {
    const canvas = document.getElementById("codeCanvas");
    if (!canvas) return; // If no canvas exists on the page, exit.

    const ctx = canvas.getContext("2d");

    // Set canvas size to full screen
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const characters = "01ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const fontSize = 16;
    const columns = Math.floor(canvas.width / fontSize);
    const drops = Array(columns).fill(1);

    function drawMatrix() {
        ctx.fillStyle = "rgba(0, 0, 0, 0.1)"; // Slow fade effect
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        ctx.fillStyle = "#0F0"; // Green digital text
        ctx.font = fontSize + "px monospace";

        for (let i = 0; i < drops.length; i++) {
            const text = characters[Math.floor(Math.random() * characters.length)];
            ctx.fillText(text, i * fontSize, drops[i] * fontSize);

            if (drops[i] * fontSize > canvas.height && Math.random() > 0.98) {
                drops[i] = 0;
            }
            drops[i]++;
        }

        setTimeout(() => requestAnimationFrame(drawMatrix), 50); // Slow down effect
    }

    drawMatrix();

    window.addEventListener("resize", () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    });
});


function showTab(tabId) {
    document.querySelectorAll('.resume-content').forEach(section => {
        section.style.display = 'none';
    });

    document.querySelectorAll('.tab-button').forEach(button => {
        button.classList.remove('active');
    });

    document.getElementById(tabId).style.display = 'block';
    document.querySelector(`[onclick="showTab('${tabId}')"]`).classList.add('active');
}

// Show IT Resume by default
document.addEventListener("DOMContentLoaded", () => {
    showTab('it-resume');
});

