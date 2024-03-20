import { Button } from "@/components/ui/button";
import { AlertTriangle } from "lucide-react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="h-screen max-w-[1200px] mx-auto flex justify-center items-center flex-col p-4">
      <AlertTriangle className="text-red-500 h-16 w-16"></AlertTriangle>
      <h2>Page Not Found!</h2>
      <p className="py-6">Plesae go back to home page.</p>
      <Link to="/">
        <Button className="px-10 py-2">Home</Button>
      </Link>
    </div>
  );
};

export default Error;
