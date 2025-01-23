export const isKeyOf = <T extends object>(key: string, obj: T) => {
  return Object.keys(obj).includes(key);
};

export const validateUnit = (value?: number): string => {
  return value !== undefined ? `${value}px` : 'normal';
};
