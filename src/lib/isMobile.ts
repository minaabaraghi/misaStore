export const isMobile = (userAgent: string): boolean => {
  return /Android|iPhone|iPad|iPod|Mobile/i.test(userAgent);
};
