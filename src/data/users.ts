export interface UserProfile {
  id: string;
  name: string;
  role: 'student' | 'mentor';
  password: string;
  avatar: string;
  color: string;
  title: string;
}

export interface StudentProgress {
  userId: string;
  completedLessons: string[]; // URLs or slugs of completed lessons
  lastPage: string;
  lastPageTitle: string;
  lastActive: string;
  xp: number;
}

export const USERS: Record<string, UserProfile> = {
  isa: {
    id: 'isa',
    name: 'Isa',
    role: 'student',
    password: 'isa123',
    avatar: '🌸',
    color: '#e91e63',
    title: 'Aluna',
  },
  ana: {
    id: 'ana',
    name: 'Ana',
    role: 'student',
    password: 'ana123',
    avatar: '⚡',
    color: '#ff9800',
    title: 'Aluna',
  },
  lucas: {
    id: 'lucas',
    name: 'Lucas',
    role: 'student',
    password: 'lucas123',
    avatar: '🚀',
    color: '#2196f3',
    title: 'Aluno',
  },
  liwia: {
    id: 'liwia',
    name: 'Liwia',
    role: 'mentor',
    password: 'liwia123',
    avatar: '⭐',
    color: '#9c27b0',
    title: 'Mentora',
  },
  vinicius: {
    id: 'vinicius',
    name: 'Vinicius',
    role: 'mentor',
    password: 'vinicius123',
    avatar: '🛠️',
    color: '#43a047',
    title: 'Mentor',
  },
};

export const TOTAL_COURSE_LESSONS = 114;

export const LEVELS = [
  { level: 1, name: 'Aprendiz de CAD', minXp: 0, icon: '🌱' },
  { level: 2, name: 'Modelador Onshape', minXp: 250, icon: '📐' },
  { level: 3, name: 'Projetista de Mecanismos', minXp: 600, icon: '⚙️' },
  { level: 4, name: 'Especialista em FRC', minXp: 1100, icon: '🤖' },
  { level: 5, name: 'Mestre de Engenharia FRC', minXp: 1800, icon: '🏆' },
];

export function calculateLevel(xp: number) {
  let currentLevel = LEVELS[0];
  for (const lvl of LEVELS) {
    if (xp >= lvl.minXp) {
      currentLevel = lvl;
    }
  }
  const currentIndex = LEVELS.indexOf(currentLevel);
  const nextLevel = LEVELS[currentIndex + 1] || null;
  const progressToNext = nextLevel
    ? Math.min(100, Math.round(((xp - currentLevel.minXp) / (nextLevel.minXp - currentLevel.minXp)) * 100))
    : 100;

  return {
    ...currentLevel,
    nextLevel,
    progressToNext,
  };
}

export const INITIAL_STUDENT_PROGRESS: Record<string, StudentProgress> = {
  isa: {
    userId: 'isa',
    completedLessons: [
      '/learning-course/stage1/introduction/',
      '/learning-course/stage1/1a/overview/',
      '/learning-course/stage1/1a/onshape-intro/',
      '/learning-course/stage1/1a/sketches/',
      '/learning-course/stage1/1a/constraints/',
      '/learning-course/stage1/1a/extrude/',
      '/learning-course/stage1/1a/revolve/',
      '/learning-course/stage1/1a/fillet-chamfer/',
      '/learning-course/stage1/1a/patterns/',
      '/learning-course/stage1/1a/mirror/',
      '/learning-course/stage1/1a/hole-tool/',
      '/learning-course/stage1/1a/variables/',
      '/learning-course/stage1/1a/measure/',
      '/learning-course/stage1/1a/section1-setup/',
      '/learning-course/stage1/1a/section1-exercise1/',
      '/learning-course/stage1/1a/section1-exercise2/',
      '/learning-course/stage1/1a/section1-exercise3/',
      '/learning-course/stage1/1a/section1-exercise4/',
    ],
    lastPage: '/learning-course/stage1/1b/introduction/',
    lastPageTitle: 'Stage 1B - Introdução aos Motores e Reduções',
    lastActive: 'Hoje às 20:45',
    xp: 900,
  },
  ana: {
    userId: 'ana',
    completedLessons: [
      '/learning-course/stage1/introduction/',
      '/learning-course/stage1/1a/overview/',
      '/learning-course/stage1/1a/onshape-intro/',
      '/learning-course/stage1/1a/sketches/',
      '/learning-course/stage1/1a/constraints/',
      '/learning-course/stage1/1a/extrude/',
      '/learning-course/stage1/1a/revolve/',
      '/learning-course/stage1/1a/fillet-chamfer/',
      '/learning-course/stage1/1a/patterns/',
      '/learning-course/stage1/1a/mirror/',
      '/learning-course/stage1/1a/hole-tool/',
      '/learning-course/stage1/1a/variables/',
      '/learning-course/stage1/1a/measure/',
      '/learning-course/stage1/1a/section1-setup/',
      '/learning-course/stage1/1a/section1-exercise1/',
      '/learning-course/stage1/1a/section1-exercise2/',
      '/learning-course/stage1/1a/section1-exercise3/',
      '/learning-course/stage1/1a/section1-exercise4/',
      '/learning-course/stage1/1b/introduction/',
      '/learning-course/stage1/1b/motors/',
      '/learning-course/stage1/1b/shafts-bearings/',
      '/learning-course/stage1/1b/torque-speed/',
      '/learning-course/stage1/1b/gears/',
      '/learning-course/stage1/1b/exercise1/',
      '/learning-course/stage1/1b/exercise2/',
      '/learning-course/stage1/1b/belts/',
      '/learning-course/stage1/1b/chain/',
      '/learning-course/stage1/1b/exercise3/',
      '/learning-course/stage1/1b/summary/',
    ],
    lastPage: '/learning-course/stage1/1c/exercise1/',
    lastPageTitle: 'Stage 1C - Exercício 1: Mancal e Flange',
    lastActive: 'Hoje às 21:10',
    xp: 1450,
  },
  lucas: {
    userId: 'lucas',
    completedLessons: [
      '/learning-course/stage1/introduction/',
      '/learning-course/stage1/1a/overview/',
      '/learning-course/stage1/1a/onshape-intro/',
      '/learning-course/stage1/1a/sketches/',
      '/learning-course/stage1/1a/constraints/',
      '/learning-course/stage1/1a/extrude/',
      '/learning-course/stage1/1a/revolve/',
    ],
    lastPage: '/learning-course/stage1/1a/section1-exercise4/',
    lastPageTitle: 'Stage 1A - Seção 1: Exercício 4',
    lastActive: 'Ontem às 19:30',
    xp: 350,
  },
};
