/* Fallowed Code Institute video from Rossie */
function sendMail(contactForm) {
    emailjs.send("carwash", "fullValet", {
        "from_name": contactForm.name.value,
        "from_email": contactForm.email.value,
        "from_mobile": contactForm.mobile.value,
        "from_car": contactForm.car.value
    })
    .then(
        function(response) {
            alert("Email Sent", response);
        },
        function(error) {
            alert("Email Not Sent", error);
        }
    );
    return false;
}