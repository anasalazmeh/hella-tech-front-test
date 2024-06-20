/* eslint-disable react/jsx-no-comment-textnodes */
import { useTranslation } from "react-i18next";
import Process from "./Process/Process";

const ProcessSection = ({ ref }: { ref?: any }) => {
  const { t } = useTranslation();
  return (
    <div
      id="process"
      className="flex flex-col  items-center justify-center content-center w-full"
      ref={ref}
    >
      <div
        id="Background"
        className=" py-[86px]   xl:w-[1225px] lg:w-full  bg-[linear-gradient(180deg,_rgba(52,_200,_124,_0.1)_0%,rgba(0,_176,_140,_0.1)_100%)] bg-cover bg-50%_50% bg-blend-normal bg-no-repeat flex flex-col justify-between gap-24 items-center   rounded-lg"
      >
        <div className="flex flex-col gap-3 w-3/4 items-center">
          <div id="Proccess1" className="text-lg text-[#34c87c]">
            //{" "}
            <div id="Proccess" className="text-[#1c1d22] contents">
              04 . {t("process")}
            </div>
          </div>
          <div className="text-center text-4xl font-medium text-[#0d1c22] self-start w-full">
            {t(
              "the_workflow_at_hela_is_simple_yet_carefully_planned_and_effective"
            )}
          </div>
        </div>

        <div className="flex flex-col gap-[60px] w-full">
          <Process
            title="study_and_analysis"
            text="studing_the_current_plan"
            imageLink={[
              process.env.PUBLIC_URL + "/images/process/study.png",
              process.env.PUBLIC_URL + "/images/process/darkStudy.png",
            ]}
            reverse
            id={1}
          />
          <Process
            title="marketing_plan"
            text="specific_acheivable_goal"
            imageLink={[
              process.env.PUBLIC_URL + "/images/process/target.png",
              process.env.PUBLIC_URL + "/images/process/darkTarget.png",
            ]}
            reverse={false}
            id={2}
          />
          <Process
            title="design_and_research"
            text="increasing_engagement_of_the_target_audience"
            imageLink={[
              process.env.PUBLIC_URL + "/images/process/design.png",
              process.env.PUBLIC_URL + "/images/process/darkDesign.png",
            ]}
            reverse
            id={3}
          />

          <Process
            title="programming"
            text="developing_the_required_application_or_website"
            imageLink={[
              process.env.PUBLIC_URL + "/images/process/keyboard.png",
              process.env.PUBLIC_URL + "/images/process/darkKeyboard.png",
            ]}
            reverse={false}
            id={4}
          />
          <Process
            title="testing_and_launch"
            text="pre_launch_testing_is_one_of_the_most_crucial_stages"
            imageLink={[
              process.env.PUBLIC_URL + "/images/process/test.png",
              process.env.PUBLIC_URL + "/images/process/darkTest.png",
            ]}
            reverse
            id={5}
          />
        </div>
      </div>
    </div>
  );
};

export default ProcessSection;
