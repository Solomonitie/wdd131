const currentYear = new Date().getFullYear();

// cspell:ignore currentyear
document.getElementById("currentyear").textContent = currentYear;

document.getElementById("lastModified").textContent =
    "Last Modification: " + document.lastModified;