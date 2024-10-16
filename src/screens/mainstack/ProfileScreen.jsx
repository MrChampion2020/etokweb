// import React, { useContext, useEffect, useState } from "react";
// import { AuthContext } from "../../AuthContext";
// import axios from "axios";
// import { jwtDecode } from "jwt-decode";
// import { useNavigate } from "react-router-dom";
// import API_URL from "../../config"

// const ProfileScreen = () => {

//   const navigation = useNavigate();

//   const [userId, setUserId] = useState("");
//   const [currentProfile, setCurrentProfile] = useState(null);
//   useEffect(() => {
//     console.log("hi");
//     const fetchUser = async () => {
//       const token = localStorage.getItem("token"); // Use localStorage instead of AsyncStorage
//       const decodedToken = jwtDecode(token);
//       const userId = decodedToken.userId;
//       setUserId(userId);
//     };

//     fetchUser();
//   }, []);
//   useEffect(() => {
//     if (userId) {
//       getUserDetails();
//     }
//   }, [userId]);
//   const { token, isLoading, setToken } = useContext(AuthContext);
//   useEffect(() => {
//     // Check if the token is set and not in loading state
//     if (!token) {
//       // Navigate to the login screen
//       navigation("/");
//     }
//   }, [token, navigation]);

//   const getUserDetails = async () => {
//     try {
//       // Make a GET request to the endpoint with the userId parameter
//       const response = await axios.get(
//         `${API_URL}/users/${userId}`
//       );

//       // Check if the response contains the user data
//       if (response.status === 200) {
//         // Extract the user data from the response
//         const userData = response.data;

//         // Handle the user data as needed (e.g., set state, display in UI)
//         console.log("User details:", userData);

//         setCurrentProfile(userData); // Return the user data if needed
//       } else {
//         console.error("Error fetching user details:", response.data.message);
//         return null; // Return null or handle the error appropriately
//       }
//     } catch (error) {
//       console.error("Error fetching user details:", error.message);
//       return null; // Return null or handle the error appropriately
//     }
//   };

//   const logout = () => {
//     clearAuthToken();
//   };

//   const clearAuthToken = () => {
//     try {
//       localStorage.removeItem("token"); // Use localStorage instead of AsyncStorage
//       console.log("AuthToken cleared successfully");

//       setToken("");
//       // Perform any necessary actions after clearing the authToken
//     } catch (error) {
//       console.error("Failed to clear AuthToken:", error);
//     }
//   };
//   let dayValue, monthValue, yearValue, age;
//   const dateOfBirth = currentProfile?.dateOfBirth;
//   if (dateOfBirth) {
//     [dayValue, monthValue, yearValue] = dateOfBirth.split("/");
//     age = 2024 - yearValue;
//   }
//   return (
//     <>
//       <div className="mx-[4%] mt-[1%] flex flex-row justify-between items-center">
//         <button className="font-bold text-3xl"
//            onPress={() =>
//             navigation("profileEdit", {
//               currentProfile: currentProfile,
//             })
//           }
//         >
//           {currentProfile?.firstName} {currentProfile?.lastName}

