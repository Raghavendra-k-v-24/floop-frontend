import Received from "../../assets/received.png";
import Floop_Image from "../../assets/floop.png";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Label } from "@/components/ui/label";
import { persistor, resetApp } from "../../redux";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { decryptData } from "../../encryption";
const Header = ({ setPage }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogout = async () => {
    await persistor.purge();
    dispatch(resetApp());
    localStorage.clear();
    navigate("/");
  };
  const loggedInUser = useSelector((state) => state.loggedInUser.data);
  const decryptUser = decryptData(loggedInUser);
  const initials = decryptUser.name
    .trim()
    .split(/\s+/)
    .slice(0, 2)
    .map((word) => word[0])
    .join("")
    .toUpperCase();

  return (
    <div className="w-full flex px-5 py-3 justify-between items-center">
      <div className="flex gap-5 h-[30px]">
        <img src={Floop_Image} alt="Floop Image" className="w-max" />
      </div>

      <Tabs defaultValue="received" onValueChange={(e) => setPage(e)}>
        <TabsList className="w-[300px] h-[40px] rounded-4xl px-2">
          <TabsTrigger
            value="received"
            className={`group text-xs rounded-4xl data-[state=active]:bg-[#3A3CFF] data-[state=active]:text-white hover:cursor-pointer`}
          >
            Received
            <img
              src={Received}
              alt="Received"
              className="size-[12px] hidden group-data-[state=active]:inline-block"
            />
          </TabsTrigger>
          <TabsTrigger
            value="given"
            className={`group text-xs rounded-4xl data-[state=active]:bg-[#3A3CFF] data-[state=active]:text-white hover:cursor-pointer`}
          >
            Given
            <img
              src={Received}
              alt="Received"
              className="size-[12px] hidden group-data-[state=active]:inline-block rotate-180"
            />
          </TabsTrigger>
        </TabsList>
      </Tabs>

      <div className="w-max h-max flex items-center gap-2">
        <DropdownMenu>
          <DropdownMenuTrigger>
            <div className="w-max h-full border-[1px] rounded-4xl flex items-center px-4 py-2 text-xs gap-1 bg-white border-neutral-200 hover:cursor-pointer">
              <span>Profile</span>
              <Avatar className="size-[20px]">
                <AvatarFallback>
                  <div className="w-full h-full bg-neutral-700 flex items-center justify-center">
                    <Label className="text-[8px] text-white">{initials}</Label>
                  </div>
                </AvatarFallback>
              </Avatar>
            </div>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem disabled>Profile</DropdownMenuItem>
            <DropdownMenuItem onClick={handleLogout} className="cursor-pointer">
              Log out
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
};

export default Header;
