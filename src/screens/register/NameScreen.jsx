import React, { useState, useEffect } from "react";
import RegistrationTop from "../../components/RegistrationTop";
import { MdOutlineDriveFileRenameOutline } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import {
  saveRegistrationProgress,
  getRegistrationProgress,
} from "../../registrationUtils";
const NameScreen = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const navigation = useNavigate();
  useEffect(() => {
    const progressData = getRegistrationProgress("Name");
    if (progressData) {
      setFirstName(progressData.firstName || "");
      setLastName(progressData.lastName || "");
      console.log("NameScreen: ", progressData, " loaded");
    }
  }, []);
  const handleNext = () => {
    if (firstName.trim() !== "") {
      saveRegistrationProgress("Name", { firstName, lastName });
      console.log("NameScreen: ", { firstName, lastName }, " saved");
    }
    navigation("/email");
  };
  return (
    <>
      <RegistrationTop
        logo={MdOutlineDriveFileRenameOutline}
        title="What's your name?"
      />
      <div className="mt-6 ml-52 w-[40%] flex flex-col justify-center items-center">
        <input
          type="text"
          name="firstName"
          className="w-full text-sm p-2 mt-5 border-b-2 border-b-black focus:outline-none"
          id="firstName"
          autoFocus={true}
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          placeholder="First Name (required)"
        />
        <input
          type="text"
          name="lastName"
          className="w-full text-sm p-2 mt-5 border-b-2 border-b-black focus:outline-none"
          id="lastName"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          placeholder="Last Name"
        />
      </div>
      <div className="mt-[3%] ml-[60%]">
        <button
          onClick={handleNext}
          className="bg-blue-500 h-12 w-60 border-none rounded-full justify-left items-center self-center mt-5 text-white text-lg font-bold font-sans"
        >
          Next
        </button>
      </div>
    </>
  );
};

export default NameScreen;
