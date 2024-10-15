export interface PaymentI {
    applyPayment(): void;
}

export class ApplyPayment {
    constructor(private payment: PaymentI) {}
    applyPayment() {
        this.payment.applyPayment();
    }
    setPayment(payment: PaymentI) {
        this.payment = payment;
    }
}
