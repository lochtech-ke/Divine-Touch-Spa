"use client";

import { Suspense, useState } from "react";
import Link from "next/link";
import styles from "./checkout.module.css";
import { useSearchParams } from "next/navigation";

function CheckoutContent() {
  const searchParams = useSearchParams();
  const amountParam = searchParams.get("amount");
  const typeParam = searchParams.get("type");

  const [paymentMethod, setPaymentMethod] = useState("card");
  const [isProcessing, setIsProcessing] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const amount = amountParam ? parseInt(amountParam) : 0;

  const handlePayment = (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      setIsSuccess(true);
    }, 2000);
  };

  if (isSuccess) {
    return (
      <div className={styles.container}>
        <div className={styles.successCard}>
          <div className={styles.successIcon}>✓</div>
          <h1>Payment Successful!</h1>
          <p>Thank you for your purchase. A confirmation email has been sent to you.</p>
          <Link href="/profile" className="btn btn-primary" style={{ marginTop: 'var(--space-md)' }}>
            View in Profile
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <nav className={styles.nav}>
        <div className="container flex justify-between items-center">
          <Link href="/" className={styles.logo}>Divine Touch</Link>
          <Link href="/vouchers" className="btn btn-secondary">Back to Vouchers</Link>
        </div>
      </nav>

      <main className="container" style={{ padding: 'var(--space-lg) 0' }}>
        <h1 className="text-center animate-fade-in" style={{ marginBottom: 'var(--space-lg)' }}>Checkout</h1>

        <div className={styles.checkoutLayout}>
          <div className={styles.paymentSection}>
            <h2>Payment Details</h2>
            <div className={styles.paymentMethods}>
              <button
                className={`${styles.methodBtn} ${paymentMethod === 'card' ? styles.selected : ''}`}
                onClick={() => setPaymentMethod('card')}
              >
                Credit Card
              </button>
              <button
                className={`${styles.methodBtn} ${paymentMethod === 'mpesa' ? styles.selected : ''}`}
                onClick={() => setPaymentMethod('mpesa')}
              >
                M-Pesa
              </button>
              <button
                className={`${styles.methodBtn} ${paymentMethod === 'paypal' ? styles.selected : ''}`}
                onClick={() => setPaymentMethod('paypal')}
              >
                PayPal
              </button>
            </div>

            <form onSubmit={handlePayment} className={styles.paymentForm}>
              {paymentMethod === 'card' && (
                <>
                  <div className={styles.formGroup}>
                    <label>Card Number</label>
                    <input type="text" className={styles.input} placeholder="0000 0000 0000 0000" required />
                  </div>
                  <div className={styles.formRow}>
                    <div className={styles.formGroup}>
                      <label>Expiry (MM/YY)</label>
                      <input type="text" className={styles.input} placeholder="12/26" required />
                    </div>
                    <div className={styles.formGroup}>
                      <label>CVC</label>
                      <input type="text" className={styles.input} placeholder="123" required />
                    </div>
                  </div>
                  <div className={styles.formGroup}>
                    <label>Cardholder Name</label>
                    <input type="text" className={styles.input} placeholder="Jane Doe" required />
                  </div>
                </>
              )}

              {paymentMethod === 'mpesa' && (
                <div className={styles.formGroup}>
                  <label>M-Pesa Phone Number</label>
                  <input type="text" className={styles.input} placeholder="07XX XXX XXX" required />
                  <p className={styles.helperText}>You will receive a prompt on your phone to complete the payment.</p>
                </div>
              )}

              {paymentMethod === 'paypal' && (
                <div className={styles.formGroup}>
                  <p className={styles.helperText}>You will be redirected to PayPal to securely complete your payment.</p>
                </div>
              )}

              <button
                type="submit"
                className={`btn btn-primary ${styles.payBtn} ${isProcessing ? styles.processing : ''}`}
                disabled={isProcessing}
              >
                {isProcessing ? "Processing..." : `Pay KES ${amount.toLocaleString()}`}
              </button>
            </form>
          </div>

          <div className={styles.orderSummary}>
            <h2>Order Summary</h2>
            <div className={styles.summaryItem}>
              <span>{typeParam === 'voucher' ? 'Gift Voucher' : 'Service Booking'}</span>
              <span>KES {amount.toLocaleString()}</span>
            </div>
            <div className={styles.summaryDivider}></div>
            <div className={styles.summaryItem} style={{ fontWeight: 700, fontSize: '1.2rem' }}>
              <span>Total</span>
              <span>KES {amount.toLocaleString()}</span>
            </div>
            <p className={styles.secureText}>
              🔒 Secure encrypted payment
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}

export default function CheckoutPage() {
  return (
    <Suspense fallback={
      <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <p>Loading checkout...</p>
      </div>
    }>
      <CheckoutContent />
    </Suspense>
  );
}
