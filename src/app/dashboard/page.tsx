import Image from 'next/image'
import Link from 'next/link'

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-gradient">EducaIA-SC</h1>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center bg-blue-50 px-3 py-1 rounded-full">
                <span className="text-sm font-medium text-blue-700">2.847 XP</span>
              </div>
              <div className="flex items-center bg-yellow-50 px-3 py-1 rounded-full">
                <span className="text-sm font-medium text-yellow-700">🐚 245</span>
              </div>
              <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center">
                <span className="text-white text-sm font-bold">A</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Section */}
        <div className="bg-gradient-to-r from-green-600 to-blue-600 rounded-2xl text-white p-8 mb-8">
          <div className="flex justify-between items-center">
            <div>
              <h2 className="text-3xl font-bold mb-2">Olá, Prof. Ana! 🌟</h2>
              <p className="text-xl opacity-90 mb-4">Exploradora de Blumenau</p>
              <div className="bg-white/20 rounded-full h-3 w-80 mb-4">
                <div className="bg-white rounded-full h-3 w-4/5"></div>
              </div>
              <p className="text-sm opacity-80">85% concluído • 153 XP para próximo nível</p>
            </div>
            <div className="text-right">
              <div className="text-2xl mb-2">🔥 Sequência: 15 dias</div>
              <div className="text-lg">📍 Rank Escola: #3 de 45</div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Quick Actions */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-bold mb-4">Continuar Aprendendo</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <ActionCard 
                  icon="📚"
                  title="Módulo 2: IA na Sala"
                  description="Próxima aula: Criando Exercícios"
                  progress={65}
                  color="blue"
                />
                <ActionCard 
                  icon="🎯"
                  title="Desafio da Semana"
                  description="Usar IA para corrigir redações"
                  progress={0}
                  color="yellow"
                />
              </div>
            </div>

            {/* Recent Activity */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-bold mb-4">Atividades Recentes</h3>
              <div className="space-y-4">
                <ActivityItem 
                  icon="🏆"
                  title="Conquistou badge: Navegador Açoriano"
                  time="2 horas atrás"
                  color="green"
                />
                <ActivityItem 
                  icon="💬"
                  title="Comentou no projeto de Prof. João"
                  time="1 dia atrás"
                  color="blue"
                />
                <ActivityItem 
                  icon="📝"
                  title="Completou quiz: Ética em IA"
                  time="2 dias atrás"
                  color="purple"
                />
                <ActivityItem 
                  icon="🎓"
                  title="Iniciou Módulo 2: IA na Sala de Aula"
                  time="3 dias atrás"
                  color="indigo"
                />
              </div>
            </div>

            {/* My Projects */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-bold">Meus Projetos</h3>
                <div className="space-x-2">
                  <Link href="/projetos" className="text-blue-600 hover:text-blue-800 font-medium">
                    Ver todos
                  </Link>
                  <Link 
                    href="/projetos" 
                    className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition text-sm"
                  >
                    📤 Novo Projeto
                  </Link>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <ProjectCard 
                  title="IA no Ensino de Português"
                  description="Correção automática de redações"
                  status="Em Andamento"
                  progress={75}
                />
                <ProjectCard 
                  title="Chatbot para Dúvidas"
                  description="Assistente 24/7 para alunos"
                  status="Planejado"
                  progress={0}
                />
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Badges */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-bold mb-4">Badges Recentes</h3>
              <div className="grid grid-cols-3 gap-3">
                <Badge icon="🌊" title="Navegador Açoriano" />
                <Badge icon="🏰" title="Guardião São Miguel" />
                <Badge icon="🤝" title="Parceiro Escolar" />
                <Badge icon="🎣" title="Pescador da Ilha" />
                <Badge icon="⚡" title="Energia Itaipu" />
                <Badge icon="🔒" title="Próximo Badge" locked />
              </div>
            </div>

            {/* Leaderboard */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-bold mb-4">Ranking da Escola</h3>
              <div className="space-y-3">
                <RankingItem rank={1} name="Prof. Maria" points={3456} avatar="M" />
                <RankingItem rank={2} name="Prof. Carlos" points={2891} avatar="C" />
                <RankingItem rank={3} name="Você" points={2847} avatar="A" current />
                <RankingItem rank={4} name="Prof. João" points={2743} avatar="J" />
                <RankingItem rank={5} name="Prof. Lucia" points={2654} avatar="L" />
              </div>
            </div>

            {/* Community Feed */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-bold mb-4">Feed da Comunidade</h3>
              <div className="space-y-4">
                <FeedItem 
                  user="Prof. João conquistou 🎣 Pescador da Ilha!"
                  time="5 min"
                />
                <FeedItem 
                  user="Escola Municipal Santa Rosa subiu para #1!"
                  time="1h"
                />
                <FeedItem 
                  user="Novo recorde: 15 projetos aprovados hoje!"
                  time="2h"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function ActionCard({ icon, title, description, progress, color }: {
  icon: string
  title: string
  description: string
  progress: number
  color: string
}) {
  const colorClasses = {
    blue: 'border-blue-200 bg-blue-50',
    yellow: 'border-yellow-200 bg-yellow-50',
    green: 'border-green-200 bg-green-50'
  }

  return (
    <div className={`border-2 ${colorClasses[color as keyof typeof colorClasses]} rounded-lg p-4 hover:shadow-md transition cursor-pointer`}>
      <div className="text-3xl mb-2">{icon}</div>
      <h4 className="font-semibold mb-1">{title}</h4>
      <p className="text-gray-600 text-sm mb-3">{description}</p>
      <div className="bg-gray-200 rounded-full h-2">
        <div 
          className={`h-2 rounded-full ${color === 'blue' ? 'bg-blue-600' : color === 'yellow' ? 'bg-yellow-600' : 'bg-green-600'}`}
          style={{ width: `${progress}%` }}
        ></div>
      </div>
      <span className="text-xs text-gray-500 mt-1 block">{progress}% concluído</span>
    </div>
  )
}

function ActivityItem({ icon, title, time, color }: {
  icon: string
  title: string
  time: string
  color: string
}) {
  return (
    <div className="flex items-center space-x-3">
      <div className={`w-8 h-8 rounded-full flex items-center justify-center text-white bg-${color}-600`}>
        {icon}
      </div>
      <div className="flex-1">
        <p className="font-medium text-gray-900">{title}</p>
        <p className="text-sm text-gray-500">{time}</p>
      </div>
    </div>
  )
}

function ProjectCard({ title, description, status, progress }: {
  title: string
  description: string
  status: string
  progress: number
}) {
  return (
    <div className="border border-gray-200 rounded-lg p-4">
      <h4 className="font-semibold mb-1">{title}</h4>
      <p className="text-gray-600 text-sm mb-2">{description}</p>
      <div className="flex justify-between items-center mb-2">
        <span className={`px-2 py-1 text-xs rounded-full ${
          status === 'Em Andamento' ? 'bg-blue-100 text-blue-800' : 'bg-gray-100 text-gray-800'
        }`}>
          {status}
        </span>
      </div>
      <div className="bg-gray-200 rounded-full h-2">
        <div 
          className="h-2 rounded-full bg-blue-600"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
    </div>
  )
}

function Badge({ icon, title, locked = false }: {
  icon: string
  title: string
  locked?: boolean
}) {
  return (
    <div className={`text-center p-2 rounded-lg ${locked ? 'opacity-40' : ''}`}>
      <div className="text-2xl mb-1">{locked ? '🔒' : icon}</div>
      <p className="text-xs text-gray-600">{locked ? 'Próximo' : title}</p>
    </div>
  )
}

function RankingItem({ rank, name, points, avatar, current = false }: {
  rank: number
  name: string
  points: number
  avatar: string
  current?: boolean
}) {
  return (
    <div className={`flex items-center space-x-3 p-2 rounded-lg ${current ? 'bg-blue-50 border border-blue-200' : ''}`}>
      <span className="font-bold text-gray-600 w-6">#{rank}</span>
      <div className={`w-8 h-8 rounded-full flex items-center justify-center text-white font-bold ${
        current ? 'bg-green-600' : 'bg-gray-600'
      }`}>
        {avatar}
      </div>
      <div className="flex-1">
        <p className={`font-medium ${current ? 'text-blue-800' : 'text-gray-900'}`}>{name}</p>
        <p className="text-sm text-gray-500">{points.toLocaleString()} XP</p>
      </div>
    </div>
  )
}

function FeedItem({ user, time }: {
  user: string
  time: string
}) {
  return (
    <div className="text-sm">
      <p className="text-gray-800">{user}</p>
      <p className="text-gray-500 text-xs">{time} atrás</p>
    </div>
  )
}