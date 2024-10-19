import { IPaymentProcessor } from "./ocp";

export class CreditCardProessor implements IPaymentProcessor {
    async process(amount: number): Promise<boolean> {
        console.log(`Payment processing of ${amount} using credit card`);
        return true;
    }
}
