import React, { useContext } from "react";
import { AppContext } from "../App";
const Count = () => {
  const context = useContext(AppContext)
  return (

   
      
         
          <div>
            <h1>Count: {context}</h1>
          </div>
        );
 

  );
};

export default Count;
