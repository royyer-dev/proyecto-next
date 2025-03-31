"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";

interface LoginFormValues {
  username: string;
  password: string;
}

export default function LoginPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormValues>();
  const router = useRouter();

  const onSubmit = (data: LoginFormValues) => {
    if (data.username.trim() === "admin" && data.password.trim() === "1234") {
      router.push("/dashboard"); // Redirige a la página de bienvenida
    } else {
      window.alert("⚠️ Usuario o contraseña incorrectos"); // Muestra el alert dialog en caso de error
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        {/* Uso correcto de next/image */}
        <Image
          src="https://th.bing.com/th/id/R.f28b10bc4643006cbf7d30c43ca7aa21?rik=Psasu37qtY%2f0Qw&pid=ImgRaw&r=0"
          alt="Login"
          width={384}
          height={160}
          className="w-full h-40 object-cover rounded-md mb-4"
          unoptimized // Se usa para imágenes externas que Next.js no puede optimizar
        />

        <h2 className="text-2xl font-semibold text-center mb-4">
          Iniciar Sesión
        </h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <input
            {...register("username", { required: true })}
            className="w-full p-2 border rounded-md"
            placeholder="Usuario"
          />
          {errors.username && (
            <p className="text-red-500 text-sm">El usuario es obligatorio</p>
          )}

          <input
            {...register("password", { required: true })}
            type="password"
            className="w-full p-2 border rounded-md"
            placeholder="Contraseña"
          />
          {errors.password && (
            <p className="text-red-500 text-sm">La contraseña es obligatoria</p>
          )}

          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
          >
            Ingresar
          </button>
        </form>
      </div>
    </div>
  );
}
