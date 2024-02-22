let selectedSeats = [];
let totalPrice = 0;
const maxSeats = 4;
const seatPrice = 550;

function ticketClick() {
    const bannerSection = document.getElementById("banner-section");
    const poribahanSection = document.getElementById("poribahan-section");
    const bounesSection = document.getElementById('bounes');
    bounesSection.classList.add('hidden');
    bannerSection.classList.add("hidden");
    poribahanSection.classList.remove("hidden");
    
}


function updateSelectedSeats(seat) {
    const index = selectedSeats.indexOf(seat);
    if (index > -1) {
        selectedSeats.splice(index, 1);
        document.getElementById(seat).style.backgroundColor = "#fff";
    } else {
        if (selectedSeats.length < maxSeats) {
            selectedSeats.push(seat);
            document.getElementById(seat).style.backgroundColor = "green";
        } else {
            alert("Error: You can only book up to 4 seats.");
        }
    }
    updateTotalPrice();
}

function updateTotalPrice() {
    totalPrice = selectedSeats.length * seatPrice;
    document.getElementById("total-price").textContent = totalPrice;
}

function updateGrandTotal(buttonId) {
    const couponCode = document.getElementById("coupon-code").value;
    let discount = 0;

    if (couponCode === "NEW15") {
        discount = totalPrice * 0.15;
    } else if (couponCode === "Couple 20") {
        discount = totalPrice * 0.20;
    }

    const grandTotal = totalPrice - discount;
    document.getElementById("grand-total").textContent = grandTotal;
}

// Event listeners for seat selection
const seatButtons = document.querySelectorAll(".btn.btn-bg");
seatButtons.forEach((button) => {
    button.addEventListener("click", (event) => {
        const seatId = event.target.id;
        updateSelectedSeats(seatId);
    });
});

// Event listener for applying coupon
const applyButton = document.getElementById("apply-btn");
applyButton.addEventListener("click", () => {
    updateGrandTotal("apply-btn");
});
