import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import Image from "next/image";
import { Button } from "../ui/button";
import { CalendarDays, ExternalLink } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@radix-ui/react-hover-card";
import UserProfileHoverCard from "../shared/UserProfileHoverCard";
import Link from "next/link";

const SinglePost = () => {
  return (
    <Card className="w-96 mx-auto my-10">
      <CardHeader>
        <div className="flex justify-between">
          <div>
            <CardTitle className="text-3xl">omuk jayga</CardTitle>
            <UserProfileHoverCard />
          </div>

          <Avatar>
            <AvatarImage
              width={40}
              height={40}
              className="rounded-full"
              src="https://github.com/shadcn.png"
            />
            <AvatarFallback>dude name</AvatarFallback>
          </Avatar>
        </div>
        <CardDescription className="text-zinc-600">
          jaygar descrip Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Molestiae voluptate sunt natus, dolorem ducimus possimus, optio
          veritatis quibusdam ratione laborum aperiam! Libero quam, cumque
          aliquam assumenda unde nostrum minima explicabo.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Image
          alt="post image"
          width={700}
          height={580}
          className="w-full"
          src={"/download.jpeg"}
        />
      </CardContent>
      <CardFooter>
        <p className="text-zinc-700 ">See what others are saying about</p>
        <Button variant={"outline"}>
          omuk jayga
          <ExternalLink />
        </Button>
      </CardFooter>
      <Button className="block" variant={"secondary"} asChild>
        <Link className="text-center" href={`/${12343423}`}>
          Read comments and more
        </Link>
      </Button>
    </Card>
  );
};

export default SinglePost;