//         </button>
//         <button onClick={logout} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full cursor-pointer">
//           Logout
//         </button>
//       </div>
//       <div className="flex flex-row justify-between">
//         <div className="flex flex-col">
//           <div className="flex flex-row items-center justify-center gap-4 w-[700px] ml-[7%] mt-[2%]">
//             {currentProfile?.imageUrls?.slice(0, 2).map((item, index) => (
//               <div key={index} className="relative">
//                 <img
//                   src={item}
//                   alt="profile"
//                   className="w-[300px] h-[400px] object-cover rounded-lg"
//                 />
//               </div>
//             ))}
//           </div>
//           <div className="flex flex-row items-center justify-center gap-4 w-[700px] ml-[7%] mt-[2%]">
//             {currentProfile?.imageUrls?.slice(2, 4).map((item, index) => (
//               <div key={index} className="relative">
//                 <img
//                   src={item}
//                   alt="profile"
//                   className="w-[300px] h-[400px] object-cover rounded-lg"
//                 />
//               </div>
//             ))}
//           </div>
//           <div className="flex flex-row items-center justify-center gap-4 w-[700px] ml-[7%] mt-[2%]">
//             {currentProfile?.imageUrls?.slice(4, 6).map((item, index) => (
//               <div key={index} className="relative">
//                 <img
//                   src={item}
//                   alt="profile"
//                   className="w-[300px] h-[400px] object-cover rounded-lg"
//                 />
//               </div>
//             ))}
//           </div>
//         </div>
//         <div className="flex flex-col justify-start w-[400px] mr-[4%] mt-[2%] gap-4">
//           <div className="flex flex-row gap-2 font-bold text-xl">
//             Name:
//             <div className="font-semibold">
//               {currentProfile?.firstName} {currentProfile?.lastName}
//             </div>
//           </div>
//           <div className="flex flex-row gap-2 font-bold text-xl">
//             Age:
//             <div className="font-semibold">{age}</div>
//           </div>
//           <div className="flex flex-row gap-2 font-bold text-xl">
//             Gender:
//             <div className="font-semibold">{currentProfile?.gender}</div>
//           </div>
//           <div className="flex flex-row gap-2 font-bold text-xl">
//             Sexuality:
//             <div className="font-semibold">{currentProfile?.type}</div>
//           </div>
//           <div className="flex flex-row gap-2 font-bold text-xl">
//             Hometown:
//             <div className="font-semibold">{currentProfile?.homeTown}</div>
//           </div>
//           <div className="flex flex-row gap-2 font-bold text-xl">
//             Looking for:
//             <div className="font-semibold">{currentProfile?.lookingFor}</div>
//           </div>

//           <div>
//             {currentProfile?.prompts.slice(0, 3).map((prompt) => (
//               <div
//                 key={prompt.id}
//                 className="bg-slate-100 w-[360px] p-[5%] pl-[8%] border-2 border-slate-200 border-dashed rounded-md mb-[5%]"
//               >
//                 <div className="text-lg font-semibold ">{prompt.question}</div>
//                 <div className="text-xl font-bold">{prompt.answer}</div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//       <div className="mb-[1%]" />
//     </>
//   );
// };

// export default ProfileScreen;

// import React, { useContext, useEffect, useState } from "react";
// import { AuthContext } from "../../AuthContext";
// import axios from "axios";
// import { jwtDecode } from "jwt-decode";
// import { useNavigate } from "react-router-dom";
// import API_URL from "../../config"

// const ProfileScreen = () => {
//   const navigation = useNavigate();
//   const [userId, setUserId] = useState("");
//   const [currentProfile, setCurrentProfile] = useState(null);
//   const { token, setToken } = useContext(AuthContext);

//   useEffect(() => {
//     const fetchUser = async () => {
//       const token = localStorage.getItem("token");
//       const decodedToken = jwtDecode(token);
//       const userId = decodedToken.userId;
//       setUserId(userId);
//     };

//     fetchUser();
//   }, []);

//   useEffect(() => {
//     if (userId) {
//       getUserDetails();
//     }
//   }, [userId]);

//   useEffect(() => {
//     if (!token) {
//       navigation("/");
//     }
//   }, [token, navigation]);

//   const getUserDetails = async () => {
//     try {
//       const response = await axios.get(`${API_URL}/users/${userId}`);
//       if (response.status === 200) {
//         const userData = response.data;
//         console.log("User details:", userData);
//         setCurrentProfile(userData);
//       } else {
//         console.error("Error fetching user details:", response.data.message);
//       }
//     } catch (error) {
//       console.error("Error fetching user details:", error.message);
//     }
//   };

//   const logout = () => {
//     try {
//       localStorage.removeItem("token");
//       console.log("AuthToken cleared successfully");
//       setToken("");
//     } catch (error) {
//       console.error("Failed to clear AuthToken:", error);
//     }
//   };

//   const navigateToEdit = () => {
//     navigation("/Edit", { state: { currentProfile } });
//   };

//   let age;
//   if (currentProfile?.dateOfBirth) {
//     const [, , yearValue] = currentProfile.dateOfBirth.split("/");
//     age = 2024 - parseInt(yearValue);
//   }

