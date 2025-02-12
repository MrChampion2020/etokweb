import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import API_URL from './config';

export default function Recharge() {
  const [amount, setAmount] = useState('');
  const [currency, setCurrency] = useState('USD');
  const [paymentMethod, setPaymentMethod] = useState('stripe');
  const navigate = useNavigate();

  const handleRecharge = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${API_URL}/api/recharge`, {
        amount: parseFloat(amount),
        currency,
        paymentMethod
      });
      if (paymentMethod === 'stripe') {
        // Redirect to Stripe checkout
        window.location.href = response.data.checkoutUrl;
      } else if (paymentMethod === 'flutterwave') {
        // Redirect to Flutterwave checkout
        window.location.href = response.data.paymentLink;
      }
    } catch (error) {
      console.error('Error initiating recharge:', error);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Recharge Coins</h1>
      <form onSubmit={handleRecharge} className="max-w-md mx-auto">
        <div className="mb-4">
          <label htmlFor="amount" className="block mb-2">Amount</label>
          <input
            type="number"
            id="amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="w-full px-3 py-2 border rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="currency" className="block mb-2">Currency</label>
          <select
            id="currency"
            value={currency}
            onChange={(e) => setCurrency(e.target.value)}
            className="w-full px-3 py-2 border rounded"
          >
            <option value="USD">USD</option>
            <option value="NGN">NGN</option>
          </select>
        </div>
        <div className="mb-4">
          <label htmlFor="paymentMethod" className="block mb-2">Payment Method</label>
          <select
            id="paymentMethod"
            value={paymentMethod}
            onChange={(e) => setPaymentMethod(e.target.value)}
            className="w-full px-3 py-2 border rounded"
          >
            <option value="stripe">Stripe</option>
            <option value="flutterwave">Flutterwave</option>
          </select>
        </div>
        <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600">
          Proceed to Payment
        </button>
      </form>
    </div>
  );
}