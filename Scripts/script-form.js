(function () {
    emailjs.init("sg0cgujDuX3m50_fg");
})();

document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contact-form");
    const messageBox = document.getElementById("form-message");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        emailjs.sendForm('service_bbbxup9', 'template_cj628mr', this)
            .then(function () {
                // Message de succès
                showMessage("Message envoyé avec succès !", "success");
                form.reset();
            }, function (error) {
                // Message d'erreur
                showMessage("Une erreur s’est produite. Veuillez réessayer.", "error");
                console.error(error);
            });
    });

    function showMessage(text, type) {
        messageBox.textContent = text;
        messageBox.className = ''; // Réinitialiser les classes
        messageBox.classList.add(type === "success" ? "success" : "error");
        messageBox.classList.add("visible");
        messageBox.classList.remove("hidden");

        // Disparaît après 5 secondes
        setTimeout(() => {
            messageBox.classList.add("hidden");
        }, 5000);
    }
});
