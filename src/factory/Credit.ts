import { PaymentI } from "./PaymentFactory";

export class CreditCardPayment implements PaymentI {
    process(): void {
        console.log(`Payment processing of using credit card`);
    }
}
