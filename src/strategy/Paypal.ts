import { PaymentI } from "./ApplyPayment";

export class Paypal implements PaymentI {
    applyPayment(): void {
        console.log("Paying with Paypal");
    }
}
