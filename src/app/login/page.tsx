import Link from "next/link";
import { Play } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Login = () => {
  return (
    <div className="flex h-screen items-center justify-center">
      <div className="w-full max-w-[348px]">
        <div className="w-full space-y-4 p-4">
          <div className="px-2">
            <div className="flex items-center gap-3">
              <p className="text-sm font-medium">Crime Club</p>
              <div className="rounded-sm border border-[#78350f] bg-[#451a03] px-1 py-px">
                <p className="text-xs font-medium text-[#fbbf24]">BETA</p>
              </div>
            </div>
            <p className="text-xs font-medium text-[#71717a]">
              Sign in to your account
            </p>
          </div>

          <div className="space-y-2">
            <Input className="bg-[#ffffff0a]" />
            <Input />
          </div>

          <div className="flex flex-col items-center space-y-2">
            <Button className="w-full cursor-pointer bg-[#52525b]">
              Sign In
            </Button>
            <Link href="">
              <p className="text-sm font-medium text-[#f4f4f5]">Need help?</p>
            </Link>
          </div>
        </div>
        <div className="mt-2 flex w-full items-center justify-center gap-2 border-t border-dotted border-[#ffffff29] py-3">
          <p className="text-xs text-[#a1a1aa]">Are you not husslin’ yet?</p>
          <Link href="/register" className="flex items-center gap-1">
            <p className="text-xs font-medium text-[#f4f4f5]">
              Create an account
            </p>
            <Play size={8} fill="#f4f4f5" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
