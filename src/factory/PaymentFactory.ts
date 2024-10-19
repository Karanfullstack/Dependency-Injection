import { CreditCardPayment } from "./Credit";
import { PaypalPayment } from "./Paypal";

export interface PaymentI {
    process(): void;
}

class PaymentFactory {
    static createPayment(type: string): PaymentI | null {
        if (type === "credit") return new CreditCardPayment();
        else if (type === "paypal") return new PaypalPayment();
        else return null;
    }
}

export default PaymentFactory;
