import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import { FlowbiteConfig } from './config/Flowbite/config.tsx';

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <FlowbiteConfig>
            <App />
        </FlowbiteConfig>
    </StrictMode>,
);
