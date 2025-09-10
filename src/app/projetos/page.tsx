'use client'

import Navbar from '@/components/Navbar'
import { useState, useEffect } from 'react'
import Link from 'next/link'

interface Projeto {
  id: string
  titulo: string
  descricao: string
  categoria: string
  ferramenta: string
  arquivo?: File | null
  arquivoUrl?: string
  dataSubmissao: string
  status: 'rascunho' | 'enviado' | 'aprovado' | 'rejeitado'
  feedback?: string
  nota?: number
  professor: string
}

export default function Projetos() {
  const [projetos, setProjetos] = useState<Projeto[]>([])
  const [mostrarModal, setMostrarModal] = useState(false)
  const [projetoEdit, setProjetoEdit] = useState<Projeto | null>(null)
  const [formData, setFormData] = useState({
    titulo: '',
    descricao: '',
    categoria: '',
    ferramenta: '',
    arquivo: null as File | null
  })

  useEffect(() => {
    // Carregar projetos salvos do localStorage
    const projetosSalvos = JSON.parse(localStorage.getItem('projetos') || '[]')
    setProjetos(projetosSalvos)
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    const novoProjeto: Projeto = {
      id: projetoEdit?.id || Date.now().toString(),
      titulo: formData.titulo,
      descricao: formData.descricao,
      categoria: formData.categoria,
      ferramenta: formData.ferramenta,
      arquivo: formData.arquivo,
      arquivoUrl: formData.arquivo ? URL.createObjectURL(formData.arquivo) : projetoEdit?.arquivoUrl,
      dataSubmissao: projetoEdit?.dataSubmissao || new Date().toISOString(),
      status: 'enviado',
      professor: 'Prof. Ana Silva' // Em uma app real, viria da sessão
    }

    let novosProjetos
    if (projetoEdit) {
      novosProjetos = projetos.map(p => p.id === projetoEdit.id ? novoProjeto : p)
    } else {
      novosProjetos = [...projetos, novoProjeto]
    }
    
    setProjetos(novosProjetos)
    localStorage.setItem('projetos', JSON.stringify(novosProjetos))
    
    // Reset form
    setFormData({ titulo: '', descricao: '', categoria: '', ferramenta: '', arquivo: null })
    setMostrarModal(false)
    setProjetoEdit(null)
  }

  const editarProjeto = (projeto: Projeto) => {
    setProjetoEdit(projeto)
    setFormData({
      titulo: projeto.titulo,
      descricao: projeto.descricao,
      categoria: projeto.categoria,
      ferramenta: projeto.ferramenta,
      arquivo: null
    })
    setMostrarModal(true)
  }

  const excluirProjeto = (id: string) => {
    if (confirm('Tem certeza que deseja excluir este projeto?')) {
      const novosProjetos = projetos.filter(p => p.id !== id)
      setProjetos(novosProjetos)
      localStorage.setItem('projetos', JSON.stringify(novosProjetos))
    }
  }

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-50 pt-16">
        <div className="max-w-7xl mx-auto px-4 py-8">
          {/* Header */}
          <div className="flex justify-between items-center mb-8">
            <div>
              <h1 className="text-4xl font-bold text-gradient mb-2">
                Meus Projetos IA
              </h1>
              <p className="text-gray-600 text-lg">
                Compartilhe suas criações e receba feedback
              </p>
            </div>
            <button
              onClick={() => setMostrarModal(true)}
              className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition font-medium"
            >
              📤 Novo Projeto
            </button>
          </div>

          {/* Estatísticas */}
          <div className="grid md:grid-cols-4 gap-6 mb-8">
            <StatCard
              label="Total de Projetos"
              value={projetos.length}
              icon="📁"
              color="blue"
            />
            <StatCard
              label="Aprovados"
              value={projetos.filter(p => p.status === 'aprovado').length}
              icon="✅"
              color="green"
            />
            <StatCard
              label="Em Análise"
              value={projetos.filter(p => p.status === 'enviado').length}
              icon="⏳"
              color="yellow"
            />
            <StatCard
              label="Nota Média"
              value={projetos.filter(p => p.nota).length > 0 
                ? (projetos.filter(p => p.nota).reduce((acc, p) => acc + (p.nota || 0), 0) / projetos.filter(p => p.nota).length).toFixed(1)
                : '-'
              }
              icon="⭐"
              color="purple"
            />
          </div>

          {/* Lista de Projetos */}
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <h2 className="text-2xl font-bold mb-6">Seus Projetos</h2>
            
            {projetos.length === 0 ? (
              <div className="text-center py-12">
                <div className="text-6xl mb-4">🚀</div>
                <h3 className="text-xl font-bold mb-2">Nenhum projeto ainda</h3>
                <p className="text-gray-600 mb-6">
                  Que tal começar criando seu primeiro projeto com IA?
                </p>
                <button
                  onClick={() => setMostrarModal(true)}
                  className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
                >
                  Criar Primeiro Projeto
                </button>
              </div>
            ) : (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projetos.map(projeto => (
                  <ProjetoCard
                    key={projeto.id}
                    projeto={projeto}
                    onEdit={() => editarProjeto(projeto)}
                    onDelete={() => excluirProjeto(projeto.id)}
                  />
                ))}
              </div>
            )}
          </div>

          {/* Modal de Novo/Editar Projeto */}
          {mostrarModal && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
              <div className="bg-white rounded-2xl shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
                <div className="p-6 border-b">
                  <div className="flex justify-between items-center">
                    <h2 className="text-2xl font-bold">
                      {projetoEdit ? 'Editar Projeto' : 'Novo Projeto'}
                    </h2>
                    <button
                      onClick={() => {
                        setMostrarModal(false)
                        setProjetoEdit(null)
                        setFormData({ titulo: '', descricao: '', categoria: '', ferramenta: '', arquivo: null })
                      }}
                      className="text-gray-500 hover:text-gray-700 text-2xl"
                    >
                      ×
                    </button>
                  </div>
                </div>

                <form onSubmit={handleSubmit} className="p-6 space-y-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Título do Projeto</label>
                    <input
                      type="text"
                      required
                      value={formData.titulo}
                      onChange={(e) => setFormData({...formData, titulo: e.target.value})}
                      placeholder="Ex: ChatBot para dúvidas de matemática"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Descrição</label>
                    <textarea
                      required
                      rows={4}
                      value={formData.descricao}
                      onChange={(e) => setFormData({...formData, descricao: e.target.value})}
                      placeholder="Descreva seu projeto, como funciona, para que serve..."
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Categoria</label>
                      <select
                        required
                        value={formData.categoria}
                        onChange={(e) => setFormData({...formData, categoria: e.target.value})}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                      >
                        <option value="">Selecione...</option>
                        <option value="automacao">Automação</option>
                        <option value="chatbot">Chatbot</option>
                        <option value="analise">Análise de Dados</option>
                        <option value="conteudo">Criação de Conteúdo</option>
                        <option value="avaliacao">Avaliação</option>
                        <option value="gamificacao">Gamificação</option>
                        <option value="outros">Outros</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">Ferramenta Principal</label>
                      <select
                        required
                        value={formData.ferramenta}
                        onChange={(e) => setFormData({...formData, ferramenta: e.target.value})}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                      >
                        <option value="">Selecione...</option>
                        <option value="chatgpt">ChatGPT</option>
                        <option value="claude">Claude</option>
                        <option value="gemini">Gemini</option>
                        <option value="make">Make</option>
                        <option value="zapier">Zapier</option>
                        <option value="bubble">Bubble</option>
                        <option value="glide">Glide</option>
                        <option value="canva">Canva</option>
                        <option value="outros">Outros</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Arquivos do Projeto (opcional)
                    </label>
                    <input
                      type="file"
                      accept=".pdf,.doc,.docx,.ppt,.pptx,.zip,.png,.jpg,.jpeg"
                      onChange={(e) => setFormData({...formData, arquivo: e.target.files?.[0] || null})}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                    />
                    <p className="text-sm text-gray-500 mt-1">
                      Formatos aceitos: PDF, DOC, PPT, ZIP, imagens
                    </p>
                  </div>

                  <div className="flex justify-end space-x-4">
                    <button
                      type="button"
                      onClick={() => {
                        setMostrarModal(false)
                        setProjetoEdit(null)
                        setFormData({ titulo: '', descricao: '', categoria: '', ferramenta: '', arquivo: null })
                      }}
                      className="px-6 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition"
                    >
                      Cancelar
                    </button>
                    <button
                      type="submit"
                      className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                    >
                      {projetoEdit ? 'Atualizar' : 'Enviar'} Projeto
                    </button>
                  </div>
                </form>
              </div>
            </div>
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
    yellow: 'bg-yellow-100 text-yellow-800 border-yellow-200',
    purple: 'bg-purple-100 text-purple-800 border-purple-200'
  }

  return (
    <div className={`border-2 ${colorClasses[color as keyof typeof colorClasses]} rounded-xl p-4`}>
      <div className="text-2xl mb-2">{icon}</div>
      <div className="text-2xl font-bold">{value}</div>
      <div className="text-sm opacity-80">{label}</div>
    </div>
  )
}

function ProjetoCard({ projeto, onEdit, onDelete }: {
  projeto: Projeto
  onEdit: () => void
  onDelete: () => void
}) {
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

  return (
    <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition">
      <div className="flex justify-between items-start mb-4">
        <div className="flex items-center space-x-2">
          <span className="text-2xl">{categoryIcons[projeto.categoria as keyof typeof categoryIcons] || '📁'}</span>
          <span className={`px-2 py-1 rounded-full text-xs font-medium ${statusConfig[projeto.status].color}`}>
            {statusConfig[projeto.status].label}
          </span>
        </div>
        <div className="flex space-x-2">
          <button
            onClick={onEdit}
            className="text-blue-600 hover:text-blue-800 text-sm"
          >
            ✏️
          </button>
          <button
            onClick={onDelete}
            className="text-red-600 hover:text-red-800 text-sm"
          >
            🗑️
          </button>
        </div>
      </div>

      <h3 className="font-bold text-lg mb-2">{projeto.titulo}</h3>
      <p className="text-gray-600 text-sm mb-4 line-clamp-2">{projeto.descricao}</p>

      <div className="space-y-2 text-sm">
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
            <span className="font-bold text-green-600">{projeto.nota}/10</span>
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