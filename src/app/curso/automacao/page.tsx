import Navbar from '@/components/Navbar'
import Link from 'next/link'

export default function CursoAutomacao() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-50 pt-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-20">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Automação e No-Code para Educadores
            </h1>
            <p className="text-xl md:text-2xl opacity-90 mb-8">
              Crie apps, automações e soluções digitais sem programar
            </p>
            <div className="bg-white/20 rounded-2xl p-6">
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold">20h</div>
                  <div className="text-sm opacity-80">Carga horária</div>
                </div>
                <div>
                  <div className="text-3xl font-bold">0</div>
                  <div className="text-sm opacity-80">Código necessário</div>
                </div>
                <div>
                  <div className="text-3xl font-bold">∞</div>
                  <div className="text-sm opacity-80">Possibilidades</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Por que No-Code? */}
        <section className="py-20">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-gradient">
              Por Que Todo Professor Deve Aprender No-Code?
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h3 className="text-2xl font-bold mb-6 text-purple-600">Problemas Atuais</h3>
                <ul className="space-y-3">
                  <ProblemItem text="Processos manuais repetitivos roubam tempo de ensino" />
                  <ProblemItem text="Falta de ferramentas personalizadas para sua escola" />
                  <ProblemItem text="Dependência do setor de TI para tudo" />
                  <ProblemItem text="Orçamento limitado para soluções digitais" />
                  <ProblemItem text="Dificuldade em acompanhar progresso individual" />
                </ul>
              </div>

              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h3 className="text-2xl font-bold mb-6 text-green-600">Soluções No-Code</h3>
                <ul className="space-y-3">
                  <SolutionItem text="Automatize tarefas em minutos, não meses" />
                  <SolutionItem text="Crie exatamente o que sua turma precisa" />
                  <SolutionItem text="Seja independente e ágil" />
                  <SolutionItem text="Ferramentas gratuitas ou de baixo custo" />
                  <SolutionItem text="Dashboards e relatórios automáticos" />
                </ul>
              </div>
            </div>

            <div className="bg-gradient-to-r from-purple-100 to-indigo-100 rounded-2xl p-8">
              <p className="text-xl text-center text-purple-900 font-medium">
                💡 "No-Code democratiza a tecnologia. Qualquer professor pode criar soluções 
                digitais poderosas, transformando ideias em realidade sem escrever uma linha de código."
              </p>
            </div>
          </div>
        </section>

        {/* Módulos do Curso */}
        <section className="bg-white py-20">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-gradient">
              Estrutura do Curso de Automação
            </h2>
            
            <div className="space-y-8">
              <ModuleCard
                number="1"
                title="Fundamentos de Automação"
                duration="4 horas"
                topics={[
                  "O que é No-Code e Low-Code",
                  "Pensamento computacional sem código",
                  "Identificando oportunidades de automação",
                  "Primeiros passos com Make/Zapier"
                ]}
                project="Criar primeira automação: Email automático para pais"
              />

              <ModuleCard
                number="2"
                title="Automações para Sala de Aula"
                duration="6 horas"
                topics={[
                  "Google Workspace + automação",
                  "Correção automática de formulários",
                  "Geração de certificados em massa",
                  "Notificações e lembretes inteligentes"
                ]}
                project="Sistema completo de gestão de tarefas automatizado"
              />

              <ModuleCard
                number="3"
                title="Criando Apps Educacionais"
                duration="6 horas"
                topics={[
                  "Bubble: criando apps web completos",
                  "Glide: apps a partir de planilhas",
                  "Softr: sites e portais sem código",
                  "Integração com banco de dados"
                ]}
                project="App de acompanhamento de aprendizagem da turma"
              />

              <ModuleCard
                number="4"
                title="Inteligência e Analytics"
                duration="4 horas"
                topics={[
                  "Dashboards automáticos com Looker Studio",
                  "Análise de dados educacionais",
                  "IA integrada às automações",
                  "Relatórios personalizados"
                ]}
                project="Dashboard completo de desempenho da turma"
              />
            </div>
          </div>
        </section>

        {/* Exemplos Práticos */}
        <section className="py-20">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-gradient">
              🚀 O Que Você Será Capaz de Criar
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <ProjectCard
                title="📧 Sistema de Comunicação Automatizado"
                description="Envie updates personalizados para pais sobre o progresso dos alunos"
                tools={["Make", "Gmail", "Google Sheets"]}
                difficulty="Iniciante"
                time="2 horas"
              />

              <ProjectCard
                title="📱 App de Quiz Gamificado"
                description="Crie um app mobile com quiz, ranking e badges para sua turma"
                tools={["Glide", "Google Sheets", "Canva"]}
                difficulty="Intermediário"
                time="4 horas"
              />

              <ProjectCard
                title="🎓 Portal do Aluno Completo"
                description="Site com login, materiais, notas e comunicados"
                tools={["Softr", "Airtable", "Stripe"]}
                difficulty="Avançado"
                time="8 horas"
              />

              <ProjectCard
                title="📊 Dashboard de Frequência"
                description="Visualize e analise padrões de presença automaticamente"
                tools={["Looker Studio", "Google Forms", "Sheets"]}
                difficulty="Iniciante"
                time="3 horas"
              />

              <ProjectCard
                title="🤖 Assistente Virtual 24/7"
                description="Chatbot que responde dúvidas frequentes dos alunos"
                tools={["Bubble", "ChatGPT API", "Zapier"]}
                difficulty="Avançado"
                time="6 horas"
              />

              <ProjectCard
                title="📝 Corretor de Redações"
                description="Sistema que analisa e dá feedback em redações automaticamente"
                tools={["Make", "Claude API", "Google Docs"]}
                difficulty="Intermediário"
                time="5 horas"
              />
            </div>
          </div>
        </section>

        {/* Tutorial Rápido */}
        <section className="bg-gray-100 py-20">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-gradient">
              🎯 Tutorial Rápido: Sua Primeira Automação em 15 Minutos
            </h2>
            
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-2xl font-bold mb-6">
                Criar: Notificação Automática de Novas Tarefas
              </h3>
              
              <div className="space-y-6">
                <StepCard
                  number={1}
                  title="Acesse o Make (antigo Integromat)"
                  description="Crie uma conta gratuita em make.com - você tem direito a 1.000 operações/mês grátis"
                  action="https://www.make.com"
                />

                <StepCard
                  number={2}
                  title="Conecte o Google Forms"
                  description="Crie um formulário de entrega de tarefas e conecte ao Make usando o módulo 'Watch Responses'"
                  tip="Use o template pronto 'Entrega de Trabalhos' do Google Forms"
                />

                <StepCard
                  number={3}
                  title="Configure o Filtro"
                  description="Adicione um filtro para processar apenas novas submissões (não vazias)"
                  tip="Condição: 'Timestamp exists' para garantir que é uma nova resposta"
                />

                <StepCard
                  number={4}
                  title="Adicione Ação de Email"
                  description="Configure o Gmail para enviar confirmação ao aluno e notificação ao professor"
                  tip="Use variáveis do formulário como {{Email}} e {{Nome}} para personalizar"
                />

                <StepCard
                  number={5}
                  title="Teste e Ative"
                  description="Faça um teste enviando uma resposta e ative o cenário para rodar automaticamente"
                  tip="O Make verifica novos formulários a cada 15 minutos no plano gratuito"
                />
              </div>

              <div className="mt-8 p-6 bg-purple-50 rounded-xl">
                <p className="text-purple-800 font-medium">
                  🎉 Parabéns! Você acabou de economizar 30 minutos por semana com essa simples automação.
                  Imagine o que pode fazer com automações mais complexas!
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Ferramentas Recomendadas */}
        <section className="py-20">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-gradient">
              🛠️ Caixa de Ferramentas No-Code do Professor
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <ToolRecommendation
                name="Make"
                category="Automação"
                price="Grátis até 1000 ops/mês"
                bestFor="Conectar apps e automatizar fluxos"
                link="https://www.make.com"
              />

              <ToolRecommendation
                name="Glide"
                category="Apps Mobile"
                price="Grátis até 25 usuários"
                bestFor="Apps a partir do Google Sheets"
                link="https://www.glideapps.com"
              />

              <ToolRecommendation
                name="Bubble"
                category="Apps Web"
                price="Grátis para desenvolvimento"
                bestFor="Apps complexos e marketplaces"
                link="https://bubble.io"
              />

              <ToolRecommendation
                name="Airtable"
                category="Banco de Dados"
                price="Grátis até 1200 registros"
                bestFor="CRM e gestão de dados"
                link="https://airtable.com"
              />

              <ToolRecommendation
                name="Softr"
                category="Websites"
                price="Grátis até 100 visitantes"
                bestFor="Portais e sites com login"
                link="https://www.softr.io"
              />

              <ToolRecommendation
                name="Looker Studio"
                category="Analytics"
                price="100% Gratuito"
                bestFor="Dashboards e relatórios"
                link="https://lookerstudio.google.com"
              />

              <ToolRecommendation
                name="n8n"
                category="Automação"
                price="Open source gratuito"
                bestFor="Automações avançadas self-hosted"
                link="https://n8n.io"
              />

              <ToolRecommendation
                name="Pabbly"
                category="Automação"
                price="$19/mês ilimitado"
                bestFor="Alternativa econômica ao Zapier"
                link="https://www.pabbly.com"
              />
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-20">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">
              Pronto para Automatizar sua Sala de Aula?
            </h2>
            <p className="text-xl opacity-90 mb-8">
              Junte-se aos professores que estão economizando 10+ horas por semana com automações
            </p>
            <div className="space-x-4">
              <Link
                href="/cadastro"
                className="inline-block bg-white text-purple-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition"
              >
                Começar Agora
              </Link>
              <a
                href="https://www.make.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-purple-600 transition"
              >
                Testar Make Grátis
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

