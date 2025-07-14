<script>
	import Header from '../lib/components/Header.svelte';
	import Footer from '../lib/components/Footer.svelte';
	import Opciones from './Opciones.svelte';
	import Resumen from './Resumen.svelte';
	import Transacciones from './Transacciones.svelte';
	import Chat from './Chat.svelte';
</script>

<div>
	<!-- Header -->
	<Header />

	<!-- Main -->
	<main class="bg-cover bg-center" style="background-image: url('31-a.jpeg')">
		<div class="mx-40 rounded-lg bg-gradient-to-r from-purple-200 via-pink-200 to-red-200">
			<Opciones />
		</div>

		<div class="mt-20 flex space-x-8 px-20 pb-20">
			<div class="w-1/3 space-y-8">
				<div class="rounded-lg bg-white/80 p-8">
					<Resumen />
				</div>
				<div class="rounded-lg bg-white/80 p-8">
					<Chat />
				</div>
			</div>
			<div class="w-2/3 rounded-lg bg-white/80 p-8">
				<Transacciones />
			</div>
		</div>
	</main>

	<!-- Footer -->
	<Footer />
</div>
