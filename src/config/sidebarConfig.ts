// Sidebar configuration for each main navigation section
// Maps navbar routes to their specific sidebar items

export type SidebarItem = {
  label: string;
  slug?: string;
  items?: SidebarItem[];
  collapsed?: boolean;
};

export type SidebarSection = {
  label: string;
  items: SidebarItem[];
};

// Define which URL paths belong to which sidebar section
export const sidebarSections: Record<string, SidebarSection[]> = {
  // Home page - minimal sidebar or none
  '/': [],

  // Feature Guide section
  '/feature-guide': [
    {
      label: 'Guia de Recursos do Site',
      items: [
        { label: 'Visão Geral', slug: 'feature-guide' },
      ],
    },
  ],

  // Learning Course section
  '/learning-course': [
    {
      label: 'Curso de Aprendizado',
      items: [
        { label: 'Visão Geral', slug: 'learning-course' },
        {
          label: 'Configuração do Curso',
          collapsed: true,
          items: [
            { label: 'Novo no CAD', slug: 'learning-course/course-setup/new-to-cad' },
            {
              label: 'Novo no Onshape',
              collapsed: true,
              items: [
                { label: 'Criação de Conta', slug: 'learning-course/course-setup/new-to-onshape/account-setup' },
                { label: 'Ajuste de Desempenho', slug: 'learning-course/course-setup/new-to-onshape/performance-tuning' },
                { label: 'Página de Documentos', slug: 'learning-course/course-setup/new-to-onshape/documents-page' },
              ],
            },
            {
              label: 'Ferramentas Obrigatórias',
              collapsed: true,
              items: [
                { label: 'Biblioteca de Peças', slug: 'learning-course/course-setup/required-course-tools/part-library' },
                { label: 'Recursos Personalizados (FeatureScripts)', slug: 'learning-course/course-setup/required-course-tools/featurescripts' },
              ],
            },
          ],
        },
        {
          label: 'Etapa 1',
          collapsed: true,
          items: [
            { label: 'Introdução ao Curso', slug: 'learning-course/stage1/introduction' },
            { label: 'Foco no Aprendizado Contínuo', slug: 'learning-course/stage1/1a/focusing-on-improvement' },
            {
              label: 'A: Fundamentos do Onshape',
              collapsed: true,
              items: [
                {
                  label: 'Seção 1: Fundamentos de Part Studio',
                  collapsed: true,
                  items: [
                    { label: 'Introdução e Configuração', slug: 'learning-course/stage1/1a/section1-setup' },
                    { label: 'Exercício 0: Navegação', slug: 'learning-course/stage1/1a/section1-exercise0' },
                    { label: 'Exercício 1: Primeiros Tubos', slug: 'learning-course/stage1/1a/section1-exercise1' },
                    { label: 'Exercício 2: Mais Tubos', slug: 'learning-course/stage1/1a/section1-exercise2' },
                    { label: 'Exercício 3: Noções Básicas de Esboço', slug: 'learning-course/stage1/1a/section1-exercise3' },
                    { label: 'Exercício 4: Estrutura do Drivetrain', slug: 'learning-course/stage1/1a/section1-exercise4' },
                    { label: 'Exercício 5: Estrutura em Caixa', slug: 'learning-course/stage1/1a/section1-exercise5' },
                    { label: 'Exercício 6: Estrutura Triangular', slug: 'learning-course/stage1/1a/section1-exercise6' },
                  ],
                },
                {
                  label: 'Seção 2: Chapas e Gussets',
                  collapsed: true,
                  items: [
                    { label: 'Exercício 1: Fluxo com Chapas', slug: 'learning-course/stage1/1a/section2-exercise1' },
                    { label: 'Exercício 2: Gusset', slug: 'learning-course/stage1/1a/section2-exercise2' },
                    { label: 'Exercício 3: Chapas e Gussets da Superestrutura', slug: 'learning-course/stage1/1a/section2-exercise3' },
                    { label: 'Exercício 4: Montagem de Motores', slug: 'learning-course/stage1/1a/section2-exercise4' },
                  ],
                },
                {
                  label: 'Seção 3: Montagens (Assemblies)',
                  collapsed: true,
                  items: [
                    { label: 'Exercício 1: Rebites', slug: 'learning-course/stage1/1a/section3-exercise1' },
                    { label: 'Exercício 2: Módulo Swerve', slug: 'learning-course/stage1/1a/section3-exercise2' },
                    { label: 'Exercício 3: Fixação de Gussets', slug: 'learning-course/stage1/1a/section3-exercise3' },
                    { label: 'Exercício 4: Estrutura Completa', slug: 'learning-course/stage1/1a/section3-exercise4' },
                    { label: 'Exercício 5: Finalizando o Chassi', slug: 'learning-course/stage1/1a/section3-exercise5' },
                  ],
                },
              ],
            },
            {
              label: 'B: Transmissão de Potência',
              collapsed: true,
              items: [
                { label: 'Introdução', slug: 'learning-course/stage1/1b/introduction' },
                { label: 'Motores', slug: 'learning-course/stage1/1b/motors' },
                { label: 'Eixos e Rolamentos', slug: 'learning-course/stage1/1b/shafts-bearings' },
                { label: 'Torque e Velocidade', slug: 'learning-course/stage1/1b/torque-speed' },
                { label: 'Noções Básicas de Engrenagens', slug: 'learning-course/stage1/1b/gears' },
                { label: 'Exercício 1: Redutora Simples', slug: 'learning-course/stage1/1b/exercise1' },
                { label: 'Exercício 2: Redutora de Dois Estágios', slug: 'learning-course/stage1/1b/exercise2' },
                { label: 'Noções Básicas de Correias e Polias', slug: 'learning-course/stage1/1b/belts' },
                { label: 'Noções Básicas de Correntes e Rodas Dentadas', slug: 'learning-course/stage1/1b/chain' },
                { label: 'Exercício 3: Redutora com Engrenagens e Correia', slug: 'learning-course/stage1/1b/exercise3' },
                { label: 'Resumo', slug: 'learning-course/stage1/1b/summary' },
              ],
            },
            {
              label: 'C: Prática de Mecanismos',
              collapsed: true,
              items: [
                { label: 'Introdução', slug: 'learning-course/stage1/1c/introduction' },
                { label: 'Visão Geral dos Exercícios', slug: 'learning-course/stage1/1c/exercise-overview' },
                { label: 'Exercício 1: Intake Plano', slug: 'learning-course/stage1/1c/exercise1' },
                { label: 'Exercício 2: Roletes com Dead Axle', slug: 'learning-course/stage1/1c/exercise2' },
                { label: 'Exercício 3: Shooter', slug: 'learning-course/stage1/1c/exercise3' },
                { label: 'Exercício 4: Gancho Telescópico', slug: 'learning-course/stage1/1c/exercise4' },
                { label: 'Exercício 5: Caixa de Redução Invertida', slug: 'learning-course/stage1/1c/exercise5' },
                { label: 'Exercício 6: Inversão de Sentido', slug: 'learning-course/stage1/1c/exercise6' },
                { label: 'Exercício 7: Roletes Verticais', slug: 'learning-course/stage1/1c/exercise7' },
                { label: 'Exercício 8: Centralização no Indexer', slug: 'learning-course/stage1/1c/exercise8' },
                { label: 'Resumo', slug: 'learning-course/stage1/1c/summary' },
              ],
            },
            {
              label: 'D: Metodologia de Projeto',
              collapsed: true,
              items: [
                { label: 'Introdução', slug: 'learning-course/stage1/1d/introduction' },
                { label: 'Projeto Top-Down', slug: 'learning-course/stage1/1d/top-down-design' },
                { label: 'Visão Geral do Projeto', slug: 'learning-course/stage1/1d/project-overview' },
                { label: 'Esboço de Layout (Layout Sketch)', slug: 'learning-course/stage1/1d/layout-sketch' },
                { label: 'Modelagem de Peças (Part Studio)', slug: 'learning-course/stage1/1d/part-modeling' },
                { label: 'Montagem (Assembly)', slug: 'learning-course/stage1/1d/assembly-modeling' },
                { label: 'Adicionando Mais Componentes', slug: 'learning-course/stage1/1d/adding-components' },
                { label: 'Montagem Principal (Top Level)', slug: 'learning-course/stage1/1d/top-level-assembly' },
                { label: 'Resumo', slug: 'learning-course/stage1/1d/summary' },
              ],
            },
            {
              label: 'E: Fluxo de Subsistemas',
              collapsed: true,
              items: [
                { label: 'Introdução', slug: 'learning-course/stage1/1e/introduction' },
                { label: 'Visão Geral do Projeto', slug: 'learning-course/stage1/1e/project-overview' },
                { label: 'Fixação da Bateria', slug: 'learning-course/stage1/1e/battery-mounting' },
                { label: 'Exercício 1: Suporte de Bateria', slug: 'learning-course/stage1/1e/exercise1' },
                { label: 'Eletrônica', slug: 'learning-course/stage1/1e/electronics' },
                { label: 'Exercício 2: Fixação da Eletrônica', slug: 'learning-course/stage1/1e/exercise2' },
                { label: 'Exercício 3: Alívio de Peso no Bellypan', slug: 'learning-course/stage1/1e/exercise3' },
                { label: 'Exercício 4: Bumpers (Para-choques)', slug: 'learning-course/stage1/1e/exercise4' },
                { label: 'Exercício 5: Fixação de Bumpers', slug: 'learning-course/stage1/1e/exercise5' },
                { label: 'Revisão e Resumo', slug: 'learning-course/stage1/1e/review-summary' },
              ],
            },
          ],
        },
        {
          label: 'Etapa 2',
          collapsed: true,
          items: [
            {
              label: 'A: Shooter Básico',
              collapsed: true,
              items: [
                { label: 'Introdução', slug: 'learning-course/stage2/2a/introduction' },
                { label: 'Visão Geral do Projeto', slug: 'learning-course/stage2/2a/project-overview' },
                {
                  label: 'Conceitos de Engenharia',
                  collapsed: true,
                  items: [
                    { label: 'Rigidez Estrutural', slug: 'learning-course/stage2/2a/structure-rigidity' },
                    { label: 'Trajetória da Bola', slug: 'learning-course/stage2/2a/ball-trajectory' },
                    { label: 'Velocidade de Saída', slug: 'learning-course/stage2/2a/exit-velocity' },
                    { label: 'Compressão e Envolvimento', slug: 'learning-course/stage2/2a/compression-wrap' },
                    { label: 'Controle de Spin (Giro)', slug: 'learning-course/stage2/2a/spin-control' },
                    { label: 'Atrito e Eficiência', slug: 'learning-course/stage2/2a/friction-efficiency' },
                  ],
                },
                { label: 'Esboço de Layout', slug: 'learning-course/stage2/2a/layout-sketch' },
                { label: 'Part Studio', slug: 'learning-course/stage2/2a/part-studio' },
                { label: 'Montagem', slug: 'learning-course/stage2/2a/assembly' },
                { label: 'Resumo', slug: 'learning-course/stage2/2a/summary' },
              ],
            },
            {
              label: 'B: Pivô com Dead Axle',
              collapsed: true,
              items: [
                { label: 'Introdução', slug: 'learning-course/stage2/2b/introduction' },
                { label: 'Visão Geral do Projeto', slug: 'learning-course/stage2/2b/project-overview' },
                {
                  label: 'Conceitos de Engenharia',
                  collapsed: true,
                  items: [
                    { label: 'Resistência Mecânica', slug: 'learning-course/stage2/2b/strength' },
                    { label: 'Atrito', slug: 'learning-course/stage2/2b/friction' },
                    { label: 'Transmissão de Potência', slug: 'learning-course/stage2/2b/power-transmission' },
                    { label: 'Tensionamento', slug: 'learning-course/stage2/2b/tensioning' },
                    { label: 'Folga Mecânica (Backlash)', slug: 'learning-course/stage2/2b/backlash' },
                  ],
                },
                { label: 'Esboço de Layout', slug: 'learning-course/stage2/2b/layout-sketch' },
                { label: 'Part Studio', slug: 'learning-course/stage2/2b/part-studio' },
                { label: 'Montagem', slug: 'learning-course/stage2/2b/assembly' },
                { label: 'Resumo', slug: 'learning-course/stage2/2b/summary' },
              ],
            },
            {
              label: 'C: Intake Slapdown',
              collapsed: true,
              items: [
                { label: 'Introdução', slug: 'learning-course/stage2/2c/introduction' },
                { label: 'Visão Geral do Projeto', slug: 'learning-course/stage2/2c/project-overview' },
                {
                  label: 'Conceitos de Engenharia',
                  collapsed: true,
                  items: [
                    { label: 'Regras de Ouro de Intake', slug: 'learning-course/stage2/2c/intake-golden-rules' },
                    { label: 'Robustez Mecânica', slug: 'learning-course/stage2/2c/robustness' },
                    { label: 'Pivô de Articulação', slug: 'learning-course/stage2/2c/pivot' },
                    { label: 'Roletes', slug: 'learning-course/stage2/2c/rollers' },
                    { label: 'Eixos Zumbi (Zombie Axles)', slug: 'learning-course/stage2/2c/zombie-axles' },
                  ],
                },
                { label: 'Esboço de Layout', slug: 'learning-course/stage2/2c/layout-sketch' },
                { label: 'Part Studio', slug: 'learning-course/stage2/2c/part-studio' },
                { label: 'Montagem', slug: 'learning-course/stage2/2c/assembly' },
                { label: 'Resumo', slug: 'learning-course/stage2/2c/summary' },
              ],
            },
            {
              label: 'D: Elevador em Cascata',
              collapsed: true,
              items: [
                { label: 'Introdução', slug: 'learning-course/stage2/2d/introduction' },
                { label: 'Visão Geral do Projeto', slug: 'learning-course/stage2/2d/project-overview' },
                {
                  label: 'Conceitos de Engenharia',
                  collapsed: true,
                  items: [
                    { label: 'Blocos de Rolamento (Elevator Blocks)', slug: 'learning-course/stage2/2d/elevator-blocks' },
                    { label: 'Fixação de Corrente', slug: 'learning-course/stage2/2d/chain-attachment' },
                    { label: 'Amarração e Cabos (Rigging)', slug: 'learning-course/stage2/2d/rigging' },
                    { label: 'Grampos de Cabo', slug: 'learning-course/stage2/2d/cable-clamp' },
                    { label: 'Terminações de Cabo', slug: 'learning-course/stage2/2d/cable-ends' },
                    { label: 'Caixa de Redução e Tração', slug: 'learning-course/stage2/2d/drive-system' },
                  ],
                },
                { label: 'Esboço de Layout', slug: 'learning-course/stage2/2d/layout-sketch' },
                { label: 'Part Studio', slug: 'learning-course/stage2/2d/part-studio' },
                { label: 'Montagem', slug: 'learning-course/stage2/2d/assembly' },
                { label: 'Resumo', slug: 'learning-course/stage2/2d/summary' },
              ],
            },
          ],
        },
        { label: 'Próximos Passos', slug: 'learning-course/next-steps' },
      ],
    },
  ],

  // Educator's Guide section
  '/educators-guide': [
    {
      label: "Guia do Educador",
      items: [
        { label: 'Introdução', slug: 'educators-guide/introduction' },
        { label: 'As Etapas', slug: 'educators-guide/introduction/the-stages' },
        { label: 'Preparação do Instrutor', slug: 'educators-guide/introduction/preparation' },
        { label: 'Etapa 0', slug: 'educators-guide/stage0/overview' },
        {
          label: 'Etapa 1',
          collapsed: true,
          items: [
            { label: 'Visão Geral', slug: 'educators-guide/stage1' },
            { label: 'Etapa 1A', slug: 'educators-guide/stage1/stage1a' },
            { label: 'Etapa 1B', slug: 'educators-guide/stage1/stage1b' },
            { label: 'Etapa 1C', slug: 'educators-guide/stage1/stage1c' },
            { label: 'Etapa 1D', slug: 'educators-guide/stage1/stage1d' },
            { label: 'Etapa 1E', slug: 'educators-guide/stage1/stage1e' },
          ],
        },
      ],
    },
  ],

  // Design Handbook section
  '/design-handbook': [
    {
      label: 'Manual de Projeto',
      items: [
        { label: 'Visão Geral', slug: 'design-handbook' },
        {
          label: 'Estrutura e Ferragens',
          collapsed: true,
          items: [
            { label: 'Estrutura', slug: 'design-handbook/structure/structure' },
            { label: 'Materiais', slug: 'design-handbook/structure/materials' },
            { label: 'Fixadores e Parafusos', slug: 'design-handbook/structure/fasteners' },
            { label: 'Introdução à Impressão 3D', slug: 'design-handbook/structure/intro-to-3d-printing' },
            { label: 'Design para Impressão 3D', slug: 'design-handbook/structure/design-for-3d-printing' },
          ],
        },
        {
          label: 'Transmissão de Potência',
          collapsed: true,
          items: [
            { label: 'Componentes de Movimento', slug: 'design-handbook/power-transmission/motion-components' },
          ],
        },
        {
          label: 'Artigos de Design',
          collapsed: true,
          items: [
            { label: 'Projetando para Controlabilidade', slug: 'design-handbook/design-writeups/designing-for-controllability' },
          ],
        },
      ],
    },
  ],

  // Mechanism Examples section
  '/mechanism-examples': [
    {
      label: 'Exemplos de Mecanismos',
      items: [
        { label: 'Visão Geral', slug: 'mechanism-examples' },
        {
          label: 'Bases de Tração (Drivebases)',
          collapsed: true,
          items: [
            {
              label: 'Swerve',
              collapsed: true,
              items: [
                { label: 'Visão Geral', slug: 'mechanism-examples/drivebase/swerve' },
                { label: "Drivebase do 2910 (Charged Up)", slug: 'mechanism-examples/drivebase/swerve/2910_2023_dt' },
              ],
            },
          ],
        },
        {
          label: 'Intakes',
          collapsed: true,
          items: [
            {
              label: 'Intakes Articulados (Pivoting)',
              slug: 'mechanism-examples/intake/slapdown',
              collapsed: true,
              items: [],
            },
            {
              label: 'Intakes por Articulação (Linkage)',
              slug: 'mechanism-examples/intake/linkage',
              collapsed: true,
              items: [],
            },
          ],
        },
        {
          label: 'Manipulação de Elementos de Jogo',
          collapsed: true,
          items: [
            {
              label: 'Shooters',
              collapsed: true,
              items: [
                { label: 'Visão Geral', slug: 'mechanism-examples/shooter' },
                { label: "Shooter do 1678 (Rapid React)", slug: 'mechanism-examples/shooter/1678_2022_shooter' },
              ],
            },
          ],
        },
        {
          label: 'Extensões Lineares',
          collapsed: true,
          items: [
            {
              label: 'Elevadores Contínuos',
              slug: 'mechanism-examples/elevator/continuous',
              collapsed: true,
              items: [],
            },
            {
              label: 'Elevadores em Cascata',
              slug: 'mechanism-examples/elevator/cascade',
              collapsed: true,
              items: [],
            },
          ],
        },
        {
          label: 'Mecanismos Rotativos',
          collapsed: true,
          items: [
            {
              label: 'Pivôs',
              collapsed: true,
              items: [
                { label: 'Visão Geral', slug: 'mechanism-examples/pivots' },
                { label: 'Pivô em Estrutura A do 6328', slug: 'mechanism-examples/pivots/6328_2023_pivot' },
                { label: 'Pivô com Dead Axle do 2910', slug: 'mechanism-examples/pivots/2910_2023_pivot' },
              ],
            },
          ],
        },
      ],
    },
  ],

  // Best Practices section
  '/best-practices': [
    {
      label: 'Boas Práticas',
      items: [
        { label: 'Visão Geral', slug: 'best-practices' },
        { label: 'Configuração do Documento', slug: 'best-practices/document-setup' },
        { label: 'Configuração de Sub-Documentos', slug: 'best-practices/sub-document-setup' },
        { label: 'Boas Práticas de Esboço de Layout', slug: 'best-practices/master-sketch-setup' },
        { label: 'Boas Práticas de Part Studio', slug: 'best-practices/feature-tree-setup' },
        { label: 'Boas Práticas de Montagem (Assembly)', slug: 'best-practices/assembly-setup' },
      ],
    },
  ],

  // Contribution section
  '/contribution': [
    {
      label: 'Contribuição',
      items: [
        { label: 'Formas de Contribuir', slug: 'contribution/methods-of-contributing' },
        { label: 'Adicionando uma Página', slug: 'contribution/adding-a-page' },
        { label: 'Contribuindo com Exemplos de Mecanismos', slug: 'contribution/mechanism-contribution' },
        { label: 'Guia de Estilo', slug: 'contribution/styleguide' },
        { label: 'Colaboradores', slug: 'contribution/contributors' },
      ],
    },
  ],

  // Resources section (content lives at /resources but navbar says "Other Resources")
  '/resources': [
    {
      label: 'Recursos',
      items: [
        { label: 'Visão Geral', slug: 'resources' },
        { label: 'Glossário', slug: 'resources/glossary' },
        {
          label: 'Recursos de CAD',
          collapsed: true,
          items: [
            { label: 'FRCDesignLib', slug: 'resources/frcdesignlib' },
            { label: 'KrayonCAD', slug: 'resources/krayoncad' },
            { label: 'Lista de FeatureScripts', slug: 'resources/featurescripts' },
            { label: 'Ajuda com FeatureScripts', slug: 'resources/featurescript-help' },
          ],
        },
        {
          label: 'Desafios de Design',
          collapsed: true,
          items: [
            { label: 'Visão Geral', slug: 'resources/design-challenges' },
            { label: 'Semana 1 | Chassis Swerve', slug: 'resources/design-challenges/week1' },
            { label: 'Semana 2 | Redutoras (Gearboxes)', slug: 'resources/design-challenges/week2' },
            { label: 'Semana 3 | Shooter de Bolas', slug: 'resources/design-challenges/week3' },
            { label: 'Semana 4 | Intake', slug: 'resources/design-challenges/week4' },
            { label: 'Semana 5 | Mecanismo Articulado (Tilt Shift)', slug: 'resources/design-challenges/week5' },
          ],
        },
      ],
    },
  ],
};

