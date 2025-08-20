import './style.css';
import { UI } from './ui.js';

async function main() {
  try {
    const ui = new UI();
    await ui.initialize();
  } catch (error) {
    console.error('Failed to initialize application:', error);
    document.querySelector('#app')!.innerHTML = `
      <h1>Error</h1>
      <p>Failed to initialize the Keyhive demo application.</p>
      <p>Error: ${error}</p>
    `;
  }
}

main();