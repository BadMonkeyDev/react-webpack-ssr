import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { App } from '@/app/App';

const root = createRoot(document.getElementById('root') as HTMLDivElement);

root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
);
