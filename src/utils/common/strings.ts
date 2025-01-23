export const getNameInitials = (name: string = 'User') => {
  const nameParts = name.trim().split(' ');

  if (nameParts.length === 1) {
    return nameParts[0].slice(0, 2).toUpperCase();
  }

  return nameParts
    .map((part) => part[0])
    .join('')
    .toUpperCase();
};
