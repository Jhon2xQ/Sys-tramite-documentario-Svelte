<script>
	import Header from '../lib/components/Header.svelte';
	import Footer from '../lib/components/Footer.svelte';
	import Opciones from './Opciones.svelte';
	import Resumen from './Resumen.svelte';
	import Transacciones from './Transacciones.svelte';
</script>

<div class="flex min-h-screen flex-col bg-gray-100 text-gray-900">
	<!-- Header -->
	<Header />

	<!-- Main -->
	<main>
		<!-- Opciones para el usuario -->
		<Opciones />
		<!-- Informacion de los tramites -->
		<div class="flex">
			<Resumen />
			<Transacciones />
		</div>
	</main>

	<!-- Footer -->
	<Footer />
</div>
