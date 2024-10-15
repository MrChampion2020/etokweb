// import React, { useContext, useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";
// import { AuthContext } from "../../AuthContext";
// import Lottie from "react-lottie";
// import loginAnimation from "../../assets/login.json";
// import { HiOutlineMail } from "react-icons/hi";
// import { MdLockOutline } from "react-icons/md";
// import API_URL from "../../config"


// const LoginScreen = () => {
//   const [option, setOption] = useState("Create account");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const { token, isLoading, setToken } = useContext(AuthContext);
//   const navigation = useNavigate();
//   useEffect(() => {
//     if (token) {
//       navigation("/user");
//     }
//   }, [token, navigation]);
//   const signInUser = async () => {
//     setOption("Sign In");
//     try {
//       console.log(email);
//       console.log(password);
//       const user = {
//         email: email,
//         password: password,
//       };
//       const response = await axios.post(
//         `${API_URL}/login`,
//         user
//       );
//       console.log(response);
//       const token = response.data.token;

//       // Store the token in AsyncStorage
//       localStorage.setItem("token", token);

//       setToken(token);
//       // navigation.replace('Main');
//     } catch (error) {
//       console.log("error", error);
//     }
//   };

//   const createAccount = async () => {
//     setOption("Create account");
//     navigation("/basic");
//   };
//   const defaultOptions = {
//     loop: true,
//     autoplay: true,
//     animationData: loginAnimation,
//     rendererSettings: {
//       preserveAspectRatio: "xMidYMid slice",
//     },
//   };
//   return (
//     <>
//       <div className="p-[1%] bg-slate-50"
//       style={{color: "#318ce7", fontSize: 60, fontWeight: "900", textAlign: "center"}}
//       >
//         Etok
//       </div>
//       <div className="flex flex-col justify-center items-center mt-[2%]">
//         <div
//           style={
//             option === "Create account"
//               ? { marginBottom: "10px" }
//               : {
//                   marginBottom: "2%",
//                 }
//           }
//         >
//           {option === "Sign In" ? (
//             <>
//               <div className="flex flex-row gap-2 border-b-2 border-gray-400 mt-[40%] " >
//                 <HiOutlineMail className="h-[30px] w-[30px] text-gray-400 pb-[5px]" />
//                 <input
//                   type="email"
//                   placeholder="Email"
//                   className="w-[300px] focus:outline-none pb-[5px]"
//                   value={email}
//                   onChange={(e) => setEmail(e.target.value)}
//                 />
//               </div>
//               <div className="flex flex-row gap-2 border-b-2 border-gray-400 mt-[10%] " >
//                 <MdLockOutline className="h-[30px] w-[30px] text-gray-400 pb-[5px]" />
//                 <input
//                   type="password"
//                   placeholder="Password"
//                   className="w-[300px] focus:outline-none pb-[5px]"
//                   value={password}
//                   onChange={(e) => setPassword(e.target.value)}
//                 />
//               </div>
//               <div className="flex flex-row items-center justify-between text-base text-slate-500 font-semibold mt-[3px]" >
//                 <div>Keep me logged in</div>
//                 <div>Forgot Password</div>
//               </div>
//             </>
//           ) : (
//             <>
//               <Lottie
//                 options={defaultOptions}
//                 height={260}
//                 width={300}
//                 className="w-[80px] h-[80px]"
//               />
//             </>
//           )}
//         </div>
//         <button
//           className="h-12 w-64 border-none rounded-3xl justify-center items-center self-center mt-5 text-white text-xl font-bold font-sans"
//           style={
//             option === "Create account"
//               ? { backgroundColor: "#318ce7", color: "white" }
//               : {
//                   backgroundColor: "transparent",
//                   color: "black",
//                   border: "1px solid black",
//                 }
//           }
//           onClick={createAccount}
//         >
//           Create account
//         </button>
//         <button
//           className="h-12 w-64 border-none rounded-3xl justify-center items-center self-center mt-5 text-white text-xl font-bold font-sans"
//           style={
//             option === "Sign In"
//               ? { backgroundColor: "#318ce7", color: "white" }
//               : {
//                   backgroundColor: "transparent",
//                   color: "black",
//                   border: "1px solid black",
//                 }
//           }
//           onClick={signInUser}
//         >
//           Sign In
//         </button>
//       </div>
//     </>
//   );
// };

// export default LoginScreen;


import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { AuthContext } from "../../AuthContext";
import Lottie from "react-lottie";
import loginAnimation from "../../assets/login.json";
import { HiOutlineMail } from "react-icons/hi";
import { MdLockOutline } from "react-icons/md";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import API_URL from "../../config"

const LoginScreen = () => {
  const [option, setOption] = useState("Create account");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const { token, isLoading, setToken } = useContext(AuthContext);
  const navigation = useNavigate();

  useEffect(() => {
    if (token) {
      navigation("/user");
    }
  }, [token, navigation]);

  const signInUser = async () => {
    setOption("Sign In");
    try {
      console.log(email);
      console.log(password);
      const user = {
        email: email,
        password: password,
      };
      const response = await axios.post(
        `${API_URL}/login`,
        user
      );
      console.log(response);
      const token = response.data.token;

      // Store the token in AsyncStorage
      localStorage.setItem("token", token);

      setToken(token);
      // navigation.replace('Main');
    } catch (error) {
      console.log("error", error);
    }
  };

  const createAccount = async () => {
    setOption("Create account");
    navigation("/basic");
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: loginAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      <div className="p-4 md:p-6 text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold text-[#318ce7]">
          Etok
        </h1>
      </div>
      <div className="flex-grow flex flex-col justify-center items-center px-4 md:px-0">
        <div className="w-full max-w-md">
          {option === "Sign In" ? (
            <>
              <div className="mb-6">
                <div className="flex items-center border-b-2 border-gray-400 py-2">
                  <HiOutlineMail className="h-6 w-6 text-gray-400" />
                  <input
                    type="email"
                    placeholder="Email"
                    className="w-full ml-2 focus:outline-none"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>
              <div className="mb-4">
                <div className="flex items-center border-b-2 border-gray-400 py-2">
                  <MdLockOutline className="h-6 w-6 text-gray-400" />
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Password"
                    className="w-full ml-2 focus:outline-none"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <button
                    onClick={togglePasswordVisibility}
                    className="focus:outline-none"
                  >
                    {showPassword ? (
                      <AiOutlineEyeInvisible className="h-6 w-6 text-gray-400" />
                    ) : (
                      <AiOutlineEye className="h-6 w-6 text-gray-400" />
                    )}
                  </button>
                </div>
              </div>
              <div className="flex justify-between text-sm text-slate-500 font-semibold">
                <div>Keep me logged in</div>
                <div>Forgot Password</div>
              </div>
            </>
          ) : (
            <div className="flex justify-center mb-6">
              <Lottie
                options={defaultOptions}
                height={260}
                width={300}
              />
            </div>
          )}
        </div>
        <div className="w-full max-w-md space-y-4 mt-6">
          <button
            className={`w-full py-3 rounded-full text-lg font-bold ${
              option === "Create account"
                ? "bg-[#318ce7] text-white"
                : "bg-transparent text-black border border-black"
            }`}
            onClick={createAccount}
          >
            Create account
          </button>
          <button
            className={`w-full py-3 rounded-full text-lg font-bold ${
              option === "Sign In"
                ? "bg-[#318ce7] text-white"
                : "bg-transparent text-black border border-black"
            }`}
            onClick={signInUser}
          >
            Sign In
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginScreen;