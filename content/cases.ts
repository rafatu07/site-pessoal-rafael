export type WorkCase = {
  slug: string;
  title: string;
  problem: string;
  lead: string;
  context: string;
  role: string;
  solution: string;
  outcome: string;
  technologies: string[];
  href?: string;
  linkLabel?: string;
  image?: string;
  imageAlt?: string;
};

export type Mention = {
  title: string;
  description: string;
  href: string;
};

export const featuredSlugs = [
  "eproc",
  "gestao-de-eventos",
  "ta-na-mao-menu",
  "monaco-automoveis",
  "meu-prato-scan",
] as const;

export const cases: WorkCase[] = [
  {
    slug: "eproc",
    title: "eProc",
    problem:
      "O andamento dos processos administrativos se perdia entre setores, sem um histórico confiável.",
    lead: "Um sistema para que cada setor enxergue em que fase está um processo e registre o que aconteceu.",
    context:
      "A Prefeitura de Taubaté precisava de controle interno do andamento dos processos por setor. Servidores precisavam ver a fase de cada processo e atualizar o status conforme o fluxo interno, inclusive quando o processo já existia fora do sistema.",
    role: "Desenvolvimento da aplicação: autenticação, painéis por setor, permissões, registro de andamentos, histórico e exportação.",
    solution:
      "Sistema web em React e TypeScript, com Firebase. Os processos ficam organizados em painéis por setor, com andamentos datados, observações, histórico com auditoria, filtros, busca e exportação para Excel. O acesso segue perfis, e as movimentações ficam rastreadas.",
    outcome:
      "O sistema está em uso no acompanhamento de processos administrativos por setor, com o histórico das movimentações. Não há número publicado de processos ou de tempo reduzido.",
    technologies: ["React", "TypeScript", "Firebase"],
    href: "https://sistemaprocessos.taubate.sp.gov.br/",
    linkLabel: "Ver o sistema",
    image: "/images/eproc.jpeg",
    imageAlt: "Interface do eProc em um computador, com o acompanhamento de processos por setor.",
  },
  {
    slug: "gestao-de-eventos",
    title: "Gestão de Eventos",
    problem:
      "Inscrição, presença e certificado de eventos institucionais não cabiam no mesmo fluxo.",
    lead: "Uma plataforma para cadastrar o evento, receber inscrições, registrar a presença e emitir o certificado.",
    context:
      "A Prefeitura de Taubaté e a Escola de Governo precisavam conduzir eventos com inscrição, controle de presença e emissão de certificado sem espalhar essas etapas em controles separados.",
    role: "Desenvolvimento da plataforma, da estrutura de eventos e participantes ao check-in digital e à emissão dos certificados.",
    solution:
      "Aplicação em Next.js e TypeScript, com autenticação, cadastro de eventos, inscrições, check-in por QR Code e geração de certificados em PDF. Os dados ficam no Firebase.",
    outcome:
      "A plataforma é usada pela Prefeitura e pela Escola de Governo para eventos, inscrições, presença e certificados. Não há métrica publicada de público ou de certificados emitidos.",
    technologies: ["Next.js", "TypeScript", "React", "Firebase"],
    href: "https://sistema-eventos-nu.vercel.app/login",
    linkLabel: "Ver o sistema",
    image: "/images/gestao-eventos.jpeg",
    imageAlt: "Interface do sistema de gestão de eventos, com a lista de eventos e certificados.",
  },
  {
    slug: "menu-de-modulos",
    title: "Menu de Módulos",
    problem:
      "Empenhos e contas de telefonia, energia e saneamento eram difíceis de reunir na hora de montar as ordens de pagamento.",
    lead: "Um sistema para organizar os valores que a Contabilidade e a Tesouraria precisam lançar e pagar.",
    context:
      "A Contabilidade e a Tesouraria da Prefeitura de Taubaté precisavam identificar valores de empenhos e contas bancárias desses serviços, para elaborar as ordens de pagamento com menos retrabalho de conferência.",
    role: "Desenvolvimento do sistema que organiza esses valores no fluxo de pagamento.",
    solution:
      "Módulos de telefonia, energia e saneamento reúnem valores, empenhos e contas usados na elaboração das ordens de pagamento e no lançamento para a Tesouraria.",
    outcome:
      "A informação que alimenta as ordens de pagamento desses serviços fica organizada em um só lugar. Não há métrica publicada sobre o ganho de tempo.",
    technologies: [],
    href: "https://menu-modulos.vercel.app/",
    linkLabel: "Ver o sistema",
    image: "/images/menu-modulos.jpeg",
    imageAlt: "Tela dos módulos de lançamentos de telefonia, energia e saneamento.",
  },
  {
    slug: "ta-na-mao-menu",
    title: "Tá na Mão Menu",
    problem:
      "Cardápios impressos encareciam qualquer mudança de preço e desatualizavam rápido.",
    lead: "Um cardápio digital que o estabelecimento atualiza, com um modelo de uso recorrente.",
    context:
      "Restaurantes e lanchonetes dependiam de reimpressão para alterar o cardápio. A proposta foi um cardápio digital atualizável, com gestão própria de produtos e categorias e uma forma de cobrança recorrente.",
    role: "Da necessidade do negócio à aplicação em produção: definição do que o sistema precisava fazer, desenvolvimento, integração de pagamento e publicação.",
    solution:
      "Aplicação em Next.js e TypeScript, com painel para produtos e categorias, cardápio para o cliente e integração com o Mercado Pago para assinaturas. O pedido pode seguir para o WhatsApp.",
    outcome:
      "A plataforma está em produção, com cardápios atualizáveis e cobrança recorrente pelo Mercado Pago. Não há número publicado de estabelecimentos ou de pedidos.",
    technologies: ["Next.js", "TypeScript", "Mercado Pago", "Firebase"],
    href: "https://tanamaomenu.vercel.app/",
    linkLabel: "Visitar o projeto",
    image: "/images/ta-na-mao-menu.jpeg",
    imageAlt: "Apresentação do Tá na Mão Menu, com o cardápio no celular e o painel de pedidos.",
  },
  {
    slug: "monaco-automoveis",
    title: "Mônaco Automóveis",
    problem: "A oferta de veículos e o contato com interessados estavam dispersos.",
    lead: "Um site para reunir o portfólio da revenda e abrir um caminho direto de conversa.",
    context:
      "A Mônaco Automóveis, revenda em Taubaté, precisava apresentar os veículos e facilitar o contato, sem depender só de telefone e de visita à loja.",
    role: "Levantamento das necessidades e desenvolvimento do site, com catálogo e caminho de contato.",
    solution:
      "Site em Next.js, com catálogo filtrável por categoria e preço e contato pelo WhatsApp a partir de cada veículo.",
    outcome:
      "O site está em produção, com o portfólio reunido e o contato pelo WhatsApp. Não há métrica publicada de visitas ou de conversas iniciadas.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
    href: "https://monacoautomoveis.com.br",
    linkLabel: "Visitar o site",
    image: "/images/monaco.jpeg",
    imageAlt: "Site da Mônaco Automóveis no computador e no celular, com o catálogo de veículos.",
  },
  {
    slug: "bairros-vivos",
    title: "Observatório Bairros Vivos",
    problem:
      "Indicadores dos bairros e os atendimentos feitos nos eventos territoriais não estavam no mesmo lugar.",
    lead: "Um observatório para ver os bairros e registrar o que a população procura em cada evento.",
    context:
      "O Observatório Bairros Vivos reúne indicadores e dados dos bairros de Taubaté. A ideia dos eventos era que as secretarias registrassem os atendimentos feitos nas tendas, para que as demandas mais procuradas pudessem ser lidas por bairro.",
    role: "Desenvolvimento do sistema no contexto da Prefeitura de Taubaté.",
    solution:
      "Painel com indicadores territoriais e registro de atendimentos vinculados aos eventos Bairros Vivos, para apoiar a leitura das demandas por região.",
    outcome:
      "O observatório publica indicadores dos bairros e foi concebido para acompanhar os atendimentos dos eventos. Não há resultado quantitativo publicado.",
    technologies: [],
    href: "https://bairrosvivos.taubate.sp.gov.br/",
    linkLabel: "Ver o observatório",
    image: "/images/bairros-vivos.jpeg",
    imageAlt: "Painel público do Observatório Bairros Vivos, com indicadores de atendimento.",
  },
  {
    slug: "meu-prato-scan",
    title: "Meu Prato Scan",
    problem:
      "Estudo de integração: a foto de um alimento segue para uma API e volta como estimativa de calorias.",
    lead: "A resposta volta como estimativa de calorias.",
    context: "",
    role: "",
    solution: "",
    outcome: "",
    technologies: [],
    href: "https://meupratoscan.vercel.app",
    linkLabel: "Ver o projeto",
  },
];

