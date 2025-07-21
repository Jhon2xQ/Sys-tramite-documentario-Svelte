import tailwindcss from '@tailwindcss/vite';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	// Tus plugins existentes se mantienen igual
	plugins: [tailwindcss(), sveltekit()],

	// --- AÑADE ESTA SECCIÓN ---
	// Configuración del servidor de desarrollo de Vite
	server: {
		proxy: {
			// Cualquier petición que tu frontend haga a una URL que empiece con '/api'
			// será interceptada por Vite.
			'/api': {
				// Vite reenviará esa petición a tu servidor backend.
				target: 'http://localhost:3000',

				// Esto cambia la cabecera 'Host' de la petición para que coincida con el `target`.
				// Es necesario para que muchos backends funcionen correctamente.
				changeOrigin: true
			}
		}
	}
});
