import Mouse_Image from "../../assets/mouse.png";
import Mouse_Color_Image from "../../assets/mouse_color.png";
import Received from "../../assets/received.png";
import { Label } from "@/components/ui/label";
import Floop_Image from "../../assets/floop.png";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
const Header = () => {
  return (
    <div className="w-full flex px-5 py-3 justify-between items-center">
      <div className="flex gap-5 h-[30px]">
        <img src={Floop_Image} alt="Floop Image" className="w-max" />
      </div>

      <Tabs defaultValue="received">
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
        <Button className="rounded-4xl px-6 text-xs text-white bg-gradient-to-br from-[#383BFE] to-[#FF8030]">
          Create review link
        </Button>

        <div className="w-max h-full border-[1px] rounded-4xl flex items-center px-4 py-2 text-xs gap-1 bg-white border-[#EBEFF4]">
          <span>Profile</span>
          <Avatar className="size-[20px]">
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </div>
      </div>
    </div>
  );
};

export default Header;