export const featuredCases = featuredSlugs.flatMap((slug) => {
  const item = cases.find((entry) => entry.slug === slug);
  return item ? [item] : [];
});

export const mentions: Mention[] = [
  {
    title: "Atribuição de Aulas",
    description:
      "Portal da Secretaria Municipal de Educação para o processo de atribuição de aulas da rede.",
    href: "https://gestao-atribuicao-aula.vercel.app/",
  },
  {
    title: "Educa Participa",
    description: "Votação pública de projetos das escolas da rede municipal de Taubaté.",
    href: "https://educa-participa.vercel.app/",
  },
  {
    title: "Lista Telefônica",
    description:
      "Consulta de telefones, ramais e endereços das unidades e setores da prefeitura.",
    href: "https://lista-telefonica-pref.vercel.app/",
  },
  {
    title: "PSE Taubaté",
    description:
      "Painel do Programa Saúde na Escola para acompanhar as ações nas unidades escolares.",
    href: "https://sistema-pse.vercel.app/login",
  },
  {
    title: "Escola de Governo",
    description: "Portal de cursos e certificados para servidores, ainda em fase de MVP.",
    href: "https://escola-governo.vercel.app/",
  },
  {
    title: "Calculadora de IPTU",
    description:
      "Simuladores de IPTU e taxa do lixo para uso interno do Planejamento.",
    href: "https://calculadora.taubate.sp.gov.br/manutencao",
  },
  {
    title: "Check-ins",
    description:
      "Check-in por proximidade em pontos da cidade, com progresso para quem se cadastra.",
    href: "https://sistema-emblemas.vercel.app/",
  },
  {
    title: "Processo Fácil",
    description: "Protótipo de processos digitais, ainda com dados fictícios.",
    href: "https://processo-facil.vercel.app/",
  },
  {
    title: "Menu de Módulos",
    description:
      "Um sistema para organizar os valores que a Contabilidade e a Tesouraria precisam lançar e pagar.",
    href: "https://menu-modulos.vercel.app/",
  },
  {
    title: "Observatório Bairros Vivos",
    description:
      "Um observatório para ver os bairros e registrar o que a população procura em cada evento.",
    href: "https://bairrosvivos.taubate.sp.gov.br/",
  },
];

export function getCase(slug: string) {
  return cases.find((item) => item.slug === slug);
}
