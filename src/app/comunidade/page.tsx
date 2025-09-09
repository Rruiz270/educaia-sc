import Navbar from '@/components/Navbar'
import Link from 'next/link'

export default function Comunidade() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-50 pt-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-green-600 to-blue-600 text-white py-20">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Comunidade EducaIA-SC
            </h1>
            <p className="text-xl md:text-2xl opacity-90 mb-8">
              10.000+ professores catarinenses conectados, aprendendo e crescendo juntos
            </p>
            <div className="bg-white/20 rounded-2xl p-6">
              <div className="grid md:grid-cols-4 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold">10.247</div>
                  <div className="text-sm opacity-80">Professores</div>
                </div>
                <div>
                  <div className="text-3xl font-bold">200</div>
                  <div className="text-sm opacity-80">Embaixadores</div>
                </div>
                <div>
                  <div className="text-3xl font-bold">1.500</div>
                  <div className="text-sm opacity-80">Projetos</div>
                </div>
                <div>
                  <div className="text-3xl font-bold">24/7</div>
                  <div className="text-sm opacity-80">Suporte</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Como Funciona */}
        <section className="py-20">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-gradient">
              Como Nossa Comunidade Funciona
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <StepCard
                number="1"
                title="Conecte-se"
                description="Entre no Discord, WhatsApp ou LinkedIn da comunidade"
                icon="🤝"
                details={[
                  "Discord com +50 canais temáticos",
                  "WhatsApp por região/disciplina", 
                  "LinkedIn para networking profissional",
                  "Telegram para updates oficiais"
                ]}
              />
              
              <StepCard
                number="2"
                title="Aprenda Junto"
                description="Participe de eventos, workshops e mentorias"
                icon="📚"
                details={[
                  "Lives semanais com especialistas",
                  "Workshops práticos mensais",
                  "Mentoria 1:1 personalizada",
                  "Grupo de estudos por interesse"
                ]}
              />
              
              <StepCard
                number="3"
                title="Compartilhe"
                description="Divulgue seus projetos e ajude outros professores"
                icon="🌟"
                details={[
                  "Galeria de projetos inspiradores",
                  "Fórum de dúvidas e soluções",
                  "Cases de sucesso documentados",
                  "Banco de recursos colaborativo"
                ]}
              />
            </div>
          </div>
        </section>

        {/* Embaixadores */}
        <section className="bg-white py-20">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-gradient">
              Conheça Nossos Embaixadores
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <AmbassadorCard
                name="Prof. Maria Santos"
                role="Embaixadora Florianópolis"
                specialty="Português + IA"
                image="M"
                achievements="1.200+ professores formados"
                quote="IA potencializa nossa criatividade como educadores"
              />
              
              <AmbassadorCard
                name="Prof. João Silva"
                role="Embaixador Joinville"
                specialty="Matemática + IA"
                image="J"
                achievements="800+ projetos orientados"
                quote="Transformamos números em histórias incríveis"
              />
              
              <AmbassadorCard
                name="Prof. Ana Costa"
                role="Embaixadora Blumenau"
                specialty="Ciências + IA"
                image="A"
                achievements="500+ experimentos virtuais"
                quote="Ciência e IA: laboratório sem limites"
              />
              
              <AmbassadorCard
                name="Prof. Carlos Luz"
                role="Embaixador Chapecó"
                specialty="História + IA"
                image="C"
                achievements="300+ timelines interativas"
                quote="História ganha vida com inteligência artificial"
              />
            </div>
          </div>
        </section>

        {/* Eventos */}
        <section className="py-20">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-gradient">
              Próximos Eventos
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <EventCard
                date="15 JAN"
                title="Workshop: ChatGPT para Iniciantes"
                time="19:00 - 21:00"
                format="Online + Presencial em Floripa"
                participants="2.500+ inscritos"
                description="Aprenda do zero como usar ChatGPT para criar aulas mais engajantes"
                host="Prof. Maria Santos"
              />
              
              <EventCard
                date="22 JAN"
                title="Hackathon EducaIA: 48h de Inovação"
                time="Sexta 18h - Domingo 18h"
                format="Híbrido em todas as regiões"
                participants="500+ equipes"
                description="Desenvolva soluções educacionais usando IA em 48 horas intensas"
                host="Embaixadores Regionais"
              />
              
              <EventCard
                date="29 JAN"
                title="Mesa Redonda: Ética em IA na Educação"
                time="20:00 - 21:30"
                format="YouTube Live"
                participants="10.000+ esperados"
                description="Debate com especialistas sobre uso responsável de IA nas escolas"
                host="Universidades Parceiras"
              />
              
              <EventCard
                date="05 FEV"
                title="Feira de Projetos Estudantis IA"
                time="14:00 - 18:00"
                format="Presencial + Streaming"
                participants="200+ projetos"
                description="Alunos apresentam criações incríveis feitas com ajuda da IA"
                host="Escolas Participantes"
              />
            </div>
          </div>
        </section>

        {/* Depoimentos */}
        <section className="bg-green-50 py-20">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-gradient">
              O Que Nossa Comunidade Está Dizendo
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <TestimonialCard
                quote="Em 3 meses aprendi mais sobre IA do que em 20 anos de carreira. A comunidade é incrível!"
                author="Profª. Lucia Mendes"
                role="História - Criciúma"
                rating={5}
              />
              
              <TestimonialCard
                quote="Meus alunos estão mais engajados que nunca. IA trouxe uma nova vida para minha sala."
                author="Prof. Roberto Alves"
                role="Matemática - Itajaí"
                rating={5}
              />
              
              <TestimonialCard
                quote="O sistema de mentoria é fantástico. Sempre tem alguém para ajudar quando preciso."
                author="Profª. Sandra Lima"
                role="Ciências - Lages"
                rating={5}
              />
            </div>
          </div>
        </section>

        {/* CTA para Participar */}
        <section className="bg-gradient-to-r from-green-600 to-blue-600 text-white py-20">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">
              Faça Parte da Maior Comunidade de Educadores IA do Brasil
            </h2>
            <p className="text-xl opacity-90 mb-8">
              Junte-se a milhares de professores que estão transformando a educação em Santa Catarina
            </p>
            <div className="space-x-4">
              <Link
                href="/cadastro"
                className="inline-block bg-white text-blue-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition"
              >
                Participar Agora
              </Link>
              <a
                href="https://discord.gg/educaia-sc"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-blue-600 transition"
              >
                Discord EducaIA
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

