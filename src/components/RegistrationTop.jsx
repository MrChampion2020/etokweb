// import React from "react";

// const RegistrationTop = (props) => {
//   return (
//     <>
//       <div className="mt-8 w-36"
//       style={{width: '100%'}}>
//         <div className="flex items-center ml-14">
//           <div className="flex justify-center items-center w-12 h-12 border-black border-2 rounded-full ">
//             {" "}
//             <props.logo className="text-2xl" />{" "}
//           </div>
//           <img
//             className="w-24 h-24"
//             src="https://cdn-icons-png.flaticon.com/128/10613/10613685.png"
//             alt="..."
//           />
//         </div>
//         <div className="text-2xl font-bold ml-20">{props.title}</div>
//       </div>
//     </>
//   );
// };

// export default RegistrationTop;


import React from "react"

const RegistrationTop = ({ logo: Logo, title }) => {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      width: '100%',
      maxWidth: '600px',
      margin: '2rem auto 0',
      padding: '0 1rem',
    }}>
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        marginBottom: '1rem',
      }}>
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: '3rem',
          height: '3rem',
          border: '2px solid black',
          borderRadius: '50%',
          marginRight: '1rem',
        }}>
          <Logo style={{ fontSize: '1.5rem' }} />
        </div>
        <img
          src="https://cdn-icons-png.flaticon.com/128/10613/10613685.png"
          alt="Registration icon"
          style={{
            width: '6rem',
            height: '6rem',
            objectFit: 'contain',
          }}
        />
      </div>
      <h1 style={{
        fontSize: '1.5rem',
        fontWeight: 'bold',
        textAlign: 'center',
        width: '100%',
      }}>
        {title}
      </h1>
    </div>
  )
}

export default RegistrationTop