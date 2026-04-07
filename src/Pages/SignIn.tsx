import { Button } from "../components/ui/Button";
import { Input } from "../components/ui/Input";

export const SignIn = () => {
  return (
    <div className="h-screen w-screen bg-linear-to-br from-gray-100 to-gray-300 flex justify-center items-center">
      
      <div className="bg-white shadow-2xl rounded-2xl p-8 w-87.5">
      
        <div className="mb-6 text-center">
          <h1 className="text-2xl font-bold text-gray-800">Welcome Back</h1>
          <p className="text-gray-500 text-sm mt-1">
            Login to continue 🚀
          </p>
        </div>

       <div className="flex flex-col gap-4">
          <Input placeholder="Username" />
          <Input placeholder="Email" />
          <Input placeholder="Password" />
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
          />
        </div>

        <p className="text-center text-sm text-gray-500 mt-4">
          Don’t have an account?{" "}
          <span className="text-indigo-600 cursor-pointer hover:underline">
            Sign Up
          </span>
        </p>
      </div>
    </div>
  );
};