//   return (
//     <div className="container mx-auto px-4 py-8">
//       <div className="flex flex-col md:flex-row justify-between items-center mb-8">
//         <button
//           className="font-bold text-2xl md:text-3xl mb-4 md:mb-0"
//           onClick={navigateToEdit}
//         >
//           {currentProfile?.firstName} {currentProfile?.lastName}
//         </button>

//       </div>

//       <div className="flex flex-col lg:flex-row justify-between">
//         <div className="flex flex-col lg:w-2/3 mb-8 lg:mb-0">
//           <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//             {currentProfile?.imageUrls?.map((item, index) => (
//               <div key={index} className="relative">
//                 <img
//                   src={item}
//                   alt={`profile-${index + 1}`}
//                   className="w-full h-64 md:h-80 object-cover rounded-lg"
//                 />
//               </div>
//             ))}
//           </div>
//         </div>

//         <div className="flex flex-col lg:w-1/3 lg:ml-8">
//           <div className="bg-white shadow-md rounded-lg p-6 mb-6">
//             <div className="space-y-2">
//               <InfoItem label="Name" value={`${currentProfile?.firstName} ${currentProfile?.lastName}`} />
//               <InfoItem label="Age" value={age} />
//               <InfoItem label="Gender" value={currentProfile?.gender} />
//               <InfoItem label="Sexuality" value={currentProfile?.type} />
//               <InfoItem label="Hometown" value={currentProfile?.homeTown} />
//               <InfoItem label="Looking for" value={currentProfile?.lookingFor} />
//             </div>
//           </div>

//           <div className="space-y-4">
//             {currentProfile?.prompts.slice(0, 3).map((prompt) => (
//               <div
//                 key={prompt.id}
//                 className="bg-slate-100 p-4 border-2 border-slate-200 border-dashed rounded-md"
//               >
//                 <div className="text-lg font-semibold">{prompt.question}</div>
//                 <div className="text-xl font-bold mt-2">{prompt.answer}</div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//       <button
//           onClick={logout}
//           className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full cursor-pointer"
//         >
//           Logout
//         </button>
//     </div>
//   );
// };

// const InfoItem = ({ label, value }) => (
//   <div className="flex flex-row gap-2">
//     <span className="font-bold">{label}:</span>
//     <span>{value}</span>
//   </div>
// );

// export default ProfileScreen;

// import React, { useContext, useEffect, useState } from "react";
// import { AuthContext } from "../../AuthContext";
// import axios from "axios";
// import { jwtDecode } from "jwt-decode";
// import { useNavigate } from "react-router-dom";
// import API_URL from "../../config";
// import { FaCamera, FaCog, FaCheckCircle } from "react-icons/fa";

// const ProfileScreen = () => {
//   const navigation = useNavigate();
//   const [userId, setUserId] = useState("");
//   const [currentProfile, setCurrentProfile] = useState(null);
//   const { token, setToken } = useContext(AuthContext);

//   useEffect(() => {
//     const fetchUser = async () => {
//       const token = localStorage.getItem("token");
//       const decodedToken = jwtDecode(token);
//       const userId = decodedToken.userId;
//       setUserId(userId);
//     };

//     fetchUser();
//   }, []);

//   useEffect(() => {
//     if (userId) {
//       getUserDetails();
//     }
//   }, [userId]);

//   useEffect(() => {
//     if (!token) {
//       navigation("/");
//     }
//   }, [token, navigation]);

//   const getUserDetails = async () => {
//     try {
//       const response = await axios.get(`${API_URL}/users/${userId}`);
//       if (response.status === 200) {
//         const userData = response.data;
//         console.log("User details:", userData);
//         setCurrentProfile(userData);
//       } else {
//         console.error("Error fetching user details:", response.data.message);
//       }
//     } catch (error) {
//       console.error("Error fetching user details:", error.message);
//     }
//   };

//   const logout = () => {
//     try {
//       localStorage.removeItem("token");
//       console.log("AuthToken cleared successfully");
//       setToken("");
//       navigation("/");
//     } catch (error) {
//       console.error("Failed to clear AuthToken:", error);
//     }
//   };

