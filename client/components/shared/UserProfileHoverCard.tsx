import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@radix-ui/react-hover-card";
import React from "react";
import { Button } from "../ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import { CalendarDays } from "lucide-react";

const UserProfileHoverCard = () => {
  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <Button className="pl-0" variant="link">
          @username
        </Button>
      </HoverCardTrigger>
      <HoverCardContent className="w-80 p-2 shadow shadow-zinc-500 rounded-md bg-white">
        <div className="flex justify-between space-x-4">
          <Avatar>
            <AvatarImage
              className="w-36 rounded"
              src="/photo-1575936123452-b67c3203c357.avif"
            />
            <AvatarFallback>user profile image</AvatarFallback>
          </Avatar>
          <div className="space-y-1">
            <h4 className="text-sm font-semibold">@username</h4>
            <p className="text-sm">
              The React Framework – created and maintained by @vercel.
            </p>
            <div className="flex items-center pt-2">
              <CalendarDays className="mr-2 h-4 w-4 opacity-70" />{" "}
              <span className="text-xs text-muted-foreground">
                Joined December 2021
              </span>
            </div>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  );
};

export default UserProfileHoverCard;
