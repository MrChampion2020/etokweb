// import React, { useState, useEffect } from "react";
// import RegistrationTop from "../../components/RegistrationTop";
// import { MdOutlineDriveFileRenameOutline } from "react-icons/md";
// import { useNavigate } from "react-router-dom";
// import {
//   saveRegistrationProgress,
//   getRegistrationProgress,
// } from "../../registrationUtils";
// const NameScreen = () => {
//   const [firstName, setFirstName] = useState("");
//   const [lastName, setLastName] = useState("");
//   const navigation = useNavigate();
//   useEffect(() => {
//     const progressData = getRegistrationProgress("Name");
//     if (progressData) {
//       setFirstName(progressData.firstName || "");
//       setLastName(progressData.lastName || "");
//       console.log("NameScreen: ", progressData, " loaded");
//     }
//   }, []);
//   const handleNext = () => {
//     if (firstName.trim() !== "") {
//       saveRegistrationProgress("Name", { firstName, lastName });
//       console.log("NameScreen: ", { firstName, lastName }, " saved");
//     }
//     navigation("/email");
//   };
//   return (
//     <>
//       <RegistrationTop
//         logo={MdOutlineDriveFileRenameOutline}
//         title="What's your name?"
//       />
//       <div className="mt-6  w-[100%] flex flex-col justify-center items-center"
//       style={{
//         padding: 20,
//         width: '100%'
//       }}>
//         <input
//           type="text"
//           name="firstName"
//           className="w-80 text-sm p-2 mt-5 border-b-1 border-b-black focus:outline-none"
//           id="firstName"
//           autoFocus={true}
//           value={firstName}
//           onChange={(e) => setFirstName(e.target.value)}
//           placeholder="First Name (required)"
//         />
//         <input
//           type="text"
//           name="lastName"
//           className="w-80 text-sm p-2 mt-5 border-b-1 border-b-black focus:outline-none"
//           id="lastName"
//           value={lastName}
//           onChange={(e) => setLastName(e.target.value)}
//           placeholder="Last Name"
//         />
//       </div>
//       <div className="mt-[3%]"
//       style={{width: '100%', padding: 30, margin: 'auto'}}>
//         <button
//           onClick={handleNext}
//           className="bg-blue-500 h-12 w-60 border-none rounded-full justify-center items-center self-center mt-5 text-white text-lg font-bold font-sans"
//         style={{margin: 'auto'}}
//         >
//           Next
//         </button>
//       </div>
//     </>
//   );
// };

// export default NameScreen;


import React, { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { MdOutlineDriveFileRenameOutline } from "react-icons/md"
import RegistrationTop from "../../components/RegistrationTop";
import { saveRegistrationProgress, getRegistrationProgress } from "../../registrationUtils"

export default function NameScreen() {
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const navigation = useNavigate()

  useEffect(() => {
    const progressData = getRegistrationProgress("Name")
    if (progressData) {
      setFirstName(progressData.firstName || "")
      setLastName(progressData.lastName || "")
      console.log("NameScreen: ", progressData, " loaded")
    }
  }, [])

  const handleNext = () => {
    if (firstName.trim() !== "") {
      saveRegistrationProgress("Name", { firstName, lastName })
      console.log("NameScreen: ", { firstName, lastName }, " saved")
    }
    navigation("/email")
  }

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: '1rem',
      maxWidth: '600px',
      margin: '0 auto',
      minHeight: '100vh',
    }}>
      <RegistrationTop
        logo={MdOutlineDriveFileRenameOutline}
        title="What's your name?"
      />
      <div style={{
        width: '100%',
        maxWidth: '400px',
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem',
      }}>
        <input
          type="text"
          name="firstName"
          style={{
            width: '100%',
            padding: '0.5rem',
            fontSize: '1rem',
            borderBottom: '0.5px solid black',
            outline: 'none',
          }}
          id="firstName"
          autoFocus={true}
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          placeholder="First Name (required)"
        />
        <input
          type="text"
          name="lastName"
          style={{
            width: '100%',
            padding: '0.5rem',
            fontSize: '1rem',
            borderBottom: '0.5px solid black',
            outline: 'none',
          }}
          id="lastName"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          placeholder="Last Name"
        />
      </div>
      <button
        onClick={handleNext}
        style={{
          backgroundColor: '#3B82F6',
          color: 'white',
          border: 'none',
          borderRadius: '9999px',
          padding: '0.75rem 2rem',
          fontSize: '1rem',
          fontWeight: 'bold',
          cursor: 'pointer',
          marginTop: '2rem',
          width: '100%',
          maxWidth: '250px',
        }}
      >
        Next
      </button>
    </div>
  )
}