import ReactDOMServer from 'react-dom/server';
import { createInertiaApp } from '@inertiajs/react';
import createServer from '@inertiajs/react/server';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
// 1. 🚨 Import the HelmetProvider
import { HelmetProvider } from 'react-helmet-async';

const appName = 'Ervotech';

createServer((page) =>
    createInertiaApp({
        page,
        render: ReactDOMServer.renderToString,
        title: (title) => `${title} - ${appName}`,
        resolve: (name) => resolvePageComponent(`./Pages/${name}.jsx`, import.meta.glob('./Pages/**/*.jsx')),
        setup: ({ App, props }) => {
            // 2. 🚨 Initialize the context object
            page.__helmetContext = {};
            
            // 3. 🚨 Wrap the App component to catch metadata
            return (
                <HelmetProvider context={page.__helmetContext}>
                    <App {...props} />
                </HelmetProvider>
            );
        },
    })
);