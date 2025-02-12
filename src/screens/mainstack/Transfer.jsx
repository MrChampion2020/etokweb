import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import API_URL from './config';

export default function Transfer() {
  const [receiverId, setReceiverId] = useState('');
  const [amount, setAmount] = useState('');
  const [type, setType] = useState('coin');
  const navigate = useNavigate();

  const handleTransfer = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${API_URL}/api/transfers`, {
        receiverId,
        amount: parseFloat(amount),
        type
      });
      alert('Transfer successful');
      navigate('/dashboard');
    } catch (error) {
      console.error('Error making transfer:', error);
      alert('Transfer failed');
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Transfer</h1>
      <form onSubmit={handleTransfer} className="max-w-md mx-auto">
        <div className="mb-4">
          <label htmlFor="receiverId" className="block mb-2">Receiver ID</label>
          <input
            type="text"
            id="receiverId"
            value={receiverId}
            onChange={(e) => setReceiverId(e.target.value)}
            className="w-full px-3 py-2 border rounded"
            required
          />
        </div>
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
        <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600">
          Transfer
        </button>
      </form>
    </div>
  );
}