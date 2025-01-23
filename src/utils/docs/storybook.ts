export const formatEntryNamesForSummary = <T>(obj: T): string => {
  return Object.entries(obj)
    .map(([name]) => `"${name}"`)
    .join(' | ');
};

export const getEntryOptionsForSummary = <T>(obj: T): string[] => {
  return Object.entries(obj).map(([name]) => name);
};

export const formatKeyNamesForSummary = <T>(obj: T): string => {
  return Object.keys(obj)
    .map((name) => `"${name}"`)
    .join(' | ');
};

export const getKeyOptionsForSummary = <T>(obj: T): string[] => {
  return Object.keys(obj).map((name) => name);
};
