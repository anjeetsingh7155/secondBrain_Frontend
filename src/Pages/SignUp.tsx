import { useRef, useState } from "react";
import { PlusIcon } from "../components/Icons/PlusIcon";
import { Button } from "../components/ui/Button";
import { Input } from "../components/ui/Input";
import axios from "axios";
import { Backend_Url } from "../config";
import { useNavigate } from "react-router-dom";

import { ThemeToggle } from "../components/ui/ThemeToggle";

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
    <div className="h-screen w-screen bg-linear-to-br from-gray-100 to-gray-300 dark:from-slate-950 dark:to-slate-900 flex justify-center items-center transition-colors">
      <ThemeToggle floating />
      <div className="bg-white dark:bg-slate-900 border dark:border-slate-800 shadow-2xl rounded-2xl p-8 w-87.5 transition-colors">
        
        <div className="mb-6 text-center">
          <h1 className="text-2xl font-bold text-gray-800 dark:text-slate-100">Create Account</h1>
          <p className="text-gray-500 dark:text-slate-400 text-sm mt-1">
            Join us and start your journey 🚀
          </p>
        </div>

       
        {error && (
          <p className="text-red-500 text-sm text-center mb-2">
            {error}
          </p>
        )}

        <div className="flex flex-col gap-4">
          <Input ref={UsernameRef} placeholder="Username" />
          <Input ref={EmailRef} placeholder="Email" />
          <Input ref={PasswordRef} type="password" placeholder="Password" />
        </div>
        <p className="text-clip text-sm text-gray-500 mt-2">
          Password Must Contain : 
          <ul className="list-disc pl-5 mt-1">
            <li>Size : 6-12 Letters</li>
            <li>Alphabet : 1 upper Case, 1 lower Case</li>
            <li>Number : At least 1 Numeric Letter</li>
            <li>No Special Characters allowed</li>
          </ul>
        </p>
        <div className="mt-6">
          <Button
            variant="primary"
            text="Sign Up"
            size="md"
            startIcon={<PlusIcon size="md" />}
            onClick={signup}
          />
        </div>

        <p className="text-center text-sm text-gray-500 mt-4">
          Already have an account?{" "}
          <span
            onClick={() => navigate("/signin")}
            className="text-indigo-600 cursor-pointer hover:underline"
          >
            Login
          </span>
        </p>

      </div>
    </div>
  );
};