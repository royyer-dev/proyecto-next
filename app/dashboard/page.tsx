"use client"; // ¡Añade esto al inicio del archivo!

import { useRouter } from "next/navigation";

export default function Dashboard() {
  const router = useRouter(); // Importa useRouter de next/navigation

  const handleClick = () => {
    router.push("/");
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="bg-white p-8 rounded-lg shadow-md max-w-md w-full text-center">
        {/* Icono de verificación */}
        <div className="mx-auto flex items-center justify-center h-12 w-12 bg-green-100 rounded-full mb-4">
          <svg
            className="h-6 w-6 text-green-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>

        {/* Mensaje principal */}
        <h1 className="text-2xl font-bold text-gray-800 mb-2">
          Sesión iniciada con éxito
        </h1>

        <p className="text-gray-600 mb-6">Bienvenido de nuevo al sistema</p>

        {/* Botón con useRouter */}
        <button
          className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md transition-colors"
          onClick={handleClick}
        >
          Volver al inicio
        </button>
      </div>
    </div>
  );
}
