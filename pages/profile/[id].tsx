import SinglePost from "@/components/posts/SinglePost";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import React, { useState } from "react";
import { BikeIcon, UsersIcon } from "lucide-react";

const index = () => {
  const [posts, setPosts] = useState([12, 34]);
  return (
    <div>
      <section className="mt-16">
        <Image
          style={{
            borderRadius: "50%",
            width: "300px",
            height: "300px",
          }}
          alt="profile image"
          width={300}
          height={300}
          className="block ring-2 ring-slate-600 p-2  mx-auto shadow object-fill"
          src={"/photo-1575936123452-b67c3203c357.avif"}
        />
      </section>
      <section className="flex justify-center mt-16">
        <Card className="mx-4">
          <CardHeader>
            <CardTitle>Your adventures</CardTitle>
            <CardDescription>23 posts</CardDescription>
          </CardHeader>
          <CardContent>
            <p>
              <BikeIcon />
            </p>
          </CardContent>
        </Card>
        <Card className="mx-4">
          <CardHeader>
            <CardTitle>You have reached</CardTitle>
            <CardDescription>xd level</CardDescription>
          </CardHeader>
        </Card>
        <Card className="mx-4">
          <CardHeader>
            <CardTitle>Your Posts helped</CardTitle>
            <CardDescription>69 people</CardDescription>
          </CardHeader>

          <CardContent>
            <p>
              <UsersIcon></UsersIcon>
            </p>
          </CardContent>
        </Card>
      </section>
      <section className="mt-16">
        {posts.map((e) => {
          return <SinglePost />;
        })}
      </section>
    </div>
  );
};

export default index;
