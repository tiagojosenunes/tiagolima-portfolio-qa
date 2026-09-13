import { ThemeToggle } from '@/components/ui/theme-toggle'
import {
  ArrowUpRight,
  Award,
  Bot,
  Briefcase,
  Check,
  ChevronRight,
  Code2,
  GitBranch,
  Gauge,
  Mail,
  Phone,
  ShieldCheck,
  Sparkles,
  Workflow,
  Zap,
} from 'lucide-react'

function GithubIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  )
}

function LinkedinIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.72a1.63 1.63 0 1 0 0 3.26 1.63 1.63 0 0 0 0-3.26z" />
    </svg>
  )
}

const mainTechs = [
  { title: 'Cypress & Appium', description: 'Automação Web e Mobile E2E' },
  { title: 'K6 & Postman', description: 'Testes de APIs, Carga e Performance' },
  { title: 'Agentes de IA', description: 'Aceleração de cenários e suítes de QA' },
]

const automationCards = [
  {
    icon: Code2,
    eyebrow: 'WEB / E2E',
    title: 'Automação Web com Cypress',
    stack: 'Cypress · POM · GitHub Actions',
    description: 'Suítes E2E para validação de fluxos críticos, autenticação por perfis e regressivos executados em pipeline.',
    repoUrl: 'https://github.com/tiagojose100/cypress-web-automation-e2e',
    mediumUrl: 'https://medium.com/@tiagojose.100.tj',
    tone: 'green',
  },
  {
    icon: Workflow,
    eyebrow: 'MOBILE / CROSS-PLATFORM',
    title: 'Automação Mobile',
    stack: 'Appium · Robot Framework · Android · IOS',
    description: 'Testes funcionais, de regressão e segurança em apps Android/iOS.',
    repoUrl: 'https://github.com/tiagojose100/mobile-automation-robot-appium',
    mediumUrl: 'https://medium.com/@tiagojose.100.tj',
    tone: 'blue',
  },
  {
    icon: Gauge,
    eyebrow: 'PERFORMANCE / API',
    title: 'Testes de Carga & APIs',
    stack: 'K6 · Postman · REST APIs · JSON',
    description: 'Validação de capacidade em servidores e sistemas de alta demanda (+100k usuários simultâneos).',
    repoUrl: 'https://github.com/tiagojose100/api-and-load-testing-k6',
    mediumUrl: 'https://medium.com/@tiagojose.100.tj',
    tone: 'amber',
  },
]

const hubCards = [
  { 
    number: '01', 
    title: 'Cultura Shift-Left Testing', 
    description: 'Qualidade antecipada desde o refinamento de requisitos e protótipos em Figma, reduzindo retrabalho e custos de correção na engenharia.', 
    icon: GitBranch,
    mediumUrl: 'https://medium.com/@tiagojose.100.tj',
  },
  { 
    number: '02', 
    title: 'Bug Lifecycle e Rastreabilidade', 
    description: 'Gestão ponta a ponta do ciclo de vida do defeito, desde a identificação e evidência com Jam.dev até a validação via Jira e Qase.', 
    icon: ShieldCheck,
    mediumUrl: 'https://medium.com/@tiagojose.100.tj',
  },
  { 
    number: '03', 
    title: 'Chapter de Qualidade', 
    description: 'Disseminação da cultura de QA entre squads, padronização de fluxos de testes e capacitação técnica contínua dos times.', 
    icon: Workflow,
    mediumUrl: 'https://medium.com/@tiagojose.100.tj',
  },
  { 
    number: '04', 
    title: 'Bug Bash Framework', 
    description: 'Estruturação de sessões exploratórias multissetoriais que engajam o time multidisciplinar para descobrir falhas antes do lançamento.', 
    icon: Zap,
    mediumUrl: 'https://medium.com/@tiagojose.100.tj',
  },
  { 
    number: '05', 
    title: 'Análise de Causa Raiz (RCA)', 
    description: 'Investigação das origens dos problemas recorrentes (Root Cause Analysis) para aplicação de melhorias preventivas.', 
    icon: ShieldCheck,
    mediumUrl: 'https://medium.com/@tiagojose.100.tj',
  },
  { 
    number: '06', 
    title: 'Agentes de IA para QA', 
    description: 'Aplicação de IA na aceleração da geração de cenários de teste, criação de massas de dados, documentação técnica e manutenção de scripts de automação.', 
    icon: Bot,
    mediumUrl: 'https://medium.com/@tiagojose.100.tj',
  },
]

