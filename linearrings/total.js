//This file will calculate the total amount for a purchase 

const calcTotal = (numItems, price, currency) => {
    let total = numItems * price;
    console.log(
        "Price per earring: " ,currency, price,
    );
    console.log(
    "Total:             " ,currency, total,
    );
};

calcTotal(2, 20.00, "$");