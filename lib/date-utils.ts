// lib/date-utils.ts

export function formatDate(
  dateString: string,
  options: Intl.DateTimeFormatOptions = {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  }
): string {
  if (!dateString) return '';

  const parts = dateString.split('-');
  if (parts.length === 3) {
    const year = parseInt(parts[0], 10);
    const month = parseInt(parts[1], 10) - 1;
    const day = parseInt(parts[2], 10);
    if (!isNaN(year) && !isNaN(month) && !isNaN(day)) {
      const date = new Date(year, month, day);
      return date.toLocaleDateString('pt-BR', options);
    }
  }

  return new Date(dateString).toLocaleDateString('pt-BR', options);
}
