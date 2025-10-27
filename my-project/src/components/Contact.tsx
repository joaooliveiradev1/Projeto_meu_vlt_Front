export default function Contato() {
  return (
    <section id="contato" className="bg-white py-24 px-10 md:px-20">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-semibold text-gray-900 mb-6">Entre em Contato</h2>
        <p className="text-gray-600 mb-10">
          Tem dúvidas, sugestões ou deseja reportar algum problema?  
          A equipe do <strong>Meu VLT</strong> está pronta para ouvir você.
        </p>

        <div className="flex flex-col md:flex-row justify-between gap-10 text-left">
          {/* Info */}
          <div className="flex-1">
            <h3 className="text-blue-600 font-semibold mb-3">Fale Conosco</h3>
            <p className="text-gray-700 leading-relaxed">
              📧 suporte@meuvlt.com.br <br />
              📞 (85) 3333-4455 <br />
              📍 Av. Washington Soares, 1321 – Fortaleza, CE
            </p>

            <h3 className="text-blue-600 font-semibold mt-6 mb-3">Horário de Atendimento</h3>
            <p className="text-gray-700 leading-relaxed">
              Segunda a Sexta: 8h às 18h <br />
              Sábado: 8h às 12h <br />
              Domingo e feriados: fechado
            </p>
          </div>

          {/* Formulário */}
          <form className="flex-1 flex flex-col gap-4">
            <input
              type="text"
              placeholder="Seu nome"
              className="border border-gray-300 rounded-md px-4 py-2 focus:outline-blue-500"
              required
            />
            <input
              type="email"
              placeholder="Seu e-mail"
              className="border border-gray-300 rounded-md px-4 py-2 focus:outline-blue-500"
              required
            />
            <textarea
              placeholder="Escreva sua mensagem..."
              rows={5}
              className="border border-gray-300 rounded-md px-4 py-2 focus:outline-blue-500 resize-none"
              required
            ></textarea>
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white rounded-md py-2 font-medium transition"
            >
              Enviar Mensagem
            </button>
          </form>
        </div>

        {/* Mapa */}
        <div className="mt-16">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3981.291342998583!2d-38.4903!3d-3.7710!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7c74d1c0a2d4231%3A0xbbb6d34cbcc1cf20!2sAv.%20Washington%20Soares%2C%201321%20-%20Edson%20Queiroz%2C%20Fortaleza%20-%20CE!5e0!3m2!1spt-BR!2sbr!4v1728567845987"
            width="100%"
            height="300"
            className="rounded-md border-0"
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
