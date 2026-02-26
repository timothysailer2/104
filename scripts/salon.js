// Salon Object Literal
let salon = {
    name: "Happy Paws Salon",
    hours: {
        open: "9:00 AM",
        close: "6:00 PM"
    },
    phone: "714-555-1234",
    address: {
        street: "123 Pet Street",
        city: "Costa Mesa",
        state: "CA",
        zip: "92626"
    }
};


// Display Salon Info
function displaySalonInfo(){

    let info = document.getElementById("salonInfo");

    info.innerText =
        salon.name + " | Open: " +
        salon.hours.open + " - " +
        salon.hours.close + " | Phone: " +
        salon.phone + " | Address: " +
        salon.address.street + ", " +
        salon.address.city + ", " +
        salon.address.state + " " +
        salon.address.zip;
}

window.onload = displaySalonInfo;