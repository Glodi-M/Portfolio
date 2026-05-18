document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contact-form");
    const messageBox = document.getElementById("form-message");

    if (form) {
        form.addEventListener("submit", function (event) {
            event.preventDefault();

            const formData = new FormData(form);

            fetch("/", {
                method: "POST",
                headers: { "Content-Type": "application/x-www-form-urlencoded" },
                body: new URLSearchParams(formData).toString()
            })
            .then(function (response) {
                if (response.ok) {
                    showMessage("Message envoyé avec succès ! Je vous réponds très vite.", "success");
                    form.reset();
                } else {
                    showMessage("Une erreur s’est produite. Veuillez réessayer.", "error");
                }
            })
            .catch(function (error) {
                showMessage("Une erreur s’est produite. Veuillez vérifier votre connexion.", "error");
                console.error(error);
            });
        });
    }

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
