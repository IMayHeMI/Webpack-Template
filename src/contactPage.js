export default function() {
    const content = document.getElementById("content");

    const ordersPhoneNumber = document.createElement("div");
    ordersPhoneNumber.classList.add("phoneNumber");
    ordersPhoneNumber.textContent = "For orders: +& (723)1337999";

    const supportPhoneNumber = document.createElement("div");
    supportPhoneNumber.classList.add("supportPhoneNumber");
    supportPhoneNumber.textContent = "For customer support: +& (723)1337888";

    const contactEmail = document.createElement("div");
    contactEmail.classList.add("contactEmail");
    contactEmail.textContent = "maplecorner@bestplace.com";

    const reviewHeader = document.createElement("div");
    reviewHeader.classList.add("reviewHeader");
    reviewHeader.textContent = "Leave your review here:";

    const review = document.createElement("textarea");
    review.classList.add("review");

    const submitButton = document.createElement("button");
    submitButton.id = "submitButton";
    submitButton.textContent = "Submit Review";

    submitButton.addEventListener("click", () => {
        review.value = "";
    })

    content.append(ordersPhoneNumber, supportPhoneNumber, contactEmail,reviewHeader, review, submitButton);
}