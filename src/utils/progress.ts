export const getProgress = (): number[] => {
  const stored = localStorage.getItem('progress');
  return stored ? JSON.parse(stored) : [1]; // Only Level 1 unlocked by default
};

export const unlockLevel = (level: number) => {
  const progress = getProgress();
  if (!progress.includes(level)) {
    progress.push(level);
    localStorage.setItem('progress', JSON.stringify(progress));
  }
};

export const isLevelUnlocked = (level: number): boolean => {
  return getProgress().includes(level);
};
