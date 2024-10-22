import React, { useEffect, useState } from "react";
import { MdOutlineMailOutline } from "react-icons/md";
import RegistrationTop from "../../components/RegistrationTop";
import { useNavigate } from "react-router-dom";
import {
  saveRegistrationProgress,
  getRegistrationProgress,
} from "../../registrationUtils";

const EmailScreen = () => {
  const [email, setEmail] = useState("");
  const navigation = useNavigate();
  useEffect(() => {
    const progressData = getRegistrationProgress("Email");
    if (progressData) {
      setEmail(progressData.email || "");
      console.log("EmailScreen: ", progressData, " loaded");
    }
  }, []);
  const handleNext = () => {
    if (email.trim() !== "") {
      saveRegistrationProgress("Email", { email });
      console.log("EmailScreen: ", { email }, " saved");
    }
    navigation("/password");
  };
  return (
    <>
      <RegistrationTop
        logo={MdOutlineMailOutline}
        title="Please Provide a Valid Email"
      />
      <div className="mt-6  w-[100%] flex flex-col justify-center items-center">
        <input
          type="email"
          name="email"
          className="w-80 text-sm p-2 mt-5 border-b-1 border-b-black focus:outline-none"
          id="email"
          autoFocus={true}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          style={{justifySelf: 'center'}}
        />
      </div>
      <div className="mt-[3%]"
      style={{justifySelf: 'center'}}>
        <button
          onClick={handleNext}
          className="bg-blue-500 h-12 w-60 border-none rounded-full justify-center items-center self-center mt-5 text-white text-lg font-bold font-sans"
        >
          Next
        </button>
      </div>
    </>
  );
};

export default EmailScreen;





// import React, { useState, useEffect } from "react"
// import { useNavigate } from "react-router-dom"
// import RegistrationTop from "../../components/RegistrationTop";
// import { MdOutlineMailOutline } from "react-icons/md";
// import { saveRegistrationProgress, getRegistrationProgress } from "../../registrationUtils"


// export default function EmailScreen() {
//   const [email, setEmail] = useState("")
//   const navigation = useNavigate()

//   useEffect(() => {
//     const progressData = getRegistrationProgress("Email")
//     if (progressData) {
//       setEmail(progressData.email || "")
//       console.log("EmailScreen: ", progressData, " loaded")
//     }
//   }, [])

//   const handleNext = () => {
//     if (email.trim() !== "") {
//       saveRegistrationProgress("Email", { email })
//       console.log("EmailScreen: ", { email }, " saved")
//     }
//     navigation("/birth")
//   }

//   return (
//     <div style={{
//       display: 'flex',
//       flexDirection: 'column',
//       alignItems: 'center',
//       padding: '1rem',
//       maxWidth: '600px',
//       margin: '0 auto',
//       minHeight: '100vh',
//     }}>
//       <RegistrationTop
//         logo={MdOutlineMailOutline}
//         title="What's your email address?"
//         style={{width: '100vw', fontSize: '16px'}}
//       />
//       <div style={{
//         width: '100%',
//         maxWidth: '400px',
//         display: 'flex',
//         flexDirection: 'column',
//         gap: '1rem',
//       }}>
//         <input
//           type="email"
//           name="email"
//           style={{
//             width: '100%',
//             padding: '0.5rem',
//             fontSize: '1rem',
//             borderBottom: '2px solid black',
//             outline: 'none',
//           }}
//           id="email"
//           autoFocus={true}
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           placeholder="Email address"
//         />
//       </div>
//       <button
//         onClick={handleNext}
//         style={{
//           backgroundColor: '#3B82F6',
//           color: 'white',
//           border: 'none',
//           borderRadius: '9999px',
//           padding: '0.75rem 2rem',
//           fontSize: '1rem',
//           fontWeight: 'bold',
//           cursor: 'pointer',
//           marginTop: '2rem',
//           width: '100%',
//           maxWidth: '250px',
//         }}
//       >
//         Next
//       </button>
//     </div>
//   )
// }