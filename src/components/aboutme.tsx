import React from "react";
import { Card, CardContent, CardTitle } from "./ui/card";
import Image from "next/image";
import Link from "next/link";
import {
  DiscordLogoIcon,
  EnvelopeClosedIcon,
  GitHubLogoIcon,
} from "@radix-ui/react-icons";
import { Badge } from "./ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";

const AboutMe = () => {
  return (
    <div>
      <Card className=" ">
        <CardContent className="p-2 flex">
          <div className="flex flex-col min-w-fit">
            <Image
              src="https://utfs.io/f/49acf057-9c0e-42cc-874c-4b673896920b-qbso5g.gif"
              height={96}
              width={96}
              alt="About Me Picture"
              className="hidden lg:block rounded-full"
            />
            <Card className="lg:mt-4 mb-0">
              <ul className="p-2 text-xs">
                <li>Problem Solver</li>
                <li>Quick Learner</li>
                <li>Tinkerer</li>
              </ul>
            </Card>
            <Card className="mt-2 mb-0">
              <ul className="p-2 text-xs">
                <li className="font-semibold pb-1">Links</li>
                <li className="flex flex-row gap-2 py-1">
                  <GitHubLogoIcon />
                  <Link
                    href="https://www.github.com/Nynxz"
                    rel="noopener noreferrer"
                    target="_blank"
                    className="underline"
                  >
                    Github
                  </Link>
                </li>
                <li className="flex flex-row gap-2 py-1">
                  <DiscordLogoIcon />
                  <Link
                    href="https://discord.com/users/282803112828469248"
                    rel="noopener noreferrer"
                    target="_blank"
                    className="underline"
                  >
                    Discord
                  </Link>
                </li>
                <li className="flex flex-row gap-2 py-1">
                  <EnvelopeClosedIcon />
                  <Link
                    href="mailto:contact@nynxz.com"
                    rel="noopener noreferrer"
                    target="_blank"
                    className="underline"
                  >
                    Email
                  </Link>
                </li>
              </ul>
            </Card>
          </div>
          <div className="ml-2">
            <Card className="flex flex-col p-4 pb-1 text-xs md:text-sm lg:text-base h-full ">
              <p className="flex flex-grow">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Perferendis fugit aliquid, enim nobis recusandae cumque facilis
                voluptatem quos, voluptas maxime obcaecati, sequi numquam saepe
                dolor dolore facere nulla incidunt voluptates dolorum optio.
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Perferendis fugit aliquid, enim nobis recusandae cumque facilis
                voluptatem quos, voluptas maxime obcaecati, sequi numquam saepe
                dolor dolore facere nulla incidunt voluptates dolorum optio.
              </p>
              <div className="flex flex-row gap-2 flex-wrap w-3/4 h-33">
                <Card className="flex flex-col m-0 p-2 w-full flex-initial text-balance">
                  <Tabs defaultValue="tools">
                    <TabsList>
                      <TabsTrigger value="tools">Tools</TabsTrigger>
                      <TabsTrigger value="certs">Certificates</TabsTrigger>
                    </TabsList>
                    <TabsContent value="tools">
                      <div className="flex ">
                        <ul className="flex flex-wrap gap-1 pb-1">
                          <Badge>C#</Badge>
                          <Badge>Typescript</Badge>
                          <Badge>Python</Badge>
                          <Badge>Solidity</Badge>
                        </ul>
                      </div>
                      <div className="flex ">
                        <ul className="flex flex-wrap gap-1">
                          <Badge>Backend</Badge>
                          <Badge>Web3</Badge>
                          <Badge>Game Dev</Badge>
                          <Badge>Frontend</Badge>
                        </ul>
                      </div>
                    </TabsContent>
                    <TabsContent value="certs">
                      <div className="flex">
                        <ul className="flex gap-1 pb-1">
                          <Badge>
                            Studying Bachelor of Information Technology
                            (Software Development)
                          </Badge>
                        </ul>
                      </div>
                      <div className="flex">
                        <ul className="flex gap-1">
                          <Badge>{"📚"}</Badge>
                        </ul>
                      </div>
                    </TabsContent>
                  </Tabs>
                </Card>
              </div>
            </Card>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AboutMe;
