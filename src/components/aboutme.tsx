import React from "react";
import { Card, CardContent, CardTitle } from "./ui/card";
import Image from "next/image";

const AboutMe = () => {
  return (
    <div>
      <Card className=" ">
        <CardContent className="p-2 flex">
          <div className="flex flex-col">
            <Image
              src="https://utfs.io/f/aa2d2fde-f425-44b2-9408-071538566fec-rvyqo3.gif"
              height={96}
              width={96}
              alt="About Me Picture"
              className="rounded-full"
            />
            <Card className="mt-4 mb-0">
              <ul className="p-1 text-xs">
                <li>Quick Learner</li>
                <li>Problem Solver</li>
                <li>* </li>
              </ul>
            </Card>
          </div>
          <div className="ml-2 flex flex-col flex-grow">
            <Card className="h-full p-4">Info</Card>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AboutMe;
