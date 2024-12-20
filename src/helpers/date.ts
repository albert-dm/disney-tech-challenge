export const formatDate = (date: string) => {
  return new Date(date).toLocaleDateString('en-US', {
    dateStyle: 'full',
  });
};

export const calculateAge = (date: string) => {
  const birthDate = new Date(date);
  const diff = Date.now() - birthDate.getTime();
  const ageDate = new Date(diff);
  return Math.abs(ageDate.getUTCFullYear() - 1970);
}