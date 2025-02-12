import React, { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import Lottie from "react-lottie";
import loveAnimation from "../../assets/love.json";
import {
  saveRegistrationProgress,
  getRegistrationProgress,
} from "../../registrationUtils";
import { AuthContext } from "../../AuthContext";
import axios from "axios";
import API_URL from "../../config";

const PreFinalScreen = () => {
  const { token, setToken } = useContext(AuthContext);
  const navigation = useNavigate();
  const [userData, setUserData] = useState(null);
  const [isProcessing, setIsProcessing] = useState(false); // For showing the processing effect

  useEffect(() => {
    if (token) {
      navigation("/user");
    }
  }, [token]);

  useEffect(() => {
    const fetchData = async () => {
      const screens = [
        "Name",
        "Email",
        "Password",
        "Birth",
        "Location",
        "Gender",
        "Type",
        "DatingType",
        "LookingFor",
        "HomeTown",
        "Photos",
        "Prompts",
      ];

      let userData = {};

      for (const screenName of screens) {
        const screenData = await getRegistrationProgress(screenName);
        if (screenData) {
          userData = { ...userData, ...screenData };
        }
      }

      setUserData(userData);
    };

    fetchData();
  }, []);
  console.log("User data:", userData);

  const clearAllScreenData = () => {
    try {
      const screens = [
        "Name",
        "Email",
        "Password",
        "Birth",
        "Location",
        "Gender",
        "Type",
        "DatingType",
        "LookingFor",
        "HomeTown",
        "Photos",
        "Prompts",
      ];

      for (const screenName of screens) {
        const key = `registration_progress_${screenName}`;
        localStorage.removeItem(key);
      }

      console.log("All screen data cleared successfully");
    } catch (error) {
      console.error("Error clearing screen data:", error);
    }
  };

  const registerUser = async () => {
    setIsProcessing(true); // Start processing
    try {
      const response = await axios.post(`${API_URL}/register`, userData);
      const token = response.data.token;
      localStorage.setItem("token", token);
      setToken(token);
      clearAllScreenData();
      console.log("User registered successfully:", response.data);
    } catch (error) {
      console.error("Error registering user:", error);
      // Handle error here
    } finally {
      setIsProcessing(false); // Stop processing after the response
    }
  };
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: loveAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <>
      <div className="flex flex-col justify-center items-center bg-white mt-9 px-4 font-mono">
        <div className="flex flex-col justify-center items-center text-4xl font-semibold mt-2 mb-5">
          <div className="mb-5">All set to register</div>
          <div>Setting up your profile</div>
        </div>
        <div className="flex justify-center items-center mb-5">
          <Lottie
            options={defaultOptions}
            height={260}
            width={300}
            className="w-80 h-80"
          />
        </div>
        <div>
          {/* <button
            onClick={registerUser}
            className="bg-blue-500 h-12 w-64 border-none rounded-3xl justify-center items-center self-center mt-5 text-white text-xl font-bold font-sans"
          >
            Finish Registration
          </button> */}
          <button
            className={`w-full py-3 rounded-full text-lg font-bold bg-[#318ce7] text-white ${
              isProcessing ? "opacity-50 cursor-not-allowed" : ""
            }`} // Disable styling when processing
            onClick={registerUser}
            disabled={isProcessing} // Disable the button while processing
          >
            {isProcessing ? "Processing..." : "Finish Registration"}{" "}
            {/* Show processing text */}
          </button>
        </div>
      </div>
    </>
  );
};

export default PreFinalScreen;
