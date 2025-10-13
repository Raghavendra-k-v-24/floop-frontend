import Received from "../../assets/received.png";
import Floop_Image from "../../assets/floop.png";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { persistor, resetApp } from "../../redux";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
const Header = ({ setPage }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogout = async () => {
    await persistor.purge();
    dispatch(resetApp());
    localStorage.clear();
    navigate("/");
  };
  return (
    <div className="w-full flex px-5 py-3 justify-between items-center">
      <div className="flex gap-5 h-[30px]">
        <img src={Floop_Image} alt="Floop Image" className="w-max" />
      </div>

      <Tabs defaultValue="received" onValueChange={(e) => setPage(e)}>
        <TabsList className="w-[300px] h-[40px] rounded-4xl px-2">
          <TabsTrigger
            value="received"
            className={`group text-xs rounded-4xl data-[state=active]:bg-[#3A3CFF] data-[state=active]:text-white`}
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
            className={`group text-xs rounded-4xl data-[state=active]:bg-[#3A3CFF] data-[state=active]:text-white`}
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
        <Button className="rounded-4xl px-6 text-xs text-white bg-gradient-to-br from-[#383BFE] to-[#FF8030] hover:from-[#FF8030] hover:to-[#383BFE] hover:cursor-pointer">
          Create review link
        </Button>

        <DropdownMenu>
          <DropdownMenuTrigger>
            <div className="w-max h-full border-[2px] rounded-4xl flex items-center px-4 py-2 text-xs gap-1 bg-white border-[#EBEFF4]">
              <span>Profile</span>
              <Avatar className="size-[20px]">
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
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
