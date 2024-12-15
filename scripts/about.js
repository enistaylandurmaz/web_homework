document.addEventListener("DOMContentLoaded", () => {
    const stars = document.querySelectorAll(".star");

    stars.forEach((star, index) => {
        setTimeout(() => {
            star.classList.add("animate");
            setTimeout(() => star.classList.remove("animate"), 500);
        }, index * 300);
    });
});
