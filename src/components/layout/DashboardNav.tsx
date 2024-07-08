import { useCurrentUser } from "@/redux/features/auth/authSlice";
import { useAppSelector } from "@/redux/hooks";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Bell, MessageCircle } from "lucide-react";
import { Input } from "@/components/ui/input";

const DashboardNav = () => {
  const user = useAppSelector(useCurrentUser);

  return (
    <div className="bg-slate-300 text-black">
      <nav className="w-full relative flex items-center justify-between py-2 px-5">
        {/* Nav Items Section */}
        <div>
          <Input type="text" placeholder="Search" />
        </div>
        <div className="flex gap-5 justify-center items-center">
          <Bell />
          <MessageCircle />
        </div>
        <div>
          {user?.email ? (
            <>
              <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" />
              </Avatar>
              <span>{user.role}</span>
            </>
          ) : (
            <></>
          )}
        </div>
      </nav>
    </div>
  );
};

export default DashboardNav;
