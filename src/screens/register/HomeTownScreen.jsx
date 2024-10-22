import React, { useEffect, useState } from "react";
import RegistrationTop from "../../components/RegistrationTop";
import { useNavigate } from "react-router-dom";
import { MdOutlineHome } from "react-icons/md";
import {
  saveRegistrationProgress,
  getRegistrationProgress,
} from "../../registrationUtils";

const HomeTownScreen = () => {
  const [homeTown, setHomeTown] = useState("");
  const navigation = useNavigate();
  useEffect(() => {
    const progressData = getRegistrationProgress("HomeTown");
    if (progressData) {
      setHomeTown(progressData.homeTown || "");
      console.log("HomeTownScreen: ", progressData, " loaded");
    }
  }, []);
  const handleNext = () => {
    if (homeTown.trim() !== "") {
      saveRegistrationProgress("HomeTown", { homeTown });
      console.log("HomeTown: ", { homeTown }, " saved");
    }
    navigation("/photo");
  };
  return (
    <div>
      <RegistrationTop logo={MdOutlineHome} title="What's your hometown?" />
      <div className="mt-6 w-[80%] flex flex-col justify-center items-center"
      style={{
        padding: 20
      }}>
        <input
          type="text"
          name="homeTown"
          className="w-full text-sm p-2 mt-5 border-b-2 border-b-black focus:outline-none"
          id="homeTown"
          autoFocus={true}
          value={homeTown}
          onChange={(e) => setHomeTown(e.target.value)}
          placeholder="HomeTown"
        />
      </div>
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "2rem",
          boxSizing: "border-box",
        }}
      >
        <button
        className="bg-blue-500"
          onClick={handleNext}
          style={{
            color: "white",
            border: "none",
            width: '50%',
            padding: "10px 5px",
            fontSize: "18px",
            borderRadius: "30px",
            cursor: "pointer",
          }}
        >
                
          Next
        </button>
      </div>
    </div>
  );
};

export default HomeTownScreen;

