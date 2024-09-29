import React, { useState } from 'react';
import Spline from '@splinetool/react-spline';
import './App.css';


function App() {
  // State to hold the value of X (input value)
  const [xValue, setXValue] = useState(0);

  // Handler for changing the input value
  const handleInputChange = (e) => {
    const newValue = parseInt(e.target.value, 10); // Convert input to an integer
    if (newValue >= 0 && newValue <= 2) {
      setXValue(newValue); // Update state if the value is within the valid range (0, 1, 2)
    }
  };

  return (
    <div className="App">
      <div className="input-container">
        <label>Input X (0, 1, or 2): </label>
        <input
          type="number"
          value={xValue}
          onChange={handleInputChange}
          min="0"
          max="2"
        />
      </div>

      <div className="spline-container">
        {/* Character 1: State 0 is always rendered, State 1 appears on top */}
        <div className="spline-character">
          {/* Always render State 0 */}
          <Spline scene="https://prod.spline.design/82gSsm7wjc-ugja7/scene.splinecode" />
          {/* Conditionally render State 1 on top */}
          {xValue === 0 ? null : (
            <Spline
              scene="https://prod.spline.design/a2IWM6qn1r-q8Aqu/scene.splinecode"
              className="overlay"
            />
          )}
        </div>

        {/* Character 2: State 0 is always rendered, State 1 appears on top */}
        <div className="spline-character">
          {/* Always render State 0 */}
          <Spline scene="https://prod.spline.design/rJWsDUbRib-nVYB3/scene.splinecode" />
          {/* Conditionally render State 1 on top */}
          {xValue === 1 ? (
            <Spline
              scene="https://prod.spline.design/BglYE7jKXRL8UZ8D/scene.splinecode"
              className="overlay"
            />
          ) : null}
        </div>

        {/* Character 3: State 0 is always rendered, State 1 appears on top */}
        <div className="spline-character">
          {/* Always render State 0 */}
          <Spline scene="https://prod.spline.design/kcOMX-bu-HV6x4Hj/scene.splinecode" />
          {/* Conditionally render State 1 on top */}
          {xValue === 2 ? (
            <Spline
              scene="https://prod.spline.design/LLtNuOqC7rj2EXKu/scene.splinecode"
              className="overlay"
            />
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default App;


// function App() {
//   const [xValue, setXValue] = useState(0);

//   //Handler for changing the input value
//   const handleInputChange = (e) => {
//     const newValue = parseInt(e.target.value, 10);  // Convert input to an integer
//     if (newValue >= 0 && newValue <= 2) {
//       setXValue(newValue);  // Update state if the value is within the valid range (0, 1, 2)
//     }
//   };

//   return (
//     <div className="App">
//       <div className="input-container">
//         <label>Input X (0, 1, or 2): </label>
//         <input
//           type="number"
//           value={xValue}
//           onChange={handleInputChange}
//           min="0"
//           max="2"
//         />
//       </div>

//       <div className="spline-container">
//         {/* Character 1: Switch between state 0 and state 1 */}
//         <div className="spline-character">
//           {xValue === 0 ? (
//             <Spline scene="https://prod.spline.design/82gSsm7wjc-ugja7/scene.splinecode" />
//           ) : (
//             <Spline scene="https://prod.spline.design/a2IWM6qn1r-q8Aqu/scene.splinecode" />
//           )}
//         </div>

//         {/* Character 2: Switch between state 0 and state 1 */}
//         <div className="spline-character">
//           {xValue === 1 ? (
//             <Spline scene="https://prod.spline.design/rJWsDUbRib-nVYB3/scene.splinecode" />
//           ) : (
//             <Spline scene="https://prod.spline.design/BglYE7jKXRL8UZ8D/scene.splinecode" />
//           )}
//         </div>

//         {/* Character 3: Switch between state 0 and state 1 */}
//         <div className="spline-character">
//           {xValue === 2 ? (
//             <Spline scene="https://prod.spline.design/kcOMX-bu-HV6x4Hj/scene.splinecode" />
//           ) : (
//             <Spline scene="https://prod.spline.design/LLtNuOqC7rj2EXKu/scene.splinecode" />
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }
// export default App;

// function App() {

//   const [xValue, setXValue] = useState(0);  // Metric X controls character 1
//   const [yValue, setYValue] = useState(0);  // Metric Y controls character 2
//   const [zValue, setZValue] = useState(0);  // Metric Z controls character 3

//   // Handler for loading the Spline scene for Character 1
//   const handleSplineLoadCharacter1 = (spline) => {
//     const spotlight = spline.findObjectById('9b82ec13-6064-4964-b3ac-4f4ea06b83fa');
//     const peakTop = spline.findObjectById('39bf3aab-ed4a-4837-ac3e-5fc5783d544e');

//     peakTop.useState('Baste State');

//     // Set Character 1 states based on xValue
//     if (xValue === 1) {
//       spotlight.setState('Speaking');
//       spotlight.setState()
//       peakTop.setState('Base State', 'Speaking');
//     } else {
//       spotlight.setState('Base State');
//       peakTop.setState('Base State');
//     }
//   };

//   // Handler for loading the Spline scene for Character 2
//   const handleSplineLoadCharacter2 = (spline) => {
//     const spotlight = spline.findObjectById('9b82ec13-6064-4964-b3ac-4f4ea06b83fa');
//     const peakTop = spline.findObjectById('39bf3aab-ed4a-4837-ac3e-5fc5783d544e');

//     // Set Character 2 states based on yValue
//     if (yValue === 1) {
//       spotlight.setState('Speaking');
//       peakTop.setState('Speaking');
//     } else {
//       spotlight.setState('Base State');
//       peakTop.setState('Base State');
//     }
//   };

//   // Handler for loading the Spline scene for Character 3
//   const handleSplineLoadCharacter3 = (spline) => {
//     const spotlight = spline.findObjectById('9b82ec13-6064-4964-b3ac-4f4ea06b83fa');
//     const peakTop = spline.findObjectById('39bf3aab-ed4a-4837-ac3e-5fc5783d544e');

//     // Set Character 3 states based on zValue
//     if (zValue === 1) {
//       spotlight.setState('Speaking');
//       peakTop.setState('Speaking');
//     } else {
//       spotlight.setState('Base State');
//       peakTop.setState('Base State');
//     }
//   };

//   return (
//     <div className="App">
//       <div className="input-container">
//         <label>Metric X (Character 1): </label>
//         <input
//           type="number"
//           value={xValue}
//           onChange={(e) => setXValue(parseInt(e.target.value, 10))}
//           min="0"
//           max="1"
//         />

//         <label>Metric Y (Character 2): </label>
//         <input
//           type="number"
//           value={yValue}
//           onChange={(e) => setYValue(parseInt(e.target.value, 10))}
//           min="0"
//           max="1"
//         />

//         <label>Metric Z (Character 3): </label>
//         <input
//           type="number"
//           value={zValue}
//           onChange={(e) => setZValue(parseInt(e.target.value, 10))}
//           min="0"
//           max="1"
//         />
//       </div>

//       <div className="spline-container">
//         {/* Spline scene for Character 1 */}
//         <Spline
//           scene="https://prod.spline.design/kcOMX-bu-HV6x4Hj/scene.splinecode"
//           onLoad={handleSplineLoadCharacter1}
//         />

//         {/* Spline scene for Character 2 */}
//         <Spline
//           scene="https://prod.spline.design/rJWsDUbRib-nVYB3/scene.splinecode"
//           onLoad={handleSplineLoadCharacter2}
//         />

//         {/* Spline scene for Character 3 */}
//         <Spline
//           scene="https://prod.spline.design/82gSsm7wjc-ugja7/scene.splinecode"
//           onLoad={handleSplineLoadCharacter3}
//         />
//       </div>
//     </div>
//   );
// }

// 


// import React, { useState } from 'react';
// import Spline from '@splinetool/react-spline';
// import './App.css';  // Optional: If you're using a separate CSS file for component styling

// function App() {
//   const [xValue, setXValue] = useState(0);  // State to track the input value

//   // Handler for loading the Spline scene and switching component states
//   const handleSplineLoad = (spline) => {
//     // Find components by tag
//     const character1 = spline.findObjectByTag('character_1');
//     const character2 = spline.findObjectByTag('character_2');
//     const character3 = spline.findObjectByTag('character_3');

//     // Set states based on the value of X
//     if (xValue === 0) {
//       character1.setState('State_1'); // Character 1 to State 1
//       character2.setState('State_0'); // Character 2 to State 0
//       character3.setState('State_0'); // Character 3 to State 0
//     } else if (xValue === 1) {
//       character1.setState('State_0'); // Character 1 to State 0
//       character2.setState('State_1'); // Character 2 to State 1
//       character3.setState('State_0'); // Character 3 to State 0
//     } else if (xValue === 2) {
//       character1.setState('State_0'); // Character 1 to State 0
//       character2.setState('State_0'); // Character 2 to State 0
//       character3.setState('State_1'); // Character 3 to State 1
//     }
//   };

//   // Handler to change the value of X
//   const handleInputChange = (e) => {
//     const newValue = parseInt(e.target.value, 10);  // Convert input to a number
//     if (newValue >= 0 && newValue <= 2) {
//       setXValue(newValue);  // Update the state based on the input value
//     }
//   };

//   return (
//     <div className="App">
//       <div className="input-container">
//         <label>Input X (0, 1, or 2): </label>
//         <input
//           type="number"
//           value={xValue}
//           onChange={handleInputChange}
//           min="0"
//           max="2"
//         />
//       </div>

//       <div className="spline-container">
//         {/* Single Spline scene containing all characters */}
//         <Spline
//           scene="https://prod.spline.design/YOUR_SCENE_URL/scene.splinecode"
//           onLoad={handleSplineLoad}
//         />
//       </div>
//     </div>
//   );
// }

// export default App;
















// import React from 'react';
// import Spline from '@splinetool/react-spline';
// //import './App.css'; // If you already have App.css, or you can skip this if unnecessary

// function App() {
//   return (
//     //talking birds
//     <div className="spline-container">
//       <div className="spline-character">
//         <Spline scene="https://prod.spline.design/a2IWM6qn1r-q8Aqu/scene.splinecode" />
//       </div>
//       <div className="spline-character">
//         <Spline scene="https://prod.spline.design/BglYE7jKXRL8UZ8D/scene.splinecode" />
//       </div>
//       <div className="spline-character">
//         <Spline scene="https://prod.spline.design/LLtNuOqC7rj2EXKu/scene.splinecode" />
//       </div>
//       {/* <div className="spline-cylinder">
//         <Spline scene="https://prod.spline.design/yR2lDN-qAuTKIa7u/scene.splinecode" />
//       </div> */}
//     </div>
//   );
// }

// export default App;

