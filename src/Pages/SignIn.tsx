import { useRef, useState } from "react";
import axios from "axios";
import { Backend_Url } from "../config";
import { useNavigate } from "react-router-dom";
import { Input } from "../components/ui/Input";
import { ThemeToggle } from "../components/ui/ThemeToggle";
import { FaRocket, FaUser, FaLock, FaArrowRight } from "react-icons/fa";

export const SignIn = () => {
  const IdentifierRef = useRef<HTMLInputElement>(null);
  const PasswordRef = useRef<HTMLInputElement>(null);
  const [rememberMe, setRememberMe] = useState(false);

  const [error, setError] = useState("");
  const navigate = useNavigate();

  async function login() {
    try {
      setError("");

      const usernameOrEmail = IdentifierRef.current?.value;
      const Password = PasswordRef.current?.value;

      const response = await axios.post(`${Backend_Url}/api/v1/login`, {
        usernameOrEmail: usernameOrEmail,
        password: Password,
      });

      const jwt_Token = response.data.token;

      localStorage.setItem("authorization", jwt_Token);
      navigate("/dashboard");

    } catch (err: unknown) {
      if (axios.isAxiosError(err)) {
        if (err.response?.status === 404) {
          setError("User not found");
        } else if (err.response?.status === 401) {
          setError("Wrong password");
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
          <h1 className="text-2xl font-bold text-slate-800 dark:text-slate-100 text-center tracking-tight">Welcome Back 👋</h1>
          <p className="text-slate-500 dark:text-slate-400 text-sm mt-1 text-center font-medium">
            Login to continue your journey 🚀
          </p>
        </div>

        {error && (
          <p className="text-red-500 text-sm text-center bg-red-50 dark:bg-red-950/20 border border-red-100 dark:border-red-900/30 py-2 rounded-xl">
            {error}
          </p>
        )}

        {/* Inputs */}
        <div className="flex flex-col gap-4">
          <Input placeholder="Username or Email" ref={IdentifierRef} icon={<FaUser className="size-4" />} />
          <Input placeholder="Password" type="password" ref={PasswordRef} icon={<FaLock className="size-4" />} />
        </div>

        {/* Options Row */}
        <div className="flex justify-between items-center text-xs font-semibold">
          <label className="flex items-center gap-2 text-slate-500 dark:text-slate-400 cursor-pointer">
            <input
              type="checkbox"
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
              className="rounded border-slate-300 dark:border-slate-700 text-indigo-650 focus:ring-indigo-500 cursor-pointer"
            />
            <span>Remember me</span>
          </label>
          <span className="text-indigo-650 dark:text-indigo-450 hover:underline cursor-pointer">
            Forgot Password?
          </span>
        </div>

        {/* Submit Button */}
        <div>
          <button
            onClick={login}
            className="w-full bg-gradient-to-r from-indigo-650 to-violet-600 hover:from-indigo-700 hover:to-violet-700 text-white font-bold py-3 px-4 rounded-xl shadow-lg shadow-indigo-600/20 active:scale-98 hover:scale-101 transition-all flex items-center justify-center gap-2 cursor-pointer text-sm"
          >
            <span>Login</span>
            <FaArrowRight className="size-4" />
          </button>
        </div>

        {/* Divider */}
        <div className="flex items-center gap-3">
          <div className="h-px bg-slate-200 dark:bg-slate-800 flex-1"></div>
          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">or</span>
          <div className="h-px bg-slate-200 dark:bg-slate-800 flex-1"></div>
        </div>

        {/* Sign Up Link */}
        <p className="text-center text-xs font-semibold text-slate-500 dark:text-slate-400">
          Don’t have an account?{" "}
          <span
            onClick={() => navigate("/")}
            className="text-indigo-605 dark:text-indigo-400 cursor-pointer hover:underline font-bold"
          >
            Sign Up
          </span>
        </p>

      </div>
    </div>
  );
};