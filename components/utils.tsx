import { VALUES } from "./constants";
export const createStar = () => {
  const x = Math.floor(Math.random() * 100);
  const value = VALUES[Math.floor(Math.random() * VALUES.length)];
  return {
    value,
    x,
    y: -200,
  };
};
