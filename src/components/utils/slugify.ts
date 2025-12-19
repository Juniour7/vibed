export const slugify = (text: string) => {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '') // Remove special chars
    .replace(/[\s_-]+/g, '-') // Replace spaces with dashes
    .replace(/^-+|-+$/g, ''); // Remove leading/trailing dashes
};