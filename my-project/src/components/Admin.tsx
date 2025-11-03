"use client";

import React, { useState } from 'react';

export default function Admin() {
  const [activeTab, setActiveTab] = useState('dashboard');

  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header da Página */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Painel Administrativo</h1>
          <p className="text-gray-600">Gerencie rotas, alertas, condutores e relatórios do sistema</p>
        </div>

        {/* Tabs */}
        <div className="border-b border-gray-200 mb-6">
          <nav className="flex space-x-8">
            <button
              onClick={() => setActiveTab('dashboard')}
              className={`py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'dashboard'
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Dashboard
            </button>
            <button
              onClick={() => setActiveTab('rotas')}
              className={`py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'rotas'
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Gerenciar Rotas
            </button>
            <button
              onClick={() => setActiveTab('alertas')}
              className={`py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'alertas'
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Alertas
            </button>
            <button
              onClick={() => setActiveTab('condutores')}
              className={`py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'condutores'
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Condutores
            </button>
            <button
              onClick={() => setActiveTab('relatorios')}
              className={`py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'relatorios'
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Relatórios
            </button>
          </nav>
        </div>

        {/* Conteúdo das Tabs */}
        <div className="bg-white rounded-lg shadow p-6">
          {activeTab === 'dashboard' && (
            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">Visão Geral</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="text-sm font-medium text-blue-600 mb-2">Rotas Ativas</h3>
                  <p className="text-3xl font-bold text-blue-900">12</p>
                </div>
                <div className="bg-green-50 p-6 rounded-lg">
                  <h3 className="text-sm font-medium text-green-600 mb-2">Veículos em Operação</h3>
                  <p className="text-3xl font-bold text-green-900">8</p>
                </div>
                <div className="bg-yellow-50 p-6 rounded-lg">
                  <h3 className="text-sm font-medium text-yellow-600 mb-2">Alertas Pendentes</h3>
                  <p className="text-3xl font-bold text-yellow-900">3</p>
                </div>
              </div>
              <div className="border-t pt-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Atividades Recentes</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <div>
                      <p className="font-medium text-gray-900">Novo alerta criado</p>
                      <p className="text-sm text-gray-500">Rota 101 - Atraso de 15 minutos</p>
                    </div>
                    <span className="text-sm text-gray-500">Há 5 minutos</span>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <div>
                      <p className="font-medium text-gray-900">Condutor adicionado</p>
                      <p className="text-sm text-gray-500">João Silva - Rota 201</p>
                    </div>
                    <span className="text-sm text-gray-500">Há 1 hora</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'rotas' && (
            <div>
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-semibold text-gray-900">Gerenciar Rotas</h2>
                <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors">
                  + Nova Rota
                </button>
              </div>
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Nome</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Origem</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Destino</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Ações</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">101</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Centro-Parangaba</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Centro</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Parangaba</td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                          Ativa
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                        <a href="#" className="text-blue-600 hover:text-blue-900 mr-4">Editar</a>
                        <a href="#" className="text-red-600 hover:text-red-900">Excluir</a>
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">102</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Parangaba-Caucaia</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Parangaba</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Caucaia</td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                          Ativa
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                        <a href="#" className="text-blue-600 hover:text-blue-900 mr-4">Editar</a>
                        <a href="#" className="text-red-600 hover:text-red-900">Excluir</a>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {activeTab === 'alertas' && (
            <div>
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-semibold text-gray-900">Gerenciar Alertas</h2>
                <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors">
                  + Novo Alerta
                </button>
              </div>
              <div className="space-y-4">
                <div className="border-l-4 border-yellow-400 bg-yellow-50 p-4 rounded">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-semibold text-gray-900">Atraso na Rota 101</h3>
                      <p className="text-sm text-gray-600 mt-1">Atraso de aproximadamente 15 minutos devido a manutenção</p>
                      <p className="text-xs text-gray-500 mt-2">Criado há 30 minutos</p>
                    </div>
                    <div className="flex gap-2">
                      <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">Editar</button>
                      <button className="text-red-600 hover:text-red-800 text-sm font-medium">Remover</button>
                    </div>
                  </div>
                </div>
                <div className="border-l-4 border-red-400 bg-red-50 p-4 rounded">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-semibold text-gray-900">Manutenção Rota 202</h3>
                      <p className="text-sm text-gray-600 mt-1">Rota temporariamente interrompida para manutenção</p>
                      <p className="text-xs text-gray-500 mt-2">Criado há 2 horas</p>
                    </div>
                    <div className="flex gap-2">
                      <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">Editar</button>
                      <button className="text-red-600 hover:text-red-800 text-sm font-medium">Remover</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'condutores' && (
            <div>
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-semibold text-gray-900">Gerenciar Condutores</h2>
                <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors">
                  + Novo Condutor
                </button>
              </div>
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Nome</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">CPF</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Rota Atribuída</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Ações</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">João Silva</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">123.456.789-00</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Rota 101</td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                          Ativo
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                        <a href="#" className="text-blue-600 hover:text-blue-900 mr-4">Editar</a>
                        <a href="#" className="text-red-600 hover:text-red-900">Remover</a>
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Maria Santos</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">987.654.321-00</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Rota 102</td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                          Ativo
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                        <a href="#" className="text-blue-600 hover:text-blue-900 mr-4">Editar</a>
                        <a href="#" className="text-red-600 hover:text-red-900">Remover</a>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {activeTab === 'relatorios' && (
            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">Relatórios</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="border border-gray-200 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Relatórios Disponíveis</h3>
                  <div className="space-y-3">
                    <button className="w-full text-left px-4 py-3 bg-gray-50 hover:bg-gray-100 rounded-md transition-colors">
                      <p className="font-medium text-gray-900">Relatório de Uso por Rota</p>
                      <p className="text-sm text-gray-500">Visualizar estatísticas de uso</p>
                    </button>
                    <button className="w-full text-left px-4 py-3 bg-gray-50 hover:bg-gray-100 rounded-md transition-colors">
                      <p className="font-medium text-gray-900">Relatório de Atrasos</p>
                      <p className="text-sm text-gray-500">Análise de atrasos e ocorrências</p>
                    </button>
                    <button className="w-full text-left px-4 py-3 bg-gray-50 hover:bg-gray-100 rounded-md transition-colors">
                      <p className="font-medium text-gray-900">Relatório de Condutores</p>
                      <p className="text-sm text-gray-500">Desempenho dos condutores</p>
                    </button>
                  </div>
                </div>
                <div className="border border-gray-200 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Exportar Dados</h3>
                  <div className="space-y-3">
                    <button className="w-full px-4 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
                      Exportar CSV
                    </button>
                    <button className="w-full px-4 py-3 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors">
                      Exportar PDF
                    </button>
                    <button className="w-full px-4 py-3 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition-colors">
                      Exportar Excel
                    </button>
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

