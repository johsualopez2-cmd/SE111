function calculatepay() {
    const hourlyPay = Number(prompt("Enter hourly pay:"));
    const hoursWorked = Number(prompt("Enter Hours worked per week:"));
    const weeks = Number(prompt("Enter Number of weeks worked:"));
    const taxrate = 0.20;

    const grosspay = hourlyPay * hoursWorked * weeks;
    const uncleSamsShare = grosspay * taxrate;
    const netpay = grosspay - uncleSamsShare

    const message =
        "Gross Pay: $" + grosspay.toFixed(2) + "\n" +
        "uncle Sam's Share: $" + uncleSamsShare.toFixed(2) + "\n" +
        "Net pay; $" + netpay.toFixed(2);
    alert(message);

    console.log("Gross Pay: $" + grosspay.toFixed(2));
    console.log("uncle Sam's Share: $" + uncleSamsShare.toFixed(2));
    console.log("Net pay; $" + netpay.toFixed(2));

    document.getElementById("output").textContent = message;
}

calculatepay();