//   const navigateToEdit = () => {
//     navigation("/user/Edit", { state: { currentProfile } });
//   };

//   const handleImageUpload = (event) => {
//     // Handle image upload logic here
//     console.log("Image uploaded:", event.target.files[0]);
//   };

//   let age;
//   if (currentProfile?.dateOfBirth) {
//     const [, , yearValue] = currentProfile.dateOfBirth.split("/");
//     age = 2024 - parseInt(yearValue);
//   }

//   return (
//     <div style={{ maxWidth: "600px", margin: "0 auto", padding: "0px", 
//       height: '85vh'
//     }}>

//       <div
//        style={{
//         display: "flex",
//         flexDirection: 'row',
//         justifyContent: "space-between",
//         alignItems: "center",
//         backgroundImage: `url(${currentProfile?.imageUrls?.[0] || "black"})`,
//         backgroundSize: 'cover', // This will ensure the image covers the whole area
//         backgroundPosition: 'center', // This centers the image
//         opacity: 0.3,
//         height: '20%',
//         objectFit: 'cover'
//       }}
//       >

//       </div>
//       <div
//        style={{
//         display: "flex",
//         flexDirection: 'row',
//         justifyContent: "space-between",
//         alignItems: "center",
//         marginTop: -50,
//         padding: 10
//       }}
//       >

//         <div style={{ position: "relative", marginTop: '0%', marginLeft: 20,  }}>
//           <img
//             src={
//               currentProfile?.imageUrls?.[0] ||
//               "https://via.placeholder.com/150"
//             }
//             alt="Profile"
//             style={{
//               width: "100px",
//               height: "100px",
//               borderRadius: "50%",
//               objectFit: "cover",
//               border: '3px solid white',
//               opacity: 'none',
//             }}
//             onClick={navigateToEdit}
//           />
//           <label
//             htmlFor="imageUpload"
//             style={{
//               position: "absolute",
//               bottom: "0",
//               right: "0",
//               background: "#007bff",
//               color: "white",
//               borderRadius: "50%",
//               padding: "5px",
//               cursor: "pointer",
//             }}
//           >
//             <FaCamera />
//           </label>
//           <input
//             type="file"
//             id="imageUpload"
//             accept="image/*"
//             onChange={handleImageUpload}
//             style={{ display: "none" }}
//           />
//         </div>

//         <FaCog
//           size={24}
//           onClick={navigateToEdit}
//           style={{ cursor: "pointer", color: "blue", marginBottom: '10%' }}
//         />
//       </div>

//       <div style={{ marginBottom: "20px", padding: '0px 30px'}}>

//         <h2
//           style={{
//             fontSize: "16px",
//             fontWeight: "bold",
//             display: "flex",
//             alignItems: "center",
//             marginTop: 5,
            
            
//           }}
//         >
//           {currentProfile?.firstName} {currentProfile?.lastName}
//           <FaCheckCircle style={{ marginLeft: "10px", color: "#007bff" }} />
//         </h2>
//         <p>
//           {age} years old • {currentProfile?.gender}
//         </p>
//       </div>

//       <div
//         style={{
//           display: "flex",
//           justifyContent: "space-between",
//           marginBottom: "20px",
//         }}
//       >
//         <div 
//         style={{
//           width: "100%",
//           padding: "10px",
//           marginBottom: "10px",
//           backgroundColor: "white",
//           color: "blue",
//           borderRadius: "5px",
//           cursor: "pointer",
         
//           gap: 2,
//           display: 'flex',
//           flexDirection: 'column',
//           fontWeight: 600,
//           fontSize: '14px'
//         }}
//         >
//         <button 
//         style={{
//           fontWeight: 800,
//           fontSize: '14px'

//         }}>0</button>
//         <button >Followers</button>
//         </div>
        
//         <div 
//         style={{
//           width: "100%",
//           padding: "10px",
//           marginBottom: "10px",
//           backgroundColor: "white",
//           color: "blue",
//           borderRadius: "5px",
//           cursor: "pointer",
//           gap: 2,
//           display: 'flex',
//           flexDirection: 'column',
//           fontWeight: 500,
//           fontSize: '14px'

