<script lang="ts">
	import { fade } from 'svelte/transition';

	export let title: string = '';
	export let subtitle: string = '';
</script>

<div class="bg-white rounded-xl shadow-sm border border-gray-100 p-8" in:fade>
	{#if title}
		<div class="mb-6">
			<h2 class="text-xl font-semibold text-gray-900 mb-2">{title}</h2>
			{#if subtitle}
				<p class="text-gray-600 text-sm">{subtitle}</p>
			{/if}
		</div>
	{/if}
	
	<div class="space-y-6">
		<slot />
	</div>
</div>
