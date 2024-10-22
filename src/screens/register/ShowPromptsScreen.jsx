import React, { useContext, useEffect, useState } from "react";
import { useNavigate} from "react-router-dom";
import Modal from "react-modal";
import { RxCross2 } from "react-icons/rx";
const ShowPromptsScreen = () => {
  // const { prompts, setPrompts } = useContext(PromptsContext);
  const navigate = useNavigate();
  const [prompts, setPrompts] = useState([]);
  const promptss = [
    {
      id: "0",
      name: "About me",
      questions: [
        {
          id: "10",
          question: "A random fact I love is",
        },
        {
          id: "11",
          question: "Typical Sunday",
        },
        {
          id: "12",
          question: "I go crazy for",
        },
        {
          id: "13",
          question: "Unusual Skills",
        },
        {
          id: "14",
          question: "My greatest strenght",
        },
        {
          id: "15",
          question: "My simple pleasures",
        },
        {
          id: "16",
          question: "A life goal of mine",
        },
      ],
    },
    {
      id: "2",
      name: "Self Care",
      questions: [
        {
          id: "10",
          question: "I unwind by",
        },
        {
          id: "11",
          question: "A boundary of mine is",
        },
        {
          id: "12",
          question: "I feel most supported when",
        },
        {
          id: "13",
          question: "I hype myself up by",
        },
        {
          id: "14",
          question: "To me, relaxation is",
        },
        {
          id: "15",
          question: "I beat my blues by",
        },
        {
          id: "16",
          question: "My skin care routine",
        },
      ],
    },
  ];
  const [option, setOption] = useState("About me");
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [isModalVisible, setModalVisible] = useState(false);

  const openModal = (item) => {
    setModalVisible(true);
    setQuestion(item?.question);
  };

  useEffect(() => {
    if (prompts.length === 3) {
      setModalVisible(false);
      navigate("/prompts", { state: { prompts: prompts } });
    }
  });

  const addPrompt = () => {
    const newPrompt = { question, answer };
    setPrompts([...prompts, newPrompt]);
    setQuestion("");
    setAnswer("");
    setModalVisible(false);
    if (prompts.length === 3) {
      navigate("/prompts", { state: { prompts: prompts } }); // pass state to navigate
    }
  };

  return (
    <>
      <div className="flex flex-row justify-between px-[3%] items-center my-[1%]">
        <h1 className="text-4xl font-bold" 
        
        style={{color: "#318ce7"}}
        >Prompts</h1>
        <button
          className="text-2xl font-semibold bg-gray border-none cursor-pointer transition duration-300 ease-in-out hover:text-white-700"
          onClick={() => navigate(-1)}
        >
          <RxCross2 />
        </button>
      </div>
      <hr className="bg-gray h-[1px]" />
      <div className="flex flex-row justify-evenly items-center my-[1%]">
        {promptss?.map((item, index) => (
          <button
            className="text-lg font-semibold cursor-pointer bg-blue border-1 border-gray px-[15px] py-[5px] rounded transition duration-300 ease-in-out hover:text-white-700"
            style={{
              backgroundColor: option === item?.name ? "#318ce7" : "white",
            }}
            onClick={() => setOption(item?.name)}
            key={index}
          >
            {item?.name}
          </button>
        ))}
      </div>
      <hr className="bg-gray h-[1px]" />
      <div>
        {promptss?.map((item, index) => (
          <div className="flex flex-col justify-between items-center mt-[2%]" key={index}>
            {option === item?.name &&
              item?.questions?.map((question, questionIndex) => (
                <button
                  className="text-lg font-semibold w-[40%] cursor-pointer border-1 border-gray px-[15px] py-[5px] my-[3px] rounded transition duration-300 ease-in-out hover:bg-blue-500 hover:text-white"
                  onClick={() => openModal(question)}
                  key={questionIndex}
                >
                  {question.question}
                </button>
              ))}
          </div>
        ))}
      </div>

      <Modal
        isOpen={isModalVisible}
        onRequestClose={() => setModalVisible(false)}
        className="bg-opacity-80 bg-gray-200 fixed bottom-0 w-full h-[40%] z-10 flex flex-col items-center"
      >
        <h2 className="text-4xl font-extrabold my-[2%]">Answer your question</h2>
        <p className="text-lg font-semibold"> Question : {question} ...?</p>
        <textarea
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
          placeholder="Enter Your Answer"
          className="w-[40%] h-[23%] text-base p-[1%] mt-[20px] outline-none border-b-2 border-black resize-none"
          autoFocus
        />
        <button className="text-lg font-semibold cursor-pointer border-2 border-black px-[60px] py-[5px] my-[3px] rounded transition duration-300 ease-in-out hover:bg-blue-500 hover:text-white" onClick={addPrompt}>
          Add
        </button>
      </Modal>
    </>
  );
};

export default ShowPromptsScreen;

// import React, { useContext, useEffect, useState } from "react"
// import { useNavigate } from "react-router-dom"
// import Modal from "react-modal"
// import { RxCross2 } from "react-icons/rx"

