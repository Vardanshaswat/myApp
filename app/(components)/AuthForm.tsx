"use client";

import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { useCallback, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import axios from "axios";

function AuthForm() {
  const [variant, setVariant] = useState("Login");
  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();
  const session = useSession();

  useEffect(() => {
    if (session?.status === "authenticated") {
      router.push("/website");
    }
  }, [session?.status, router]);

  const changeVariant = useCallback(() => {
    variant === "Login" ? setVariant("Register") : setVariant("Login");
  }, [variant]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  const onSubmit = (data) => {
    setIsLoading(true);

    if (variant === "Register") {
      axios
        .post("/api/register", data)
        .then(() => signIn("credentials", data))
        .catch(() => toast.error("Please fill the form carefully"))
        .finally(() => {
          setIsLoading(false);
          toast.success("Successfully registered");
        });
    }

    if (variant === "Login") {
      signIn("credentials", { ...data, redirect: false })
        .then((callback) => {
          if (callback?.error) toast.error("Invalid credentials");
          if (callback?.ok && !callback?.error) {
            toast.success("Successfully logged in");
            router.push("/website");
          }
        })
        .finally(() => setIsLoading(false));
    }
  };

  return (
    <div className="flex flex-col items-center justify-center w-full h-full p-4">
      <div className="max-w-[32rem]">
        <div className="flex flex-col items-center mb-8 text-white">
          <h1 className="mb-2 text-2xl font-bold max-w-[10rem] text-center">
            {variant === "Login" ? "Login" : "Create new Account"}
          </h1>
          <div className="text-sm">
            {variant === "Login" ? (
              "Sign in to continue."
            ) : (
              <p>
                Already Registered?
                <a
                  className="cursor-pointer hover:text-indigo-300"
                  onClick={changeVariant}
                >
                  &nbsp;Log in here.
                </a>
              </p>
            )}
          </div>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-4 text-white"
        >
          {variant === "Register" && (
            <div>
              <p className="text-sm font-semibold text-white mb-1">Name</p>
              <Input
                disabled={isLoading}
                id="name"
                {...register("name", { required: true })}
                className="mt-2 bg-transparent focus-visible:ring-green-100 placeholder:text-slate-100"
                type="text"
                placeholder="Name"
              />
              {errors.name && (
                <span className="text-xs text-rose-300">
                  This field is required
                </span>
              )}
            </div>
          )}

          <div>
            <p className="text-sm font-semibold text-white mb-1">Email</p>
            <Input
              disabled={isLoading}
              id="email"
              {...register("email", { required: true })}
              className="mt-2 bg-transparent focus-visible:ring-green-100 placeholder:text-slate-100"
              type="email"
              placeholder="Email"
            />
            {errors.email && (
              <span className="text-xs text-rose-300">
                This field is required
              </span>
            )}
          </div>

          <div>
            <p className="text-sm font-semibold text-white mb-1">Password</p>
            <Input
              disabled={isLoading}
              id="password"
              {...register("password", { required: true })}
              className="mt-2 bg-transparent focus-visible:ring-green-100 placeholder:text-slate-100"
              type="password"
              placeholder="Password"
            />
            {errors.password && (
              <span className="text-xs text-rose-300">
                This field is required
              </span>
            )}
          </div>

          <Button
            disabled={isLoading}
            type="submit"
            className="w-full transition bg-[#70D460] text-black hover:bg-green-500"
          >
            {variant === "Login" ? "Sign in" : "Sign up"}
          </Button>
        </form>

        {variant === "Login" && (
          <div className="mt-4 text-white">
            <p>
              Don’t have an Account?{" "}
              <a
                className="cursor-pointer hover:text-[#70D460]"
                onClick={changeVariant}
              >
                Click here
              </a>
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default AuthForm;
