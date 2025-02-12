import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import API_URL from './config';

export default function Call() {
  const [callStatus, setCallStatus] = useState('initiating');
  const [duration, setDuration] = useState(0);
  const [callType, setCallType] = useState('audio');
  const { userId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    let timer;
    if (callStatus === 'ongoing') {
      timer = setInterval(() => {
        setDuration((prevDuration) => prevDuration + 1);
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [callStatus]);

  const initiateCall = async () => {
    try {
      const response = await axios.post(`${API_URL}/api/calls/initiate`, {
        calleeId: userId,
        callType
      });
      setCallStatus('ringing');
      // Here you would typically set up WebRTC connection
    } catch (error) {
      console.error('Error initiating call:', error);
      setCallStatus('failed');
    }
  };

  const answerCall = async () => {
    try {
      await axios.post(`${API_URL}/api/calls/${userId}/answer`);
      setCallStatus('ongoing');
    } catch (error) {
      console.error('Error answering call:', error);
      setCallStatus('failed');
    }
  };

  const endCall = async () => {
    try {
      await axios.post(`${API_URL}/api/calls/${userId}/end`);
      setCallStatus('ended');
      navigate('/dashboard');
    } catch (error) {
      console.error('Error ending call:', error);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8 flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-6">Call</h1>
      <div className="bg-white shadow rounded-lg p-6 w-full max-w-md">
        <div className="mb-4">
          <p className="text-xl font-semibold">Status: {callStatus}</p>
          {callStatus === 'ongoing' && (
            <p className="text-lg">Duration: {Math.floor(duration / 60)}:{duration % 60 < 10 ? '0' : ''}{duration % 60}</p>
          )}
        </div>
        {callStatus === 'initiating' && (
          <div>
            <select
              value={callType}
              onChange={(e) => setCallType(e.target.value)}
              className="w-full px-3 py-2 border rounded mb-4"
            >
              <option value="audio">Audio Call</option>
              <option value="video">Video Call</option>
            </select>
            <button onClick={initiateCall} className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600">
              Start Call
            </button>
          </div>
        )}
        {callStatus === 'ringing' && (
          <button onClick={answerCall} className="w-full bg-green-500 text-white py-2 rounded hover:bg-green-600">
            Answer Call
          </button>
        )}
        {(callStatus === 'ongoing' || callStatus === 'ringing') && (
          <button onClick={endCall} className="w-full bg-red-500 text-white py-2 rounded hover:bg-red-600 mt-4">
            End Call
          </button>
        )}
      </div>
    </div>
  );
}