function ProblemItem({ text }: { text: string }) {
  return (
    <li className="flex items-start">
      <span className="text-red-500 mr-2">✗</span>
      <span className="text-gray-700">{text}</span>
    </li>
  )
}

function SolutionItem({ text }: { text: string }) {
  return (
    <li className="flex items-start">
      <span className="text-green-500 mr-2">✓</span>
      <span className="text-gray-700">{text}</span>
    </li>
  )
}

function ModuleCard({ number, title, duration, topics, project }: {
  number: string
  title: string
  duration: string
  topics: string[]
  project: string
}) {
  return (
    <div className="bg-gray-50 rounded-2xl p-8">
      <div className="flex items-center mb-4">
        <div className="w-12 h-12 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold text-xl mr-4">
          {number}
        </div>
        <div>
          <h3 className="text-2xl font-bold">{title}</h3>
          <p className="text-gray-600">{duration}</p>
        </div>
      </div>
      
      <div className="mb-6">
        <h4 className="font-semibold mb-3">O que você aprenderá:</h4>
        <ul className="space-y-2">
          {topics.map((topic, index) => (
            <li key={index} className="flex items-center text-gray-700">
              <svg className="w-4 h-4 text-purple-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              {topic}
            </li>
          ))}
        </ul>
      </div>
      
      <div className="bg-purple-100 rounded-lg p-4">
        <h4 className="font-semibold text-purple-800 mb-1">🚀 Projeto do Módulo:</h4>
        <p className="text-purple-700">{project}</p>
      </div>
    </div>
  )
}

