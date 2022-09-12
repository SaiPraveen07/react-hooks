import { useState } from "react";
//useState example
export function PrincipleInsterstCal() {
  const [principle, setPrinciple] = useState(0);
  const [time, setTime] = useState(0);
  const [rateofInterest, setRateofInterest] = useState(0);
  const [interest, setInterest] = useState(0);

  const calculatePrincipleInterest = () => {
    const result = (principle * time * rateofInterest) / 100;
    setInterest(result);
  };
  console.log(principle);

  console.log(principle, time, rateofInterest);

  return (
    <div>
      <h1>Principle Interest Calculator</h1>
      <div>
        principle:{" "}
        <input type="number" onChange={(e) => setPrinciple(e.target.value)} />
      </div>
      <div>
        Time: <input type="number" onChange={(e) => setTime(e.target.value)} />
      </div>
      <div>
        rateofInterest:{" "}
        <input
          type="number"
          onChange={(e) => setRateofInterest(e.target.value)}
        />
      </div>
      <div>
        Interest: <h1>{interest}</h1>
      </div>
      <div>
        Total:<h1>{parseInt(principle) + parseInt(interest)}</h1>
      </div>
      <button onClick={calculatePrincipleInterest}>Calculate</button>
    </div>
  );
}
