// import React, { useState } from "react";
// import { TbPasswordUser } from "react-icons/tb";
// import { useNavigate } from "react-router-dom";
// import RegistrationTop from "../../components/RegistrationTop";
// import {
//   saveRegistrationProgress,
//   getRegistrationProgress,
// } from "../../registrationUtils";

// const PasswordScreen = () => {
//   const [password, setPassword] = useState("");
//   const navigation = useNavigate();
//   const handleNext = () => {
//     if (password.trim() !== "") {
//       saveRegistrationProgress("Password", { password });
//       console.log("Password: ", password, " saved");
//     }
//     navigation("/birth");
//   };
//   return (
//     <>
//       <RegistrationTop
//         logo={TbPasswordUser} title="Create a password"
//       />
//       <div className="mt-6 ml-52 w-[40%] flex flex-col justify-center items-center">
//         <input
//           type="password"
//           name="password"
//           className="w-full text-sm p-2 mt-5 border-b-2 border-b-black focus:outline-none"
//           id="password"
//           autoFocus={true}
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           placeholder="Enter your password"
//         />
//       </div>
//       <div className="mt-[3%] ml-[60%]">
//         <button
//           onClick={handleNext}
//           className="bg-blue-500 h-12 w-60 border-none rounded-full justify-center items-center self-center mt-5 text-white text-lg font-bold font-sans"
//         >
//           Next
//         </button>
//       </div>
//     </>
//   );
// };

// export default PasswordScreen;



import React, { useState } from "react";
import { TbPasswordUser, TbEye, TbEyeOff } from "react-icons/tb";
import { useNavigate } from "react-router-dom";
import RegistrationTop from "../../components/RegistrationTop";
import {
  saveRegistrationProgress,
  getRegistrationProgress,
} from "../../registrationUtils";

const PasswordScreen = () => {
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigation = useNavigate();

  const handleNext = () => {
    if (password.trim() !== "") {
      saveRegistrationProgress("Password", { password });
      console.log("Password: ", password, " saved");
    }
    navigation("/birth");
  };

  return (
    <div className="flex flex-col min-h-screen p-4">
      <RegistrationTop
        logo={TbPasswordUser}
        title="Create a password"
      />
      <div className="flex-grow flex flex-col justify-center items-center w-full max-w-md mx-auto mt-6">
        <div className="relative w-full">
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            className="w-full text-sm p-2 pr-10 mt-5 border-b-2 border-b-black focus:outline-none"
            id="password"
            autoFocus={true}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-2 top-1/2 mt-2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
            aria-label={showPassword ? "Hide password" : "Show password"}
          >
            {showPassword ? (
              <TbEyeOff className="h-5 w-5" />
            ) : (
              <TbEye className="h-5 w-5" />
            )}
          </button>
        </div>
        <div className="w-full mt-6">
          <button
            onClick={handleNext}
            className="bg-blue-500 h-12 w-full border-none rounded-full justify-center items-center self-center mt-5 text-white text-lg font-bold font-sans hover:bg-blue-600 transition-colors"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default PasswordScreen;