//         }}
//         >
//         <button 
//         style={{
//           fontWeight: 800,
//           fontSize: '14px'

//         }}>0</button>
//         <button >Following</button>
//         </div>
//         <div 
//         style={{
//           width: "100%",
//           padding: "10px",
//           marginBottom: "10px",
//           backgroundColor: "white",
//           color: "blue",
//           borderRadius: "5px",
//           cursor: "pointer",
//           gap: 2,
//           display: 'flex',
//           flexDirection: 'column',
//           fontWeight: 500,
//           fontSize: '14px'

//         }}
//         >
//         <button 
//         style={{
//           fontWeight: 800,
//           fontSize: '14px'

//         }}
//         >0</button>
//         <button >Free Messages</button>
//         </div>
//       </div>

//       <div
//         style={{
//           display: "flex",
//           flexWrap: "wrap",
//           justifyContent: "space-between",
//           marginBottom: "20px",
//         }}
//       >
//         <div style={{ width: "48%" }}>
//           <button style={buttonStyle}>Coins</button>
//           <button style={buttonStyle}>Diamonds</button>
//           <button style={buttonStyle}>Bill Details</button>
//         </div>
//         <div style={{ width: "48%" }}>
//           <button style={buttonStyle}>Recharge</button>
//           <button style={buttonStyle}>Withdraw</button>
//           <button style={buttonStyle}> Open </button>
//         </div>
//       </div>

//       <div style={{ marginBottom: "20px" }}>
//         <h3
//           style={{ fontSize: "18px", fontWeight: "bold", marginBottom: "10px" }}
//         >
//           About Me
//         </h3>
//         <p>{currentProfile?.lookingFor}</p>
//       </div>

//       <div>
//         {currentProfile?.prompts.slice(0, 3).map((prompt) => (
//           <div
//             key={prompt.id}
//             style={{
//               marginBottom: "15px",
//               padding: "10px",
//               backgroundColor: "#f0f0f0",
//               borderRadius: "5px",
//             }}
//           >
//             <p style={{ fontWeight: "bold" }}>{prompt.question}</p>
//             <p>{prompt.answer}</p>
//           </div>
//         ))}
//       </div>

//       <button
//         onClick={logout}
//         style={{
//           ...buttonStyle,
//           backgroundColor: "red",
//           color: 'white',
//           marginTop: "20px",
//           width: '15%'
//         }}
//       >
//         Logout
//       </button>
//     </div>
//   );
// };

// const buttonStyle = {
//   width: "100%",
//   padding: "10px",
//   marginBottom: "10px",
//   backgroundColor: "white",
//   color: "blue",
//   borderRadius: "5px",
//   cursor: "pointer",
//   border: "0.01px solid #DCDCDC",
//   gap: 20,
// };

// export default ProfileScreen;

import React, { useContext, useEffect, useState } from "react"
import { AuthContext } from "../../AuthContext"
import axios from "axios"
import { jwtDecode } from "jwt-decode"
import { useNavigate } from "react-router-dom"
import API_URL from "../../config"
import { FaCamera, FaCog, FaCheckCircle, FaGem, FaWallet, FaAngleRight } from "react-icons/fa"

