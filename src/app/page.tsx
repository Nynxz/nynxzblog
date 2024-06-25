import AboutMe from "@/components/aboutme";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function HomePage() {
  return (
    <div className="flex flex-col flex-grow ">
      {/* First Row */}
      <div className="flex flex-grow justify-evenly mt-2 mx-2 gap-x-2">
        <Card className="flex flex-col w-full">
          <CardHeader>
            <CardTitle>About Me</CardTitle>
          </CardHeader>
          <CardContent>
            <AboutMe />
          </CardContent>
        </Card>
        <Card className="flex items-center justify-center w-full">
          <h1 className="text-6xl">2</h1>
        </Card>
      </div>

      {/* Second Row */}
      <div className="flex items-center justify-center flex-grow m-2">
        <Card className="flex items-center justify-center w-full h-full">
          <h1 className="text-6xl">3</h1>
        </Card>
      </div>
    </div>
  );
}
