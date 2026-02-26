import { useEffect, useState, useRef } from "react";

function OTPGenerator() {
  // state variables
  const [OTP, setOTP] = useState(null);
  const [secondsLeft, setSecondsLeft] = useState(0);

  const isCounting = secondsLeft > 0;

  const btnRef = useRef(null);

  const generateOTP = () => Math.floor(100000 + Math.random() * 900000);
  function handleGenerateOTP() {
    setOTP(generateOTP());
    setSecondsLeft(5);
  }

  // change in OTP triggers the side-effect
  useEffect(() => {
    if (isCounting === false) return;
    const intervalID = setInterval(() => {
      setSecondsLeft((prevSeconds) => prevSeconds - 1);
    }, 1000);

    return () => clearInterval(intervalID);
  }, [isCounting]);

  return (
    <div className="container">
      <h1 id="otp-title">OTP Generator</h1>
      <h2 id="otp-display">
        {OTP ? OTP : "Click 'Generate OTP' to get a code"}
      </h2>
      <p id="otp-timer" aria-live="assertive">
        {isCounting
          ? `Expires in: ${secondsLeft} seconds`
          : OTP && "OTP expired. Click the button to generate a new OTP."}
      </p>
      <button
        ref={btnRef}
        id="generate-otp-button"
        onClick={handleGenerateOTP}
        disabled={isCounting}
      >
        Generate OTP
      </button>
    </div>
  );
}

export default OTPGenerator;
