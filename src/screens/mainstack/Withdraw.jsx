import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import API_URL from './config';

export default function Withdraw() {
  const [amount, setAmount] = useState('');
  const [type, setType] = useState('coin');
  const [paymentMethod, setPaymentMethod] = useState('bank');
  const [paymentDetails, setPaymentDetails] = useState('');
  const navigate = useNavigate();

  const handleWithdraw = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${API_URL}/api/withdrawal/request`, {
        amount: parseFloat(amount),
        type,
        paymentMethod,
        paymentDetails
      });
      alert('Withdrawal request submitted successfully');
      navigate('/dashboard');
    } catch (error) {
      console.error('Error submitting withdrawal request:', error);
      alert('Failed to submit withdrawal request');
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Withdraw Funds</h1>
      <form onSubmit={handleWithdraw} className="max-w-md mx-auto">
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
          <label htmlFor="type" className="block mb-2">Type</label>
          <select
            id="type"
            value={type}
            onChange={(e) => setType(e.target.value)}
            className="w-full px-3 py-2 border rounded"
          >
            <option value="coin">Coin</option>
            <option value="diamond">Diamond</option>
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
            <option value="bank">Bank Transfer</option>
            <option value="paypal">PayPal</option>
          </select>
        </div>
        <div className="mb-4">
          <label htmlFor="paymentDetails" className="block mb-2">Payment Details</label>
          <textarea
            id="paymentDetails"
            value={paymentDetails}
            onChange={(e) => setPaymentDetails(e.target.value)}
            className="w-full px-3 py-2 border rounded"
            required
          ></textarea>
        </div>
        <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600">
          Submit Withdrawal Request
        </button>
      </form>
    </div>
  );
}