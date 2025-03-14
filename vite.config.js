import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/combustible/', // Asegúrate de reemplazar "NOMBRE_DEL_REPOSITORIO" con el nombre de tu repositorio
})
