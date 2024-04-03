// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';


// import React, { useState } from 'react';
// import axios from 'axios';

// const BackgroundRemover = () => {
//   const [image, setImage] = useState(null);
//   const [result, setResult] = useState(null);
//   const [loading, setLoading] = useState(false);

//   const handleImageChange = (e) => {
//     setImage(e.target.files[0]);
//   };

//   const removeBackground = async () => {
//     setLoading(true);
//     const formData = new FormData();
//     formData.append('image', image);

//     const options = {
//       method: 'POST',
//       url: 'https://background-remover.p.rapidapi.com/remove-background',
//       headers: {
//         'X-RapidAPI-Key': 'SIGN-UP-FOR-KEY',
//         'X-RapidAPI-Host': 'background-remover.p.rapidapi.com',
//         'Content-Type': 'multipart/form-data',
//       },
//       data: formData,
//     };

//     try {
//       const response = await axios.request(options);
//       setResult(response.data);
//     } catch (error) {
//       console.error(error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div>
//       <input type="file" onChange={handleImageChange} accept="image/*" />
//       <button onClick={removeBackground} disabled={!image || loading}>
//         Remove Background
//       </button>
//       {loading && <p>Loading...</p>}
//       {result && (
//         <div>
//           <h2>Result</h2>
//           <img src={result} alt="Background Removed" />
//         </div>
//       )}
//     </div>
//   );
// };

// export default BackgroundRemover;
