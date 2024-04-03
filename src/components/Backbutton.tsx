"use client";

import { ChevronLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import { Button } from "./ui/button";

const Backbutton = () => {
  const router = useRouter();

  return (
    <Button
      className="flex gap-2 items-center text-sm pb-2"
      onClick={() => router.back()}
      variant={"secondary"}
    >
      <ChevronLeft className="w-4 h-4 mr-2" />
      Back
    </Button>
  );
};

export default Backbutton;
