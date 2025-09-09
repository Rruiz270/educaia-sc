export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center gradient-sc text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
              EducaIA-SC
            </h1>
            <p className="text-2xl md:text-3xl mb-8 opacity-90">
              Transformando a Educação de Santa Catarina com Inteligência Artificial
            </p>
            <p className="text-lg md:text-xl mb-12 max-w-3xl mx-auto">
              Capacitação em IA para 10.000 professores da rede pública. 
              Preparando educadores e alunos para o futuro.
            </p>
            <div className="space-x-4">
              <button className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition">
                Começar Agora
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-blue-600 transition">
                Saiba Mais
              </button>
            </div>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 text-gradient">
            Por que EducaIA-SC?
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard
              icon="🚀"
              title="Inovação Pedagógica"
              description="Ferramentas de IA integradas ao currículo, transformando a forma de ensinar e aprender."
            />
            <FeatureCard
              icon="🎯"
              title="Foco no Professor"
              description="Capacitação prática e personalizada para cada disciplina, com suporte contínuo."
            />
            <FeatureCard
              icon="🏆"
              title="Gamificação"
              description="Sistema de pontos, badges e recompensas inspirados na cultura catarinense."
            />
          </div>
        </div>
      </section>

      {/* Numbers Section */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <StatCard number="10.000" label="Professores" />
            <StatCard number="51.000" label="Meta Total" />
            <StatCard number="6" label="Meses de Curso" />
            <StatCard number="100%" label="Gratuito" />
          </div>
        </div>
      </section>

      {/* Modules Preview */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 text-gradient">
            Jornada de Aprendizagem
          </h2>
          
          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              <ModuleCard
                number="1"
                title="Fundamentos de IA"
                duration="20h"
                topics={["Conceitos básicos", "Ética", "Ferramentas gratuitas"]}
              />
              <ModuleCard
                number="2"
                title="IA na Sala de Aula"
                duration="40h"
                topics={["Planejamento", "Material didático", "Avaliações"]}
              />
              <ModuleCard
                number="3"
                title="Projeto Final"
                duration="40h"
                topics={["Aplicação prática", "Mentoria", "Certificação"]}
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-sc text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-8">
            Pronto para Transformar a Educação?
          </h2>
          <p className="text-xl mb-12 max-w-2xl mx-auto">
            Junte-se a nós nesta jornada de inovação educacional. 
            Vamos preparar nossos alunos para o futuro, juntos!
          </p>
          <button className="bg-white text-blue-600 px-12 py-5 rounded-full font-semibold text-xl hover:bg-gray-100 transition">
            Inscreva-se Agora
          </button>
        </div>
      </section>
    </main>
  );
}

function FeatureCard({ icon, title, description }: { icon: string; title: string; description: string }) {
  return (
    <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition">
      <div className="text-5xl mb-4">{icon}</div>
      <h3 className="text-2xl font-bold mb-4">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

function StatCard({ number, label }: { number: string; label: string }) {
  return (
    <div>
      <div className="text-5xl font-bold text-gradient mb-2">{number}</div>
      <div className="text-xl text-gray-600">{label}</div>
    </div>
  );
}

function ModuleCard({ number, title, duration, topics }: { 
  number: string; 
  title: string; 
  duration: string; 
  topics: string[] 
}) {
  return (
    <div className="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-blue-600">
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center">
          <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xl mr-4">
            {number}
          </div>
          <h3 className="text-2xl font-bold">{title}</h3>
        </div>
        <span className="text-gray-500">{duration}</span>
      </div>
      <ul className="space-y-2">
        {topics.map((topic, index) => (
          <li key={index} className="flex items-center text-gray-600">
            <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            {topic}
          </li>
        ))}
      </ul>
    </div>
  );
}
