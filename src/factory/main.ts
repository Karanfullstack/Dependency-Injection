import PaymentFactory from "./PaymentFactory";

function PayMoney() {
    const payment = PaymentFactory.createPayment("credit");
    if (payment) payment.process();
    else console.log("Invalid payment type");
}
PayMoney();
