document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("myForm");
    const fullName = document.getElementById("fullName");
    const country = document.getElementById("country");
    const bio = document.getElementById("bio");
    const submitBtn = document.getElementById("submitBtn");

    fullName.value = sessionStorage.getItem("fullName") || "";
    country.value = sessionStorage.getItem("country") || "Belize";
    bio.value = sessionStorage.getItem("bio") || "";

    setInterval(function() {
        sessionStorage.setItem("fullName", fullName.value);
        sessionStorage.setItem("country", country.value);
        sessionStorage.setItem("bio", bio.value);
    }, 5000);

    submitBtn.addEventListener("click", function() {
        sessionStorage.setItem("fullName", fullName.value);
        sessionStorage.setItem("country", country.value);
        sessionStorage.setItem("bio", bio.value);
        alert("Datos guardados en sessionStorage");
    });
});
