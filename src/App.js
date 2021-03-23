import React from 'react';
import './styles/app.css';

function App() {
  return (
   <section className="w-3/6 m-auto flex flex-warp mt-28">
     <div className="flex felx-wrap">
       <div className="w-full mb-8 p-10 bg-gray-100 relative rounded shadow">
         <span className="text-gray-300 text-6xl absolute italic right-10">
           01
         </span>
         <h2 className="z-10 relative text-2xl texty-gray-900 absolute">
           Log Rocket
         </h2>
         <hr className="block mb-6 mt-5 w-8 border-red-500 h-0 border-t-2" />
         <p className="text-gray-700">
         loremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremlorem
         loremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremlorem
         loremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremlorem
         loremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremlorem
         loremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremlorem
         loremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremlorem
         </p>
       </div>
     </div>
   </section>
  );
}

export default App;
