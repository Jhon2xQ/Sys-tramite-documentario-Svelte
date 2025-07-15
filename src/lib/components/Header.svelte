<script lang="ts">
	let navbarOpen = false;
	let dropdownOpen = false;
</script>

<header class="flex w-full items-center bg-[#f4f6f1] lg:px-80">
	<div class="container">
		<div class="relative flex items-center justify-between px-4">
			<div class="w-60">
				<a href="/" class="block py-5">
					<img src="/Logo-m-2.png" alt="Logo" class="w-full" />
				</a>
			</div>
			<div class="flex w-full items-center justify-end">
				<button
					on:click={() => (navbarOpen = !navbarOpen)}
					class="rounded px-3 py-2 focus:ring lg:hidden"
				>
					<p>hola</p>
				</button>

				{#if navbarOpen}
					<nav class="absolute top-full right-4 mt-2 w-48 rounded bg-white p-4 shadow lg:hidden">
						<ul class="space-y-2">
							<li><a href="#about" class="block py-6">UNSAAC</a></li>
							<li><a href="#pricing" class="block py-6">Pagos</a></li>
						</ul>
					</nav>
				{/if}

				<nav class="hidden lg:block">
					<ul class="flex space-x-6">
						<li><a href="#about" class="block py-6">UNSAAC</a></li>
						<li><a href="#pricing" class="block py-6">Pagos</a></li>
					</ul>
				</nav>
			</div>
		</div>
	</div>
</header>