// const ShowPromptsScreen = () => {
//   const navigate = useNavigate()
//   const [prompts, setPrompts] = useState([])
//   const [promptCategories, setPromptCategories] = useState([
//     {
//       id: "0",
//       name: "About me",
//       questions: [
//         { id: "10", question: "A random fact I love is" },
//         { id: "11", question: "Typical Sunday" },
//         { id: "12", question: "I go crazy for" },
//         { id: "13", question: "Unusual Skills" },
//         { id: "14", question: "My greatest strength" },
//         { id: "15", question: "My simple pleasures" },
//         { id: "16", question: "A life goal of mine" },
//       ],
//     },
//     {
//       id: "2",
//       name: "Self Care",
//       questions: [
//         { id: "10", question: "I unwind by" },
//         { id: "11", question: "A boundary of mine is" },
//         { id: "12", question: "I feel most supported when" },
//         { id: "13", question: "I hype myself up by" },
//         { id: "14", question: "To me, relaxation is" },
//         { id: "15", question: "I beat my blues by" },
//         { id: "16", question: "My skin care routine" },
//       ],
//     },
//   ])
//   const [option, setOption] = useState("About me")
//   const [question, setQuestion] = useState("")
//   const [answer, setAnswer] = useState("")
//   const [isModalVisible, setModalVisible] = useState(false)

//   const openModal = (item) => {
//     setModalVisible(true)
//     setQuestion(item?.question)
//   }

//   useEffect(() => {
//     if (prompts.length === 3) {
//       setModalVisible(false)
//       navigate("/prompts", { state: { prompts: prompts } })
//     }
//   }, [prompts, navigate])

//   const addPrompt = () => {
//     const newPrompt = { question, answer }
//     setPrompts([...prompts, newPrompt])
//     setQuestion("")
//     setAnswer("")
//     setModalVisible(false)
//   }

//   return (
//     <div style={{
//       display: 'flex',
//       flexDirection: 'column',
//       maxWidth: '800px',
//       margin: '0 auto',
//       padding: '1rem',
//     }}>
//       <div style={{
//         display: 'flex',
//         justifyContent: 'space-between',
//         alignItems: 'center',
//         marginBottom: '1rem',
//       }}>
//         <h1 style={{ fontSize: '2rem', fontWeight: 'bold', color: "#318ce7" }}>Prompts</h1>
//         <button
//           onClick={() => navigate(-1)}
//           style={{
//             background: 'none',
//             border: 'none',
//             fontSize: '1.5rem',
//             cursor: 'pointer',
//           }}
//         >
//           <RxCross2 />
//         </button>
//       </div>
//       <hr style={{ border: 'none', height: '1px', backgroundColor: '#E5E7EB', margin: '1rem 0' }} />
//       <div style={{
//         display: 'flex',
//         flexWrap: 'wrap',
//         justifyContent: 'center',
//         gap: '1rem',
//         marginBottom: '1rem',
//       }}>
//         {promptCategories.map((item) => (
//           <button
//             key={item.id}
//             onClick={() => setOption(item.name)}
//             style={{
//               fontSize: '1rem',
//               fontWeight: '600',
//               cursor: 'pointer',
//               backgroundColor: option === item.name ? "#318ce7" : "white",
//               color: option === item.name ? "white" : "black",
//               border: '1px solid #D1D5DB',
//               padding: '0.5rem 1rem',
//               borderRadius: '0.25rem',
//             }}
//           >
//             {item.name}
//           </button>
//         ))}
//       </div>
//       <hr style={{ border: 'none', height: '1px', backgroundColor: '#E5E7EB', margin: '1rem 0' }} />
//       <div style={{
//         display: 'flex',
//         flexDirection: 'column',
//         alignItems: 'center',
//       }}>
//         {promptCategories.map((item) => (
//           option === item.name && item.questions.map((question) => (
//             <button
//               key={question.id}
//               onClick={() => openModal(question)}
//               style={{
//                 fontSize: '1rem',
//                 fontWeight: '600',
//                 width: '100%',
//                 maxWidth: '450px',
//                 cursor: 'pointer',
//                 border: '1px solid #D1D5DB',
//                 padding: '0.75rem',
//                 margin: '0.5rem 0',
//                 borderRadius: '0.25rem',
//                 backgroundColor: 'white',
//                 textAlign: 'left',
//               }}
//             >
//               {question.question}
//             </button>
//           ))
//         ))}
//       </div>

//       <Modal
//         isOpen={isModalVisible}
//         onRequestClose={() => setModalVisible(false)}
//         style={{
//           overlay: {
//             backgroundColor: 'rgba(0, 0, 0, 0.75)',
//           },
//           content: {
//             top: '50%',
//             left: '50%',
//             right: 'auto',
//             bottom: 'auto',
//             marginRight: '-50%',
//             transform: 'translate(-50%, -50%)',
//             width: '90%',
//             maxWidth: '500px',
//             display: 'flex',
//             flexDirection: 'column',
//             alignItems: 'center',
//             padding: '2rem',
//           },
//         }}
//       >
//         <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1rem' }}>Answer your question</h2>
//         <p style={{ fontSize: '1rem', fontWeight: '600', marginBottom: '1rem' }}>Question: {question} ...?</p>
//         <textarea
//           value={answer}
//           onChange={(e) => setAnswer(e.target.value)}
//           placeholder="Enter Your Answer"
//           style={{
//             width: '100%',
//             height: '100px',
//             fontSize: '1rem',
//             padding: '0.5rem',
//             marginBottom: '1rem',
//             border: '1px solid #D1D5DB',
//             borderRadius: '0.25rem',
//             resize: 'vertical',
//           }}
//           autoFocus
//         />
//         <button 
//           onClick={addPrompt}
//           style={{
//             fontSize: '1rem',
//             fontWeight: '600',
//             cursor: 'pointer',
//             backgroundColor: '#3B82F6',
//             color: 'white',
//             border: 'none',
//             padding: '0.75rem 2rem',
//             borderRadius: '0.25rem',
//           }}
//         >
//           Add
//         </button>
//       </Modal>
//     </div>
//   )
// }

// export default ShowPromptsScreen