/**
 * Gets the sidebar configuration for a given URL path
 * Matches the most specific path prefix
 */
export function getSidebarForPath(pathname: string): SidebarSection[] {
  // Normalize pathname
  const normalizedPath = pathname.endsWith('/') ? pathname.slice(0, -1) : pathname;

  if (normalizedPath === '/mechanism-examples') {
    return [];
  }

  // Try to find exact match first
  if (sidebarSections[normalizedPath]) {
    return sidebarSections[normalizedPath];
  }

  // Find the longest matching prefix
  let bestMatch = '';
  for (const key of Object.keys(sidebarSections)) {
    if (key !== '/' && normalizedPath.startsWith(key) && key.length > bestMatch.length) {
      bestMatch = key;
    }
  }

  if (bestMatch) {
    return sidebarSections[bestMatch];
  }

  // Default to home (empty sidebar)
  return sidebarSections['/'] || [];
}

/**
 * Flattens sidebar items into a linear list of links for prev/next navigation
 */
function flattenSidebarItems(items: SidebarItem[]): { label: string; href: string }[] {
  const result: { label: string; href: string }[] = [];

  for (const item of items) {
    if (item.slug) {
      result.push({ label: item.label, href: '/' + item.slug + '/' });
    }
    if (item.items) {
      result.push(...flattenSidebarItems(item.items));
    }
  }

  return result;
}

/**
 * Gets prev/next navigation links for a given path
 */
export function getPrevNextLinks(pathname: string): { prev: { label: string; href: string } | null; next: { label: string; href: string } | null } {
  const normalizedPathForSection = pathname.endsWith('/') ? pathname.slice(0, -1) : pathname;
  if (normalizedPathForSection === '/mechanism-examples' || normalizedPathForSection.startsWith('/mechanism-examples/')) {
    return { prev: null, next: null };
  }

  const sections = getSidebarForPath(pathname);

  // Flatten all sections into a single list
  const allLinks: { label: string; href: string }[] = [];
  for (const section of sections) {
    allLinks.push(...flattenSidebarItems(section.items));
  }

  // Normalize the current path
  const normalizedPath = pathname.endsWith('/') ? pathname : pathname + '/';

  // Find current page index
  const currentIndex = allLinks.findIndex(link => link.href === normalizedPath);

  if (currentIndex === -1) {
    return { prev: null, next: null };
  }

  return {
    prev: currentIndex > 0 ? allLinks[currentIndex - 1] : null,
    next: currentIndex < allLinks.length - 1 ? allLinks[currentIndex + 1] : null,
  };
}
