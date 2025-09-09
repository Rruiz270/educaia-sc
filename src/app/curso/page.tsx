import Navbar from '@/components/Navbar'
import Link from 'next/link'

export default function Curso() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-50 pt-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-green-600 to-blue-600 text-white py-20">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Curso EducaIA-SC
            </h1>
            <p className="text-xl md:text-2xl opacity-90 mb-8">
              Jornada completa de capacitação em IA para educadores catarinenses
            </p>
            <div className="bg-white/20 rounded-2xl p-6 text-center">
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold">100 horas</div>
                  <div className="text-sm opacity-80">Carga horária total</div>
                </div>
                <div>
                  <div className="text-3xl font-bold">6 meses</div>
                  <div className="text-sm opacity-80">Duração do programa</div>
                </div>
                <div>
                  <div className="text-3xl font-bold">100% online</div>
                  <div className="text-sm opacity-80">Aprenda no seu ritmo</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Módulos do Curso */}
        <section className="py-20">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-gradient">
              Estrutura do Curso
            </h2>
            
            <div className="space-y-8">
              <ModulCard
                number="1"
                title="Fundamentos de IA"
                duration="20 horas"
                description="Introdução aos conceitos básicos de inteligência artificial, ética e ferramentas essenciais."
                topics={[
                  "O que é IA e como funciona",
                  "Ética e uso responsável",
                  "Ferramentas gratuitas essenciais",
                  "IA na educação brasileira",
                  "Primeiros passos com alunos",
                  "Projeto prático"
                ]}
                color="green"
              />

              <ModulCard
                number="2"
                title="IA na Sala de Aula"
                duration="40 horas"
                description="Aplicação prática da IA no ensino, criação de materiais e personalização do aprendizado."
                topics={[
                  "Planejamento de aulas com IA",
                  "Criação de exercícios personalizados",
                  "Correção automática e feedback",
                  "Análise de dados educacionais",
                  "Personalização do ensino",
                  "Imersão por disciplina"
                ]}
                color="blue"
              />

              <ModulCard
                number="3"
                title="Transformação e Multiplicação"
                duration="40 horas"
                description="Desenvolvimento de projetos avançados, liderança e formação de outros educadores."
                topics={[
                  "Projeto final aplicado",
                  "Mentoria com embaixadores",
                  "Liderança em transformação digital",
                  "Formação de multiplicadores",
                  "Avaliação de impacto",
                  "Certificação e continuidade"
                ]}
                color="purple"
              />
            </div>
          </div>
        </section>

        {/* Metodologia */}
        <section className="bg-white py-20">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-gradient">
              Metodologia Inovadora
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <MethodologyCard
                icon="🎯"
                title="Prática Real"
                description="Todos os conceitos são aplicados imediatamente em projetos reais de sala de aula."
              />
              <MethodologyCard
                icon="👥"
                title="Peer Learning"
                description="Aprendizado colaborativo com outros professores da sua região e disciplina."
              />
              <MethodologyCard
                icon="🎮"
                title="Gamificação"
                description="Sistema de pontos, badges e recompensas que mantém alta motivação."
              />
              <MethodologyCard
                icon="📊"
                title="Data-Driven"
                description="Acompanhamento contínuo do progresso com métricas claras de sucesso."
              />
            </div>
          </div>
        </section>

        {/* Ferramentas */}
        <section className="py-20">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-gradient">
              Ferramentas que Você Dominará
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <ToolCard
                category="Conversação e Texto"
                tools={[
                  "ChatGPT - Criação e análise de textos",
                  "Claude - Raciocínio complexo",
                  "Gemini - Pesquisa e informação"
                ]}
                color="blue"
              />
              <ToolCard
                category="Criação Visual"
                tools={[
                  "Canva AI - Design gráfico",
                  "Gamma - Apresentações",
                  "Midjourney - Imagens"
                ]}
                color="green"
              />
              <ToolCard
                category="Educação Específica"
                tools={[
                  "Gradescope - Correção automática",
                  "Kahoot AI - Quiz interativo",
                  "Notion AI - Organização"
                ]}
                color="purple"
              />
            </div>
          </div>
        </section>

        {/* Certificação */}
        <section className="bg-gradient-to-r from-green-600 to-blue-600 text-white py-20">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-8">Sistema de Certificação</h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <CertificationLevel
                level="Bronze"
                title="IA Básica para Educadores"
                requirements={[
                  "Completar Módulo 1",
                  "3 projetos práticos",
                  "Avaliação 70+ pontos"
                ]}
                benefits="Certificado digital + Badge LinkedIn"
              />
              <CertificationLevel
                level="Prata"
                title="Especialista IA Educacional"
                requirements={[
                  "Certificação Bronze",
                  "Liderar projeto colaborativo",
                  "Mentorar 3 professores"
                ]}
                benefits="Certificado impresso + Reconhecimento oficial"
              />
              <CertificationLevel
                level="Ouro"
                title="Embaixador IA Santa Catarina"
                requirements={[
                  "Certificação Prata",
                  "Formar 20+ professores",
                  "Impactar 500+ alunos"
                ]}
                benefits="Troféu físico + Remuneração por mentorias"
              />
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4 text-gradient">
              Pronto para Começar?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Junte-se a milhares de professores que já estão transformando a educação em SC
            </p>
            <Link
              href="/cadastro"
              className="inline-block bg-gradient-to-r from-green-600 to-blue-600 text-white px-12 py-4 rounded-full font-semibold text-xl hover:from-green-700 hover:to-blue-700 transition"
            >
              Inscrever-se Gratuitamente
            </Link>
          </div>
        </section>
      </div>
    </>
  )
}

