import { PlusIcon } from "../components/Icons/PlusIcon";
import { Button } from "../components/ui/Button";
import { Input } from "../components/ui/Input";

export const SignUp = () => {
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
          <Input placeholder="Username" />
          <Input placeholder="Email" />
          <Input placeholder="Password" />
        </div>

        <div className="mt-6">
          <Button
            variant="primary"
            text="Sign Up"
            size="md"
            startIcon={<PlusIcon size="md" />}
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