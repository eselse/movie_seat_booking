const container = document.querySelector(".container");
const seats = document.querySelectorAll(".row .seat:not(.occupied)");
const total = document.getElementById("total");
const count = document.getElementById("count");
const movieSelect = document.getElementById("movie");
// const ticketPrice = +movieSelect.value;
let ticketPrice = parseInt(movieSelect.value);

// Update total and count
function updateSelectedCount() {
  const selectedSeats = document.querySelectorAll(".row .seat.selected");

  //   Copy selected seats into arr
  //   Map through array
  //   return a new array

  const selectedSeatsCount = selectedSeats.length;
  count.innerText = selectedSeatsCount;
  total.innerText = ticketPrice * selectedSeatsCount;
}

// Movie select event
movieSelect.addEventListener("change", (e) => {
  // ticketPrice = +e.target.value
  ticketPrice = parseInt(e.target.value);
  updateSelectedCount();
});

// Seat click event
container.addEventListener("click", (e) => {
  if (
    e.target.classList.contains("seat") &&
    !e.target.classList.contains("occupied")
  ) {
    e.target.classList.toggle("selected");

    updateSelectedCount();
  }
});
