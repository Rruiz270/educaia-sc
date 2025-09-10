import Navbar from '@/components/Navbar'
import Link from 'next/link'

export default function Sobre() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-50 pt-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-green-600 to-blue-600 text-white py-20">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Sobre o EducaIA-SC
            </h1>
            <p className="text-xl md:text-2xl opacity-90">
              A maior iniciativa de capacitação em IA para educadores do Brasil
            </p>
          </div>
        </section>

        {/* Missão */}
        <section className="py-20">
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <div className="text-4xl mb-4">🎯</div>
                <h3 className="text-2xl font-bold mb-4 text-blue-600">Missão</h3>
                <p className="text-gray-700">
                  Capacitar 51.000 professores da rede pública de Santa Catarina para usar 
                  inteligência artificial como ferramenta pedagógica, transformando a 
                  educação e preparando alunos para o futuro digital.
                </p>
              </div>
              
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <div className="text-4xl mb-4">👁️</div>
                <h3 className="text-2xl font-bold mb-4 text-green-600">Visão</h3>
                <p className="text-gray-700">
                  Tornar Santa Catarina referência nacional em educação com IA, 
                  criando um modelo replicável que inspire outros estados e 
                  posicione o Brasil na vanguarda da educação tecnológica mundial.
                </p>
              </div>
              
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <div className="text-4xl mb-4">💎</div>
                <h3 className="text-2xl font-bold mb-4 text-purple-600">Valores</h3>
                <ul className="text-gray-700 text-left space-y-2">
                  <li>• Ética e uso responsável</li>
                  <li>• Inclusão e acessibilidade</li>
                  <li>• Colaboração e comunidade</li>
                  <li>• Inovação pedagógica</li>
                  <li>• Impacto social mensurável</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Timeline do Projeto */}
        <section className="bg-white py-20">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-gradient">
              História do EducaIA-SC
            </h2>
            
            <div className="space-y-8">
              <TimelineItem
                date="Setembro 2025"
                title="Concepção do Projeto"
                description="Secretaria de Educação SC identifica necessidade de capacitar professores em IA"
                milestone="Formação da equipe multidisciplinar"
                status="completed"
              />
              
              <TimelineItem
                date="Novembro 2025"
                title="Desenvolvimento da Estrutura"
                description="Criação do currículo, metodologia gamificada e plataforma digital"
                milestone="Protótipo da plataforma finalizado"
                status="completed"
              />
              
              <TimelineItem
                date="Janeiro 2026"
                title="Parcerias Estratégicas"
                description="Negociações com Google, Microsoft e OpenAI para fornecimento de ferramentas"
                milestone="US$ 7.5M em parcerias confirmadas"
                status="completed"
              />
              
              <TimelineItem
                date="Março 2026"
                title="Programa Piloto"
                description="Teste com 1.000 professores das principais cidades de SC"
                milestone="95% de satisfação no piloto"
                status="in-progress"
              />
              
              <TimelineItem
                date="Maio 2026"
                title="Lançamento Oficial"
                description="Abertura das inscrições para os primeiros 10.000 professores"
                milestone="Meta: 10.000 inscritos em 3 meses"
                status="planned"
              />
              
              <TimelineItem
                date="Setembro 2026"
                title="Expansão Estadual"
                description="Alcançar todos os 51.000 professores da rede pública catarinense"
                milestone="100% da rede estadual capacitada"
                status="planned"
              />
            </div>
          </div>
        </section>

        {/* Equipe */}
        <section className="py-20">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-gradient">
              Nossa Equipe
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <TeamMember
                name="Dr. Carlos Eduardo"
                role="Diretor Executivo"
                bio="PhD em Educação, 20+ anos na rede pública SC"
                image="C"
                linkedin="#"
              />
              
              <TeamMember
                name="Maria Fernanda Costa"
                role="Diretora de Parcerias"
                bio="Ex-Google Education LATAM, especialista em EdTech"
                image="M"
                linkedin="#"
              />
              
              <TeamMember
                name="Prof. João Santos"
                role="Coordenador Pedagógico"
                bio="Professor há 15 anos, especialista em IA educacional"
                image="J"
                linkedin="#"
              />
              
              <TeamMember
                name="Ana Carolina Silva"
                role="Coordenadora de Comunidade"
                bio="Ex-Coursera Brasil, especialista em engajamento"
                image="A"
                linkedin="#"
              />
            </div>
          </div>
        </section>

        {/* Parceiros */}
        <section className="bg-gray-100 py-20">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-gradient">
              Nossos Parceiros
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h3 className="text-2xl font-bold mb-6 text-blue-600">Institucionais</h3>
                <div className="space-y-4">
                  <PartnerLogo name="Secretaria de Educação SC" value="Parceiro oficial" />
                  <PartnerLogo name="UFSC" value="Pesquisa e validação acadêmica" />
                  <PartnerLogo name="UDESC" value="Formação de formadores" />
                  <PartnerLogo name="SENAI-SC" value="Capacitação técnica" />
                </div>
              </div>
              
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h3 className="text-2xl font-bold mb-6 text-green-600">Tecnológicos</h3>
                <div className="space-y-4">
                  <PartnerLogo name="Google for Education" value="US$ 2.8M em ferramentas" />
                  <PartnerLogo name="Microsoft Education" value="US$ 3.2M em licenças" />
                  <PartnerLogo name="OpenAI" value="US$ 1.5M em créditos API" />
                  <PartnerLogo name="Softplan (SC)" value="Plataforma educacional" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Números e Impacto */}
        <section className="py-20">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-gradient">
              Impacto Esperado
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <ImpactCard
                number="51.000"
                label="Professores Capacitados"
                description="Toda a rede pública estadual de SC"
                color="blue"
              />
              
              <ImpactCard
                number="800.000"
                label="Alunos Impactados"
                description="Estudantes do Ensino Fundamental e Médio"
                color="green"
              />
              
              <ImpactCard
                number="1.200"
                label="Escolas Conectadas"
                description="Todas as unidades da rede estadual"
                color="purple"
              />
              
              <ImpactCard
                number="R$ 50M"
                label="Economia Projetada"
                description="Redução de custos com capacitação tradicional"
                color="yellow"
              />
            </div>
          </div>
        </section>

        {/* Reconhecimentos */}
        <section className="bg-blue-50 py-20">
          <div className="max-w-6xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-8 text-gradient">
              Reconhecimentos
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white rounded-2xl p-6">
                <div className="text-4xl mb-4">🏆</div>
                <h3 className="text-xl font-bold mb-2">Prêmio Inovação Educacional</h3>
                <p className="text-gray-600">Congresso Brasileiro de EdTech 2026</p>
              </div>
              
              <div className="bg-white rounded-2xl p-6">
                <div className="text-4xl mb-4">🌟</div>
                <h3 className="text-xl font-bold mb-2">Destaque Nacional</h3>
                <p className="text-gray-600">Menção honrosa no MEC por inovação</p>
              </div>
              
              <div className="bg-white rounded-2xl p-6">
                <div className="text-4xl mb-4">🚀</div>
                <h3 className="text-xl font-bold mb-2">Caso de Sucesso Global</h3>
                <p className="text-gray-600">Apresentação na UNESCO sobre IA na educação</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-gradient-to-r from-green-600 to-blue-600 text-white py-20">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">
              Faça Parte Desta Transformação
            </h2>
            <p className="text-xl opacity-90 mb-8">
              Junte-se a nós na missão de revolucionar a educação em Santa Catarina
            </p>
            <div className="space-x-4">
              <Link
                href="/cadastro"
                className="inline-block bg-white text-blue-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition"
              >
                Inscrever-se Gratuitamente
              </Link>
              <Link
                href="/comunidade"
                className="inline-block border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-blue-600 transition"
              >
                Conhecer a Comunidade
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

