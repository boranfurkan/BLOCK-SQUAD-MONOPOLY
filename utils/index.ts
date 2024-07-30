export const calculateProgress = (current: number, total: number) => {
  const progress = (current / total) * 100;
  if (progress > 100) return 100;
  return progress;
};
