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
    password: 'Isa@FRC#2025',
    avatar: '🎯',
    color: '#e91e63',
    title: 'Aluna',
  },
  ana: {
    id: 'ana',
    name: 'Ana',
    role: 'student',
    password: 'Ana@FRC#2025',
    avatar: '🔥',
    color: '#ff9800',
    title: 'Aluna',
  },
  lucas: {
    id: 'lucas',
    name: 'Lucas',
    role: 'student',
    password: 'Lucas@FRC#2025',
    avatar: '🤖',
    color: '#2196f3',
    title: 'Aluno',
  },
  liwia: {
    id: 'liwia',
    name: 'Liwia',
    role: 'mentor',
    password: 'Liwia#Mentor!2025',
    avatar: '🧭',
    color: '#9c27b0',
    title: 'Mentora',
  },
  vinicius: {
    id: 'vinicius',
    name: 'Vinicius',
    role: 'mentor',
    password: 'Vinicius#Mentor!2025',
    avatar: '📐',
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
    completedLessons: [],
    lastPage: '/learning-course/stage1/introduction/',
    lastPageTitle: 'Início do Curso de Aprendizado',
    lastActive: 'Ainda não iniciou',
    xp: 0,
  },
  ana: {
    userId: 'ana',
    completedLessons: [],
    lastPage: '/learning-course/stage1/introduction/',
    lastPageTitle: 'Início do Curso de Aprendizado',
    lastActive: 'Ainda não iniciou',
    xp: 0,
  },
  lucas: {
    userId: 'lucas',
    completedLessons: [],
    lastPage: '/learning-course/stage1/introduction/',
    lastPageTitle: 'Início do Curso de Aprendizado',
    lastActive: 'Ainda não iniciou',
    xp: 0,
  },
};
