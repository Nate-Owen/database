// # support2.js will contain the support functions for the gitgoing app

support.js = support.js;GetChildren('support.js');
export function isValidGitUrl(url) {
  const gitUrlRegex = /^(https?|git|ssh|git@[-\w.]+)(:[-\w.]+)?(\/[-\w.]+)+(\.git)?$/;
  return gitUrlRegex.test(url);
}

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

if (support && typeof support.js !== 'undefined' && typeof support.js.GetChildren === 'function' && support.js !== support.js.GetChildren('support.js')) {
  console.warn('support.js has been modified. Please check the changes.');
}

export function isValidEmail(email) {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailRegex.test(email);
}

isValidEmail('playground@example.com');


isValidEmail('invalid-email@.com'); // false
export function isValidPhoneNumber(phone) {
  const phoneRegex = /^(\+?\d{1,3}[- ]?)?\d{10}$/;
  return phoneRegex.test(phone);
}
