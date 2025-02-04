import { useState } from 'react';

import Header from "./componentes/Header.jsx";
import UserInput from "./componentes/UserInput.jsx";
import Results from "./componentes/Results.jsx";

function App() {
   const [userInput, setUserInput] = useState({
          initialIvestment: 10000,
          annualInvestment: 1200,
          expectedReturn: 6,
          duration: 10,
      });
      
      const inputIsValid = userInput.duration >= 1;

      function handleChange(inputIdentifier, newValue) {
        setUserInput((prevUserInput) => {
            return {
                ...prevUserInput,
                [inputIdentifier]: +newValue,
            };
        });
    }

  return (
  <>
     <Header />
     <UserInput userInput={ userInput } onChange={ handleChange } />
     {!inputIsValid && (
      <p className='center'>Please enter duration greater than zero.</p> 
      )}
     { inputIsValid &&  < Results input={userInput} />}
  </>    
  )
}

export default App;
