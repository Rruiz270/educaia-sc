import Navbar from '@/components/Navbar'
import Link from 'next/link'

export default function Recursos() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-50 pt-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-green-600 to-blue-600 text-white py-20">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Central de Recursos IA
            </h1>
            <p className="text-xl md:text-2xl opacity-90">
              Todas as ferramentas de IA em um só lugar, organizadas por categoria
            </p>
          </div>
        </section>

        {/* Ferramentas Principais */}
        <section className="py-20">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-gradient">
              🚀 Ferramentas Essenciais
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <ToolCard
                icon="💬"
                title="ChatGPT"
                description="IA conversacional mais popular do mundo"
                features={["Criação de textos", "Resolução de problemas", "Assistente pedagógico"]}
                link="https://chat.openai.com"
                category="Conversação"
                free={true}
              />
              
              <ToolCard
                icon="🧠"
                title="Claude"
                description="IA avançada para análise e raciocínio complexo"
                features={["Textos longos", "Análise profunda", "Código e matemática"]}
                link="https://claude.ai"
                category="Conversação"
                free={true}
              />
              
              <ToolCard
                icon="🔍"
                title="Perplexity"
                description="Motor de busca com IA para pesquisa acadêmica"
                features={["Citações automáticas", "Pesquisa em tempo real", "Fontes confiáveis"]}
                link="https://www.perplexity.ai"
                category="Pesquisa"
                free={true}
              />
              
              <ToolCard
                icon="🎨"
                title="Canva AI"
                description="Design gráfico com inteligência artificial"
                features={["Apresentações", "Infográficos", "Material didático"]}
                link="https://www.canva.com/magic-write"
                category="Design"
                free={true}
              />
              
              <ToolCard
                icon="📊"
                title="Gamma"
                description="Apresentações profissionais em minutos"
                features={["Slides automáticos", "Design inteligente", "Exportação PPT"]}
                link="https://gamma.app"
                category="Apresentações"
                free={true}
              />
              
              <ToolCard
                icon="✍️"
                title="Grammarly"
                description="Corretor gramatical avançado com IA"
                features={["Correção em tempo real", "Sugestões de estilo", "Detector de plágio"]}
                link="https://www.grammarly.com"
                category="Escrita"
                free={true}
              />
            </div>
          </div>
        </section>

        {/* Ferramentas por Categoria */}
        <section className="bg-white py-20">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-gradient">
              📚 Ferramentas por Categoria
            </h2>
            
            {/* Criação de Imagens */}
            <CategorySection
              title="🎨 Criação de Imagens"
              tools={[
                {
                  name: "DALL-E 3",
                  description: "Gerador de imagens da OpenAI",
                  link: "https://labs.openai.com",
                  features: ["Alta qualidade", "Prompts em português", "Integrado ao ChatGPT"]
                },
                {
                  name: "Midjourney",
                  description: "Arte e ilustrações profissionais",
                  link: "https://www.midjourney.com",
                  features: ["Qualidade artística", "Estilos diversos", "Comunidade ativa"]
                },
                {
                  name: "Stable Diffusion",
                  description: "Gerador open source gratuito",
                  link: "https://stablediffusionweb.com",
                  features: ["100% gratuito", "Sem limites", "Personalizável"]
                },
                {
                  name: "Bing Image Creator",
                  description: "Gerador gratuito da Microsoft",
                  link: "https://www.bing.com/create",
                  features: ["Integrado ao Bing", "DALL-E 3 gratuito", "Fácil de usar"]
                }
              ]}
            />
            
            {/* Criação de Vídeos */}
            <CategorySection
              title="🎬 Criação de Vídeos"
              tools={[
                {
                  name: "Runway ML",
                  description: "Editor de vídeo com IA",
                  link: "https://runwayml.com",
                  features: ["Remoção de fundo", "Edição mágica", "Geração de vídeo"]
                },
                {
                  name: "Synthesia",
                  description: "Vídeos com avatares IA",
                  link: "https://www.synthesia.io",
                  features: ["Avatares realistas", "120+ idiomas", "Sem câmera"]
                },
                {
                  name: "Descript",
                  description: "Edição de vídeo como texto",
                  link: "https://www.descript.com",
                  features: ["Transcrição automática", "Edição por texto", "Remoção de silêncios"]
                },
                {
                  name: "Loom AI",
                  description: "Gravação de tela inteligente",
                  link: "https://www.loom.com",
                  features: ["Gravação rápida", "Compartilhamento fácil", "Transcrições"]
                }
              ]}
            />
            
            {/* Automação e No-Code */}
            <CategorySection
              title="⚡ Automação e No-Code"
              tools={[
                {
                  name: "Make (Integromat)",
                  description: "Automação visual poderosa",
                  link: "https://www.make.com",
                  features: ["1000+ integrações", "Visual workflow", "IA integrada"]
                },
                {
                  name: "Zapier",
                  description: "Conecte apps automaticamente",
                  link: "https://zapier.com",
                  features: ["5000+ apps", "Interface simples", "IA assistente"]
                },
                {
                  name: "Bubble",
                  description: "Crie apps sem código",
                  link: "https://bubble.io",
                  features: ["Apps completos", "Database visual", "Deploy fácil"]
                },
                {
                  name: "Glide",
                  description: "Apps a partir de planilhas",
                  link: "https://www.glideapps.com",
                  features: ["Google Sheets", "Apps móveis", "IA integrada"]
                }
              ]}
            />
          </div>
        </section>

        {/* Guia de Criação de Prompts */}
        <section className="py-20">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-gradient">
              💡 Guia Rápido: Como Criar Prompts Efetivos
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h3 className="text-2xl font-bold mb-6 text-blue-600">Estrutura CRIAR</h3>
                <div className="space-y-4">
                  <PromptTip
                    letter="C"
                    title="Contexto"
                    description="Forneça informações de fundo relevantes"
                    example="Sou professor de matemática do ensino médio em SC"
                  />
                  <PromptTip
                    letter="R"
                    title="Role (Papel)"
                    description="Defina o papel da IA"
                    example="Atue como um especialista em educação matemática"
                  />
                  <PromptTip
                    letter="I"
                    title="Instrução"
                    description="Seja específico sobre o que você quer"
                    example="Crie 5 problemas contextualizados sobre funções"
                  />
                  <PromptTip
                    letter="A"
                    title="Audiência"
                    description="Especifique para quem é o conteúdo"
                    example="Para alunos do 1º ano do ensino médio"
                  />
                  <PromptTip
                    letter="R"
                    title="Resultado"
                    description="Descreva o formato desejado"
                    example="Em formato de quiz com gabarito comentado"
                  />
                </div>
              </div>

              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h3 className="text-2xl font-bold mb-6 text-green-600">Exemplos Práticos</h3>
                
                <div className="space-y-6">
                  <PromptExample
                    title="Prompt Básico"
                    prompt="Crie uma atividade sobre fotossíntese"
                    rating={2}
                  />
                  
                  <PromptExample
                    title="Prompt Melhorado"
                    prompt="Crie uma atividade prática sobre fotossíntese para alunos do 7º ano, incluindo um experimento simples que possa ser feito em casa com materiais do dia a dia. Inclua objetivos de aprendizagem e critérios de avaliação."
                    rating={4}
                  />
                  
                  <PromptExample
                    title="Prompt Excelente"
                    prompt="Atue como um professor de ciências experiente. Contexto: Estou ensinando fotossíntese para uma turma de 7º ano em uma escola pública de Florianópolis. Os alunos têm acesso limitado a laboratório. Crie uma sequência didática de 3 aulas (50min cada) sobre fotossíntese que inclua: 1) Atividade investigativa inicial, 2) Experimento com materiais caseiros, 3) Conexão com a Mata Atlântica local. Para cada aula, forneça: objetivos BNCC, materiais necessários, passo a passo detalhado e forma de avaliação. Use linguagem apropriada para adolescentes e inclua elementos da cultura catarinense."
                    rating={5}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Recursos Adicionais */}
        <section className="bg-gradient-to-r from-green-600 to-blue-600 text-white py-20">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-8">
              📖 Quer Aprender Mais?
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <ResourceCard
                icon="🎓"
                title="Curso Completo"
                description="Domine todas as ferramentas de IA para educação"
                link="/curso"
              />
              <ResourceCard
                icon="👥"
                title="Comunidade"
                description="Conecte-se com outros professores inovadores"
                link="/comunidade"
              />
              <ResourceCard
                icon="💡"
                title="Exemplos Práticos"
                description="Veja casos reais por disciplina"
                link="/disciplinas"
              />
            </div>
            
            <Link
              href="/cadastro"
              className="inline-block bg-white text-blue-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition"
            >
              Começar Jornada IA
            </Link>
          </div>
        </section>
      </div>
    </>
  )
}

