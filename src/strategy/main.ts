import { ApplyPayment } from "./ApplyPayment";
import { Google } from "./Google";
import { Paypal } from "./Paypal";

const google = new Google();
const paypal = new Paypal();
const payment = new ApplyPayment(google);
payment.applyPayment();