function StepCard({ number, title, description, icon, details }: {
  number: string
  title: string
  description: string
  icon: string
  details: string[]
}) {
  return (
    <div className="text-center">
      <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
        {number}
      </div>
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <ul className="text-sm text-gray-500 space-y-1">
        {details.map((detail, index) => (
          <li key={index}>• {detail}</li>
        ))}
      </ul>
    </div>
  )
}

function AmbassadorCard({ name, role, specialty, image, achievements, quote }: {
  name: string
  role: string
  specialty: string
  image: string
  achievements: string
  quote: string
}) {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 text-center">
      <div className="w-20 h-20 bg-gradient-to-r from-green-600 to-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
        {image}
      </div>
      <h3 className="text-lg font-bold">{name}</h3>
      <p className="text-blue-600 font-medium text-sm">{role}</p>
      <p className="text-gray-600 text-sm mb-3">{specialty}</p>
      <div className="bg-green-50 rounded-lg p-3 mb-3">
        <p className="text-green-800 text-sm font-medium">{achievements}</p>
      </div>
      <p className="text-gray-600 text-sm italic">"{quote}"</p>
    </div>
  )
}

function EventCard({ date, title, time, format, participants, description, host }: {
  date: string
  title: string
  time: string
  format: string
  participants: string
  description: string
  host: string
}) {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-6">
      <div className="flex items-start mb-4">
        <div className="bg-blue-600 text-white rounded-lg p-3 mr-4 text-center">
          <div className="text-lg font-bold">{date.split(' ')[0]}</div>
          <div className="text-xs">{date.split(' ')[1]}</div>
        </div>
        <div className="flex-1">
          <h3 className="text-xl font-bold mb-1">{title}</h3>
          <p className="text-gray-600 text-sm">{time}</p>
        </div>
      </div>
      
      <p className="text-gray-700 mb-4">{description}</p>
      
      <div className="space-y-2 text-sm">
        <div className="flex justify-between">
          <span className="text-gray-600">Formato:</span>
          <span className="font-medium">{format}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-600">Participantes:</span>
          <span className="font-medium text-green-600">{participants}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-600">Facilitador:</span>
          <span className="font-medium">{host}</span>
        </div>
      </div>
      
      <button className="w-full mt-4 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">
        Participar Gratuitamente
      </button>
    </div>
  )
}

function TestimonialCard({ quote, author, role, rating }: {
  quote: string
  author: string
  role: string
  rating: number
}) {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-6">
      <div className="flex mb-3">
        {[...Array(rating)].map((_, i) => (
          <span key={i} className="text-yellow-400 text-xl">⭐</span>
        ))}
      </div>
      <p className="text-gray-700 mb-4 italic">"{quote}"</p>
      <div>
        <p className="font-bold">{author}</p>
        <p className="text-sm text-gray-600">{role}</p>
      </div>
    </div>
  )
}