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
					<div class="mb-1 h-0.5 w-6 bg-black"></div>
					<div class="mb-1 h-0.5 w-6 bg-black"></div>
					<div class="h-0.5 w-6 bg-black"></div>
				</button>

				{#if navbarOpen}
					<nav class="absolute top-full right-4 mt-2 w-48 rounded bg-white p-4 shadow lg:hidden">
						<ul class="space-y-2">
							<li><a href="#features" class="block">Features</a></li>
							<li><a href="#about" class="block">About</a></li>
							<li><a href="#pricing" class="block">Pricing</a></li>
							<li><a href="#contact" class="block">Contact</a></li>
							<li>
								<button on:click={() => (dropdownOpen = !dropdownOpen)} class="w-full text-left">
									Pages
								</button>
								{#if dropdownOpen}
									<ul class="mt-2 space-y-1 pl-4">
										<li><a href="blog-grid.html" class="block">Blog Grid</a></li>
										<li><a href="blog-details.html" class="block">Blog Details</a></li>
									</ul>
								{/if}
							</li>
						</ul>
					</nav>
				{/if}

				<nav class="hidden lg:block">
					<ul class="flex space-x-6">
						<li><a href="#features" class="block py-6">Features</a></li>
						<li><a href="#about" class="block py-6">About</a></li>
						<li><a href="#pricing" class="block py-6">Pricing</a></li>
						<li><a href="#contact" class="block py-6">Contact</a></li>
						<li class="relative">
							<button on:click={() => (dropdownOpen = !dropdownOpen)} class="py-6">Pages</button>
							{#if dropdownOpen}
								<ul class="absolute mt-2 w-48 space-y-2 rounded bg-white p-4 shadow">
									<li><a href="blog-grid.html" class="block">Blog Grid</a></li>
									<li><a href="blog-details.html" class="block">Blog Details</a></li>
								</ul>
							{/if}
						</li>
					</ul>
				</nav>
			</div>
		</div>
	</div>
</header>
