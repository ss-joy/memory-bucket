import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";
import { ApiResponse, UserSignUpSchemaType } from "@/types/all-schema";
import { useRouter } from "next/router";
import React from "react";
import { useForm } from "react-hook-form";

export default function signup() {
  const router = useRouter();
  const { toast } = useToast();
  const {
    formState: { isSubmitSuccessful, isSubmitting, errors },
    register,
    reset,
    getValues,
    handleSubmit,
  } = useForm<UserSignUpSchemaType>();
  async function onSubmit(data: UserSignUpSchemaType) {
    const response = await fetch("/api/auth/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userName: data.userName,
        userEmail: data.userEmail,
        userPwd: data.userPwd,
      }),
    });
    const ans: ApiResponse = await response.json();

    if (ans.status === "success") {
      reset();
      toast({
        title: "Sign Up Successful!",
        description:
          "You have been successfully signed up. You will be shortly taken to the login page...",
      });
      setTimeout(() => {
        router.push("/auth/login");
      }, 4000);
    } else if (ans.status === "error") {
      toast({
        variant: "destructive",
        title: "Sign Up failed!",
        description:
          ans.message ||
          "Something went wrong. Please check everything carefully and try again",
      });
    }
  }
  return (
    <>
      <h1 className="">Sign Up</h1>
      <form
        noValidate
        className="shadow shadow-black rounded-md w-[80%] mx-auto sm:w-96 p-4"
        onSubmit={handleSubmit(onSubmit)}
      >
        <p className="text-red-700">{errors.userName?.message}</p>
        <Input
          {...register("userName", {
            required: { value: true, message: "Your name is required" },
            minLength: {
              value: 5,
              message: "Your name cant must be at least 5 characters",
            },
          })}
          placeholder="your name"
        />
        <p className="text-red-700">{errors.userEmail?.message}</p>
        <Input
          {...register("userEmail", {
            required: {
              value: true,
              message: "Email is required",
            },
            pattern: {
              value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
              message: "Enter a valid email",
            },
          })}
          placeholder="your email"
        />
        <p className="text-red-700">{errors.userPwd?.message}</p>
        <Input
          placeholder="choose a password"
          type="password"
          {...register("userPwd", {
            required: {
              value: true,
              message: "Please enter your password",
            },
            minLength: {
              value: 5,
              message: "Password must be greater than 5 characters!!!",
            },
          })}
        />
        <p className="text-red-700">{errors.userConfirmPwd?.message}</p>
        <Input
          placeholder="confirm password"
          type="password"
          {...register("userConfirmPwd", {
            required: {
              value: true,
              message: "Please match your passwords",
            },
            validate: (fieldValue) => {
              if (getValues("userPwd") === fieldValue) {
                return true;
              }
              return "Passwords must match";
            },
          })}
        />

        <Button className="mx-auto block" disabled={isSubmitting}>
          Sign Up
        </Button>
      </form>
    </>
  );
}
