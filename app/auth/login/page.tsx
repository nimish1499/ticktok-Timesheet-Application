"use client";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";

import { Input } from "@/components/ui/Input/Input";
import { Checkbox } from "@/components/ui/Checkbox/Checkbox";
import { loginSchema, type LoginFormInputs } from "@/validators/auth";

import { useLogin } from "@/hooks/auth/useLogin";
import { ROUTES } from "@/constants";

export default function LoginPage() {
  const router = useRouter();
  const { login, isLoading, error } = useLogin();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormInputs>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (data: LoginFormInputs) => {
    const result = await login(data.email, data.password);

    if (result.success) {
      router.push(ROUTES.DASHBOARD);
    }
  };

  const loading = isLoading || isSubmitting;

  return (
    <div className="min-h-screen flex">
      <div className="w-full md:w-1/2 flex flex-col gap-5 justify-center px-18">
        <h3 className="font-bold text-xl text-gray-900">Welcome back</h3>

        <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-5">
          <Input
            id="email"
            label="Email"
            type="email"
            placeholder="name@example.com"
            autoComplete="email"
            disabled={isLoading || isSubmitting}
            {...register("email")}
            error={errors.email}
          />

          <Input
            id="password"
            label="Password"
            type="password"
            placeholder="••••••••"
            autoComplete="current-password"
            disabled={isLoading || isSubmitting}
            {...register("password")}
            error={errors.password}
          />

          <Checkbox
            id="remember"
            label="Remember me"
            {...register("remember")}
          />

          {error && <p className="text-sm text-red-500">{error}</p>}

          <button
            type="submit"
            disabled={isLoading || isSubmitting}
            aria-busy={isLoading || isSubmitting}
            className={`w-full py-2.5 px-5 rounded-lg text-sm font-medium text-white cursor-pointer transition-all duration-200 ease-in-out bg-primary-700 ${isLoading || isSubmitting ? "cursor-not-allowed opacity-75" : ""}`}
          >
            {loading ? "Signing in..." : "Sign In"}
          </button>
        </form>
      </div>

      {/* Right Section */}
      <div className="hidden w-1/2 bg-primary-600 md:flex flex-col gap-6 justify-center px-18">
        <h3 className="font-medium text-40 text-white tracking-normal leading-normal align-middle">
          ticktock
        </h3>
        <p className="text-base font-normal text-gray-200 leading-normal tracking-normal">
          Introducing ticktock, our cutting-edge timesheet web application
          designed to revolutionize how you manage employee work hours. With
          ticktock, you can effortlessly track and monitor employee attendance
          and productivity from anywhere, anytime, using any internet-connected
          device.
        </p>
      </div>
    </div>
  );
}



