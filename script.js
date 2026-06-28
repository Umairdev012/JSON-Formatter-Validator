// =========================
// JSON Formatter & Validator
// =========================

const input = document.getElementById("input");
const output = document.getElementById("output");

const formatBtn = document.getElementById("formatBtn");
const validateBtn = document.getElementById("validateBtn");
const copyBtn = document.getElementById("copyBtn");
const clearBtn = document.getElementById("clearBtn");
const status = document.getElementById("status");

// =========================
// Format JSON
// =========================

formatBtn.addEventListener("click", () => {

    const text = input.value.trim();

    if (!text) {
        status.innerText = "Please enter JSON";
        status.style.color = "red";
        return;
    }

    try {
        const obj = JSON.parse(text);
        output.value = JSON.stringify(obj, null, 4);

        status.innerText = "Valid JSON formatted successfully";
        status.style.color = "green";

    } catch (err) {

        status.innerText = "Invalid JSON: " + err.message;
        status.style.color = "red";
    }

});

// =========================
// Validate JSON
// =========================

validateBtn.addEventListener("click", () => {

    const text = input.value.trim();

    if (!text) {
        status.innerText = "Please enter JSON";
        status.style.color = "red";
        return;
    }

    try {
        JSON.parse(text);

        status.innerText = "Valid JSON ✔";
        status.style.color = "green";

    } catch (err) {

        status.innerText = "Invalid JSON ✖";
        status.style.color = "red";
    }

});

// =========================
// Copy Output
// =========================

copyBtn.addEventListener("click", async () => {

    if (!output.value) return;

    await navigator.clipboard.writeText(output.value);

    status.innerText = "Copied to clipboard ✔";
    status.style.color = "green";
});

// =========================
// Clear
// =========================

clearBtn.addEventListener("click", () => {

    input.value = "";
    output.value = "";
    status.innerText = "";
});