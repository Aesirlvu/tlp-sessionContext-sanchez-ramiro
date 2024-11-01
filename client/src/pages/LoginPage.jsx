import { useForm } from "react-hook-form";
import { toast, Toaster } from "sonner";
import useSession from "../hooks/useSession";
import { useState } from "react";

export default function LoginForm() {
  const { login } = useSession();
  const { register, handleSubmit } = useForm();
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = async (data) => {
    setIsLoading(true);
    try {
      const response = await fetch("http://localhost:3000/api/auth/login", {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "http://localhost:5173",
        },
        body: JSON.stringify({
          email: data.email,
          password: data.password,
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();

      if (result.status === "Success") {
        toast.success("Login successful! 🎉");
        localStorage.setItem("token", result.data.token);
        login(result.data.user);
      } else {
        toast.error(result.message || "Login failed ❌");
      }
    } catch (error) {
      console.error("Network error:", error);
      toast.error(
        error.message === "Failed to fetch"
          ? "Server connection error. Please try again ⚠️"
          : error.message
      );
    } finally {
      setIsLoading(false);
    }
  };

  const onError = (errors) => {
    if (errors.email) {
      toast.error(errors.email.message, {
        duration: 3000,
        position: "bottom-center",
      });
    }
    if (errors.password) {
      toast.error(errors.password.message, {
        duration: 3000,
        position: "bottom-center",
      });
    }
  };

  return (
    <>
      <Toaster richColors />
      <div className="flex min-h-screen items-center justify-center bg-stone-100 p-4">
        <div className="w-full max-w-md space-y-8 rounded-lg bg-white p-8 shadow-lg">
          <h2 className="text-center text-3xl font-bold text-gray-900">
            Iniciar sesión
          </h2>

          <form
            onSubmit={handleSubmit(onSubmit, onError)}
            className="space-y-6"
          >
            <div>
              <input
                type="email"
                placeholder="email"
                disabled={isLoading}
                {...register("email", {
                  required: "Email is required",
                })}
                className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/50"
              />
            </div>

            <div>
              <input
                type="password"
                placeholder="Password"
                disabled={isLoading}
                {...register("password", {
                  required: "Password is required",
                })}
                className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/50"
              />
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full rounded-lg bg-emerald-300 px-4 py-3 text-lg text-black hover:bg-emerald-200 focus:outline-none focus:ring-2 focus:ring-primary/50 disabled:opacity-50"
            >
              {isLoading ? "Loading..." : "Login"}
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
