import Stepper from "@keyvaluesystems/react-stepper";
import colors from "tailwindcss/colors";

const CustomStepper = ({ step }) => {
  const stylesOverride = {
    Node: (step, stepIndex) => ({
      fontWeight: "bold",
      color: "white",
      backgroundColor: "#3a3cff",
    }),
    ActiveLabelTitle: (step, stepIndex) => ({
      color: "#3a3cff",
      opacity: "100%",
    }),
    CompletedNode: () => ({
      opacity: "40%",
    }),
    LabelTitle: (step, stepIndex) => ({
      fontWeight: "500",
      color: "#3a3cff",
      opacity: "40%",
      fontSize: "14px",
    }),
    LineSeparator: () => ({
      backgroundColor: colors.neutral[200],
    }),
  };
  return (
    <div className="h-max w-full flex justify-center">
      <Stepper
        steps={[
          {
            stepLabel: "Basic info",
            completed: step > 0 ? true : false,
          },
          {
            stepLabel: "Reviewer's info",
            completed: step > 1 ? true : false,
          },
          {
            stepLabel: "Goals for portfolio review",
            completed: step > 2 ? true : false,
          },
          {
            stepLabel: "Generate link",
            completed: step > 3 ? true : false,
          },
        ]}
        currentStepIndex={step}
        orientation="horizontal"
        labelPosition="right"
        styles={stylesOverride}
      />
    </div>
  );
};

export default CustomStepper;
