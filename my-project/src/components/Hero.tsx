import Image from "next/image";

export default function Hero() {
  return (
    <section className="mt-32 flex flex-col-reverse items-center justify-between px-12 py-20 md:flex-row md:px-24 bg-amber-50">
      <div className="max-w-xl text-center md:text-left">
        <h1 className="mb-5 text-4xl font-bold leading-tight text-gray-900">
          Mobilidade inteligente e transparente em Fortaleza
        </h1>
        <p className="mb-8 text-gray-600">
          Com o <strong>Meu VLT</strong>, acompanhe horários, rotas e alertas em
          tempo real. Planeje seus trajetos de forma fácil e rápida, melhorando
          sua experiência com o transporte público.
        </p>
        <a
          href="#"
          className="rounded-lg bg-blue-600 px-6 py-3 font-medium text-white transition-colors hover:bg-blue-700"
        >
          Acompanhar rotas
        </a>
      </div>

      <div className="mb-10 md:mb-0">
      </div>
    </section>
  );
}
