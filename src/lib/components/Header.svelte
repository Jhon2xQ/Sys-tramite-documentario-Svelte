<script lang="ts">
	import { fly } from 'svelte/transition';
	let navbarOpen = false;
	let dropdownOpen = false;
	let isLoggedIn = false; // Variable para simular el estado de login

	// --- Lógica de ejemplo para simular el login ---
	function handleLogin() {
		isLoggedIn = true;
	}

	function handleLogout() {
		isLoggedIn = false;
		dropdownOpen = false; // Cierra el menú al hacer logout
	}
	// ---------------------------------------------
</script>

<header class="bg-[#f4f6f1]">
	<div class="px-4 sm:px-6 lg:px-40">
		<div class="flex h-20 items-center justify-between">
			<!-- Logo -->
			<div class="flex-shrink-0">
				<a href="/" class="flex items-center">
					<img class="h-12 w-auto" src="/Logo-m-2.png" alt="MiLogo" />
				</a>
			</div>

			<!-- Navegación para pantallas grandes (Desktop) -->
			<nav class="hidden items-center space-x-8 md:flex">
				<a
					href="#about"
					class="font-montserrat text-gray-600 transition-colors duration-200 hover:text-gray-900"
					>UNSAAC</a
				>
				<a
					href="#pricing"
					class="font-montserrat text-gray-600 transition-colors duration-200 hover:text-gray-900"
					>Pagos</a
				>

				<!-- Separador visual -->
				<div class="h-6 w-px bg-gray-200" />

				<!-- Login / Avatar de usuario (Desktop) -->
				{#if !isLoggedIn}
					<button
						on:click={handleLogin}
						class="rounded-md bg-slate-800 px-4 py-2 text-sm font-medium text-white transition-colors duration-200 hover:bg-slate-700"
					>
						Iniciar sesión
					</button>
				{:else}
					<div class="relative">
						<button
							on:click={() => (dropdownOpen = !dropdownOpen)}
							class="flex h-10 w-10 items-center justify-center rounded-full bg-gray-200 text-gray-600 ring-2 ring-transparent transition-all hover:ring-slate-400 focus:outline-none"
							aria-label="Abrir menú de usuario"
						>
							<svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"
								><path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
								/></svg
							>
						</button>

						<!-- Menú desplegable del usuario -->
						{#if dropdownOpen}
							<div
								transition:fly={{ y: -5, duration: 200 }}
								class="ring-opacity-5 absolute right-0 z-20 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black"
							>
								<div class="px-4 py-2">
									<p class="text-sm font-semibold text-gray-800">Nombre Usuario</p>
									<p class="truncate text-sm text-gray-500">usuario@email.com</p>
								</div>
								<hr />
								<a href="/perfil" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
									>Mi Perfil</a
								>
								<a
									href="/configuracion"
									class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Configuración</a
								>
								<button
									on:click={handleLogout}
									class="block w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100"
								>
									Cerrar sesión
								</button>
							</div>
						{/if}
					</div>
				{/if}
			</nav>

			<!-- Controles para móvil (Avatar y Hamburguesa) -->
			<div class="flex items-center space-x-4 md:hidden">
				<!-- Login / Avatar de usuario (Móvil) -->
				{#if !isLoggedIn}
					<button
						on:click={handleLogin}
						class="rounded-md bg-slate-800 px-4 py-2 text-sm font-medium text-white transition-colors duration-200 hover:bg-slate-700"
					>
						Iniciar sesión
					</button>
				{:else}
					<div class="relative">
						<button
							on:click={() => (dropdownOpen = !dropdownOpen)}
							class="flex h-10 w-10 items-center justify-center rounded-full bg-gray-200 text-gray-600 focus:outline-none"
							aria-label="Abrir menú de usuario"
						>
							<svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"
								><path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
								/></svg
							>
						</button>

						<!-- Menú desplegable (Móvil) -->
						{#if dropdownOpen}
							<div
								transition:fly={{ y: -5, duration: 200 }}
								class="ring-opacity-5 absolute right-0 z-20 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black"
							>
								<!-- Contenido del menú desplegable idéntico al de desktop -->
								<div class="px-4 py-2">
									<p class="text-sm font-semibold text-gray-800">Nombre Usuario</p>
									<p class="truncate text-sm text-gray-500">usuario@email.com</p>
								</div>
								<hr />
								<a href="/perfil" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
									>Mi Perfil</a
								>
								<a
									href="/configuracion"
									class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Configuración</a
								>
								<button
									on:click={handleLogout}
									class="block w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100"
								>
									Cerrar sesión
								</button>
							</div>
						{/if}
					</div>
				{/if}

				<!-- Botón de menú hamburguesa -->
				<button
					on:click={() => (navbarOpen = !navbarOpen)}
					class="inline-flex items-center justify-center rounded-md p-2 text-gray-600 hover:bg-gray-200 focus:ring-2 focus:ring-slate-500 focus:outline-none focus:ring-inset"
					aria-controls="mobile-menu"
					aria-expanded={navbarOpen}
				>
					<span class="sr-only">Abrir menú principal</span>
					<!-- Íconos de hamburguesa y X -->
					<svg
						class="h-6 w-6"
						class:hidden={navbarOpen}
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
						aria-hidden="true"
						><path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M4 6h16M4 12h16M4 18h16"
						/></svg
					>
					<svg
						class="h-6 w-6"
						class:hidden={!navbarOpen}
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
						aria-hidden="true"
						><path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M6 18L18 6M6 6l12 12"
						/></svg
					>
				</button>
			</div>
		</div>
	</div>

	<!-- Menú para móviles (solo enlaces de navegación) -->
	{#if navbarOpen}
		<div class="md:hidden" id="mobile-menu" transition:fly={{ y: -10, duration: 300 }}>
			<div class="space-y-1 px-2 pt-2 pb-3 sm:px-3">
				<a
					href="#about"
					class="font-montserrat block rounded-md px-3 py-2 text-base font-medium text-gray-600 hover:bg-gray-50 hover:text-gray-900"
					>UNSAAC</a
				>
				<a
					href="#pricing"
					class="font-montserrat block rounded-md px-3 py-2 text-base font-medium text-gray-600 hover:bg-gray-50 hover:text-gray-900"
					>Pagos</a
				>
			</div>
		</div>
	{/if}
</header>

<style>
	@import url('https://fonts.googleapis.com/css2?family=Lato:wght@400;700&family=Montserrat:wght@400;500;600&display=swap');

	.font-lato {
		font-family: 'Lato', sans-serif;
	}

	.font-montserrat {
		font-family: 'Montserrat', sans-serif;
	}
</style>
