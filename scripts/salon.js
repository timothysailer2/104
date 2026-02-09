// Salon object literal

const salon = { name: "The Fashion Pet", hours: { open: "9:00 AM", close: "5:00 PM" }, phone: "555-123-4567", address: { street: "123 Pet Lane", city: "San Diego", state: "CA", zip: "92101" } 

}; 
// Function to display salon info

 function displaySalonInfo() { 
    let info = salon.name + " - Open: " + salon.hours.open + ", Close: " + salon.hours.close + " | Phone: " + salon.phone + " | Address: " + salon.address.street + ", " + salon.address.city + ", " + salon.address.state + " " + salon.address.zip; document.getElementById("salonInfo").innerHTML = info;
 }