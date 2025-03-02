function show() {
    console.log("It works");

    // Get birthdate value and convert it to a Date object
    let birthdateValue = document.getElementById("birthdate").value;
    let birthdate = new Date(birthdateValue);
    
    // Get current date value and convert it to a Date object
    let todayValue = document.getElementById("dateInput").value;
    let today = new Date(todayValue);

    // Check if birthdate is valid
    if (isNaN(birthdate.getTime())) {
        console.error("Invalid birthdate input");
        alert("Please select a valid birthdate.");
        return;
    }

    // Calculate the difference in years, months, and days
    let ageYears = today.getFullYear() - birthdate.getFullYear();
    let ageMonths = today.getMonth() - birthdate.getMonth();
    let ageDays = today.getDate() - birthdate.getDate();

    // Adjust for negative month/day differences
    if (ageDays < 0) {
        ageMonths--; // Borrow a month
        let lastMonth = new Date(today.getFullYear(), today.getMonth(), 0);
        ageDays += lastMonth.getDate();
    }
    if (ageMonths < 0) {
        ageYears--;
        ageMonths += 12;
    }

    // Display the result
    let message = `You are ${ageYears} years, ${ageMonths} months, and ${ageDays} days old.`;
    
    document.getElementById("output").innerHTML = message;
    console.log(message);
}
function setMaxDate() {
    let today = new Date().toISOString().split("T")[0];
    document.getElementById("birthdate").setAttribute("max", today);
    document.getElementById("dateInput").value = today; // Set current date in dateInput field
}
