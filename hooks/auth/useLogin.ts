"use client";
import { useState } from "react";
import { signIn } from "next-auth/react";

export const useLogin = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const login = async (email: string, password: string) => {
    try {
      setIsLoading(true);
      setError(null);

      const result = await signIn("credentials", {
        redirect: false,
        email,
        password,
      });

      if (!result || result.error) {
        setError("Invalid credentials");
        return { success: false };
      }

      return { success: true };
    } catch (err) {
      setError("Something went wrong");
      return { success: false };
    } finally {
      setIsLoading(false);
    }
  };

  return {
    login,
    isLoading,
    error,
  };
};