function TimelineItem({ date, title, description, milestone, status }: {
  date: string
  title: string
  description: string
  milestone: string
  status: 'completed' | 'in-progress' | 'planned'
}) {
  const statusColors = {
    completed: 'bg-green-600',
    'in-progress': 'bg-blue-600',
    planned: 'bg-gray-400'
  }

  const statusIcons = {
    completed: '✅',
    'in-progress': '🔄',
    planned: '📅'
  }

  return (
    <div className="flex items-start">
      <div className={`w-12 h-12 ${statusColors[status]} rounded-full flex items-center justify-center text-white font-bold mr-6 flex-shrink-0`}>
        {statusIcons[status]}
      </div>
      <div className="flex-1">
        <div className="bg-white rounded-lg p-6 shadow-lg">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h3 className="text-xl font-bold">{title}</h3>
              <p className="text-gray-600">{date}</p>
            </div>
          </div>
          <p className="text-gray-700 mb-3">{description}</p>
          <div className="bg-blue-50 rounded-lg p-3">
            <p className="text-blue-800 font-medium text-sm">🎯 {milestone}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

function TeamMember({ name, role, bio, image, linkedin }: {
  name: string
  role: string
  bio: string
  image: string
  linkedin: string
}) {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 text-center">
      <div className="w-20 h-20 bg-gradient-to-r from-green-600 to-blue-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
        {image}
      </div>
      <h3 className="text-lg font-bold">{name}</h3>
      <p className="text-blue-600 font-medium mb-2">{role}</p>
      <p className="text-gray-600 text-sm mb-4">{bio}</p>
      <a
        href={linkedin}
        className="inline-block bg-blue-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-700 transition"
      >
        LinkedIn
      </a>
    </div>
  )
}

function PartnerLogo({ name, value }: { name: string; value: string }) {
  return (
    <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
      <span className="font-medium">{name}</span>
      <span className="text-sm text-gray-600">{value}</span>
    </div>
  )
}

function ImpactCard({ number, label, description, color }: {
  number: string
  label: string
  description: string
  color: string
}) {
  const colorClasses = {
    blue: 'border-blue-200 bg-blue-50 text-blue-600',
    green: 'border-green-200 bg-green-50 text-green-600',
    purple: 'border-purple-200 bg-purple-50 text-purple-600',
    yellow: 'border-yellow-200 bg-yellow-50 text-yellow-600'
  }

  return (
    <div className={`border-2 ${colorClasses[color as keyof typeof colorClasses]} rounded-2xl p-6 text-center`}>
      <div className="text-3xl font-bold mb-2">{number}</div>
      <div className="text-lg font-semibold mb-2">{label}</div>
      <div className="text-sm opacity-80">{description}</div>
    </div>
  )
}