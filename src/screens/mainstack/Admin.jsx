import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import API_URL from './config';

export default function AdminDashboard() {
  const [users, setUsers] = useState([]);
  const [withdrawals, setWithdrawals] = useState([]);
  const [recharges, setRecharges] = useState([]);
  const [transfers, setTransfers] = useState([]);
  const [calls, setCalls] = useState([]);
  const [activeTab, setActiveTab] = useState('users');
  const [postText, setPostText] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('adminToken');
    if (!token) {
      navigate('/admin/login');
    } else {
      fetchData();
    }
  }, [navigate]);

  const fetchData = async () => {
    try {
      const [usersRes, withdrawalsRes, rechargesRes, transfersRes, callsRes] = await Promise.all([
        axios.get(`${API_URL}/api/admin/users`),
        axios.get(`${API_URL}/api/admin/withdrawals`),
        axios.get(`${API_URL}/api/admin/recharges`),
        axios.get(`${API_URL}/api/admin/transfers`),
        axios.get(`${API_URL}/api/admin/calls`)
      ]);
      setUsers(usersRes.data);
      setWithdrawals(withdrawalsRes.data);
      setRecharges(rechargesRes.data);
      setTransfers(transfersRes.data);
      setCalls(callsRes.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleUserAction = async (userId, action) => {
    try {
      await axios.patch(`${API_URL}/api/admin/users/${userId}`, { action });
      fetchData();
    } catch (error) {
      console.error('Error updating user:', error);
    }
  };

  const handleWithdrawalAction = async (withdrawalId, action) => {
    try {
      await axios.patch(`${API_URL}/api/admin/withdrawals/${withdrawalId}`, { action });
      fetchData();
    } catch (error) {
      console.error('Error updating withdrawal:', error);
    }
  };

  const handleCreatePost = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${API_URL}/api/posts`, {
        text: postText,
        userId: 'admin', // You might want to create a special admin user ID
        userName: 'Admin'
      }, {
        headers: { 'Authorization': `Bearer ${localStorage.getItem('adminToken')}` }
      });
      alert('Post created successfully');
      setPostText('');
    } catch (error) {
      console.error('Error creating post:', error);
      alert('Failed to create post');
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>
      <div className="flex mb-4 space-x-2 overflow-x-auto">
        {['users', 'withdrawals', 'recharges', 'transfers', 'calls', 'create-post'].map((tab) => (
          <button
            key={tab}
            className={`px-4 py-2 rounded ${activeTab === tab ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
          </button>
        ))}
      </div>
      <div className="overflow-x-auto">
        {activeTab === 'users' && (
          <table className="min-w-full bg-white">
            <thead>
              <tr>
                <th className="px-4 py-2">Name</th>
                <th className="px-4 py-2">Email</th>
                <th className="px-4 py-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user._id}>
                  <td className="border px-4 py-2">{user.firstName} {user.lastName}</td>
                  <td className="border px-4 py-2">{user.email}</td>
                  <td className="border px-4 py-2">
                    <button onClick={() => handleUserAction(user._id, 'activate')} className="bg-green-500 text-white px-2 py-1 rounded mr-2">Activate</button>
                    <button onClick={() => handleUserAction(user._id, 'deactivate')} className="bg-yellow-500 text-white px-2 py-1 rounded mr-2">Deactivate</button>
                    <button onClick={() => handleUserAction(user._id, 'delete')} className="bg-red-500 text-white px-2 py-1 rounded">Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
        {activeTab === 'withdrawals' && (
          <table className="min-w-full bg-white">
            <thead>
              <tr>
                <th className="px-4 py-2">User</th>
                <th className="px-4 py-2">Amount</th>
                <th className="px-4 py-2">Status</th>
                <th className="px-4 py-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {withdrawals.map((withdrawal) => (
                <tr key={withdrawal._id}>
                  <td className="border px-4 py-2">{withdrawal.userId.firstName} {withdrawal.userId.lastName}</td>
                  <td className="border px-4 py-2">{withdrawal.amount}</td>
                  <td className="border px-4 py-2">{withdrawal.status}</td>
                  <td className="border px-4 py-2">
                    <button onClick={() => handleWithdrawalAction(withdrawal._id, 'approve')} className="bg-green-500 text-white px-2 py-1 rounded mr-2">Approve</button>
                    <button onClick={() => handleWithdrawalAction(withdrawal._id, 'reject')} className="bg-red-500 text-white px-2 py-1 rounded">Reject</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
        {activeTab === 'recharges' && (
          <table className="min-w-full bg-white">
            <thead>
              <tr>
                <th className="px-4  py-2">User</th>
                <th className="px-4 py-2">Amount</th>
                <th className="px-4 py-2">Currency</th>
                <th className="px-4 py-2">Status</th>
              </tr>
            </thead>
            <tbody>
              {recharges.map((recharge) => (
                <tr key={recharge._id}>
                  <td className="border px-4 py-2">{recharge.userId.firstName} {recharge.userId.lastName}</td>
                  <td className="border px-4 py-2">{recharge.amount}</td>
                  <td className="border px-4 py-2">{recharge.currency}</td>
                  <td className="border px-4 py-2">{recharge.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
        {activeTab === 'transfers' && (
          <table className="min-w-full bg-white">
            <thead>
              <tr>
                <th className="px-4 py-2">Sender</th>
                <th className="px-4 py-2">Receiver</th>
                <th className="px-4 py-2">Amount</th>
                <th className="px-4 py-2">Type</th>
                <th className="px-4 py-2">Status</th>
              </tr>
            </thead>
            <tbody>
              {transfers.map((transfer) => (
                <tr key={transfer._id}>
                  <td className="border px-4 py-2">{transfer.senderId.firstName} {transfer.senderId.lastName}</td>
                  <td className="border px-4 py-2">{transfer.receiverId.firstName} {transfer.receiverId.lastName}</td>
                  <td className="border px-4 py-2">{transfer.amount}</td>
                  <td className="border px-4 py-2">{transfer.type}</td>
                  <td className="border px-4 py-2">{transfer.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
        {activeTab === 'calls' && (
          <table className="min-w-full bg-white">
            <thead>
              <tr>
                <th className="px-4 py-2">Caller</th>
                <th className="px-4 py-2">Callee</th>
                <th className="px-4 py-2">Duration</th>
                <th className="px-4 py-2">Type</th>
                <th className="px-4 py-2">Status</th>
              </tr>
            </thead>
            <tbody>
              {calls.map((call) => (
                <tr key={call._id}>
                  <td className="border px-4 py-2">{call.callerId.firstName} {call.callerId.lastName}</td>
                  <td className="border px-4 py-2">{call.calleeId.firstName} {call.calleeId.lastName}</td>
                  <td className="border px-4 py-2">{call.duration} seconds</td>
                  <td className="border px-4 py-2">{call.type}</td>
                  <td className="border px-4 py-2">{call.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
        {activeTab === 'create-post' && (
          <form onSubmit={handleCreatePost} className="max-w-md mx-auto">
            <div className="mb-4">
              <label htmlFor="postText" className="block mb-2 font-bold">Post Content</label>
              <textarea
                id="postText"
                value={postText}
                onChange={(e) => setPostText(e.target.value)}
                className="w-full px-3 py-2 border rounded"
                required
              ></textarea>
            </div>
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
              Create Post
            </button>
          </form>
        )}
      </div>
    </div>
  );
}


// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
// import API_URL from './config';


// export default function AdminDashboard() {
//   const [users, setUsers] = useState([]);
//   const [withdrawals, setWithdrawals] = useState([]);
//   const [recharges, setRecharges] = useState([]);
//   const [transfers, setTransfers] = useState([]);
//   const [calls, setCalls] = useState([]);
//   const [activeTab, setActiveTab] = useState('users');
//   const navigate = useNavigate();

//   useEffect(() => {
//     const token = localStorage.getItem('adminToken');
//     if (!token) {
//       navigate('/admin/login');
//     } else {
//       fetchData();
//     }
//   }, [navigate]);

//   const fetchData = async () => {
//     try {
//       const [usersRes, withdrawalsRes, rechargesRes, transfersRes, callsRes] = await Promise.all([
//         axios.get(`${API_URL}/api/admin/users`),
//         axios.get(`${API_URL}/api/admin/withdrawals`),
//         axios.get(`${API_URL}/api/admin/recharges`),
//         axios.get(`${API_URL}/api/admin/transfers`),
//         axios.get(`${API_URL}/api/admin/calls`)
//       ]);
//       setUsers(usersRes.data);
//       setWithdrawals(withdrawalsRes.data);
//       setRecharges(rechargesRes.data);
//       setTransfers(transfersRes.data);
//       setCalls(callsRes.data);
//     } catch (error) {
//       console.error('Error fetching data:', error);
//     }
//   };

//   const handleUserAction = async (userId, action) => {
//     try {
//       await axios.patch(`${API_URL}/api/admin/users/${userId}`, { action });
//       fetchData();
//     } catch (error) {
//       console.error('Error updating user:', error);
//     }
//   };

//   const handleWithdrawalAction = async (withdrawalId, action) => {
//     try {
//       await axios.patch(`${API_URL}/api/admin/withdrawals/${withdrawalId}`, { action });
//       fetchData();
//     } catch (error) {
//       console.error('Error updating withdrawal:', error);
//     }
//   };

//   return (
//     <div className="container mx-auto px-4 py-8">
//       <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>
//       <div className="flex mb-4 space-x-2 overflow-x-auto">
//         {['users', 'withdrawals', 'recharges', 'transfers', 'calls'].map((tab) => (
//           <button
//             key={tab}
//             className={`px-4 py-2 rounded ${activeTab === tab ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
//             onClick={() => setActiveTab(tab)}
//           >
//             {tab.charAt(0).toUpperCase() + tab.slice(1)}
//           </button>
//         ))}
//       </div>
//       <div className="overflow-x-auto">
//         {activeTab === 'users' && (
//           <table className="min-w-full bg-white">
//             <thead>
//               <tr>
//                 <th className="px-4 py-2">Name</th>
//                 <th className="px-4 py-2">Email</th>
//                 <th className="px-4 py-2">Actions</th>
//               </tr>
//             </thead>
//             <tbody>
//               {users.map((user) => (
//                 <tr key={user._id}>
//                   <td className="border px-4 py-2">{user.firstName} {user.lastName}</td>
//                   <td className="border px-4 py-2">{user.email}</td>
//                   <td className="border px-4 py-2">
//                     <button onClick={() => handleUserAction(user._id, 'activate')} className="bg-green-500 text-white px-2 py-1 rounded mr-2">Activate</button>
//                     <button onClick={() => handleUserAction(user._id, 'deactivate')} className="bg-yellow-500 text-white px-2 py-1 rounded mr-2">Deactivate</button>
//                     <button onClick={() => handleUserAction(user._id, 'delete')} className="bg-red-500 text-white px-2 py-1 rounded">Delete</button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         )}
//         {activeTab === 'withdrawals' && (
//           <table className="min-w-full bg-white">
//             <thead>
//               <tr>
//                 <th className="px-4 py-2">User</th>
//                 <th className="px-4 py-2">Amount</th>
//                 <th className="px-4 py-2">Status</th>
//                 <th className="px-4 py-2">Actions</th>
//               </tr>
//             </thead>
//             <tbody>
//               {withdrawals.map((withdrawal) => (
//                 <tr key={withdrawal._id}>
//                   <td className="border px-4 py-2">{withdrawal.userId.firstName} {withdrawal.userId.lastName}</td>
//                   <td className="border px-4 py-2">{withdrawal.amount}</td>
//                   <td className="border px-4 py-2">{withdrawal.status}</td>
//                   <td className="border px-4 py-2">
//                     <button onClick={() => handleWithdrawalAction(withdrawal._id, 'approve')} className="bg-green-500 text-white px-2 py-1 rounded mr-2">Approve</button>
//                     <button onClick={() => handleWithdrawalAction(withdrawal._id, 'reject')} className="bg-red-500 text-white px-2 py-1 rounded">Reject</button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         )}
//         {activeTab === 'recharges' && (
//           <table className="min-w-full bg-white">
//             <thead>
//               <tr>
//                 <th className="px-4 py-2">User</th>
//                 <th className="px-4 py-2">Amount</th>
//                 <th className="px-4 py-2">Currency</th>
//                 <th className="px-4 py-2">Status</th>
//               </tr>
//             </thead>
//             <tbody>
//               {recharges.map((recharge) => (
//                 <tr key={recharge._id}>
//                   <td className="border px-4 py-2">{recharge.userId.firstName} {recharge.userId.lastName}</td>
//                   <td className="border px-4 py-2">{recharge.amount}</td>
//                   <td className="border px-4 py-2">{recharge.currency}</td>
//                   <td className="border px-4 py-2">{recharge.status}</td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         )}
//         {activeTab === 'transfers' && (
//           <table className="min-w-full bg-white">
//             <thead>
//               <tr>
//                 <th className="px-4 py-2">Sender</th>
//                 <th className="px-4 py-2">Receiver</th>
//                 <th className="px-4 py-2">Amount</th>
//                 <th className="px-4 py-2">Type</th>
//                 <th className="px-4 py-2">Status</th>
//               </tr>
//             </thead>
//             <tbody>
//               {transfers.map((transfer) => (
//                 <tr key={transfer._id}>
//                   <td className="border px-4 py-2">{transfer.senderId.firstName} {transfer.senderId.lastName}</td>
//                   <td className="border px-4 py-2">{transfer.receiverId.firstName} {transfer.receiverId.lastName}</td>
//                   <td className="border px-4 py-2">{transfer.amount}</td>
//                   <td className="border px-4 py-2">{transfer.type}</td>
//                   <td className="border px-4 py-2">{transfer.status}</td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         )}
//         {activeTab === 'calls' && (
//           <table className="min-w-full bg-white">
//             <thead>
//               <tr>
//                 <th className="px-4 py-2">Caller</th>
//                 <th className="px-4 py-2">Callee</th>
//                 <th className="px-4 py-2">Duration</th>
//                 <th className="px-4 py-2">Type</th>
//                 <th className="px-4 py-2">Status</th>
//               </tr>
//             </thead>
//             <tbody>
//               {calls.map((call) => (
//                 <tr key={call._id}>
//                   <td className="border px-4 py-2">{call.callerId.firstName} {call.callerId.lastName}</td>
//                   <td className="border px-4 py-2">{call.calleeId.firstName} {call.calleeId.lastName}</td>
//                   <td className="border px-4 py-2">{call.duration} seconds</td>
//                   <td className="border px-4 py-2">{call.type}</td>
//                   <td className="border px-4 py-2">{call.status}</td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         )}
//       </div>
//     </div>
//   );
// }


// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
// import API_URL from './config';

// export default function AdminDashboard() {
//   const [users, setUsers] = useState([]);
//   const [withdrawals, setWithdrawals] = useState([]);
//   const [recharges, setRecharges] = useState([]);
//   const [transfers, setTransfers] = useState([]);
//   const [calls, setCalls] = useState([]);
//   const [activeTab, setActiveTab] = useState('users');
//   const [postText, setPostText] = useState('');
//   const navigate = useNavigate();

//   useEffect(() => {
//     const token = localStorage.getItem('adminToken');
//     if (!token) {
//       navigate('/admin/login');
//     } else {
//       fetchData();
//     }
//   }, [navigate]);

//   const fetchData = async () => {
//     try {
//       const [usersRes, withdrawalsRes, rechargesRes, transfersRes, callsRes] = await Promise.all([
//         axios.get(`${API_URL}/api/admin/users`),
//         axios.get(`${API_URL}/api/admin/withdrawals`),
//         axios.get(`${API_URL}/api/admin/recharges`),
//         axios.get(`${API_URL}/api/admin/transfers`),
//         axios.get(`${API_URL}/api/admin/calls`)
//       ]);
//       setUsers(usersRes.data);
//       setWithdrawals(withdrawalsRes.data);
//       setRecharges(rechargesRes.data);
//       setTransfers(transfersRes.data);
//       setCalls(callsRes.data);
//     } catch (error) {
//       console.error('Error fetching data:', error);
//     }
//   };

//   const handleUserAction = async (userId, action) => {
//     try {
//       await axios.patch(`${API_URL}/api/admin/users/${userId}`, { action });
//       fetchData();
//     } catch (error) {
//       console.error('Error updating user:', error);
//     }
//   };

//   const handleWithdrawalAction = async (withdrawalId, action) => {
//     try {
//       await axios.patch(`${API_URL}/api/admin/withdrawals/${withdrawalId}`, { action });
//       fetchData();
//     } catch (error) {
//       console.error('Error updating withdrawal:', error);
//     }
//   };

//   const handleCreatePost = async (e) => {
//     e.preventDefault();
//     try {
//       await axios.post(`${API_URL}/api/posts`, {
//         text: postText,
//         userId: 'admin', // You might want to create a special admin user ID
//         userName: 'Admin'
//       }, {
//         headers: { 'Authorization': `Bearer ${localStorage.getItem('adminToken')}` }
//       });
//       alert('Post created successfully');
//       setPostText('');
//     } catch (error) {
//       console.error('Error creating post:', error);
//       alert('Failed to create post');
//     }
//   };

//   return (
//     <div className="container mx-auto px-4 py-8">
//       <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>
//       <div className="flex mb-4 space-x-2 overflow-x-auto">
//         {['users', 'withdrawals', 'recharges', 'transfers', 'calls', 'create-post'].map((tab) => (
//           <button
//             key={tab}
//             className={`px-4 py-2 rounded ${activeTab === tab ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
//             onClick={() => setActiveTab(tab)}
//           >
//             {tab.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
//           </button>
//         ))}
//       </div>
//       <div className="overflow-x-auto">
//         {activeTab === 'users' && (
//           <table className="min-w-full bg-white">
//             <thead>
//               <tr>
//                 <th className="px-4 py-2">Name</th>
//                 <th className="px-4 py-2">Email</th>
//                 <th className="px-4 py-2">Actions</th>
//               </tr>
//             </thead>
//             <tbody>
//               {users.map((user) => (
//                 <tr key={user._id}>
//                   <td className="border px-4 py-2">{user.firstName} {user.lastName}</td>
//                   <td className="border px-4 py-2">{user.email}</td>
//                   <td className="border px-4 py-2">
//                     <button onClick={() => handleUserAction(user._id, 'activate')} className="bg-green-500 text-white px-2 py-1 rounded mr-2">Activate</button>
//                     <button onClick={() => handleUserAction(user._id, 'deactivate')} className="bg-yellow-500 text-white px-2 py-1 rounded mr-2">Deactivate</button>
//                     <button onClick={() => handleUserAction(user._id, 'delete')} className="bg-red-500 text-white px-2 py-1 rounded">Delete</button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         )}
//         {activeTab === 'withdrawals' && (
//           <table className="min-w-full bg-white">
//             <thead>
//               <tr>
//                 <th className="px-4 py-2">User</th>
//                 <th className="px-4 py-2">Amount</th>
//                 <th className="px-4 py-2">Status</th>
//                 <th className="px-4 py-2">Actions</th>
//               </tr>
//             </thead>
//             <tbody>
//               {withdrawals.map((withdrawal) => (
//                 <tr key={withdrawal._id}>
//                   <td className="border px-4 py-2">{withdrawal.userId.firstName} {withdrawal.userId.lastName}</td>
//                   <td className="border px-4 py-2">{withdrawal.amount}</td>
//                   <td className="border px-4 py-2">{withdrawal.status}</td>
//                   <td className="border px-4 py-2">
//                     <button onClick={() => handleWithdrawalAction(withdrawal._id, 'approve')} className="bg-green-500 text-white px-2 py-1 rounded mr-2">Approve</button>
//                     <button onClick={() => handleWithdrawalAction(withdrawal._id, 'reject')} className="bg-red-500 text-white px-2 py-1 rounded">Reject</button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         )}
//         {activeTab === 'recharges' && (
//           <table className="min-w-full bg-white">
//             <thead>
//               <tr>
//                 <th className="px-4  py-2">User</th>
//                 <th className="px-4 py-2">Amount</th>
//                 <th className="px-4 py-2">Currency</th>
//                 <th className="px-4 py-2">Status</th>
//               </tr>
//             </thead>
//             <tbody>
//               {recharges.map((recharge) => (
//                 <tr key={recharge._id}>
//                   <td className="border px-4 py-2">{recharge.userId.firstName} {recharge.userId.lastName}</td>
//                   <td className="border px-4 py-2">{recharge.amount}</td>
//                   <td className="border px-4 py-2">{recharge.currency}</td>
//                   <td className="border px-4 py-2">{recharge.status}</td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         )}
//         {activeTab === 'transfers' && (
//           <table className="min-w-full bg-white">
//             <thead>
//               <tr>
//                 <th className="px-4 py-2">Sender</th>
//                 <th className="px-4 py-2">Receiver</th>
//                 <th className="px-4 py-2">Amount</th>
//                 <th className="px-4 py-2">Type</th>
//                 <th className="px-4 py-2">Status</th>
//               </tr>
//             </thead>
//             <tbody>
//               {transfers.map((transfer) => (
//                 <tr key={transfer._id}>
//                   <td className="border px-4 py-2">{transfer.senderId.firstName} {transfer.senderId.lastName}</td>
//                   <td className="border px-4 py-2">{transfer.receiverId.firstName} {transfer.receiverId.lastName}</td>
//                   <td className="border px-4 py-2">{transfer.amount}</td>
//                   <td className="border px-4 py-2">{transfer.type}</td>
//                   <td className="border px-4 py-2">{transfer.status}</td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         )}
//         {activeTab === 'calls' && (
//           <table className="min-w-full bg-white">
//             <thead>
//               <tr>
//                 <th className="px-4 py-2">Caller</th>
//                 <th className="px-4 py-2">Callee</th>
//                 <th className="px-4 py-2">Duration</th>
//                 <th className="px-4 py-2">Type</th>
//                 <th className="px-4 py-2">Status</th>
//               </tr>
//             </thead>
//             <tbody>
//               {calls.map((call) => (
//                 <tr key={call._id}>
//                   <td className="border px-4 py-2">{call.callerId.firstName} {call.callerId.lastName}</td>
//                   <td className="border px-4 py-2">{call.calleeId.firstName} {call.calleeId.lastName}</td>
//                   <td className="border px-4 py-2">{call.duration} seconds</td>
//                   <td className="border px-4 py-2">{call.type}</td>
//                   <td className="border px-4 py-2">{call.status}</td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         )}
//         {activeTab === 'create-post' && (
//           <form onSubmit={handleCreatePost} className="max-w-md mx-auto">
//             <div className="mb-4">
//               <label htmlFor="postText" className="block mb-2 font-bold">Post Content</label>
//               <textarea
//                 id="postText"
//                 value={postText}
//                 onChange={(e) => setPostText(e.target.value)}
//                 className="w-full px-3 py-2 border rounded"
//                 required
//               ></textarea>
//             </div>
//             <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
//               Create Post
//             </button>
//           </form>
//         )}
//       </div>
//     </div>
//   );
// }