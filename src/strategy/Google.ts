import { PaymentI } from "./ApplyPayment";

export class Google implements PaymentI {
    applyPayment(): void {
        console.log("Paying with Google");
    }
}
