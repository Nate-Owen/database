 branch: main
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
import './assets/css/global.css';
import { createPinia } from 'pinia';
import { truncateText } from './support2';

const app = createApp(App);

app.use(router);
app.use(store);
app.use(ElementPlus);
app.use(createPinia());

app.mount('#app');

app.config.globalProperties.$filters = {
  formatDate(value) {
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
  },
  truncateText(text, length = 100) {
    if (!text) return '';
    return text.length > length ? text.substring(0, length) + '...' : text;
  }
};

truncateText('This is a long text that needs to be truncated for better readability.', 50); // Example usage
app.config.globalProperties.$filters.formatNumber = function(value) {
  if (typeof value !== 'number') return value;
  return new Intl.NumberFormat('zh-CN').format(value);
};
app.config.globalProperties.$filters.formatCurrency = function(value) {
  if (typeof value !== 'number') return value;
  return new Intl.NumberFormat('zh-CN', {
    style: 'currency',
    currency: 'CNY'
  }).format(value);
};
app.config.globalProperties.$filters.formatPercentage = function(value) {
  if (typeof value !== 'number') return value;
  return new Intl.NumberFormat('zh-CN', {
    style: 'percent',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  }).format(value);
};
app.config.globalProperties.$filters.formatDecimal = function(value, decimalPlaces = 2) {
  if (typeof value !== 'number') return value;
  return value.toFixed(decimalPlaces);
};
app.config.globalProperties.$filters.formatTime = function(value) {
  if (!value) return '';
  const date = new Date(value);
  return date.toLocaleTimeString('zh-CN', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
  });
};
app.config.globalProperties.$filters.isValidGitUrl = function(url) {
  const gitUrlRegex = /^(https?|git|ssh|git@[-\w.]+)(:[-\w.]+)?(\/[-\w.]+)+(\.git)?$/;
  return gitUrlRegex.test(url);
};
app.config.globalProperties.$filters.truncateText = truncateText;
app.config.globalProperties.$filters.formatDate = function(value) {
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
app.config.globalProperties.$filters.truncateText = function(text, length = 100) {
  if (!text) return '';
  return text.length > length ? text.substring(0, length) + '...' : text;
};
app.config.globalProperties.$filters.formatNumber = function(value) {
  if (typeof value !== 'number') return value;
  return new Intl.NumberFormat('zh-CN').format(value);
};