function ProjectCard({ title, description, tools, difficulty, time }: {
  title: string
  description: string
  tools: string[]
  difficulty: string
  time: string
}) {
  const difficultyColors = {
    'Iniciante': 'bg-green-100 text-green-800',
    'Intermediário': 'bg-yellow-100 text-yellow-800',
    'Avançado': 'bg-red-100 text-red-800'
  }

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition">
      <h3 className="text-lg font-bold mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      
      <div className="mb-4">
        <div className="flex flex-wrap gap-2">
          {tools.map((tool, index) => (
            <span key={index} className="bg-purple-50 text-purple-700 text-xs px-2 py-1 rounded">
              {tool}
            </span>
          ))}
        </div>
      </div>
      
      <div className="flex justify-between items-center">
        <span className={`px-3 py-1 rounded-full text-xs font-medium ${difficultyColors[difficulty as keyof typeof difficultyColors]}`}>
          {difficulty}
        </span>
        <span className="text-sm text-gray-500">⏱️ {time}</span>
      </div>
    </div>
  )
}

function StepCard({ number, title, description, action, tip }: {
  number: number
  title: string
  description: string
  action?: string
  tip?: string
}) {
  return (
    <div className="flex gap-4">
      <div className="w-10 h-10 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
        {number}
      </div>
      <div className="flex-1">
        <h4 className="font-bold text-lg mb-1">{title}</h4>
        <p className="text-gray-700 mb-2">{description}</p>
        {tip && (
          <p className="text-sm bg-purple-50 text-purple-700 p-3 rounded">
            💡 Dica: {tip}
          </p>
        )}
        {action && (
          <a
            href={action}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-2 text-purple-600 hover:underline text-sm"
          >
            Acessar →
          </a>
        )}
      </div>
    </div>
  )
}

function ToolRecommendation({ name, category, price, bestFor, link }: {
  name: string
  category: string
  price: string
  bestFor: string
  link: string
}) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="bg-white rounded-lg shadow p-4 hover:shadow-lg transition block"
    >
      <h4 className="font-bold text-lg mb-1">{name}</h4>
      <p className="text-xs text-purple-600 mb-2">{category}</p>
      <p className="text-sm text-gray-600 mb-2">{bestFor}</p>
      <p className="text-xs font-medium text-green-600">{price}</p>
    </a>
  )
}