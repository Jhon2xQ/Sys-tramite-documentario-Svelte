<script>
	import Header from '../lib/components/Header.svelte';
	import Footer from '../lib/components/Footer.svelte';
	import Opciones from './Opciones.svelte';
	import Resumen from './Resumen.svelte';
	import Transacciones from './Transacciones.svelte';
</script>

<div>
	<!-- Header -->
	<Header />

	<!-- Main -->
	<main class="bg-cover bg-center" style="background-image: url('31.jpeg')">
		<div class="p-8">
			<Opciones />
		</div>
		<div class="flex space-x-8 p-12">
			<div class="w-1/3 space-y-8">
				<div class="rounded-lg bg-white p-8">
					<Resumen />
				</div>
				<div class="rounded-lg bg-white p-8">
					<Resumen />
				</div>
			</div>
			<div class="w-2/3 rounded-lg bg-white/50 p-8">
				<Transacciones />
			</div>
		</div>
	</main>

	<!-- Footer -->
	<Footer />
</div>
