import { List, Plus } from "lucide-react";
import { NavLink } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { useAppSelector } from "@/redux/hooks";
import { useCurrentUser } from "@/redux/features/auth/authSlice";

const SubMenu = () => {
  const user = useAppSelector(useCurrentUser);
  console.log(user);
  const role = user?.role;

  console.log(role);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div className="flex gap-2">
          <List className="text-white shrink-0 lg:hidden" />
          <span className="hidden lg:block truncate cursor-pointer text-white">
            {role === "Admin" ? "Supply" : "Testimonial"}
          </span>
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        {role === "Admin" ? (
          <>
            <DropdownMenuLabel>Manage Supplies</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuItem>
                <Plus className="mr-2 h-4 w-4" />
                <NavLink to="/dashboard/admin/create-supply">
                  Add Supply
                </NavLink>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <List className="mr-2 h-4 w-4" />
                <NavLink to="/dashboard/admin/supplies">All Supplies</NavLink>
              </DropdownMenuItem>
            </DropdownMenuGroup>
          </>
        ) : (
          <>
            <DropdownMenuLabel>Manage Testimonial</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuItem>
                <Plus className="mr-2 h-4 w-4" />
                <NavLink to="/dashboard/create-testimonial">
                  Create Testimonial
                </NavLink>
              </DropdownMenuItem>
            </DropdownMenuGroup>
          </>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default SubMenu;
