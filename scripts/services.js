// Service constructor
function Service(name, price, description){
    this.name = name;
    this.price = price;
    this.description = description;
}

// Load services from localStorage or empty array
let services = JSON.parse(localStorage.getItem("services")) || [];

// Display services in table
function displayServices() {
    let tableBody = $("#servicesTableBody");
    tableBody.empty(); // clear table

    services.forEach((service, index) => {
        tableBody.append(`
            <tr>
                <td>${service.name}</td>
                <td>$${service.price}</td>
                <td>${service.description}</td>
                <td>
                    <button class="btn btn-danger btn-sm" onclick="deleteService(${index})">
                        Delete
                    </button>
                </td>
            </tr>
        `);
    });
}

// Initial table population
displayServices();

// Register service with validation
$("#registerServiceBtn").click(function(){

    let isValid = true;

    // remove previous error borders
    $("#serviceForm input").removeClass("is-invalid");

    // get values
    let name = $("#serviceName").val().trim();
    let price = $("#servicePrice").val().trim();
    let description = $("#serviceDescription").val().trim();

    // validate inputs
    if(name === ""){
        $("#serviceName").addClass("is-invalid");
        isValid = false;
    }
    if(price === ""){
        $("#servicePrice").addClass("is-invalid");
        isValid = false;
    }
    if(description === ""){
        $("#serviceDescription").addClass("is-invalid");
        isValid = false;
    }

    if(!isValid) return;

    // Create new service
    let newService = new Service(name, price, description);
    services.push(newService);

    // Save to localStorage
    localStorage.setItem("services", JSON.stringify(services));

    // Refresh table
    displayServices();

    // Clear form and remove red borders
    $("#serviceForm")[0].reset();
    $("#serviceForm input").removeClass("is-invalid");
});

// Delete service function
function deleteService(index){
    services.splice(index, 1);
    localStorage.setItem("services", JSON.stringify(services));
    displayServices();
}