<script lang="ts">
	import { fade } from 'svelte/transition';

	export let currentStep: number;

	const steps = [
		{ id: 1, title: 'Tipo de Trámite', description: 'Seleccionar categoría' },
		{ id: 2, title: 'Información', description: 'Detalles y documentos' },
		{ id: 3, title: 'Pago', description: 'Información de pago' },
		{ id: 4, title: 'Confirmación', description: 'Revisar y confirmar' }
	];

	$: progressPercentage = ((currentStep - 1) / (steps.length - 1)) * 100;
</script>

<div class="mb-8" in:fade>
	<div class="mx-auto max-w-4xl">
		<!-- Progress Bar -->
		<div class="relative mb-8">
			<div class="absolute top-1/2 h-0.5 w-full -translate-y-1/2 bg-gray-200 rounded-full"></div>
			<div
				class="absolute top-1/2 h-0.5 -translate-y-1/2 bg-blue-600 rounded-full transition-all duration-700 ease-out"
				style="width: {progressPercentage}%"
			></div>

			<!-- Step Indicators -->
			<div class="relative flex justify-between">
				{#each steps as step}
					<div class="flex flex-col items-center">
						<!-- Step Circle -->
						<div
							class={`relative z-10 flex h-8 w-8 items-center justify-center rounded-full border-2 transition-all duration-300 ${
								currentStep > step.id
									? 'border-blue-600 bg-blue-600 text-white shadow-md'
									: currentStep === step.id
										? 'border-blue-600 bg-white text-blue-600 shadow-md ring-4 ring-blue-100'
										: 'border-gray-300 bg-white text-gray-400'
							}`}
						>
							{#if currentStep > step.id}
								<!-- Checkmark for completed steps -->
								<svg class="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
									<path
										fill-rule="evenodd"
										d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
										clip-rule="evenodd"
									/>
								</svg>
							{:else}
								<span class="text-xs font-semibold">{step.id}</span>
							{/if}
						</div>

						<!-- Step Info -->
						<div class="mt-3 text-center">
							<div
								class={`text-sm font-medium transition-colors duration-300 ${
									currentStep >= step.id ? 'text-gray-900' : 'text-gray-500'
								}`}
							>
								{step.title}
							</div>
							<div
								class={`text-xs mt-1 transition-colors duration-300 ${
									currentStep >= step.id ? 'text-gray-600' : 'text-gray-400'
								}`}
							>
								{step.description}
							</div>
						</div>
					</div>
				{/each}
			</div>
		</div>
	</div>
</div>
