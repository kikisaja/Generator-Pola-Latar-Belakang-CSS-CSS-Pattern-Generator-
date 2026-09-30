// --- 1. AMBIL ELEMEN DOM ---
const patternTypeInput = document.getElementById("pattern-type");
const patternSizeInput = document.getElementById("pattern-size");
const sizeValLabel = document.getElementById("size-val");

const bgColorInput = document.getElementById("bg-color");
const patternColorInput = document.getElementById("pattern-color");

const patternPreview = document.getElementById("pattern-preview");
const cssOutput = document.getElementById("css-output");
const btnCopy = document.getElementById("btn-copy");

// --- 2. FUNGSI GENERATE POLA CSS ---
function generatePattern() {
    const type = patternTypeInput.value;
    const size = parseInt(patternSizeInput.value);
    const bgColor = bgColorInput.value;
    const patternColor = patternColorInput.value;

    let backgroundStyle = "";

    // Logika pembuatan string CSS gradient berdasarkan jenis pola
    if (type === "dots") {
        const dotRadius = Math.max(2, Math.floor(size / 6));
        backgroundStyle = `background-color: ${bgColor};\nbackground-image: radial-gradient(${patternColor} ${dotRadius}px, transparent ${dotRadius}px);\nbackground-size: ${size}px ${size}px;`;
    } 
    else if (type === "stripes") {
        const halfSize = size / 2;
        backgroundStyle = `background-color: ${bgColor};\nbackground-image: linear-gradient(45deg, ${patternColor} 25%, transparent 25%, transparent 50%, ${patternColor} 50%, ${patternColor} 75%, transparent 75%, transparent);\nbackground-size: ${size}px ${size}px;`;
    } 
    else if (type === "checkerboard") {
        backgroundStyle = `background-color: ${bgColor};\nbackground-image: linear-gradient(45deg, ${patternColor} 25%, transparent 25%), linear-gradient(-45deg, ${patternColor} 25%, transparent 25%), linear-gradient(45deg, transparent 75%, ${patternColor} 75%), linear-gradient(-45deg, transparent 75%, ${patternColor} 75%);\nbackground-size: ${size}px ${size}px;\nbackground-position: 0 0, 0 ${size / 2}px, ${size / 2}px -${size / 2}px, -${size / 2}px 0px;`;
    }

    // Terapkan ke box preview
    patternPreview.style.cssText = backgroundStyle;

    // Tampilkan teks kode ke textarea
    cssOutput.value = backgroundStyle;

    // Update label ukuran
    sizeValLabel.textContent = `${size}px`;
}

// --- 3. EVENT LISTENERS ---
patternTypeInput.addEventListener("change", generatePattern);
patternSizeInput.addEventListener("input", generatePattern);
bgColorInput.addEventListener("input", generatePattern);
patternColorInput.addEventListener("input", generatePattern);

// Salin kode ke clipboard
btnCopy.addEventListener("click", () => {
    cssOutput.select();
    navigator.clipboard.writeText(cssOutput.value);

    // Feedback tombol saat disalin
    const originalText = btnCopy.textContent;
    btnCopy.textContent = "✅ TERSALIN!";
    btnCopy.style.backgroundColor = "#4ade80";

    setTimeout(() => {
        btnCopy.textContent = originalText;
        btnCopy.style.backgroundColor = "#38bdf8";
    }, 1500);
});

// Inisialisasi awal saat dimuat
generatePattern();
