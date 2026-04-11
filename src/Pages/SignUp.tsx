import { useRef } from "react";
import { PlusIcon } from "../components/Icons/PlusIcon";
import { Button } from "../components/ui/Button";
import { Input } from "../components/ui/Input";
import axios from "axios";
import { Backend_Url } from "../config";

export const SignUp = () => {
  const UsernameRef = useRef<HTMLInputElement>(null);
  const EmailRef = useRef<HTMLInputElement>(null);
  const PasswordRef = useRef<HTMLInputElement>(null);

  async function signup() {
    const Username = UsernameRef.current?.value;
    const Email = EmailRef.current?.value;
    const Password = PasswordRef.current?.value;
    await axios.post(`${Backend_Url}/api/v1/signup`, {
        userName: Username,
        email: Email,
        password: Password,
    });
    alert('You have Signed Up')
  }

  return (
    <div className="h-screen w-screen bg-linear-to-br from-gray-100 to-gray-300 flex justify-center items-center">
      <div className="bg-white shadow-2xl rounded-2xl p-8 w-87.5">
        
        <div className="mb-6 text-center">
          <h1 className="text-2xl font-bold text-gray-800">Create Account</h1>
          <p className="text-gray-500 text-sm mt-1">
            Join us and start your journey 🚀
          </p>
        </div>

        <div className="flex flex-col gap-4">
          <Input ref={UsernameRef} placeholder="Username" />
          <Input ref={EmailRef} placeholder="Email" />
          <Input ref={PasswordRef} placeholder="Password" />
        </div>

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
          <span className="text-indigo-600 cursor-pointer hover:underline">
            Login
          </span>
        </p>
      </div>
    </div>
  );
};