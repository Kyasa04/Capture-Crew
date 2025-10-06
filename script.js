// script.js

// Open booking form when selecting package
document.querySelectorAll(".package button").forEach((btn) => {
  btn.addEventListener("click", () => {
    const packageName = btn.parentElement.querySelector("h3").innerText;
    document.getElementById("booking-package").value = packageName;
    document.querySelector(".booking-modal").style.display = "flex";
  });
});

// Close modal
document.querySelectorAll(".close-modal").forEach((btn) => {
  btn.addEventListener("click", () => {
    document.querySelector(".booking-modal").style.display = "none";
  });
});

// Handle booking form
document.getElementById("booking-form").addEventListener("submit", (e) => {
  e.preventDefault();
  alert("✅ Booking confirmed! We will contact you shortly.");
  document.querySelector(".booking-modal").style.display = "none";
  e.target.reset();
});
