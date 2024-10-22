import React, { useEffect, useState } from "react";
import { MdOutlineVideoCameraBack } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { BiImageAdd } from "react-icons/bi";
import { useDropzone } from "react-dropzone";
import RegistrationTop from "../../components/RegistrationTop";
import {
  saveRegistrationProgress,
  getRegistrationProgress,
} from "../../registrationUtils";

const PhotoScreen = () => {
  const [imageUrls, setImageUrls] = useState(["", "", "", "", "", ""]);
  const [imageUrl, setImageUrl] = useState("");
  const navigation = useNavigate();

  const handleAddImage = () => {
    // Find the first empty slot in the array
    const index = imageUrls.findIndex((url) => url === "");
    if (index !== -1) {
      const updatedUrls = [...imageUrls];
      updatedUrls[index] = imageUrl;
      setImageUrls(updatedUrls);
      setImageUrl("");
    }
  };

  useEffect(() => {
    const progressData = getRegistrationProgress("Photos");
    if (progressData && progressData.imageUrls) {
      setImageUrls(progressData.imageUrls || ["", "", "", "", "", ""]);
      console.log("PhotoScreen: ", progressData, " loaded");
    }
  }, []);

  const handleNext = () => {
    saveRegistrationProgress("Photos", { imageUrls });
    navigation("/prompts");
  };
  return (
    // <>
    //   <RegistrationTop
    //     logo={MdOutlineVideoCameraBack}
    //     title="Upload your photos"
    //   />
    //   <div className="flex flex-row ml-[10%] mt-[2%]">
    //     <div className="flex flex-col">
    //       <div className="flex flex-row">
    //         {imageUrls?.slice(0, 3).map((url, index) => (
    //           <div key={index}>
    //             {url ? (
    //               <div className="w-[130px] h-[130px] border-none rounded-xl m-2 flex items-center justify-center">
    //                 <img className="w-full h-full rounded-xl" src={url} />
    //               </div>
    //             ) : (
    //               <div className="w-[130px] h-[130px] border-2 border-dashed border-black rounded-xl m-2 flex items-center justify-center">
    //                 <BiImageAdd className="w-[80%] h-[80%] p-[25%]" />
    //               </div>
    //             )}
    //           </div>
    //         ))}
    //       </div>
    //       <div className="flex flex-row">
    //         {imageUrls?.slice(3, 6).map((url, index) => (
    //           <div key={index}>
    //             {url ? (
    //               <div className="w-[130px] h-[130px] border-none rounded-xl m-2 flex items-center justify-center">
    //                 <img className="w-full h-full rounded-xl" src={url} />
    //               </div>
    //             ) : (
    //               <div className="w-[130px] h-[130px] border-2 border-dashed border-black rounded-xl m-2 flex items-center justify-center">
    //                 <BiImageAdd className="w-[80%] h-[80%] p-[25%]" />
    //               </div>
    //             )}
    //           </div>
    //         ))}
    //       </div>
    //     </div>
    //     <div className="flex flex-col items-center justify-center p-[5%]">
    //       <input
    //         type="text"
    //         autoFocus={true}
    //         value={imageUrl}
    //         onChange={(e) => setImageUrl(e.target.value)}
    //         placeholder="Enter your image url"
    //         className="w-[400px] h-[100px] border-2 border-black rounded-xl p-[2%] focus:outline-none"
    //       />
    //       <button
    //         className="bg-blue-500 h-[50px] w-[250px] rounded-full justify-center items-center self-center mt-[20px] text-white text-lg font-bold font-sans"
    //         onClick={handleAddImage}
    //       >
    //         Add Image
    //       </button>
    //     </div>
    //   </div>
    //   <div
    //     style={{
    //       width: "100%",
    //       display: "flex",
    //       justifyContent: "center",
    //       alignItems: "center",
    //       padding: "2rem",
    //       boxSizing: "border-box",
    //     }}
    //   >
    //     <button
    //     className="bg-blue-500"
    //       onClick={handleNext}
    //       style={{
    //         color: "white",
    //         border: "none",
    //         width: '50%',
    //         padding: "10px 5px",
    //         fontSize: "18px",
    //         borderRadius: "30px",
    //         cursor: "pointer",
    //       }}
    //     >
                
    //       Next
    //     </button>
    //   </div>
    // </>
    <>
  <RegistrationTop
    logo={MdOutlineVideoCameraBack}
    title="Upload your photos"
  />
  <div
    style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      margin: "2% 10%",
    }}
  >
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
      }}
    >
      <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
        {imageUrls?.slice(0, 3).map((url, index) => (
          <div key={index} style={{ margin: "10px" }}>
            {url ? (
              <div
                style={{
                  width: "100px",
                  height: "100px",
                  borderRadius: "12px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  overflow: "hidden",
                }}
              >
                <img
                  src={url}
                  alt=""
                  style={{
                    width: "100%",
                    height: "100%",
                    borderRadius: "12px",
                    objectFit: "cover",
                  }}
                />
              </div>
            ) : (
              <div
                style={{
                  width: "100px",
                  height: "100px",
                  border: "2px dashed black",
                  borderRadius: "12px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <BiImageAdd style={{ width: "80%", height: "80%" }} />
              </div>
            )}
          </div>
        ))}
      </div>

      <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
        {imageUrls?.slice(3, 6).map((url, index) => (
          <div key={index} style={{ margin: "10px" }}>
            {url ? (
              <div
                style={{
                  width: "100px",
                  height: "100px",
                  borderRadius: "12px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  overflow: "hidden",
                }}
              >
                <img
                  src={url}
                  alt=""
                  style={{
                    width: "100%",
                    height: "100%",
                    borderRadius: "12px",
                    objectFit: "cover",
                  }}
                />
              </div>
            ) : (
              <div
                style={{
                  width: "100px",
                  height: "100px",
                  border: "2px dashed black",
                  borderRadius: "12px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <BiImageAdd style={{ width: "80%", height: "80%" }} />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>

    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "5%",
      }}
    >
      <input
        type="text"
        autoFocus={true}
        value={imageUrl}
        onChange={(e) => setImageUrl(e.target.value)}
        placeholder="Enter your image URL"
        style={{
          width: "90%",
          maxWidth: "400px",
          height: "50px",
          border: "2px solid black",
          borderRadius: "12px",
          padding: "10px",
          marginBottom: "20px",
          boxSizing: "border-box",
        }}
      />
      <button
        onClick={handleAddImage}
        style={{
          backgroundColor: "#1E90FF",
          height: "50px",
          width: "90%",
          maxWidth: "250px",
          borderRadius: "30px",
          color: "white",
          fontSize: "16px",
          fontWeight: "bold",
          cursor: "pointer",
        }}
      >
        Add Image
      </button>
    </div>
  </div>

  <div
    style={{
      width: "100%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      padding: 10,
    }}
  >
    <button
      onClick={handleNext}
      style={{
        backgroundColor: "#1E90FF",
        color: "white",
        border: "none",
        width: "90%",
        maxWidth: "300px",
        padding: "10px",
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

export default PhotoScreen;