const skillGroups = [
  { label: 'AUTOMAÇÃO', skills: ['Cypress', 'Robot Framework', 'Appium', 'Page Object Model'] },
  { label: 'APIs & PERF', skills: ['Postman', 'K6 (Load Testing)', 'APIs RESTful', 'HTTP / JSON', 'SQL / MySQL'] },
  { label: 'PROCESSOS', skills: ['Shift-Left', 'Bug Bash', 'BDD / Cucumber', 'Root Cause Analysis', 'Scrum / Kanban'] },
  { label: 'IA EM QA', skills: ['Agentes de IA', 'Prompt Engineering', 'Geração de Cenários', 'Manutenção de Testes', 'Documentação Técnica'] },
  { label: 'CI/CD & TOOLS', skills: ['GitHub Actions', 'Jira / Qase', 'Jam.dev', 'Google Lighthouse', 'Confluence'] },
]

function SectionLabel({ children }: { children: React.ReactNode }) {
  return <p className="mb-4 font-mono text-xs font-medium uppercase tracking-[0.22em] text-emerald-400">{children}</p>
}

export default function Page() {
  return (
    <main className="min-h-screen overflow-hidden bg-background text-foreground">
      {/* Header / Navegação */}
      <header className="sticky top-0 z-50 border-b border-border/60 bg-background/85 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-8">
          <a href="#top" className="flex items-center gap-3" aria-label="Tiago Lima, início">
            <span className="flex size-8 items-center justify-center rounded-lg bg-emerald-500 text-sm font-bold text-slate-950">TL</span>
            <span className="hidden text-sm font-semibold tracking-tight sm:inline">Tiago Lima <span className="text-muted-foreground">| Analista de QA</span></span>
          </a>
          <nav className="hidden items-center gap-8 text-sm text-muted-foreground md:flex" aria-label="Navegação principal">
            <a className="transition-colors hover:text-foreground" href="#automacoes">Projetos</a>
            <a className="transition-colors hover:text-foreground" href="#hub">QA Hub</a>
            <a className="transition-colors hover:text-foreground" href="#skills">Hard Skills</a>
            <a className="transition-colors hover:text-foreground" href="#experiencias">Experiências</a>
            <a className="transition-colors hover:text-foreground" href="#contato">Contatos</a>
          </nav>
          <div className="flex items-center gap-4">
            <ThemeToggle />
            <a 
              href="https://www.linkedin.com/in/tiagolimacc/" 
              target="_blank" 
              rel="noreferrer" 
              className="group flex items-center gap-2 text-sm font-medium text-emerald-400"
            >
              Conectar no LinkedIn <ArrowUpRight className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="top" className="relative mx-auto max-w-7xl px-6 pb-20 pt-16 lg:px-8 lg:pb-28 lg:pt-28">
        <div className="pointer-events-none absolute -right-20 top-10 size-96 rounded-full bg-emerald-400/5 blur-3xl" />
        
        <div className="flex flex-col-reverse gap-10 lg:flex-row lg:items-center lg:justify-between">
          {/* Lado Esquerdo: Apresentação */}
          <div className="relative max-w-3xl lg:w-7/12">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/5 px-3 py-1.5 font-mono text-xs text-emerald-300">
              <span className="size-1.5 rounded-full bg-emerald-400 animate-pulse" /> Testes Manuais & Automatizados
            </div>

            <p className="font-mono text-base font-medium text-emerald-400 sm:text-lg">
              Olá, me chamo Tiago Lima
            </p>

            <h1 className="mt-2 text-3xl font-extrabold tracking-tight text-foreground sm:text-5xl lg:text-6xl leading-tight">
              Analista de Qualidade de Software
            </h1>

            <p className="mt-6 text-base leading-relaxed text-muted-foreground sm:text-lg">
              Bacharelando em Ciência da Computação, atuo com testes manuais, automação (Web, Mobile e APIs), testes de carga e performance, além da validação de fluxos e processos. Estruturo a cultura Shift-Left, coordeno ações como Bug Bashs e desenvolvo Agentes de IA para acelerar as entregas de todo o time de desenvolvimento.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a 
                href="https://github.com/tiagojose100" 
                target="_blank" 
                rel="noreferrer" 
                className="inline-flex items-center gap-2 rounded-lg bg-emerald-500 px-5 py-3 text-sm font-semibold text-slate-950 transition-transform hover:-translate-y-0.5 hover:bg-emerald-400"
              >
                <GithubIcon className="size-4" /> Ver GitHub <ArrowUpRight className="size-3.5" />
              </a>
              <a 
                href="https://www.linkedin.com/in/tiagolimacc/" 
                target="_blank" 
                rel="noreferrer" 
                className="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-5 py-3 text-sm font-semibold text-foreground transition-colors hover:border-emerald-400/50 hover:text-emerald-300"
              >
                <LinkedinIcon className="size-4" /> LinkedIn <ArrowUpRight className="size-3.5" />
              </a>
            </div>
          </div>

          {/* Lado Direito: Foto de Perfil Redonda Aumentada */}
          <div className="relative flex justify-center lg:w-5/12">
            <div className="relative size-56 sm:size-80 lg:size-96 overflow-hidden rounded-full border-2 border-emerald-400/30 bg-card p-2 shadow-2xl shadow-emerald-500/10 transition-transform hover:scale-[1.02]">
              <img 
                src="/avatar.jpg" 
                alt="Tiago Lima" 
                className="size-full rounded-full object-cover" 
              />
            </div>
          </div>
        </div>

        <div className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-3">
          {mainTechs.map((item) => (
            <div key={item.title} className="bg-card px-6 py-6 sm:px-8">
              <p className="font-mono text-xl font-bold tracking-tight text-emerald-400 sm:text-2xl">{item.title}</p>
              <p className="mt-2 text-sm text-muted-foreground">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Seção 01: Projetos */}
      <section id="automacoes" className="border-t border-border bg-card/40">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <SectionLabel>01 / AUTOMAÇÕES E PROJETOS</SectionLabel>
              <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Alguns projetos de automação Web e Mobile</h2>
            </div>
            <p className="max-w-sm text-sm leading-6 text-muted-foreground">
              Projetos práticos de automação e testes de APIs.
            </p>
          </div>
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {automationCards.map(({ icon: Icon, eyebrow, title, stack, description, repoUrl, mediumUrl, tone }) => (
              <article key={title} className="group flex flex-col justify-between rounded-2xl border border-border bg-background p-4 transition-colors hover:border-emerald-400/40">
                <div>
                  <div className={`relative flex h-40 items-end overflow-hidden rounded-xl border border-border/70 p-5 ${tone === 'green' ? 'bg-emerald-400/5' : tone === 'blue' ? 'bg-slate-800/50' : 'bg-amber-400/5'}`}>
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,transparent_49%,hsl(var(--border)/0.35)_50%,transparent_51%),linear-gradient(to_bottom,transparent_49%,hsl(var(--border)/0.35)_50%,transparent_51%)] bg-[length:32px_32px]" />
                    <div className="relative flex size-12 items-center justify-center rounded-xl border border-emerald-400/20 bg-background text-emerald-400">
                      <Icon className="size-5" />
                    </div>
                  </div>
                  <div className="pt-5">
                    <p className="font-mono text-[10px] tracking-widest text-emerald-400">{eyebrow}</p>
                    <h3 className="mt-2 text-xl font-semibold">{title}</h3>
                    <p className="mt-1 font-mono text-xs text-muted-foreground">{stack}</p>
                    <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{description}</p>
                  </div>
                </div>
                <div className="pt-6 flex flex-col gap-3 border-t border-border/50 mt-4">
                  <a 
                    href={repoUrl} 
                    target="_blank" 
                    rel="noreferrer" 
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-emerald-400 hover:underline"
                  >
                    Ver repositório no GitHub <ChevronRight className="size-4" />
                  </a>
                  <a 
                    href={mediumUrl} 
                    target="_blank" 
                    rel="noreferrer" 
                    className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-muted-foreground hover:text-emerald-400 transition-colors"
                  >
                    Leia meu artigo no Medium <ArrowUpRight className="size-3.5" />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Seção 02: QA Knowledge Hub */}
      <section id="hub" className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <SectionLabel>02 / QA KNOWLEDGE HUB</SectionLabel>
            <h2 className="max-w-xl text-3xl font-semibold tracking-tight sm:text-4xl">Artigos, processos e cultura de qualidade.</h2>
          </div>
          <p className="max-w-sm text-sm leading-6 text-muted-foreground">
            Meus artigos técnicos e guias práticos publicados no Medium sobre metodologias de QA.
          </p>
        </div>
        
        <div className="mt-12 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {hubCards.map(({ number, title, description, icon: Icon, mediumUrl }) => (
            <article key={number} className="flex flex-col justify-between border-t border-border pt-5">
              <div>
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs text-emerald-400">{number}</span>
                  <Icon className="size-5 text-muted-foreground" />
                </div>
                <h3 className="mt-6 text-lg font-semibold leading-snug">{title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{description}</p>
              </div>
              <div className="mt-6 pt-2">
                <a 
                  href={mediumUrl} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-emerald-400 hover:underline"
                >
                  Em breve no Medium <ArrowUpRight className="size-3.5" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Seção 03: Skills */}
      <section id="skills" className="border-y border-border bg-card/40">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <SectionLabel>03 / HARD SKILLS</SectionLabel>
              <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Ferramentas e competências técnicas.</h2>
            </div>
            <p className="max-w-sm text-sm leading-6 text-muted-foreground">
              Tecnologias e metodologias que utilizo na garantia da qualidade de produtos SaaS e Mobile.
            </p>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-5">
            {skillGroups.map(({ label, skills }) => (
              <div key={label} className="rounded-xl border border-border bg-background p-5">
                <p className="font-mono text-[10px] font-medium tracking-widest text-emerald-400">{label}</p>
                <ul className="mt-5 flex flex-col gap-3">
                  {skills.map((skill) => (
                    <li key={skill} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Check className="size-3.5 text-emerald-400" />
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Seção 04: Experiências e Certificações */}
      <section id="experiencias" className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <SectionLabel>04 / EXPERIÊNCIAS E CERTIFICAÇÕES</SectionLabel>
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Trajetória Profissional & Qualificações.</h2>
          </div>
        </div>
        <div className="mt-12 rounded-2xl border border-border bg-card/60 p-8 sm:p-10">
          <div className="flex items-center gap-3 mb-4">
            <Briefcase className="size-5 text-emerald-400" />
            <h3 className="text-xl font-semibold text-foreground">Experiência Profissional</h3>
          </div>
          <p className="text-base leading-relaxed text-muted-foreground">
            Atuo na garantia de qualidade para produtos SaaS e Mobile de grande escala. Minha prática abrange desde testes manuais, funcionais e exploratórios até a automação E2E (Web e Mobile), validação de APIs RESTful e testes de carga e performance com K6. Lidero iniciativas de cultura de qualidade com Chapters, Bug Bashs e aplicação da cultura Shift-Left, além de desenvolver Agentes de IA que aceleram a geração de testes, documentação e manutenção de scripts.
          </p>

          <div className="my-8 border-t border-border/60" />

          <div className="flex items-center gap-3 mb-4">
            <Award className="size-5 text-emerald-400" />
            <h3 className="text-xl font-semibold text-foreground">Formação & Certificações</h3>
          </div>
          <p className="text-base leading-relaxed text-muted-foreground">
            Bacharel em Ciência da Computação (UNIFAP). Possuo cursos e experiência real em Automação Web e APIs com Cypress, Automação Mobile (Android/iOS) com Robot Framework e Appium, Testes de Performance com K6 e Banco de Dados MySQL, além de estar em andamento com a certificação CTFL (ISTQB).
          </p>

          <div className="mt-8 pt-6 border-t border-border/40">
            <p className="font-mono text-sm font-medium text-emerald-400">
              Para saber melhor sobre minha trajetória e qualificações, entre em contato comigo e veja meu currículo.
            </p>
          </div>
        </div>
      </section>

      {/* Seção 05: Contato / Footer */}
      <footer id="contato" className="mx-auto flex max-w-7xl flex-col gap-10 px-6 py-16 lg:px-8 border-t border-border">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <div>
            <SectionLabel>05 / CONTATO</SectionLabel>
            <h2 className="max-w-lg text-3xl font-semibold tracking-tight sm:text-4xl">Vamos conversar sobre Qualidade de Software</h2>
          </div>
          <div className="flex flex-col gap-3">
            <a href="mailto:tiagojose.100.tj@gmail.com" className="group flex items-center gap-2 text-base text-muted-foreground hover:text-emerald-400">
              <Mail className="size-4 text-emerald-400" /> tiagojose.100.tj@gmail.com
            </a>
            <a href="https://wa.me/5596981164006" target="_blank" rel="noreferrer" className="group flex items-center gap-2 text-base text-muted-foreground hover:text-emerald-400">
              <Phone className="size-4 text-emerald-400" /> (96) 98116-4006
            </a>
          </div>
        </div>
        <div className="flex flex-col justify-between gap-5 border-t border-border pt-6 text-xs text-muted-foreground sm:flex-row">
          <p>© 2026 Tiago Lima. Analista de Qualidade de Software.</p>
          <div className="flex items-center gap-2 font-mono text-emerald-400">
            <Sparkles className="size-3.5" /> Next.js & Tailwind CSS
          </div>
        </div>
      </footer>
    </main>
  )
}