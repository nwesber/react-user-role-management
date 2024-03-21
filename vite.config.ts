import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
    define: {
        'process.env.API_URL': JSON.stringify(process.env.API_URL || 'http://localhost'),
    },
    plugins: [react()],
})
