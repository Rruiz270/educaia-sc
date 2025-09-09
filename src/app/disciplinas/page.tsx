import Navbar from '@/components/Navbar'
import Link from 'next/link'

export default function Disciplinas() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-50 pt-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-green-600 to-blue-600 text-white py-20">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              IA para Cada Disciplina
            </h1>
            <p className="text-xl md:text-2xl opacity-90 mb-8">
              Exemplos práticos e ferramentas específicas para sua área de ensino
            </p>
          </div>
        </section>

        {/* Disciplinas Grid */}
        <section className="py-20">
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <DisciplineCard
                icon="📝"
                title="Português"
                description="Correção de redações, criação de exercícios, análise literária"
                tools={["ChatGPT", "Grammarly", "Claude"]}
                examples={["Correção automática ENEM", "Crônicas com IA", "Análise de textos"]}
                color="blue"
              />

              <DisciplineCard
                icon="🔢"
                title="Matemática"
                description="Resolução de problemas, gráficos interativos, exercícios personalizados"
                tools={["Wolfram Alpha", "Desmos", "PhotoMath"]}
                examples={["Gráficos 3D", "Problemas contextualizados", "Gamificação"]}
                color="green"
              />

              <DisciplineCard
                icon="🌍"
                title="Geografia"
                description="Mapas interativos, análise de dados, projetos colaborativos"
                tools={["Google Earth", "ArcGIS", "Canva AI"]}
                examples={["Mapas temáticos", "Análise climática", "Documentários"]}
                color="yellow"
              />

              <DisciplineCard
                icon="📚"
                title="História"
                description="Linhas do tempo, pesquisa histórica, simulações"
                tools={["Perplexity", "TimeToast", "Character.AI"]}
                examples={["Timeline interativa", "Debates históricos", "Personagens IA"]}
                color="red"
              />

              <DisciplineCard
                icon="🧪"
                title="Ciências"
                description="Experimentos virtuais, simulações, análise de dados"
                tools={["PhET", "Labster", "Google Colab"]}
                examples={["Labs virtuais", "Simulações físicas", "Análise científica"]}
                color="purple"
              />

              <DisciplineCard
                icon="🎨"
                title="Artes"
                description="Criação digital, design gráfico, música e vídeo"
                tools={["DALL-E", "Midjourney", "Runway ML"]}
                examples={["Arte digital", "Música generativa", "Vídeos criativos"]}
                color="pink"
              />

              <DisciplineCard
                icon="🤖"
                title="Robótica"
                description="Programação, automação, projetos maker"
                tools={["Scratch AI", "Tinkercad", "Arduino"]}
                examples={["Robôs inteligentes", "IoT educacional", "Automação escolar"]}
                color="indigo"
              />

              <DisciplineCard
                icon="💭"
                title="Filosofia"
                description="Debates éticos, análise de textos, pensamento crítico"
                tools={["Claude", "Socratic", "Debate AI"]}
                examples={["Ética em IA", "Diálogos socráticos", "Ensaios filosóficos"]}
                color="gray"
              />

              <DisciplineCard
                icon="🏃‍♂️"
                title="Educação Física"
                description="Análise de performance, gamificação, saúde e bem-estar"
                tools={["Kinovea", "MyFitnessPal", "Strava"]}
                examples={["Análise biomecânica", "Treinos personalizados", "Nutrição IA"]}
                color="orange"
              />
            </div>
          </div>
        </section>

        {/* Exemplo Detalhado */}
        <section className="bg-white py-20">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-gradient">
              Exemplo: IA no Ensino de Português
            </h2>
            
            <div className="bg-blue-50 rounded-2xl p-8 mb-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-bold mb-4 text-blue-800">
                    Aula: Correção de Redações ENEM
                  </h3>
                  <div className="space-y-4 text-blue-700">
                    <div>
                      <h4 className="font-semibold">1. Preparação (10 min)</h4>
                      <p className="text-sm">Professor usa ChatGPT para criar rubrica personalizada</p>
                    </div>
                    <div>
                      <h4 className="font-semibold">2. Demonstração (20 min)</h4>
                      <p className="text-sm">IA analisa redação exemplo e dá feedback detalhado</p>
                    </div>
                    <div>
                      <h4 className="font-semibold">3. Prática (15 min)</h4>
                      <p className="text-sm">Alunos usam IA para melhorar próprias redações</p>
                    </div>
                    <div>
                      <h4 className="font-semibold">4. Reflexão (5 min)</h4>
                      <p className="text-sm">Discussão sobre uso ético e limitações</p>
                    </div>
                  </div>
                </div>
                <div className="bg-white rounded-xl p-6">
                  <h4 className="font-semibold mb-3">Prompt Exemplo:</h4>
                  <div className="bg-gray-100 rounded-lg p-4 text-sm font-mono">
                    "Analise esta redação ENEM sobre [tema] usando as 5 competências oficiais. 
                    Dê nota 0-200 para cada uma e sugira 3 melhorias específicas. 
                    Use linguagem jovem e motivadora."
                  </div>
                  
                  <h4 className="font-semibold mt-4 mb-2">Resultados:</h4>
                  <ul className="text-sm space-y-1">
                    <li>• ⏱️ Tempo de correção: 5h → 2h</li>
                    <li>• 📈 Feedback: genérico → personalizado</li>
                    <li>• 🎯 Engajamento: +40% dos alunos</li>
                    <li>• 📊 Notas médias: melhoria de 15%</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Como Começar */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-8 text-gradient">
              Pronto para Transformar Sua Disciplina?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Cada disciplina tem seu plano personalizado de implementação de IA
            </p>
            <div className="space-x-4">
              <Link
                href="/cadastro"
                className="inline-block bg-gradient-to-r from-green-600 to-blue-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:from-green-700 hover:to-blue-700 transition"
              >
                Começar Agora
              </Link>
              <Link
                href="/curso"
                className="inline-block border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-blue-600 hover:text-white transition"
              >
                Ver Curso Completo
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

