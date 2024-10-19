abstract class Shape {
    abstract getArea(): number;
}

class Rectangle extends Shape {
    constructor(private width: number, private height: number) {
        super();
    }
    getArea(): number {
        return this.width * this.height;
    }
    setWidth(width: number): void {
        this.width = width;
    }
    setHeight(height: number): void {
        this.height = height;
    }
}

class Square extends Shape {
    constructor(private size: number) {
        super();
    }
    getArea(): number {
        return this.size * this.size;
    }
    setSize(size: number): void {
        this.size = size;
    }
}

function PrintShapeArea(shape: Shape) {
    console.log(shape.getArea());
}

// PrintShapeArea(new Rectangle(10, 20));

interface PaymentResult {
    success: boolean;
    message: string;
}

interface IPaymentProcessor {
    process(amount: number): Promise<PaymentResult>;
}

class CreditCard implements IPaymentProcessor {
    async process(amount: number): Promise<PaymentResult> {
        console.log(`first payment of ${amount} processed using credit card`);
        return { success: true, message: "Payment processed successfully" };
    }
}

class Paypal implements IPaymentProcessor {
    async process(amount: number): Promise<PaymentResult> {
        console.log(`first payment of ${amount} processed using paypal`);
        return { success: true, message: "Payment processed successfully" };
    }
}

class ApplePay implements IPaymentProcessor {
    async process(amount: number): Promise<PaymentResult> {
        if (amount < 100) {
            return { success: false, message: "Payment failed" };
        }
        console.log(`first payment of ${amount} processed using apple pay`);
        return { success: true, message: "Payment processed successfully" };
    }
}

class PaymentProcessor {
    constructor(private processor: IPaymentProcessor) {}
    async processPayment(amount: number): Promise<PaymentResult> {
        const result = await this.processor.process(amount);
        console.log(result);
        return result;
    }
}

const paypal = new Paypal();
const credit = new CreditCard();
const apple = new ApplePay();

const payment = new PaymentProcessor(apple);
payment.processPayment(10);