export default function ProfileScreen() {
  const navigation = useNavigate()
  const [userId, setUserId] = useState("")
  const [currentProfile, setCurrentProfile] = useState(null)
  const { token, setToken } = useContext(AuthContext)

  useEffect(() => {
    const fetchUser = async () => {
      const token = localStorage.getItem("token")
      const decodedToken = jwtDecode(token)
      const userId = decodedToken.userId
      setUserId(userId)
    }

    fetchUser()
  }, [])

  useEffect(() => {
    if (userId) {
      getUserDetails()
    }
  }, [userId])

  useEffect(() => {
    if (!token) {
      navigation("/")
    }
  }, [token, navigation])

  const getUserDetails = async () => {
    try {
      const response = await axios.get(`${API_URL}/users/${userId}`)
      if (response.status === 200) {
        const userData = response.data
        console.log("User details:", userData)
        setCurrentProfile(userData)
      } else {
        console.error("Error fetching user details:", response.data.message)
      }
    } catch (error) {
      console.error("Error fetching user details:", error.message)
    }
  }

const followers = 100;
const following = 50;
const freeMessages = 20;


  const logout = () => {
    try {
      localStorage.removeItem("token")
      console.log("AuthToken cleared successfully")
      setToken("")
      navigation("/")
    } catch (error) {
      console.error("Failed to clear AuthToken:", error)
    }
  }

  const navigateToEdit = () => {
    navigation("/user/Edit", { state: { currentProfile } })
  }

  const handleImageUpload = (event) => {
    console.log("Image uploaded:", event.target.files[0])
  }

  let age
  if (currentProfile?.dateOfBirth) {
    const [, , yearValue] = currentProfile.dateOfBirth.split("/")
    age = 2024 - parseInt(yearValue)
  }

  return (
    <div style={{
      maxWidth: "600px",
      margin: "0 auto",
      padding: "10px",
      fontFamily: "Arial, sans-serif",
    }}>
      <div style={{
        position: "relative",
      }}>
        <div style={{
          height: "150px",
          backgroundImage: `url(${currentProfile?.imageUrls?.[0] || "blue"})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          borderRadius: "10px 10px 0 0",
          opacity: 0.2
        }}></div>
        <div style={{
          position: "absolute",
          bottom: "-50px",
          left: "20px",
        }}>
          <div style={{
            position: "relative",
            width: "100px",
            height: "100px",
          }}>
            <img
              src={currentProfile?.imageUrls?.[0] || "https://via.placeholder.com/150"}
              alt="Profile"
              style={{
                width: "100px",
                height: "100px",
                borderRadius: "50%",
                border: "4px solid white",
                objectFit: "cover",
              }}
            />
            <label
              htmlFor="imageUpload"
              style={{
                position: "absolute",
                bottom: "0",
                right: "0",
                backgroundColor: "#007bff",
                color: "white",
                borderRadius: "50%",
                padding: "5px",
                cursor: "pointer",
              }}
            >
              <FaCamera style={{ width: "16px", height: "16px" }} />
            </label>
            <input
              type="file"
              id="imageUpload"
              accept="image/*"
              onChange={handleImageUpload}
              style={{ display: "none" }}
            />
          </div>
        </div>
        <button
          onClick={navigateToEdit}
          style={{
            position: "absolute",
            top: "10px",
            right: "10px",
            backgroundColor: "white",
            border: "none",
            borderRadius: "50%",
            padding: "10px",
            cursor: "pointer",
          }}
        >
          <FaCog style={{ width: "20px", height: "20px", color: "#007bff" }} />
        </button>
      </div>

      <div style={{
        textAlign: "center",
        marginBottom: "20px",
      }}>
        <h2 style={{
          fontSize: "24px",
          fontWeight: "bold",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "10px",
          marginTop: "30px",
          padding: "20px",
        }}>
          {currentProfile?.firstName} {currentProfile?.lastName}
          <FaCheckCircle style={{ color: "#007bff", width: "20px", height: "20px" }} />
        </h2>
        <p style={{ color: "#666" }}>
          {age} years old • {currentProfile?.gender}
        </p>
      </div>

      <div style={{
  display: "flex",
  justifyContent: "space-between",
  marginBottom: "20px",
  flexWrap: "wrap",
  gap: 20
}}>
  <button style={{
    backgroundColor: "white",
    borderRadius: "10px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.05)",
    textAlign: "center",
    flex: 1,
    margin: "0 5px",
    padding: "10px",
    cursor: "pointer",
  }}>
    <p style={{ fontSize: "20px", fontWeight: "bold" }}>{followers}</p>
    <p style={{ fontSize: "14px", color: "blue" }}>Followers</p>
  </button>
  
  <button style={{
    backgroundColor: "white",
    borderRadius: "10px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.05)",
    textAlign: "center",
    flex: 1,
    margin: "0 5px",
    padding: "10px",
    cursor: "pointer",
  }}>
    <p style={{ fontSize: "20px", fontWeight: "bold" }}>{following}</p>
    <p style={{ fontSize: "14px", color: "blue" }}>Following</p>
  </button>
  
  <button style={{
    backgroundColor: "white",
    borderRadius: "10px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.05)",
    textAlign: "center",
    flex: 1,
    margin: "0 5px",
    padding: "10px",
    cursor: "pointer",
  }}>
    <p style={{ fontSize: "20px", fontWeight: "bold" }}>{freeMessages}</p>
    <p style={{ fontSize: "14px", color: "blue" }}>Free Messages</p>
  </button>
</div>

      <div style={{
  display: "flex",
  flexDirection: 'column',
  gap: "10px",
  marginBottom: "20px",
  boxShadow: "0 2px 4px rgba(0, 0, 0, 0.09)",
  borderRadius: "10px",
  width: '98%',
  margin: 'auto'
}}>
 <div
 style={{
  backgroundColor: "white",
  color: "#007bff",
  borderRadius: "5px",
  padding: "10px",
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-start",
  cursor: "pointer",
  flexDirection: 'row'
}}
 >
<button 
  style={{
  backgroundColor: "white",
  color: "#007bff",
  borderRadius: "5px",
  padding: "10px",
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-start",
  cursor: "pointer",
  flexDirection: 'row',
  width: '80%'
}}>
    <FaWallet style={{ marginRight: "10px" }} />
    Coins
  </button>

<button
 style={{
  backgroundColor: "#007bff",
  color: "white",
  border: "1px solid #007bff",
  borderRadius: "30px",
  padding: "5px",
  display: "flex",
  fontSize: '12px'
 
  

}}>Recharge</button>
 </div>
  


  
 <div
 style={{
  backgroundColor: "white",
  color: "#007bff",
  borderRadius: "5px",
  padding: "10px",
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-start",
  cursor: "pointer",
  flexDirection: 'row'
}}
 >
<button 
  style={{
  backgroundColor: "white",
  color: "#007bff",
  borderRadius: "5px",
  padding: "10px",
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-start",
  cursor: "pointer",
  flexDirection: 'row',
  width: '80%'
}}>
   <FaGem style={{ marginRight: "10px" }} />
   Wallet
  </button>

<button
 style={{
  backgroundColor: "#007bff",
  color: "white",
  border: "1px solid #007bff",
  borderRadius: "30px",
  padding: "5px",
  display: "flex",
  fontSize: '12px'
 
  

}}>Withdraw</button>
 </div>
 

  {/* Bill Details*/}
 
 <div
 style={{
  backgroundColor: "white",
  color: "#007bff",
  borderRadius: "5px",
  padding: "10px",
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-start",
  cursor: "pointer",
  flexDirection: 'row'
}}
 >
<button 
  style={{
  backgroundColor: "white",
  color: "#007bff",
  borderRadius: "5px",
  padding: "10px",
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-start",
  cursor: "pointer",
  flexDirection: 'row',
  width: '80%'
}}>
   Bill Details
  </button>

<button
 style={{
  backgroundColor: "white",
  color: "black",
  fontSize: '20px',
  fontWeight: 'lighter'
 
}}> <FaAngleRight style={{ marginRight: "10px"}} /></button>
 </div>

  
  
</div>
      <div style={{ marginBottom: "20px" }}>
        <h3 style={{ fontSize: "18px", fontWeight: "bold", marginBottom: "10px" }}>About Me</h3>
        <p>{currentProfile?.lookingFor}</p>
      </div>

      <div style={{ marginBottom: "20px" }}>
        {currentProfile?.prompts.slice(0, 3).map((prompt) => (
          <div key={prompt.id} style={{
            backgroundColor: "#f0f0f0",
            padding: "15px",
            borderRadius: "10px",
            marginBottom: "10px",
          }}>
            <p style={{ fontWeight: "bold", marginBottom: "5px" }}>{prompt.question}</p>
            <p>{prompt.answer}</p>
          </div>
        ))}
      </div>

      <div style={{
        display: "flex",
        justifyContent: "center",
      }}>
        <button
          onClick={logout}
          style={{
            backgroundColor: "#dc3545",
            color: "white",
            border: "none",
            borderRadius: "5px",
            padding: "10px 20px",
            cursor: "pointer",
          }}
        >
          Logout
        </button>
      </div>
    </div>
  )
}