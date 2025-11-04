export default function Features() {
  return (
    <section className="bg-white py-24 px-8 md:px-20" id="features">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-center text-3xl font-bold text-gray-900 mb-4">
          Por que escolher o Meu VLT?
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Uma plataforma completa para tornar sua experiência com o transporte público mais fácil e eficiente
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Feature 1 */}
          <div className="text-center p-6 rounded-lg hover:shadow-lg transition-shadow">
            <div className="text-4xl mb-4">🚌</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Rotas em Tempo Real
            </h3>
            <p className="text-gray-600">
              Acompanhe a localização exata dos veículos e planeje seus trajetos com precisão
            </p>
          </div>

          {/* Feature 2 */}
          <div className="text-center p-6 rounded-lg hover:shadow-lg transition-shadow">
            <div className="text-4xl mb-4">⏰</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Horários Atualizados
            </h3>
            <p className="text-gray-600">
              Consulte horários de partida e chegada sempre atualizados, evitando esperas desnecessárias
            </p>
          </div>

          {/* Feature 3 */}
          <div className="text-center p-6 rounded-lg hover:shadow-lg transition-shadow">
            <div className="text-4xl mb-4">🔔</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Alertas e Notificações
            </h3>
            <p className="text-gray-600">
              Receba notificações automáticas sobre atrasos, manutenções e ocorrências importantes
            </p>
          </div>

          {/* Feature 4 */}
          <div className="text-center p-6 rounded-lg hover:shadow-lg transition-shadow">
            <div className="text-4xl mb-4">🗺️</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Planejamento de Viagem
            </h3>
            <p className="text-gray-600">
              Planeje seus trajetos com antecedência e encontre a melhor rota disponível
            </p>
          </div>

          {/* Feature 5 */}
          <div className="text-center p-6 rounded-lg hover:shadow-lg transition-shadow">
            <div className="text-4xl mb-4">📱</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Interface Intuitiva
            </h3>
            <p className="text-gray-600">
              Design moderno e fácil de usar, acessível em qualquer dispositivo
            </p>
          </div>

          {/* Feature 6 */}
          <div className="text-center p-6 rounded-lg hover:shadow-lg transition-shadow">
            <div className="text-4xl mb-4">🌐</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Transparência Total
            </h3>
            <p className="text-gray-600">
              Informações claras e transparentes sobre toda a operação do VLT
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}


