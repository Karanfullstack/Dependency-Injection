import PaymentFactory from "./PaymentFactory";

function PayMoney() {
    const payment = PaymentFactory.createPayment("paypal");
    if (payment) {
        payment.process();
    } else {
        console.log("Invalid payment method");
    }
}

PayMoney();
