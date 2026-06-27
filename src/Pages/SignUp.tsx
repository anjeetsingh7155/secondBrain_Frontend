import { useRef, useState } from "react";
import axios from "axios";
import { Backend_Url } from "../config";
import { useNavigate } from "react-router-dom";
import { Input } from "../components/ui/Input";
import { ThemeToggle } from "../components/ui/ThemeToggle";
import { FaRocket, FaUser, FaEnvelope, FaLock, FaShieldAlt, FaCheck, FaArrowRight } from "react-icons/fa";

export const SignUp = () => {
  const UsernameRef = useRef<HTMLInputElement>(null);
  const EmailRef = useRef<HTMLInputElement>(null);
  const PasswordRef = useRef<HTMLInputElement>(null);

  const [error, setError] = useState("");
  const navigate = useNavigate();

  async function signup() {
    try {
      setError("");

      const Username = UsernameRef.current?.value;
      const Email = EmailRef.current?.value;
      const Password = PasswordRef.current?.value;

      const response = await axios.post(`${Backend_Url}/api/v1/signup`, {
        userName: Username,
        email: Email,
        password: Password,
      });

      alert(response.data.message);
      navigate("/signin");

    } catch (err: unknown) {
      if (axios.isAxiosError(err)) {
        if (err.response?.status === 409) {
          setError("This person already exists, please login");
        } else if (err.response?.status === 403 || err.response?.status === 400) {
          setError("Invalid input data");
        } else {
          setError("Something went wrong");
        }
      } else {
        setError("Unexpected error occurred");
      }
    }
  }

  return (
    <div className="h-screen w-screen bg-slate-50 dark:bg-slate-950 flex justify-center items-center px-4 py-8 overflow-y-auto transition-colors">
      <ThemeToggle floating />
      <div className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow-2xl rounded-3xl p-8 max-w-sm w-full flex flex-col gap-6 relative overflow-hidden transition-all">
        
        {/* Top Right Grid Pattern */}
        <div className="absolute right-0 top-0 w-24 h-24 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] dark:bg-[radial-gradient(#334155_1px,transparent_1px)] [background-size:16px_16px] opacity-40 rounded-tr-3xl pointer-events-none"></div>

        {/* Header Illustration */}
        <div className="flex flex-col items-center">
          <div className="w-18 h-18 bg-indigo-50 dark:bg-indigo-950/30 rounded-full flex items-center justify-center shadow-lg shadow-indigo-500/10 border border-indigo-100/50 dark:border-indigo-900/30 mb-4">
            <FaRocket className="text-indigo-650 dark:text-indigo-400 size-7 -rotate-45" />
          </div>
          <h1 className="text-2xl font-bold text-slate-800 dark:text-slate-100 text-center tracking-tight">Create your account</h1>
          <p className="text-slate-500 dark:text-slate-400 text-sm mt-1 text-center font-medium">
            Join us and start your journey 🚀
          </p>
        </div>

        {error && (
          <p className="text-red-500 text-sm text-center bg-red-50 dark:bg-red-950/20 border border-red-100 dark:border-red-900/30 py-2 rounded-xl">
            {error}
          </p>
        )}

        {/* Inputs */}
        <div className="flex flex-col gap-4">
          <Input ref={UsernameRef} placeholder="Username" icon={<FaUser className="size-4" />} />
          <Input ref={EmailRef} placeholder="Email" icon={<FaEnvelope className="size-4" />} type="email" />
          <Input ref={PasswordRef} placeholder="Password" icon={<FaLock className="size-4" />} type="password" />
        </div>

        {/* Validation Info Box */}
        <div className="bg-indigo-50/30 dark:bg-indigo-950/15 border border-indigo-100/30 dark:border-indigo-900/20 rounded-2xl p-4 flex flex-col gap-3">
          <div className="flex items-center gap-2 text-indigo-900 dark:text-indigo-200 font-bold text-xs">
            <FaShieldAlt className="size-4 text-indigo-600 dark:text-indigo-400" />
            <span>Password must contain:</span>
          </div>
          <ul className="flex flex-col gap-2 text-xs font-semibold text-slate-500 dark:text-slate-400">
            <li className="flex items-center gap-2">
              <FaCheck className="size-4 text-indigo-600 dark:text-indigo-400 bg-indigo-100 dark:bg-indigo-950/50 p-0.5 rounded-full" />
              <span>6–12 characters long</span>
            </li>
            <li className="flex items-center gap-2">
              <FaCheck className="size-4 text-indigo-600 dark:text-indigo-400 bg-indigo-100 dark:bg-indigo-950/50 p-0.5 rounded-full" />
              <span>At least 1 uppercase letter</span>
            </li>
            <li className="flex items-center gap-2">
              <FaCheck className="size-4 text-indigo-600 dark:text-indigo-400 bg-indigo-100 dark:bg-indigo-950/50 p-0.5 rounded-full" />
              <span>At least 1 lowercase letter</span>
            </li>
            <li className="flex items-center gap-2">
              <FaCheck className="size-4 text-indigo-600 dark:text-indigo-400 bg-indigo-100 dark:bg-indigo-950/50 p-0.5 rounded-full" />
              <span>At least 1 number</span>
            </li>
            <li className="flex items-center gap-2">
              <FaCheck className="size-4 text-indigo-600 dark:text-indigo-400 bg-indigo-100 dark:bg-indigo-950/50 p-0.5 rounded-full" />
              <span>No special characters allowed</span>
            </li>
          </ul>
        </div>

        {/* Submit Button */}
        <div>
          <button
            onClick={signup}
            className="w-full bg-gradient-to-r from-indigo-650 to-violet-600 hover:from-indigo-700 hover:to-violet-700 text-white font-bold py-3 px-4 rounded-xl shadow-lg shadow-indigo-600/20 active:scale-98 hover:scale-101 transition-all flex items-center justify-center gap-2 cursor-pointer text-sm"
          >
            <span>Create Account</span>
            <FaArrowRight className="size-4" />
          </button>
        </div>

        {/* Login Link */}
        <p className="text-center text-xs font-semibold text-slate-500 dark:text-slate-400">
          Already have an account?{" "}
          <span
            onClick={() => navigate("/signin")}
            className="text-indigo-605 dark:text-indigo-400 cursor-pointer hover:underline font-bold"
          >
            Login
          </span>
        </p>

      </div>
    </div>
  );
};