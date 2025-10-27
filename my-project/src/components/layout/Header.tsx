export default function Header() {
  return (
    <header className="fixed top-0 z-10 flex w-full items-center justify-between bg-white px-16 py-5 shadow-md">
      {/* Logo */}
      <div className="flex items-center gap-3">
        <h2 className="text-xl font-semibold text-gray-800">Meu VLT</h2>
      </div>

      {/* Navegação */}
      <nav>
        <ul className="flex list-none gap-8">
          <li>
            <a
              href="#"
              className="text-gray-800 font-medium transition-colors duration-300 hover:text-blue-600"
            >
              Início
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-gray-800 font-medium transition-colors duration-300 hover:text-blue-600"
            >
              Rotas
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-gray-800 font-medium transition-colors duration-300 hover:text-blue-600"
            >
              Sobre
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-gray-800 font-medium transition-colors duration-300 hover:text-blue-600"
            >
              Contato
            </a>
          </li>
        </ul>
      </nav>

      {/* Botões */}
      <div className="flex items-center">
        <a
          href="#"
          className="ml-4 rounded-md border border-blue-600 px-4 py-2 text-blue-600 font-medium transition-colors hover:bg-blue-50"
        >
          Entrar
        </a>
        <a
          href="#"
          className="ml-4 rounded-md bg-blue-600 px-4 py-2 text-white font-medium transition-colors hover:bg-blue-700"
        >
          Criar Conta
        </a>
      </div>
    </header>
  );
}