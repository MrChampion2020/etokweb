import React, { useEffect, useState } from "react";
import { PiNotebookBold } from "react-icons/pi";
import { useNavigate } from "react-router-dom";
import RegistrationTop from "../../components/RegistrationTop";
import { FaRegCircle } from "react-icons/fa";
import { FaRegCheckCircle } from "react-icons/fa";
import {
  saveRegistrationProgress,
  getRegistrationProgress,
} from "../../registrationUtils";

const DatingType = () => {
  const [datingPrefrences, setDatingPrefrences] = useState([]);
  const chooseOption = (option) => {
    if (datingPrefrences.includes(option)) {
      setDatingPrefrences(datingPrefrences.filter((item) => item !== option));
    } else {
      setDatingPrefrences([...datingPrefrences, option]);
    }
  };
  useEffect(() => {
    const progressData = getRegistrationProgress("DatingType");
    if (progressData) {
      setDatingPrefrences(progressData.datingPrefrences || []);
      console.log("DatingType: ", progressData, " loaded");
    }
  }, []);
  const navigation = useNavigate();
  function handleNext() {
    if (datingPrefrences.length > 0) {
      saveRegistrationProgress("DatingType", { datingPrefrences });
      console.log("DatingType: ", { datingPrefrences }, " saved");
    }
    navigation("/looking-for");
  }
  return (
    <>
      <RegistrationTop logo={PiNotebookBold} title="Who do you want to date?" />
      <div className="text-[20px] ml-[10%] font-semibold text-gray-500">
        Select all the people you are open to meet
      </div>
      <div className="flex flex-col justify-center w-[80%] ml-[10%] mt-[3%]">
        <div
          className="flex flex-row justify-between items-center mt-[10px] pt-[10px] border-t-2 border-gray-400"
          onClick={() => chooseOption("Men")}
        >
          <div className="pl-[20px] text-lg font-bold">Men</div>
          {datingPrefrences.includes("Men") ? (
            <FaRegCheckCircle className="text-[20px] mr-[10px]" />
          ) : (
            <FaRegCircle className="text-[20px] mr-[10px]" />
          )}
        </div>
        <div
          className="flex flex-row justify-between items-center mt-[10px] pt-[10px] border-t-2 border-gray-400"
          onClick={() => chooseOption("Women")}
        >
          <div className="pl-[20px] text-lg font-bold">Women</div>
          {datingPrefrences.includes("Women") ? (
            <FaRegCheckCircle className="text-[20px] mr-[10px]" />
          ) : (
            <FaRegCircle className="text-[20px] mr-[10px]" />
          )}
        </div>
        <div
          className="flex flex-row justify-between items-center mt-[10px] pt-[10px] border-t-2 border-b-2 border-gray-400 pb-[10px]"
          onClick={() => chooseOption("Non Binary")}
        >
          <div className="pl-[20px] text-lg font-bold">Non Binary</div>
          {datingPrefrences.includes("Non Binary") ? (
            <FaRegCheckCircle className="text-[20px] mr-[10px]" />
          ) : (
            <FaRegCircle className="text-[20px] mr-[10px]" />
          )}
        </div>
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
    </>
  );
};

export default DatingType;


