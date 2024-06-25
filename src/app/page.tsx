import AboutMe from "@/components/aboutme";
import PostScrollView from "@/components/postscrollview";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function HomePage() {
  return (
    <div className="flex flex-col flex-grow h-full">
      {/* First Row */}
      <div className=" lg:flex flex-row justify-evenly mt-2 mx-2 gap-x-2">
        <Card className="flex flex-col w-full">
          <CardTitle className="p-4">About Me</CardTitle>
          <CardContent className="h-auto pb-4 px-4">
            <AboutMe />
          </CardContent>
        </Card>
        <Card className="mt-2 lg:mt-0 flex flex-col items-center justify-center w-full lg:w-2/3">
          <PostScrollView />
        </Card>
      </div>

      {/* Second Row */}
      <div className="flex items-center justify-center flex-grow m-2">
        <Card className="flex items-center justify-center w-full h-full">
          <h1 className="text-6xl">Coming Soon!</h1>
        </Card>
      </div>
    </div>
  );
}
