'use client'

import Navbar from '@/components/Navbar'
import { useState, useEffect } from 'react'

interface Cadastro {
  id: string
  nome: string
  email: string
  escola: string
  cidade: string
  disciplina: string
  experiencia: string
  dataCadastro: string
  status: string
}

export default function Admin() {
  const [cadastros, setCadastros] = useState<Cadastro[]>([])
  const [filtro, setFiltro] = useState('')
  const [cidade, setCidade] = useState('')

  useEffect(() => {
    // Carregar cadastros do localStorage
    const cadastrosSalvos = JSON.parse(localStorage.getItem('cadastros') || '[]')
    setCadastros(cadastrosSalvos)
  }, [])

  const cadastrosFiltrados = cadastros.filter(cadastro => {
    const matchNome = cadastro.nome.toLowerCase().includes(filtro.toLowerCase())
    const matchEmail = cadastro.email.toLowerCase().includes(filtro.toLowerCase())
    const matchEscola = cadastro.escola.toLowerCase().includes(filtro.toLowerCase())
    const matchCidade = cidade === '' || cadastro.cidade === cidade
    
    return (matchNome || matchEmail || matchEscola) && matchCidade
  })

  const estatisticas = {
    total: cadastros.length,
    porCidade: cadastros.reduce((acc: any, cadastro) => {
      acc[cadastro.cidade] = (acc[cadastro.cidade] || 0) + 1
      return acc
    }, {}),
    porDisciplina: cadastros.reduce((acc: any, cadastro) => {
      acc[cadastro.disciplina] = (acc[cadastro.disciplina] || 0) + 1
      return acc
    }, {}),
    porExperiencia: cadastros.reduce((acc: any, cadastro) => {
      const exp = cadastro.experiencia || 'Não informado'
      acc[exp] = (acc[exp] || 0) + 1
      return acc
    }, {})
  }

  const exportarCSV = () => {
    const headers = ['Nome', 'Email', 'Escola', 'Cidade', 'Disciplina', 'Experiência', 'Data Cadastro']
    const csvContent = [
      headers.join(','),
      ...cadastros.map(cadastro => [
        cadastro.nome,
        cadastro.email,
        cadastro.escola,
        cadastro.cidade,
        cadastro.disciplina,
        cadastro.experiencia || 'Não informado',
        new Date(cadastro.dataCadastro).toLocaleDateString('pt-BR')
      ].join(','))
    ].join('\n')

    const blob = new Blob([csvContent], { type: 'text/csv' })
    const url = window.URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.setAttribute('hidden', '')
    a.setAttribute('href', url)
    a.setAttribute('download', 'cadastros-educaia-sc.csv')
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
  }

  const limparDados = () => {
    if (confirm('⚠️ Tem certeza que deseja limpar todos os dados de cadastro?\n\nEsta ação não pode ser desfeita.')) {
      localStorage.removeItem('cadastros')
      setCadastros([])
      alert('Dados limpos com sucesso!')
    }
  }

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-50 pt-16">
        <div className="max-w-7xl mx-auto px-4 py-8">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gradient mb-2">
              Painel Administrativo - EducaIA-SC
            </h1>
            <p className="text-gray-600">
              Gestão de cadastros e estatísticas dos professores
            </p>
          </div>

          {/* Estatísticas */}
          <div className="grid md:grid-cols-4 gap-6 mb-8">
            <div className="bg-white rounded-2xl shadow-lg p-6 text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">{estatisticas.total}</div>
              <div className="text-gray-600">Total de Cadastros</div>
            </div>
            
            <div className="bg-white rounded-2xl shadow-lg p-6 text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">
                {Object.keys(estatisticas.porCidade).length}
              </div>
              <div className="text-gray-600">Cidades Atingidas</div>
            </div>
            
            <div className="bg-white rounded-2xl shadow-lg p-6 text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">
                {Object.keys(estatisticas.porDisciplina).length}
              </div>
              <div className="text-gray-600">Disciplinas Cobertas</div>
            </div>
            
            <div className="bg-white rounded-2xl shadow-lg p-6 text-center">
              <div className="text-3xl font-bold text-yellow-600 mb-2">
                {new Date().toLocaleDateString('pt-BR')}
              </div>
              <div className="text-gray-600">Última Atualização</div>
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Lista de Cadastros */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-2xl font-bold">Cadastros Realizados</h2>
                  <div className="flex space-x-2">
                    <button
                      onClick={exportarCSV}
                      className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition text-sm"
                    >
                      📊 Exportar CSV
                    </button>
                    <button
                      onClick={limparDados}
                      className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition text-sm"
                    >
                      🗑️ Limpar Dados
                    </button>
                  </div>
                </div>

                {/* Filtros */}
                <div className="grid md:grid-cols-2 gap-4 mb-6">
                  <input
                    type="text"
                    placeholder="Buscar por nome, email ou escola..."
                    value={filtro}
                    onChange={(e) => setFiltro(e.target.value)}
                    className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                  <select
                    value={cidade}
                    onChange={(e) => setCidade(e.target.value)}
                    className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">Todas as cidades</option>
                    {Object.keys(estatisticas.porCidade).map(c => (
                      <option key={c} value={c}>{c} ({estatisticas.porCidade[c] as number})</option>
                    ))}
                  </select>
                </div>

                {/* Tabela */}
                <div className="overflow-x-auto">
                  {cadastrosFiltrados.length === 0 ? (
                    <div className="text-center py-8">
                      <div className="text-4xl mb-4">📝</div>
                      <p className="text-gray-600">
                        {cadastros.length === 0 
                          ? 'Nenhum cadastro realizado ainda.' 
                          : 'Nenhum cadastro encontrado com os filtros aplicados.'
                        }
                      </p>
                    </div>
                  ) : (
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="border-b">
                          <th className="text-left py-3">Nome</th>
                          <th className="text-left py-3">Email</th>
                          <th className="text-left py-3">Cidade</th>
                          <th className="text-left py-3">Disciplina</th>
                          <th className="text-left py-3">Data</th>
                        </tr>
                      </thead>
                      <tbody>
                        {cadastrosFiltrados.map(cadastro => (
                          <tr key={cadastro.id} className="border-b hover:bg-gray-50">
                            <td className="py-3 font-medium">{cadastro.nome}</td>
                            <td className="py-3 text-gray-600">{cadastro.email}</td>
                            <td className="py-3">{cadastro.cidade}</td>
                            <td className="py-3">{cadastro.disciplina}</td>
                            <td className="py-3 text-gray-600">
                              {new Date(cadastro.dataCadastro).toLocaleDateString('pt-BR')}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  )}
                </div>
              </div>
            </div>

            {/* Estatísticas Detalhadas */}
            <div className="space-y-6">
              {/* Por Cidade */}
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <h3 className="text-xl font-bold mb-4">Por Cidade</h3>
                <div className="space-y-3">
                  {Object.entries(estatisticas.porCidade)
                    .sort(([,a], [,b]) => (b as number) - (a as number))
                    .slice(0, 10)
                    .map(([cidade, count]) => (
                      <div key={cidade} className="flex justify-between items-center">
                        <span className="text-gray-700">{cidade}</span>
                        <div className="flex items-center">
                          <div className="bg-blue-200 rounded-full h-2 w-16 mr-2">
                            <div 
                              className="bg-blue-600 h-2 rounded-full" 
                              style={{ width: `${((count as number) / estatisticas.total) * 100}%` }}
                            ></div>
                          </div>
                          <span className="text-sm font-medium">{count as number}</span>
                        </div>
                      </div>
                    ))}
                </div>
              </div>

              {/* Por Disciplina */}
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <h3 className="text-xl font-bold mb-4">Por Disciplina</h3>
                <div className="space-y-3">
                  {Object.entries(estatisticas.porDisciplina)
                    .sort(([,a], [,b]) => (b as number) - (a as number))
                    .slice(0, 8)
                    .map(([disciplina, count]) => (
                      <div key={disciplina} className="flex justify-between items-center">
                        <span className="text-gray-700 text-sm">{disciplina}</span>
                        <div className="flex items-center">
                          <div className="bg-green-200 rounded-full h-2 w-12 mr-2">
                            <div 
                              className="bg-green-600 h-2 rounded-full" 
                              style={{ width: `${((count as number) / estatisticas.total) * 100}%` }}
                            ></div>
                          </div>
                          <span className="text-sm font-medium">{count as number}</span>
                        </div>
                      </div>
                    ))}
                </div>
              </div>

              {/* Por Experiência */}
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <h3 className="text-xl font-bold mb-4">Experiência com IA</h3>
                <div className="space-y-3">
                  {Object.entries(estatisticas.porExperiencia).map(([exp, count]) => (
                    <div key={exp} className="flex justify-between items-center">
                      <span className="text-gray-700 text-sm">{exp}</span>
                      <span className="text-sm font-medium bg-purple-100 text-purple-800 px-2 py-1 rounded">
                        {count as number}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}