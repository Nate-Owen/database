// # support2.js will contain the support functions for the gitgoing app
export function formatDate(value) {
  if (!value) return '';
  const date = new Date(value);
  return date.toLocaleDateString('zh-CN', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
  });
}
export function truncateText(text, length = 100) {
  if (!text) return '';
  return text.length > length ? text.substring(0, length) + '...' : text;
}

truncateText('This is a long text that needs to be truncated for better readability.', 50); // Example usage
export function formatNumber(value) {
  if (typeof value !== 'number') return value;
  return new Intl.NumberFormat('zh-CN').format(value);
}

truncateText('This is a long text that needs to be truncated for better readability.', 50);
formatNumber(1234567.89);
export function formatCurrency(value) {
  if (typeof value !== 'number') return value;
  return new Intl.NumberFormat('zh-CN', {
    style: 'currency',
    currency: 'CNY'
  }).format(value);
}

export function formatPercentage(value) {
  if (typeof value !== 'number') return value;
  return new Intl.NumberFormat('zh-CN', {
    style: 'percent',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  }).format(value);
}
export function formatdecimal(value, decimalPlaces = 2) {
  if (typeof value !== 'number') return value;
  return value.toFixed(decimalPlaces);
}
export function formatTime(value) {
  if (!value) return '';
  const date = new Date(value);
  return date.toLocaleTimeString('zh-CN', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
  });
}