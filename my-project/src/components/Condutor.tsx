"use client";

import React, { useState } from 'react';

export default function Condutor() {
  const [activeTab, setActiveTab] = useState('operacao');

  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header da Página */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Painel do Condutor</h1>
          <p className="text-gray-600">Gerencie sua rota e comunique alertas em tempo real</p>
        </div>

        {/* Informações da Rota Atual */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-6">
          <div className="flex justify-between items-center">
            <div>
              <h2 className="text-xl font-semibold text-blue-900 mb-2">Rota Atual: 101 - Centro-Parangaba</h2>
              <p className="text-blue-700">Veículo: VLT-012 | Status: <span className="font-semibold">Em Operação</span></p>
            </div>
            <div className="text-right">
              <p className="text-sm text-blue-600 mb-1">Próxima Parada</p>
              <p className="text-lg font-bold text-blue-900">Parangaba</p>
              <p className="text-sm text-blue-600">ETA: 15 minutos</p>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="border-b border-gray-200 mb-6">
          <nav className="flex space-x-8">
            <button
              onClick={() => setActiveTab('operacao')}
              className={`py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'operacao'
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Operação
            </button>
            <button
              onClick={() => setActiveTab('alertas')}
              className={`py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'alertas'
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Criar Alertas
            </button>
            <button
              onClick={() => setActiveTab('historico')}
              className={`py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'historico'
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Histórico
            </button>
          </nav>
        </div>

        {/* Conteúdo das Tabs */}
        <div className="bg-white rounded-lg shadow p-6">
          {activeTab === 'operacao' && (
            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">Status da Operação</h2>
              
              {/* Controles de Status */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                <button className="bg-green-50 border-2 border-green-200 p-6 rounded-lg hover:bg-green-100 transition-colors">
                  <div className="text-center">
                    <div className="text-4xl mb-2">✅</div>
                    <p className="font-semibold text-green-900">Em Operação</p>
                  </div>
                </button>
                <button className="bg-yellow-50 border-2 border-yellow-200 p-6 rounded-lg hover:bg-yellow-100 transition-colors">
                  <div className="text-center">
                    <div className="text-4xl mb-2">⚠️</div>
                    <p className="font-semibold text-yellow-900">Com Atraso</p>
                  </div>
                </button>
                <button className="bg-red-50 border-2 border-red-200 p-6 rounded-lg hover:bg-red-100 transition-colors">
                  <div className="text-center">
                    <div className="text-4xl mb-2">🛑</div>
                    <p className="font-semibold text-red-900">Parado</p>
                  </div>
                </button>
              </div>

              {/* Informações da Viagem */}
              <div className="border-t pt-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Informações da Viagem</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="text-sm text-gray-600 mb-1">Horário de Partida</p>
                    <p className="text-lg font-semibold text-gray-900">08:30</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="text-sm text-gray-600 mb-1">Horário Previsto de Chegada</p>
                    <p className="text-lg font-semibold text-gray-900">09:45</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="text-sm text-gray-600 mb-1">Passageiros Abordados</p>
                    <p className="text-lg font-semibold text-gray-900">142</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="text-sm text-gray-600 mb-1">Velocidade Média</p>
                    <p className="text-lg font-semibold text-gray-900">45 km/h</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'alertas' && (
            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">Criar Novo Alerta</h2>
              
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Tipo de Alerta
                  </label>
                  <select className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
                    <option>Atraso</option>
                    <option>Manutenção</option>
                    <option>Ocorrência</option>
                    <option>Desvio de Rota</option>
                    <option>Outro</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Título do Alerta
                  </label>
                  <input
                    type="text"
                    placeholder="Ex: Atraso de 15 minutos"
                    className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Descrição
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Descreva o alerta em detalhes..."
                    className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  ></textarea>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Urgência
                  </label>
                  <div className="flex gap-4">
                    <label className="flex items-center">
                      <input type="radio" name="urgency" value="low" className="mr-2" />
                      <span className="text-sm text-gray-700">Baixa</span>
                    </label>
                    <label className="flex items-center">
                      <input type="radio" name="urgency" value="medium" className="mr-2" defaultChecked />
                      <span className="text-sm text-gray-700">Média</span>
                    </label>
                    <label className="flex items-center">
                      <input type="radio" name="urgency" value="high" className="mr-2" />
                      <span className="text-sm text-gray-700">Alta</span>
                    </label>
                  </div>
                </div>

                <div className="flex gap-4">
                  <button
                    type="submit"
                    className="flex-1 bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-colors font-medium"
                  >
                    Enviar Alerta
                  </button>
                  <button
                    type="button"
                    className="flex-1 bg-gray-200 text-gray-800 px-6 py-3 rounded-md hover:bg-gray-300 transition-colors font-medium"
                  >
                    Cancelar
                  </button>
                </div>
              </form>

              {/* Alertas Recentes */}
              <div className="mt-8 border-t pt-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Alertas Enviados Hoje</h3>
                <div className="space-y-3">
                  <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded">
                    <p className="font-medium text-gray-900">Atraso de 10 minutos</p>
                    <p className="text-sm text-gray-600">Enviado há 2 horas</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'historico' && (
            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">Histórico de Operações</h2>
              
              <div className="space-y-4">
                <div className="border border-gray-200 rounded-lg p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="font-semibold text-gray-900">Viagem #1234</h3>
                      <p className="text-sm text-gray-600">Rota 101 - Centro-Parangaba</p>
                    </div>
                    <span className="px-3 py-1 bg-green-100 text-green-800 text-sm font-medium rounded-full">
                      Concluída
                    </span>
                  </div>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                    <div>
                      <p className="text-gray-500">Data</p>
                      <p className="font-medium text-gray-900">15/01/2025</p>
                    </div>
                    <div>
                      <p className="text-gray-500">Horário</p>
                      <p className="font-medium text-gray-900">08:30 - 09:45</p>
                    </div>
                    <div>
                      <p className="text-gray-500">Passageiros</p>
                      <p className="font-medium text-gray-900">142</p>
                    </div>
                    <div>
                      <p className="text-gray-500">Status</p>
                      <p className="font-medium text-gray-900">Sem atrasos</p>
                    </div>
                  </div>
                </div>

                <div className="border border-gray-200 rounded-lg p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="font-semibold text-gray-900">Viagem #1233</h3>
                      <p className="text-sm text-gray-600">Rota 101 - Centro-Parangaba</p>
                    </div>
                    <span className="px-3 py-1 bg-green-100 text-green-800 text-sm font-medium rounded-full">
                      Concluída
                    </span>
                  </div>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                    <div>
                      <p className="text-gray-500">Data</p>
                      <p className="font-medium text-gray-900">14/01/2025</p>
                    </div>
                    <div>
                      <p className="text-gray-500">Horário</p>
                      <p className="font-medium text-gray-900">08:30 - 10:00</p>
                    </div>
                    <div>
                      <p className="text-gray-500">Passageiros</p>
                      <p className="font-medium text-gray-900">158</p>
                    </div>
                    <div>
                      <p className="text-gray-500">Status</p>
                      <p className="font-medium text-yellow-900">Atraso de 15 min</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

