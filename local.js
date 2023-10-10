document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("myForm");
    const fullName = document.getElementById("fullName");
    const country = document.getElementById("country");
    const bio = document.getElementById("bio");
    const submitBtn = document.getElementById("submitBtn");

    fullName.value = localStorage.getItem("fullName") || "";
    country.value = localStorage.getItem("country") || "Belize";
    bio.value = localStorage.getItem("bio") || "";

    setInterval(function() {
        localStorage.setItem("fullName", fullName.value);
        localStorage.setItem("country", country.value);
        localStorage.setItem("bio", bio.value);
    }, 5000);

    submitBtn.addEventListener("click", function() {
        localStorage.setItem("fullName", fullName.value);
        localStorage.setItem("country", country.value);
        localStorage.setItem("bio", bio.value);
        alert("Datos guardados en localStorage");
    });
});
