'use client'

import Navbar from '@/components/Navbar'
import Link from 'next/link'
import { useState } from 'react'

export default function Cadastro() {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    escola: '',
    cidade: '',
    disciplina: '',
    experiencia: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    // Validação básica
    if (!formData.nome || !formData.email || !formData.escola || !formData.cidade || !formData.disciplina) {
      alert('Por favor, preencha todos os campos obrigatórios.')
      return
    }
    
    // Salvar dados no localStorage (sistema demo)
    const cadastroData = {
      ...formData,
      id: Date.now().toString(),
      dataCadastro: new Date().toISOString(),
      status: 'ativo'
    }
    
    // Recuperar cadastros existentes
    const cadastrosExistentes = JSON.parse(localStorage.getItem('cadastros') || '[]')
    
    // Verificar se email já existe
    const emailExiste = cadastrosExistentes.find((c: any) => c.email === formData.email)
    
    if (emailExiste) {
      alert('Este email já está cadastrado! Faça login para acessar sua conta.')
      return
    }
    
    // Adicionar novo cadastro
    cadastrosExistentes.push(cadastroData)
    localStorage.setItem('cadastros', JSON.stringify(cadastrosExistentes))
    
    // Salvar dados do usuário para login automático
    localStorage.setItem('user', JSON.stringify({
      email: formData.email,
      nome: formData.nome,
      escola: formData.escola,
      cidade: formData.cidade,
      disciplina: formData.disciplina,
      loginDate: new Date().toISOString()
    }))
    
    alert('🎉 Cadastro realizado com sucesso!\n\nVocê será redirecionado para o dashboard.\n\nEm um sistema real, você receberia um email de confirmação.')
    
    // Redirecionar para dashboard
    setTimeout(() => {
      window.location.href = '/dashboard'
    }, 2000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-50 pt-16">
        <div className="max-w-4xl mx-auto px-4 py-12">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gradient mb-4">
              Junte-se à Revolução da IA na Educação
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Transforme sua prática pedagógica e prepare seus alunos para o futuro. 
              Cadastre-se gratuitamente no EducaIA-SC!
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Formulário */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold mb-6">Dados do Professor</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Nome Completo *
                  </label>
                  <input
                    type="text"
                    name="nome"
                    value={formData.nome}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Digite seu nome completo"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Institucional *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="professor@escola.sc.gov.br"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Escola *
                  </label>
                  <input
                    type="text"
                    name="escola"
                    value={formData.escola}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Nome da sua escola"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Cidade *
                  </label>
                  <select
                    name="cidade"
                    value={formData.cidade}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">Selecione sua cidade</option>
                    <option value="Florianópolis">Florianópolis</option>
                    <option value="Joinville">Joinville</option>
                    <option value="Blumenau">Blumenau</option>
                    <option value="Chapecó">Chapecó</option>
                    <option value="Criciúma">Criciúma</option>
                    <option value="Lages">Lages</option>
                    <option value="Itajaí">Itajaí</option>
                    <option value="Balneário Camboriú">Balneário Camboriú</option>
                    <option value="Outra">Outra cidade de SC</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Disciplina Principal *
                  </label>
                  <select
                    name="disciplina"
                    value={formData.disciplina}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">Selecione sua disciplina</option>
                    <option value="Português">Português</option>
                    <option value="Matemática">Matemática</option>
                    <option value="História">História</option>
                    <option value="Geografia">Geografia</option>
                    <option value="Ciências">Ciências</option>
                    <option value="Biologia">Biologia</option>
                    <option value="Química">Química</option>
                    <option value="Física">Física</option>
                    <option value="Filosofia">Filosofia</option>
                    <option value="Sociologia">Sociologia</option>
                    <option value="Educação Física">Educação Física</option>
                    <option value="Artes">Artes</option>
                    <option value="Inglês">Inglês</option>
                    <option value="Robótica">Robótica</option>
                    <option value="Outra">Outra</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Experiência com IA
                  </label>
                  <select
                    name="experiencia"
                    value={formData.experiencia}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">Selecione seu nível</option>
                    <option value="Nunca usei">Nunca usei IA</option>
                    <option value="Iniciante">Iniciante (já testei algumas vezes)</option>
                    <option value="Intermediário">Intermediário (uso regularmente)</option>
                    <option value="Avançado">Avançado (já uso em sala de aula)</option>
                  </select>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-green-600 to-blue-600 text-white py-4 px-6 rounded-lg font-semibold text-lg hover:from-green-700 hover:to-blue-700 transition duration-300"
                >
                  Inscrever-se Gratuitamente
                </button>
              </form>

              <p className="text-sm text-gray-500 mt-4 text-center">
                Ao se cadastrar, você concorda com nossos{' '}
                <Link href="/termos" className="text-blue-600 hover:underline">
                  Termos de Uso
                </Link>{' '}
                e{' '}
                <Link href="/privacidade" className="text-blue-600 hover:underline">
                  Política de Privacidade
                </Link>
              </p>
            </div>

            {/* Benefícios */}
            <div className="space-y-6">
              <div className="bg-green-50 border border-green-200 rounded-2xl p-6">
                <div className="text-green-600 text-4xl mb-4">🎯</div>
                <h3 className="text-xl font-bold text-green-800 mb-2">
                  Para Professores da Rede Pública
                </h3>
                <p className="text-green-700">
                  Programa exclusivo para educadores de Santa Catarina, 
                  com conteúdo adaptado à realidade das escolas públicas.
                </p>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-2xl p-6">
                <div className="text-blue-600 text-4xl mb-4">💎</div>
                <h3 className="text-xl font-bold text-blue-800 mb-2">
                  100% Gratuito
                </h3>
                <ul className="text-blue-700 space-y-2">
                  <li>• Curso completo sem custos</li>
                  <li>• Certificação reconhecida</li>
                  <li>• Materiais didáticos inclusos</li>
                  <li>• Suporte técnico dedicado</li>
                </ul>
              </div>

              <div className="bg-purple-50 border border-purple-200 rounded-2xl p-6">
                <div className="text-purple-600 text-4xl mb-4">🏆</div>
                <h3 className="text-xl font-bold text-purple-800 mb-2">
                  Gamificação e Recompensas
                </h3>
                <ul className="text-purple-700 space-y-2">
                  <li>• Sistema de pontos e badges</li>
                  <li>• Ranking entre escolas</li>
                  <li>• Prêmios e reconhecimento</li>
                  <li>• Viagens e cursos avançados</li>
                </ul>
              </div>

              <div className="bg-yellow-50 border border-yellow-200 rounded-2xl p-6">
                <div className="text-yellow-600 text-4xl mb-4">👥</div>
                <h3 className="text-xl font-bold text-yellow-800 mb-2">
                  Comunidade Ativa
                </h3>
                <ul className="text-yellow-700 space-y-2">
                  <li>• 10.000+ professores conectados</li>
                  <li>• Mentoria personalizada</li>
                  <li>• Troca de experiências</li>
                  <li>• Suporte contínuo</li>
                </ul>
              </div>

              <div className="text-center">
                <p className="text-gray-600 mb-4">Já tem cadastro?</p>
                <Link
                  href="/login"
                  className="inline-block bg-white border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-600 hover:text-white transition"
                >
                  Fazer Login
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}