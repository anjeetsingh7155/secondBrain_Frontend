import { useRef, useState } from "react";
import { Button } from "../components/ui/Button";
import { Input } from "../components/ui/Input";
import { Backend_Url } from "../config";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const SignIn = () => {

  const UsernameRef = useRef<HTMLInputElement>(null);
  const EmailRef = useRef<HTMLInputElement>(null);
  const PasswordRef = useRef<HTMLInputElement>(null);

  const [error, setError] = useState("");
  const navigate = useNavigate();

  async function login() {
    try {
      setError("");

      const Username = UsernameRef.current?.value;
      const Email = EmailRef.current?.value;
      const Password = PasswordRef.current?.value;

      const response = await axios.post(`${Backend_Url}/api/v1/login`, {
        userName: Username,
        email: Email,
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
    <div className="h-screen w-screen bg-linear-to-br from-gray-100 to-gray-300 flex justify-center items-center">
      <div className="bg-white shadow-2xl rounded-2xl p-8 w-87.5">
      
        <div className="mb-6 text-center">
          <h1 className="text-2xl font-bold text-gray-800">Welcome Back</h1>
          <p className="text-gray-500 text-sm mt-1">
            Login to continue 🚀
          </p>
        </div>

        {error && (
          <p className="text-red-500 text-sm text-center mb-2">
            {error}
          </p>
        )}

        <div className="flex flex-col gap-4">
          <Input placeholder="Username" ref={UsernameRef} />
          <Input placeholder="Email" ref={EmailRef} />
          <Input placeholder="Password" ref={PasswordRef} />
        </div>

        <div className="text-right mt-2">
          <span className="text-sm text-indigo-600 cursor-pointer hover:underline">
            Forgot Password?
          </span>
        </div>

        <div className="mt-5">
          <Button
            variant="primary"
            text="Login"
            size="md"
            onClick={login}
          />
        </div>

        <p className="text-center text-sm text-gray-500 mt-4">
          Don’t have an account?{" "}
          <span
            onClick={() => navigate("/")}
            className="text-indigo-600 cursor-pointer hover:underline"
          >
            Sign Up
          </span>
        </p>

      </div>
    </div>
  );
};