function ToolCard({ icon, title, description, features, link, category, free }: {
  icon: string
  title: string
  description: string
  features: string[]
  link: string
  category: string
  free: boolean
}) {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition">
      <div className="flex justify-between items-start mb-4">
        <div className="text-4xl">{icon}</div>
        <span className={`px-3 py-1 rounded-full text-xs font-medium ${
          free ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
        }`}>
          {free ? 'Gratuito' : 'Freemium'}
        </span>
      </div>
      
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      
      <div className="mb-4">
        <span className="text-xs font-medium text-blue-600 bg-blue-50 px-2 py-1 rounded">
          {category}
        </span>
      </div>
      
      <ul className="space-y-1 mb-6">
        {features.map((feature, index) => (
          <li key={index} className="text-sm text-gray-600 flex items-center">
            <span className="text-green-500 mr-2">✓</span>
            {feature}
          </li>
        ))}
      </ul>
      
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition text-center block"
      >
        Acessar Ferramenta →
      </a>
    </div>
  )
}

function CategorySection({ title, tools }: {
  title: string
  tools: { name: string; description: string; link: string; features: string[] }[]
}) {
  return (
    <div className="mb-12">
      <h3 className="text-2xl font-bold mb-6">{title}</h3>
      <div className="grid md:grid-cols-2 gap-6">
        {tools.map((tool, index) => (
          <div key={index} className="bg-gray-50 rounded-xl p-6">
            <div className="flex justify-between items-start mb-3">
              <h4 className="text-lg font-bold">{tool.name}</h4>
              <a
                href={tool.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
            <p className="text-gray-600 mb-3">{tool.description}</p>
            <div className="flex flex-wrap gap-2">
              {tool.features.map((feature, idx) => (
                <span key={idx} className="text-xs bg-white px-2 py-1 rounded">
                  {feature}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

function PromptTip({ letter, title, description, example }: {
  letter: string
  title: string
  description: string
  example: string
}) {
  return (
    <div className="flex gap-4">
      <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
        {letter}
      </div>
      <div className="flex-1">
        <h4 className="font-bold">{title}</h4>
        <p className="text-sm text-gray-600 mb-1">{description}</p>
        <p className="text-sm bg-blue-50 p-2 rounded italic">"{example}"</p>
      </div>
    </div>
  )
}

function PromptExample({ title, prompt, rating }: {
  title: string
  prompt: string
  rating: number
}) {
  return (
    <div className="border border-gray-200 rounded-lg p-4">
      <div className="flex justify-between items-center mb-2">
        <h4 className="font-bold">{title}</h4>
        <div className="flex">
          {[...Array(5)].map((_, i) => (
            <span key={i} className={`text-lg ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}>
              ★
            </span>
          ))}
        </div>
      </div>
      <p className="text-sm text-gray-700 bg-gray-50 p-3 rounded">{prompt}</p>
    </div>
  )
}

function ResourceCard({ icon, title, description, link }: {
  icon: string
  title: string
  description: string
  link: string
}) {
  return (
    <Link href={link} className="bg-white/10 rounded-xl p-6 hover:bg-white/20 transition">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-sm opacity-90">{description}</p>
    </Link>
  )
}