function DisciplineCard({ icon, title, description, tools, examples, color }: {
  icon: string
  title: string
  description: string
  tools: string[]
  examples: string[]
  color: string
}) {
  const colorClasses = {
    blue: 'border-blue-200 hover:border-blue-400 hover:shadow-blue-100',
    green: 'border-green-200 hover:border-green-400 hover:shadow-green-100',
    yellow: 'border-yellow-200 hover:border-yellow-400 hover:shadow-yellow-100',
    red: 'border-red-200 hover:border-red-400 hover:shadow-red-100',
    purple: 'border-purple-200 hover:border-purple-400 hover:shadow-purple-100',
    pink: 'border-pink-200 hover:border-pink-400 hover:shadow-pink-100',
    indigo: 'border-indigo-200 hover:border-indigo-400 hover:shadow-indigo-100',
    gray: 'border-gray-200 hover:border-gray-400 hover:shadow-gray-100',
    orange: 'border-orange-200 hover:border-orange-400 hover:shadow-orange-100'
  }

  return (
    <div className={`bg-white border-2 ${colorClasses[color as keyof typeof colorClasses]} rounded-2xl p-6 hover:shadow-lg transition duration-300`}>
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-600 text-sm mb-4">{description}</p>
      
      <div className="mb-4">
        <h4 className="font-semibold text-sm mb-2 text-gray-700">Ferramentas:</h4>
        <div className="flex flex-wrap gap-1">
          {tools.map((tool, index) => (
            <span key={index} className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded">
              {tool}
            </span>
          ))}
        </div>
      </div>
      
      <div>
        <h4 className="font-semibold text-sm mb-2 text-gray-700">Exemplos:</h4>
        <ul className="text-xs text-gray-600 space-y-1">
          {examples.map((example, index) => (
            <li key={index}>• {example}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}