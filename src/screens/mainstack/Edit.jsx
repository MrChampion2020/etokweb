
import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../AuthContext";
import axios from "axios";
import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router-dom";
import API_URL from "../../config"

const Edit = () => {
  const navigation = useNavigate();
  const [userId, setUserId] = useState("");
  const [currentProfile, setCurrentProfile] = useState(null);
  const { token, setToken } = useContext(AuthContext);

  useEffect(() => {
    const fetchUser = async () => {
      const token = localStorage.getItem("token");
      const decodedToken = jwtDecode(token);
      const userId = decodedToken.userId;
      setUserId(userId);
    };

    fetchUser();
  }, []);

  useEffect(() => {
    if (userId) {
      getUserDetails();
    }
  }, [userId]);

  useEffect(() => {
    if (!token) {
      navigation("/");
    }
  }, [token, navigation]);

  const getUserDetails = async () => {
    try {
      const response = await axios.get(`${API_URL}/users/${userId}`);
      if (response.status === 200) {
        const userData = response.data;
        console.log("User details:", userData);
        setCurrentProfile(userData);
      } else {
        console.error("Error fetching user details:", response.data.message);
      }
    } catch (error) {
      console.error("Error fetching user details:", error.message);
    }
  };

  const logout = () => {
    try {
      localStorage.removeItem("token");
      console.log("AuthToken cleared successfully");
      setToken("");
    } catch (error) {
      console.error("Failed to clear AuthToken:", error);
    }
  };

  const navigateToProfileEdit = () => {
    navigation("/profileEdit", { state: { currentProfile } });
  };

  let age;
  if (currentProfile?.dateOfBirth) {
    const [, , yearValue] = currentProfile.dateOfBirth.split("/");
    age = 2024 - parseInt(yearValue);
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row justify-between items-center mb-8">
        <button
          className="font-bold text-2xl md:text-3xl mb-4 md:mb-0"
          onClick={navigateToProfileEdit}
        >
          {currentProfile?.firstName} {currentProfile?.lastName}
        </button>
        <button
          onClick={logout}
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full cursor-pointer"
        >
          Logout
        </button>
      </div>

      <div className="flex flex-col lg:flex-row justify-between">
        <div className="flex flex-col lg:w-2/3 mb-8 lg:mb-0">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {currentProfile?.imageUrls?.map((item, index) => (
              <div key={index} className="relative">
                <img
                  src={item}
                  alt={`profile-${index + 1}`}
                  className="w-full h-64 md:h-80 object-cover rounded-lg"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col lg:w-1/3 lg:ml-8">
          <div className="bg-white shadow-md rounded-lg p-6 mb-6">
            <h2 className="text-2xl font-bold mb-4">Profile Information</h2>
            <div className="space-y-2">
              <InfoItem label="Name" value={`${currentProfile?.firstName} ${currentProfile?.lastName}`} />
              <InfoItem label="Age" value={age} />
              <InfoItem label="Gender" value={currentProfile?.gender} />
              <InfoItem label="Sexuality" value={currentProfile?.type} />
              <InfoItem label="Hometown" value={currentProfile?.homeTown} />
              <InfoItem label="Looking for" value={currentProfile?.lookingFor} />
            </div>
          </div>

          <div className="space-y-4">
            {currentProfile?.prompts.slice(0, 3).map((prompt) => (
              <div
                key={prompt.id}
                className="bg-slate-100 p-4 border-2 border-slate-200 border-dashed rounded-md"
              >
                <div className="text-lg font-semibold">{prompt.question}</div>
                <div className="text-xl font-bold mt-2">{prompt.answer}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const InfoItem = ({ label, value }) => (
  <div className="flex flex-row gap-2">
    <span className="font-bold">{label}:</span>
    <span>{value}</span>
  </div>
);

export default Edit;