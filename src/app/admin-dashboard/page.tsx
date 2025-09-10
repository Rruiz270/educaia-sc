'use client'

import Navbar from '@/components/Navbar'
import { useState, useEffect } from 'react'
import Link from 'next/link'

interface Professor {
  id: string
  nome: string
  email: string
  escola: string
  cidade: string
  disciplina: string
  experiencia: string
  dataCadastro: string
  progresso: {
    modulo1: number
    modulo2: number
    modulo3: number
    total: number
  }
  badges: string[]
  pontos: number
  projetos: number
  ultimoAcesso: string
  status: 'ativo' | 'inativo' | 'pendente'
}

export default function AdminDashboard() {
  const [professores, setProfessores] = useState<Professor[]>([])
  const [filtro, setFiltro] = useState({
    busca: '',
    cidade: '',
    disciplina: '',
    status: '',
    modulo: ''
  })
  const [view, setView] = useState<'grid' | 'table' | 'projetos'>('grid')
  const [selectedProf, setSelectedProf] = useState<Professor | null>(null)
  const [projetos, setProjetos] = useState<any[]>([])

  useEffect(() => {
    // Carregar dados dos professores (simulação)
    const cadastros = JSON.parse(localStorage.getItem('cadastros') || '[]')
    
    // Enriquecer dados com informações de progresso simuladas
    const professoresCompletos = cadastros.map((cadastro: any) => ({
      ...cadastro,
      progresso: {
        modulo1: Math.floor(Math.random() * 100),
        modulo2: Math.floor(Math.random() * 100),
        modulo3: Math.floor(Math.random() * 100),
        total: Math.floor(Math.random() * 100)
      },
      badges: ['🌊', '🏰', '🤝'].slice(0, Math.floor(Math.random() * 4)),
      pontos: Math.floor(Math.random() * 5000),
      projetos: Math.floor(Math.random() * 10),
      ultimoAcesso: new Date(Date.now() - Math.random() * 7 * 24 * 60 * 60 * 1000).toISOString(),
      status: ['ativo', 'ativo', 'ativo', 'inativo', 'pendente'][Math.floor(Math.random() * 5)] as 'ativo' | 'inativo' | 'pendente'
    }))
    
    setProfessores(professoresCompletos)
    
    // Carregar projetos do localStorage
    const projetosSalvos = JSON.parse(localStorage.getItem('projetos') || '[]')
    setProjetos(projetosSalvos)
  }, [])

  const professoresFiltrados = professores.filter(prof => {
    const matchBusca = prof.nome.toLowerCase().includes(filtro.busca.toLowerCase()) ||
                      prof.email.toLowerCase().includes(filtro.busca.toLowerCase()) ||
                      prof.escola.toLowerCase().includes(filtro.busca.toLowerCase())
    const matchCidade = !filtro.cidade || prof.cidade === filtro.cidade
    const matchDisciplina = !filtro.disciplina || prof.disciplina === filtro.disciplina
    const matchStatus = !filtro.status || prof.status === filtro.status
    
    return matchBusca && matchCidade && matchDisciplina && matchStatus
  })

  const estatisticas = {
    totalProfessores: professores.length,
    ativos: professores.filter(p => p.status === 'ativo').length,
    completaram: professores.filter(p => p.progresso.total === 100).length,
    emAndamento: professores.filter(p => p.progresso.total > 0 && p.progresso.total < 100).length,
    mediaProgresso: Math.round(professores.reduce((acc, p) => acc + p.progresso.total, 0) / professores.length || 0),
    totalProjetos: professores.reduce((acc, p) => acc + p.projetos, 0),
    engajamento7dias: professores.filter(p => 
      new Date(p.ultimoAcesso) > new Date(Date.now() - 7 * 24 * 60 * 60 * 1000)
    ).length,
    totalProjetosEnviados: projetos.length,
    projetosAprovados: projetos.filter((p: any) => p.status === 'aprovado').length
  }

  const cidades = [...new Set(professores.map(p => p.cidade))]
  const disciplinas = [...new Set(professores.map(p => p.disciplina))]

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-50 pt-16">
        <div className="max-w-7xl mx-auto px-4 py-8">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-gradient mb-2">
              Dashboard Administrativo - EducaIA-SC
            </h1>
            <p className="text-gray-600 text-lg">
              Acompanhamento completo do progresso dos professores
            </p>
          </div>

          {/* Estatísticas Gerais */}
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-9 gap-4 mb-8">
            <StatCard
              label="Total Professores"
              value={estatisticas.totalProfessores}
              icon="👥"
              color="blue"
            />
            <StatCard
              label="Ativos"
              value={estatisticas.ativos}
              icon="✅"
              color="green"
            />
            <StatCard
              label="Completaram"
              value={estatisticas.completaram}
              icon="🎓"
              color="purple"
            />
            <StatCard
              label="Em Progresso"
              value={estatisticas.emAndamento}
              icon="📚"
              color="yellow"
            />
            <StatCard
              label="Média Progresso"
              value={`${estatisticas.mediaProgresso}%`}
              icon="📊"
              color="indigo"
            />
            <StatCard
              label="Total Projetos"
              value={estatisticas.totalProjetos}
              icon="🚀"
              color="pink"
            />
            <StatCard
              label="Ativos 7 dias"
              value={estatisticas.engajamento7dias}
              icon="🔥"
              color="red"
            />
            <StatCard
              label="Projetos Enviados"
              value={estatisticas.totalProjetosEnviados}
              icon="📤"
              color="orange"
            />
            <StatCard
              label="Projetos Aprovados"
              value={estatisticas.projetosAprovados}
              icon="✅"
              color="emerald"
            />
          </div>

          {/* Filtros e Controles */}
          <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
            <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
              <h2 className="text-2xl font-bold">Professores Cadastrados</h2>
              <div className="flex gap-2">
                <button
                  onClick={() => setView('grid')}
                  className={`px-4 py-2 rounded-lg ${view === 'grid' ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
                >
                  Grid
                </button>
                <button
                  onClick={() => setView('table')}
                  className={`px-4 py-2 rounded-lg ${view === 'table' ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
                >
                  Tabela
                </button>
                <button
                  onClick={() => setView('projetos')}
                  className={`px-4 py-2 rounded-lg ${view === 'projetos' ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
                >
                  Projetos
                </button>
              </div>
            </div>

            {/* Filtros */}
            <div className="grid md:grid-cols-5 gap-4 mb-6">
              <input
                type="text"
                placeholder="Buscar nome, email, escola..."
                value={filtro.busca}
                onChange={(e) => setFiltro({...filtro, busca: e.target.value})}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              />
              
              <select
                value={filtro.cidade}
                onChange={(e) => setFiltro({...filtro, cidade: e.target.value})}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Todas as cidades</option>
                {cidades.map(cidade => (
                  <option key={cidade} value={cidade}>{cidade}</option>
                ))}
              </select>
              
              <select
                value={filtro.disciplina}
                onChange={(e) => setFiltro({...filtro, disciplina: e.target.value})}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Todas as disciplinas</option>
                {disciplinas.map(disciplina => (
                  <option key={disciplina} value={disciplina}>{disciplina}</option>
                ))}
              </select>
              
              <select
                value={filtro.status}
                onChange={(e) => setFiltro({...filtro, status: e.target.value})}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Todos os status</option>
                <option value="ativo">Ativo</option>
                <option value="inativo">Inativo</option>
                <option value="pendente">Pendente</option>
              </select>
              
              <select
                value={filtro.modulo}
                onChange={(e) => setFiltro({...filtro, modulo: e.target.value})}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Todos os módulos</option>
                <option value="1">Módulo 1</option>
                <option value="2">Módulo 2</option>
                <option value="3">Módulo 3</option>
              </select>
            </div>

            {/* Visualização dos Dados */}
            {view === 'grid' ? (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {professoresFiltrados.map(prof => (
                  <ProfessorCard
                    key={prof.id}
                    professor={prof}
                    onClick={() => setSelectedProf(prof)}
                  />
                ))}
              </div>
            ) : view === 'projetos' ? (
              <div className="space-y-4">
                <h3 className="text-xl font-bold">Projetos Enviados pelos Professores</h3>
                {projetos.length === 0 ? (
                  <div className="text-center py-12">
                    <div className="text-4xl mb-4">📁</div>
                    <p className="text-gray-600">Nenhum projeto foi enviado ainda.</p>
                  </div>
                ) : (
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {projetos.map((projeto: any) => (
                      <AdminProjetoCard key={projeto.id} projeto={projeto} />
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b bg-gray-50">
                      <th className="text-left py-3 px-4">Nome</th>
                      <th className="text-left py-3 px-4">Email</th>
                      <th className="text-left py-3 px-4">Escola</th>
                      <th className="text-left py-3 px-4">Cidade</th>
                      <th className="text-left py-3 px-4">Disciplina</th>
                      <th className="text-center py-3 px-4">Progresso</th>
                      <th className="text-center py-3 px-4">Pontos</th>
                      <th className="text-center py-3 px-4">Status</th>
                      <th className="text-center py-3 px-4">Ações</th>
                    </tr>
                  </thead>
                  <tbody>
                    {professoresFiltrados.map(prof => (
                      <tr key={prof.id} className="border-b hover:bg-gray-50">
                        <td className="py-3 px-4 font-medium">{prof.nome}</td>
                        <td className="py-3 px-4 text-gray-600">{prof.email}</td>
                        <td className="py-3 px-4">{prof.escola}</td>
                        <td className="py-3 px-4">{prof.cidade}</td>
                        <td className="py-3 px-4">{prof.disciplina}</td>
                        <td className="py-3 px-4">
                          <div className="flex items-center justify-center">
                            <div className="w-16 bg-gray-200 rounded-full h-2 mr-2">
                              <div
                                className="bg-blue-600 h-2 rounded-full"
                                style={{ width: `${prof.progresso.total}%` }}
                              ></div>
                            </div>
                            <span className="text-sm">{prof.progresso.total}%</span>
                          </div>
                        </td>
                        <td className="py-3 px-4 text-center">{prof.pontos}</td>
                        <td className="py-3 px-4 text-center">
                          <StatusBadge status={prof.status} />
                        </td>
                        <td className="py-3 px-4 text-center">
                          <button
                            onClick={() => setSelectedProf(prof)}
                            className="text-blue-600 hover:underline"
                          >
                            Ver Detalhes
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}

            {professoresFiltrados.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-500">Nenhum professor encontrado com os filtros aplicados.</p>
              </div>
            )}
          </div>

          {/* Modal de Detalhes do Professor */}
          {selectedProf && (
            <ProfessorModal
              professor={selectedProf}
              onClose={() => setSelectedProf(null)}
            />
          )}
        </div>
      </div>
    </>
  )
}

function StatCard({ label, value, icon, color }: {
  label: string
  value: string | number
  icon: string
  color: string
}) {
  const colorClasses = {
    blue: 'bg-blue-100 text-blue-800 border-blue-200',
    green: 'bg-green-100 text-green-800 border-green-200',
    purple: 'bg-purple-100 text-purple-800 border-purple-200',
    yellow: 'bg-yellow-100 text-yellow-800 border-yellow-200',
    indigo: 'bg-indigo-100 text-indigo-800 border-indigo-200',
    pink: 'bg-pink-100 text-pink-800 border-pink-200',
    red: 'bg-red-100 text-red-800 border-red-200',
    orange: 'bg-orange-100 text-orange-800 border-orange-200',
    emerald: 'bg-emerald-100 text-emerald-800 border-emerald-200'
  }

  return (
    <div className={`border-2 ${colorClasses[color as keyof typeof colorClasses]} rounded-xl p-4`}>
      <div className="text-2xl mb-2">{icon}</div>
      <div className="text-2xl font-bold">{value}</div>
      <div className="text-sm opacity-80">{label}</div>
    </div>
  )
}

function ProfessorCard({ professor, onClick }: {
  professor: Professor
  onClick: () => void
}) {
  return (
    <div 
      className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition cursor-pointer"
      onClick={onClick}
    >
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="font-bold text-lg">{professor.nome}</h3>
          <p className="text-gray-600 text-sm">{professor.email}</p>
        </div>
        <StatusBadge status={professor.status} />
      </div>
      
      <div className="space-y-2 text-sm">
        <div className="flex justify-between">
          <span className="text-gray-600">Escola:</span>
          <span className="font-medium">{professor.escola}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-600">Cidade:</span>
          <span className="font-medium">{professor.cidade}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-600">Disciplina:</span>
          <span className="font-medium">{professor.disciplina}</span>
        </div>
      </div>

      <div className="mt-4">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm text-gray-600">Progresso Total</span>
          <span className="text-sm font-bold">{professor.progresso.total}%</span>
        </div>
        <div className="bg-gray-200 rounded-full h-3">
          <div
            className="bg-gradient-to-r from-green-600 to-blue-600 h-3 rounded-full"
            style={{ width: `${professor.progresso.total}%` }}
          ></div>
        </div>
      </div>

      <div className="mt-4 flex items-center justify-between">
        <div className="flex space-x-1">
          {professor.badges.map((badge, index) => (
            <span key={index} className="text-xl">{badge}</span>
          ))}
        </div>
        <div className="text-right">
          <div className="text-lg font-bold text-blue-600">{professor.pontos} XP</div>
          <div className="text-xs text-gray-500">{professor.projetos} projetos</div>
        </div>
      </div>
    </div>
  )
}

function StatusBadge({ status }: { status: 'ativo' | 'inativo' | 'pendente' }) {
  const statusConfig = {
    ativo: { color: 'bg-green-100 text-green-800', label: 'Ativo' },
    inativo: { color: 'bg-gray-100 text-gray-800', label: 'Inativo' },
    pendente: { color: 'bg-yellow-100 text-yellow-800', label: 'Pendente' }
  }

  return (
    <span className={`px-2 py-1 rounded-full text-xs font-medium ${statusConfig[status].color}`}>
      {statusConfig[status].label}
    </span>
  )
}

function ProfessorModal({ professor, onClose }: {
  professor: Professor
  onClose: () => void
}) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-2xl shadow-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6 border-b">
          <div className="flex justify-between items-center">
            <div>
              <h2 className="text-2xl font-bold">{professor.nome}</h2>
              <p className="text-gray-600">{professor.email}</p>
            </div>
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700 text-2xl"
            >
              ×
            </button>
          </div>
        </div>

        <div className="p-6">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Informações Gerais */}
            <div>
              <h3 className="text-lg font-bold mb-4">Informações Gerais</h3>
              <div className="space-y-3">
                <InfoRow label="Escola" value={professor.escola} />
                <InfoRow label="Cidade" value={professor.cidade} />
                <InfoRow label="Disciplina" value={professor.disciplina} />
                <InfoRow label="Experiência IA" value={professor.experiencia || 'Não informado'} />
                <InfoRow label="Data Cadastro" value={new Date(professor.dataCadastro).toLocaleDateString('pt-BR')} />
                <InfoRow label="Último Acesso" value={new Date(professor.ultimoAcesso).toLocaleDateString('pt-BR')} />
                <InfoRow label="Status" value={<StatusBadge status={professor.status} />} />
              </div>
            </div>

            {/* Progresso e Conquistas */}
            <div>
              <h3 className="text-lg font-bold mb-4">Progresso e Conquistas</h3>
              
              {/* Progresso por Módulo */}
              <div className="space-y-3 mb-6">
                <ProgressBar label="Módulo 1: Fundamentos" value={professor.progresso.modulo1} />
                <ProgressBar label="Módulo 2: IA na Sala" value={professor.progresso.modulo2} />
                <ProgressBar label="Módulo 3: Projeto Final" value={professor.progresso.modulo3} />
              </div>

              {/* Estatísticas */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-blue-50 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-blue-600">{professor.pontos}</div>
                  <div className="text-sm text-gray-600">Pontos XP</div>
                </div>
                <div className="bg-green-50 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-green-600">{professor.projetos}</div>
                  <div className="text-sm text-gray-600">Projetos</div>
                </div>
              </div>

              {/* Badges */}
              <div>
                <h4 className="font-medium mb-2">Badges Conquistados</h4>
                <div className="flex space-x-2">
                  {professor.badges.length > 0 ? (
                    professor.badges.map((badge, index) => (
                      <div key={index} className="text-3xl">{badge}</div>
                    ))
                  ) : (
                    <p className="text-gray-500 text-sm">Nenhum badge conquistado ainda</p>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Ações */}
          <div className="mt-8 pt-8 border-t flex justify-end space-x-4">
            <button
              onClick={() => alert('Função de enviar mensagem será implementada')}
              className="px-6 py-2 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition"
            >
              Enviar Mensagem
            </button>
            <button
              onClick={() => alert('Função de ver atividades será implementada')}
              className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
            >
              Ver Atividades
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

function InfoRow({ label, value }: { label: string; value: string | React.ReactNode }) {
  return (
    <div className="flex justify-between items-center">
      <span className="text-gray-600">{label}:</span>
      <span className="font-medium">{value}</span>
    </div>
  )
}

function ProgressBar({ label, value }: { label: string; value: number }) {
  return (
    <div>
      <div className="flex justify-between text-sm mb-1">
        <span className="text-gray-600">{label}</span>
        <span className="font-medium">{value}%</span>
      </div>
      <div className="bg-gray-200 rounded-full h-2">
        <div
          className="bg-gradient-to-r from-green-600 to-blue-600 h-2 rounded-full"
          style={{ width: `${value}%` }}
        ></div>
      </div>
    </div>
  )
}

function AdminProjetoCard({ projeto }: { projeto: any }) {
  const statusConfig = {
    rascunho: { color: 'bg-gray-100 text-gray-800', label: 'Rascunho' },
    enviado: { color: 'bg-yellow-100 text-yellow-800', label: 'Em Análise' },
    aprovado: { color: 'bg-green-100 text-green-800', label: 'Aprovado' },
    rejeitado: { color: 'bg-red-100 text-red-800', label: 'Rejeitado' }
  }

  const categoryIcons = {
    automacao: '⚡',
    chatbot: '🤖',
    analise: '📊',
    conteudo: '📝',
    avaliacao: '📋',
    gamificacao: '🎮',
    outros: '🔧'
  }

  const avaliarProjeto = (aprovado: boolean) => {
    const novoProjeto = {
      ...projeto,
      status: aprovado ? 'aprovado' : 'rejeitado',
      nota: aprovado ? Math.floor(Math.random() * 3) + 8 : Math.floor(Math.random() * 4) + 4,
      feedback: aprovado 
        ? 'Excelente projeto! Demonstra domínio das ferramentas de IA e criatividade na aplicação pedagógica.'
        : 'Projeto precisa de ajustes. Considere melhorar a documentação e adicionar mais exemplos práticos.'
    }

    // Atualizar localStorage
    const projetos = JSON.parse(localStorage.getItem('projetos') || '[]')
    const novosProjectos = projetos.map((p: any) => p.id === projeto.id ? novoProjeto : p)
    localStorage.setItem('projetos', JSON.stringify(novosProjectos))
    
    // Recarregar página para mostrar mudanças
    window.location.reload()
  }

  return (
    <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition">
      <div className="flex justify-between items-start mb-4">
        <div className="flex items-center space-x-2">
          <span className="text-2xl">{categoryIcons[projeto.categoria as keyof typeof categoryIcons] || '📁'}</span>
          <span className={`px-2 py-1 rounded-full text-xs font-medium ${statusConfig[projeto.status as keyof typeof statusConfig].color}`}>
            {statusConfig[projeto.status as keyof typeof statusConfig].label}
          </span>
        </div>
        {projeto.status === 'enviado' && (
          <div className="flex space-x-2">
            <button
              onClick={() => avaliarProjeto(true)}
              className="text-green-600 hover:text-green-800 text-sm px-2 py-1 border border-green-600 rounded"
            >
              ✓ Aprovar
            </button>
            <button
              onClick={() => avaliarProjeto(false)}
              className="text-red-600 hover:text-red-800 text-sm px-2 py-1 border border-red-600 rounded"
            >
              ✗ Rejeitar
            </button>
          </div>
        )}
      </div>

      <h3 className="font-bold text-lg mb-2">{projeto.titulo}</h3>
      <p className="text-gray-600 text-sm mb-4 line-clamp-2">{projeto.descricao}</p>

      <div className="space-y-2 text-sm">
        <div className="flex justify-between">
          <span className="text-gray-500">Professor:</span>
          <span className="font-medium">{projeto.professor}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-500">Ferramenta:</span>
          <span className="font-medium capitalize">{projeto.ferramenta}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-500">Enviado em:</span>
          <span className="font-medium">
            {new Date(projeto.dataSubmissao).toLocaleDateString('pt-BR')}
          </span>
        </div>
        {projeto.nota && (
          <div className="flex justify-between">
            <span className="text-gray-500">Nota:</span>
            <span className={`font-bold ${projeto.status === 'aprovado' ? 'text-green-600' : 'text-red-600'}`}>
              {projeto.nota}/10
            </span>
          </div>
        )}
      </div>

      {projeto.feedback && (
        <div className="mt-4 p-3 bg-blue-50 rounded-lg">
          <p className="text-sm text-blue-800">
            <strong>Feedback:</strong> {projeto.feedback}
          </p>
        </div>
      )}

      {projeto.arquivoUrl && (
        <div className="mt-4">
          <a
            href={projeto.arquivoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-sm text-blue-600 hover:text-blue-800"
          >
            📎 Ver arquivo anexo
          </a>
        </div>
      )}
    </div>
  )
}