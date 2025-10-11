import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import CustomStepper from "./CustomStepper";
import { Separator } from "@/components/ui/separator";
import { useState } from "react";
import BasicInfo from "./BasicInfo";
import GuidingQuestions from "./GuidingQuestions";
import GenerateLink from "./GenerateLink";
import ReviwerInfo from "./ReviewerInfo";
const Form = ({ data, setData }) => {
  const [step, setStep] = useState(0);
  const steps = [
    <BasicInfo setStep={setStep} data={data} setData={setData} />,
    <ReviwerInfo setStep={setStep} data={data} setData={setData} />,
    <GuidingQuestions setStep={setStep} data={data} setData={setData} />,
    <GenerateLink data={data} />,
  ];
  return (
    <Card className="h-max w-[800px] border-0 shadow-md gap-1 py-1">
      <CardHeader className="flex items-center py-2">
        <CardTitle>
          <CustomStepper step={step} />
        </CardTitle>
      </CardHeader>
      <Separator />
      <CardContent className="w-full h-full py-5">{steps[step]}</CardContent>
    </Card>
  );
};

export default Form;
