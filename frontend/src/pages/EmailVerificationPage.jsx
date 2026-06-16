import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router";
import { useAuthStore } from "../store/useAuthStore";
import toast from "react-hot-toast";

const EmailVerificationPage = () => {
  const [code, setCode] = useState(["", "", "", "", "", ""]);
  const inputRefs = useRef([]);
  const navigate = useNavigate();
  const { error, isLoading, verifyEmail } = useAuthStore();

  const handleChange = (index, value) => {
    const newCode = [...code];

    //handle pasted content

    if (value.length > 1) {
      const pastedCode = value.slice(0, 6).split("");
      for (let i = 0; i < 6; i++) {
        newCode[i] = pastedCode[i] || "";
      }

      setCode(newCode);

      //focus on the non-empty input or the first empty one
      const lastFilledIndex = newCode.findLastIndex((digit) => digit !== "");
      const focusIndex = lastFilledIndex < 5 ? lastFilledIndex + 1 : 5;
      inputRefs.current[focusIndex].focus();
    } else {
      newCode[index] = value;

      setCode(newCode);

      //move focus to the next input field if value is entered

      if (value && index < 5) {
        inputRefs.current[index + 1].focus();
      }
    }
  };

  const handleKeyDown = (index, e) => {
    if (e.key === "Backspace" && !code[index] && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const verificationCode = code.join("");

    try {
      await verifyEmail(verificationCode);
      navigate("/");
      toast.success("Email verified successfully");
    } catch (error) {
      console.log(error.message);
    }
  };

  //auto submit when al fileds are filled

  useEffect(() => {
    if (code.every((digit) => digit !== "")) {
      handleSubmit(new Event("submit"));
    }
  }, [code]);
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-950 px-4">
      <div className="w-full max-w-md bg-slate-900/80 backdrop-blur-xl border border-cyan-500/20 rounded-3xl shadow-2xl p-8">
        <h2 className="text-4xl font-bold text-center mb-4 bg-gradient-to-r from-cyan-400 to-cyan-600 bg-clip-text text-transparent">
          Verify Email
        </h2>

        <p className="text-center text-slate-300 mb-8">Enter the 6-digit verification code sent to your email.</p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="flex justify-center gap-3">
            {code.map((digit, index) => (
              <input
                key={index}
                ref={(el) => (inputRefs.current[index] = el)}
                type="text"
                maxLength={1}
                value={digit}
                onChange={(e) => handleChange(index, e.target.value)}
                onKeyDown={(e) => handleKeyDown(index, e)}
                className="
                w-12 h-14
                text-center
                text-2xl
                font-bold
                bg-slate-800
                text-white
                border-2
                border-slate-700
                rounded-xl
                transition-all
                duration-200
                focus:outline-none
                focus:border-cyan-500
                focus:ring-2
                focus:ring-cyan-500/30
              "
              />
            ))}
          </div>

          {error && <p className="text-red-400 text-center font-medium">{error}</p>}

          <button
            type="submit"
            disabled={isLoading}
            className="
            w-full
            py-3
            rounded-xl
            font-semibold
            text-white
            bg-gradient-to-r
            from-cyan-500
            to-cyan-700
            hover:from-cyan-600
            hover:to-cyan-800
            transition-all
            duration-300
            shadow-lg
            disabled:opacity-50
            disabled:cursor-not-allowed
          "
          >
            {isLoading ? "Verifying..." : "Verify Email"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default EmailVerificationPage;
