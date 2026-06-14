import React from "react";
import { useEffect, useState } from "react";
import { useAuthStore } from "../store/useAuthStore";
import BorderAnimated from "../components/BorderAnimated";
import { LoaderIcon, LockKeyhole, ArrowLeft, Mail, Loader } from "lucide-react";
import { Link, useParams } from "react-router";
import { useNavigate } from "react-router";
import toast from "react-hot-toast";

const ResetPassword = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPasword] = useState("");

  const { resetPassword, isLoading, error, message } = useAuthStore();

  const { token } = useParams();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      toast.error("Password do not matched");
      return;
    }

    try {
      await resetPassword(token, password);
      toast.success("Password reset successfully, redirecting to login page...");

      setTimeout(() => {
        navigate("/login");
      }, 2000);
    } catch (error) {
      toast.error(error.message || "Error resetting password");
    }
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-900 p-4">
      <div className="w-full max-w-7xl">
        <BorderAnimated>
          <div className="w-full px-6 py-10 sm:px-10 lg:px-16 lg:py-14">
            {/* Form Container */}
            <div className="w-full max-w-2xl mx-auto">
              {/* Heading */}
              <div className="text-center mb-10">
                <h2 className="text-3xl lg:text-4xl font-bold text-slate-200 mb-3">Reset Password</h2>

                <p className="text-slate-400 text-base lg:text-lg">Enter your new password below</p>
              </div>

              <form onSubmit={handleSubmit} className="relative z-20">
                <div className="mb-6">
                  <label className="auth-input-label mb-3 block">New Password</label>

                  <div className="relative">
                    <LockKeyhole className="auth-input-icon" />

                    <input
                      type="password"
                      className="input w-full h-14 text-base"
                      placeholder="Enter new password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                  </div>
                </div>

                <div className="mb-8">
                  <label className="auth-input-label mb-3 block">Confirm New Password</label>

                  <div className="relative">
                    <LockKeyhole className="auth-input-icon" />

                    <input
                      type="password"
                      className="input w-full h-14 text-base"
                      placeholder="Confirm new password"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPasword(e.target.value)}
                      required
                    />
                  </div>
                </div>

                <button className="auth-btn w-full h-14 text-lg " type="submit" disabled={isLoading}>
                  {isLoading ? "Resetting" : "Set New Password"}
                </button>

                {error && <p className="text-red-500 text-sm mt-5 mb-4">{error}</p>}
                {message && <p className="text-green-500 text-sm mt-5 mb-4">{message}</p>}
              </form>
            </div>
          </div>
        </BorderAnimated>
      </div>
    </div>
  );
};

export default ResetPassword;
