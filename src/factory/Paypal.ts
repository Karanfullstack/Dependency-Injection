import { PaymentI } from "./PaymentFactory";
export class PaypalPayment implements PaymentI {
    process(): void {
        console.log(`Payment processing of using paypal card`);
    }
}
