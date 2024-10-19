import { IPaymentProcessor } from "./ocp";

export class PaypalProcessor implements IPaymentProcessor {
    async process(amount: number): Promise<boolean> {
        console.log(`Payment processing of ${amount} using paypal`);
        return true;
    }
}
