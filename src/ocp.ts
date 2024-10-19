// Open-close principle

import { CreditCardProessor } from "./credit";
import { PaypalProcessor } from "./paypal";

export interface IPaymentProcessor {
    process(amount: number): Promise<boolean>;
}

class PaymentProcessor {
    constructor(private processor: IPaymentProcessor) {}
    async processPayment(amount: number) {
        await this.processor.process(amount);
        return true;
    }
}
const paypal = new PaypalProcessor();
const credit = new CreditCardProessor();
const payment = new PaymentProcessor(credit);
payment.processPayment(100);
