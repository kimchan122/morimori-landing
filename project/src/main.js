
window.onload = () => {
  window.scrollTo(0, 0);
};

import './app.css'
import App from './App.svelte'

const app = new App({
  target: document.getElementById('app'),
})

export default app
