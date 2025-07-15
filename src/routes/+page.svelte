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
		<div
			class="rounded-lg bg-gradient-to-r from-purple-200 via-pink-200 to-red-200 lg:mx-20 xl:mx-40"
		>
			<Opciones />
		</div>

		<div class="space-y-8 p-4 md:p-10 lg:p-10 xl:p-20">
			<div class="rounded-lg bg-white/80 p-8">
				<Resumen />
			</div>

			<div class="flex flex-col space-y-8 lg:flex-row lg:space-y-0 lg:space-x-8">
				<div class="order-2 mt-8 lg:order-1 lg:mt-0 lg:w-1/3">
					<div class="rounded-lg bg-white/80 p-8">
						<Chat />
					</div>
				</div>
				<div class="order-1 w-full rounded-lg bg-white/80 p-8 lg:order-2 lg:w-2/3">
					<Transacciones />
				</div>
			</div>
		</div>
	</main>

	<!-- Footer -->
	<Footer />
</div>
