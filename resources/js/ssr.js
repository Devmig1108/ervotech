import { createInertiaApp } from '@inertiajs/react'
import { renderToString } from '@inertiajs/server'
import createServer from '@inertiajs/server'
import route from 'ziggy-js'

createServer(page =>
    createInertiaApp({
        page,
        render: renderToString,
        resolve: name =>
            import (`./Pages/${name}.jsx`),
        setup({ App, props }) {
            return <App {...props }
            />
        },
    })
)