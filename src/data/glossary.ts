/**
 * Glossary of terms and abbreviations
 *
 * Add terms here to automatically highlight them across the site
 * with a dotted underline and hover tooltip.
 *
 * Format:
 * {
 *   term: "TERM",           // The word/abbreviation to match (case-insensitive)
 *   definition: "..."       // The explanation shown on hover
 * }
 */

export interface GlossaryTerm {
  term: string;
  definition: string;
}

export const glossaryTerms: GlossaryTerm[] = [
  // Vendors
  {
    term: "WCP",
    definition: "West Coast Products - Fornecedor especializado em componentes para FRC"
  },
  {
    term: "REV",
    definition: "REV Robotics - Fornecedora de sistemas de controle e peças para robótica"
  },
  {
    term: "TTB",
    definition: "The Thrifty Bot - Fornecedora de componentes acessíveis para equipes de FRC"
  },
  {
    term: "Redux",
    definition: "Redux Robotics - Fabricante de sensores e eletrônicos para FRC"
  },
  {
    term: "MCM",
    definition: "McMaster-Carr - Grande fornecedor industrial de fixadores e materiais"
  },

  // Intake styles
  {
    term: "OTB",
    definition: "\"Over the Bumper\" - Estilo de intake que recolhe a peça passando por cima do para-choque"
  },
  {
    term: "UTB",
    definition: "\"Under the Bumper\" - Estilo de intake que recolhe a peça puxando-a por baixo do para-choque"
  },

  // Parts & Components
  {
    term: "COTS",
    definition: "\"Commercial Off The Shelf\" - Peças comerciais padronizadas prontas para compra"
  },
  {
    term: "V4B",
    definition: "\"Virtual 4-Bar\" - Mecanismo em que um segundo grau de liberdade é acionado por polias/engrenagens sincronizadas a partir do primeiro"
  },
  {
    term: "C-C",
    definition: "Distância entre centros (Center-to-Center) entre dois eixos"
  },
  {
    term: "turnbuckle",
    definition: "Esticador com roscas opostas instalado entre elos para ajustar a tensão da corrente"
  },
  {
    term: "4Bar",
    definition: "Mecanismo articulado de quatro barras (quadrilátero articulado) com 4 pontos de pivô"
  },
  {
    term: "Tube-Nut",
    definition: "Também conhecida como \"Star Nut\" - Inserto de rosca para extremidade de tubos que permite parafusar diretamente no topo do perfil"
  },
  {
    term: "Gusset",
    definition: "Chapa de reforço, normalmente de alumínio usinado, utilizada para unir perfis tubulares"
  },

  // Physics & Engineering concepts
  {
    term: "COG",
    definition: "Centro de gravidade (Center of Gravity), também chamado de COM (Centro de massa)"
  },
  {
    term: "Cantilever",
    definition: "Elemento ou eixo em balanço, suportado apenas por uma das extremidades"
  },
  {
    term: "Shear",
    definition: "Tensão de cisalhamento - Forças paralelas ao plano da peça que tendem a romper parafusos ou pinos"
  },
  {
    term: "Torque",
    definition: "Momento de força que produz ou tende a produzir rotação ao redor de um eixo"
  },
  {
    term: "DP",
    definition: "Diametral Pitch (passo diametral) - Número de dentes por polegada do diâmetro primitivo da engrenagem"
  },
  {
    term: "Backlash",
    definition: "Folga mecânica entre engrenagens ou dentes de correia antes do acoplamento do movimento"
  },

  // Axle types
  {
    term: "Deadaxle",
    definition: "Eixo estático/morto fixo na estrutura, sobre o qual polias e engrenagens giram com rolamentos próprios sem torção no eixo"
  },
  {
    term: "Liveaxle",
    definition: "Eixo giratório/vivo que transmite o torque principal do sistema diretamente para as peças conectadas"
  },
  {
    term: "Zombie-Axle",
    definition: "Eixo que gira junto com o mecanismo mas transmite pouco ou nenhum torque útil, muito usado para acoplar encoders absolutos"
  },

  // Electronics
  {
    term: "PDH",
    definition: "Power Distribution Hub - Módulo de distribuição de energia para os circuitos do robô"
  },
  {
    term: "SparkMAX",
    definition: "Controlador de motor da REV Robotics para motores brushless e brushed"
  },
  {
    term: "PWM",
    definition: "Cabo de modulação por largura de pulso (Pulse Width Modulation) para controle de velocidade e servos"
  },
  {
    term: "RIO",
    definition: "roboRIO - O computador principal e cérebro de controle do robô"
  },
  {
    term: "Blinkin",
    definition: "Controlador de fitas de LED endereçáveis da REV Robotics"
  },
  {
    term: "Radio",
    definition: "Dispositivo de comunicação Wi-Fi entre o robô, a Driver Station e o campo oficial"
  },

  // Manufacturing & Materials
  {
    term: "3DP",
    definition: "Abreviação para impressão 3D (3D printing) ou peças impressas em 3D"
  },
  {
    term: "Poly",
    definition: "Abreviação comum para policarbonato, plástico de altíssima resistência a impacto"
  },
  {
    term: "PC",
    definition: "Abreviação técnica para policarbonato"
  },
  {
    term: "Stripping",
    definition: "Espanamento de roscas ou fendas de parafusos por torque excessivo ou alinhamento incorreto"
  },
  {
    term: "Tapping",
    definition: "Processo de criar roscas internas em um furo utilizando uma ferramenta macho (macho de rosca)"
  },
  {
    term: "Billet",
    definition: "Componente usinado a partir de um bloco sólido de metal ou material bruto"
  },
  {
    term: "TPI",
    definition: "Threads Per Inch - Fios por polegada; define o passo de roscas no padrão imperial (ex: parafuso #10-32 tem 32 TPI)"
  },

  // Robot structure
  {
    term: "Brainpan",
    definition: "Chapa superior ou invertida de montagem de eletrônicos (bellypan invertido)"
  },
  {
    term: "Bellypan",
    definition: "Chapa de fechamento inferior do chassi usada para fixação dos eletrônicos"
  },
  {
    term: "Hardstop",
    definition: "Batente mecânico físico projetado para restringir o deslocamento além de um limite seguro"
  },
  {
    term: "Softstop",
    definition: "Limite de curso definido no código de controle para frear o mecanismo antes do impacto mecânico"
  },

  // Design concepts
  {
    term: "Packaging",
    definition: "Disposição e acomodação compacta de peças, motores e sensores dentro do espaço limitado do robô"
  },
  {
    term: "Parametric",
    definition: "Modelagem paramétrica baseada em relações e equações que atualizam o modelo ao modificar parâmetros"
  },
];

/**
 * Get a glossary term by its name (case-insensitive)
 */
export function getGlossaryTerm(term: string): GlossaryTerm | undefined {
  return glossaryTerms.find(g => g.term.toLowerCase() === term.toLowerCase());
}

/**
 * Get all terms as a map for quick lookup
 */
export function getGlossaryMap(): Map<string, string> {
  const map = new Map<string, string>();
  glossaryTerms.forEach(({ term, definition }) => {
    map.set(term.toLowerCase(), definition);
  });
  return map;
}
