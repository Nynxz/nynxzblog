import AboutMe from "@/components/aboutme";
import PostScrollView from "@/components/postscrollview";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="m-2 flex flex-grow min-w-max justify-items-center">
      <Card className="flex flex-grow flex-col justify-center items-center text-center">
        <Card className="p-8">
          <p>404 Not Found</p>
          <Separator className="mb-4" />
          <Link href="/" className="underline p-4">
            Home
          </Link>
        </Card>
      </Card>
    </div>
  );
}
