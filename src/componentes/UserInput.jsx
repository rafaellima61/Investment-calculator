import { useState } from 'react';

export default function UserInput() {
    const [userInput, setUserInput] = useState({
        initialIvestment: 10000,
        annualInvestment: 1200,
        expectedReturn: 6,
        duration: 10
    });

    function handleChange(inputIdentifier, newValue) {
        setUserInput(prevUserInput => {
            return {
                ...prevUserInput,
                [inputIdentifier]: newValue
            };
        });
    }


    return <section id="user-input">
        <div className="input-group">
            <p>
               <label>Initial Investment</label>
               <input type="number"
                required
                value={userInput.initialIvestment}
                onChange={(event) =>
                    handleChange('initialInvestment', event.target.value)}/>
            </p>
            <p>
                <label>Annual Investment</label>
                <input type="number" required
                value={userInput.annualInvestment}
                onChange={(event) =>
                handleChange('annualInvestment', event.target.value)}
                 />
            </p>
            </div>
            <div className="input-group">
            <p>
                <label>Expetcted Return</label>
                <input type="number"  required
                value={userInput.expectedReturn}
                onChange={(event) =>
                handleChange('expectedReturn', event.target.value)}
                />
            </p>
            <p>
                <label>Duration</label>
                <input type="numer" required
                   value={userInput.duration}
                   onChange={(event) =>
                   handleChange('expectedReturn', event.target.value)}
                   />
            </p>
            </div>
          
     
    </section>
}