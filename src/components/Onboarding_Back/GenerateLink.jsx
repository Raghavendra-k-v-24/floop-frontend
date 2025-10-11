import Copy_Image from "../../assets/copy.png";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
const GenerateLink = ({ data }) => {
  const copyLinkToClipboard = () => {
    if (!data.reviewLink) return;
    navigator.clipboard.writeText(data.reviewLink);
    toast(() => (
      <div className="w-max h-max bg-black text-white px-5 py-1 rounded-4xl text-xs -mt-3">
        Link Copied!
      </div>
    ));
  };
  return (
    <form action="">
      <div className="w-full h-full flex flex-col gap-5">
        <div className="flex flex-col gap-1">
          <span className="text-lg font-medium">Sharing Link</span>
          <span className="text-xs text-neutral-500">
            You can send this link to the reviewer.
          </span>
        </div>
        <div className="flex gap-2">
          <Input
            type="text"
            name="goals"
            placeholder="Link"
            value={data.reviewLink}
            className="w-full"
            required
            readOnly
          />
          <Button
            className="bg-white border-2 px-2 hover:bg-neutral-50"
            type="button"
          >
            <img
              src={Copy_Image}
              alt="Plus"
              className="w-max"
              onClick={copyLinkToClipboard}
            />
          </Button>
        </div>
        <div className="flex gap-2 justify-center">
          <Button
            className="bg-white text-black w-[200px] h-[40px] rounded-4xl hover:bg-neutral-50 border-neutral-100 border-2"
            type="button"
          >
            Go to dashboard
          </Button>
          <Button
            className="bg-[#3a3cff] w-[200px] h-[40px] rounded-4xl hover:bg-[#3a3cff]/95"
            type="button"
            onClick={copyLinkToClipboard}
          >
            Copy link
          </Button>
        </div>
      </div>
    </form>
  );
};

export default GenerateLink;
