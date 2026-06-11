import { useEffect, useState } from "react";
import { useAuthStore } from "../store/useAuthStore";
import BorderAnimated from "../components/BorderAnimated";
import { LoaderIcon, MailIcon, ArrowLeft, Mail, Loader } from "lucide-react";
import { Link } from "react-router";
import { useNavigate } from "react-router";

export const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const { forgotPassword, isLoading } = useAuthStore();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await forgotPassword(email);
    setIsSubmitted(true);
  };

  return (
    <div className="min-h-screen  flex items-center justify-center  p-4 bg-slate-900">
      <div className="relative w-full max-w-6xl ">
        <BorderAnimated>
          <div className=" flex justify-center items-center">
            <div className="w-full  p-10">
              <div className="w-full max-w-md">
                {/* HEADING TEXT */}
                <div className="text-center mb-10">
                  <h2 className="text-3xl font-bold text-slate-200 mb-3">Forgot Password</h2>
                </div>

                {/* FORM */}
                {!isSubmitted ? (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <p className="text-slate-400 text-center">
                      Enter your email address and we'll send you a link to reset your password
                    </p>
                    {/* EMAIL INPUT */}
                    <div>
                      <label className="auth-input-label">Email</label>
                      <div className="relative">
                        <MailIcon className="auth-input-icon" />

                        <input
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="input"
                          placeholder="Enter your email"
                        />
                      </div>
                    </div>

                    {/* SUBMIT BUTTON */}
                    <button className="auth-btn mt-2" type="submit" disabled={isLoading}>
                      {isLoading ? <Loader className="animate-spin mx-auto" /> : "Send Reset Link"}
                    </button>
                  </form>
                ) : (
                  <div className="text-center">
                    <div className="size-16 bg-sky-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Mail className="size-8 text-white" />
                    </div>

                    <p className="text-gray-300 mb-6">
                      If an account exits for {email}, you will receive a password reset link shortly.
                    </p>
                  </div>
                )}

                <div className="mt-6 text-center">
                  <Link
                    to="/login"
                    className="inline-flex items-center gap-2 text-sky-400 hover:text-sky-300 transition-colors"
                  >
                    <ArrowLeft className="size-4" />
                    Back to Login
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </BorderAnimated>
      </div>
    </div>
  );
};