function ModulCard({ number, title, duration, description, topics, color }: {
  number: string
  title: string
  duration: string
  description: string
  topics: string[]
  color: string
}) {
  const colors = {
    green: 'border-green-500 bg-green-50',
    blue: 'border-blue-500 bg-blue-50',
    purple: 'border-purple-500 bg-purple-50'
  }

  return (
    <div className={`border-l-4 ${colors[color as keyof typeof colors]} rounded-r-2xl p-8`}>
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center">
          <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl mr-4 ${
            color === 'green' ? 'bg-green-600 text-white' :
            color === 'blue' ? 'bg-blue-600 text-white' :
            'bg-purple-600 text-white'
          }`}>
            {number}
          </div>
          <div>
            <h3 className="text-2xl font-bold">{title}</h3>
            <p className="text-gray-600">{duration}</p>
          </div>
        </div>
      </div>
      
      <p className="text-gray-700 mb-6">{description}</p>
      
      <div className="grid md:grid-cols-2 gap-2">
        {topics.map((topic, index) => (
          <div key={index} className="flex items-center text-sm text-gray-600">
            <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            {topic}
          </div>
        ))}
      </div>
    </div>
  )
}

function MethodologyCard({ icon, title, description }: {
  icon: string
  title: string
  description: string
}) {
  return (
    <div className="text-center">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  )
}

function ToolCard({ category, tools, color }: {
  category: string
  tools: string[]
  color: string
}) {
  const colors = {
    blue: 'border-blue-200 bg-blue-50',
    green: 'border-green-200 bg-green-50',
    purple: 'border-purple-200 bg-purple-50'
  }

  return (
    <div className={`border ${colors[color as keyof typeof colors]} rounded-2xl p-6`}>
      <h3 className="text-xl font-bold mb-4">{category}</h3>
      <ul className="space-y-2">
        {tools.map((tool, index) => (
          <li key={index} className="text-gray-700 text-sm">
            • {tool}
          </li>
        ))}
      </ul>
    </div>
  )
}

function CertificationLevel({ level, title, requirements, benefits }: {
  level: string
  title: string
  requirements: string[]
  benefits: string
}) {
  const levelColors = {
    Bronze: 'bg-yellow-600',
    Prata: 'bg-gray-400',
    Ouro: 'bg-yellow-500'
  }

  return (
    <div className="bg-white/10 rounded-2xl p-6 text-center">
      <div className={`w-16 h-16 ${levelColors[level as keyof typeof levelColors]} rounded-full flex items-center justify-center mx-auto mb-4`}>
        <span className="text-white font-bold text-xl">
          {level === 'Bronze' ? '🥉' : level === 'Prata' ? '🥈' : '🥇'}
        </span>
      </div>
      <h3 className="text-xl font-bold mb-2">{level}</h3>
      <p className="text-sm opacity-80 mb-4">{title}</p>
      
      <div className="text-sm space-y-1 mb-4">
        {requirements.map((req, index) => (
          <div key={index}>• {req}</div>
        ))}
      </div>
      
      <div className="text-xs opacity-75 border-t border-white/20 pt-2">
        {benefits}
      </div>
    </div>
  )
}