import React from "react";
import { IconRobot } from "@tabler/icons-react";
import WrappInput from "@/components/ui/inputwrapper/WrappInput";
import { sanitizeQuery } from "@/lib/utils";
import { chatWithMistral } from "@/lib/actions/mistral.action";
import Popover from "@/components/ui/Popover";
import { AnimatedCard } from "@/components/ui/card/AnimatedCard";

const Page = async ({ searchParams }: { searchParams: { q: string } }) => {
  const query = sanitizeQuery(searchParams.q);
  const response = await chatWithMistral(query);

  return (
    <section className="bg-dark-300 h-full w-full flex  text-light-900 font-sans p-4 flex-col gap-4 text-center relative">
      <span
        className={"absolute top-4 flex flex-row items-center text-xl z-50"}
      >
        <IconRobot size={48} className="text-lime-400" />
        DILOn<span className="text-lime-400">ChatBot</span>
      </span>
      <AnimatedCard />

      <h1 className="text-xl  flex flex-row gap-2 self-center mt-20">
        Welcome to DILOn<span className="text-lime-400">Chatbot</span>{" "}
      </h1>
      <Popover chatbotResponse={response} />
      <div className=" flex items-end self-center min-w-[40vw] mb-20">
        <WrappInput />
      </div>
    </section>
  );
};

export default Page;
