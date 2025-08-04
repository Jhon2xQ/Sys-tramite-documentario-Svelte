<script lang="ts">
	import { fade } from 'svelte/transition';

	export let formData: {
		tipoTramite: string;
		categoria: string;
	};

	const tiposTramite = [
		{
			id: 'solicitud-general',
			title: 'Solicitud General',
			description: 'Solicitudes administrativas generales',
			icon: '📄'
		},
		{
			id: 'certificado',
			title: 'Certificado',
			description: 'Certificados de estudios y documentos',
			icon: '🎓'
		},
		{
			id: 'reclamo',
			title: 'Reclamo',
			description: 'Reclamos y quejas institucionales',
			icon: '⚠️'
		},
		{
			id: 'consulta',
			title: 'Consulta',
			description: 'Consultas e información general',
			icon: '❓'
		},
		{
			id: 'otros',
			title: 'Otros',
			description: 'Otros tipos de trámites',
			icon: '📋'
		}
	];
</script>

<div class="space-y-6" in:fade>
	<div class="text-center mb-8">
		<h3 class="text-lg font-medium text-gray-900 mb-2">Seleccione el tipo de trámite</h3>
		<p class="text-gray-600 text-sm">Elija la categoría que mejor describa su solicitud</p>
	</div>

	<div class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
		{#each tiposTramite as tipo}
			<label
				class={`relative flex cursor-pointer flex-col items-center rounded-xl border-2 p-6 transition-all duration-200 hover:shadow-md ${
					formData.tipoTramite === tipo.title
						? 'border-blue-500 bg-blue-50 shadow-md'
						: 'border-gray-200 bg-white hover:border-blue-300'
				}`}
			>
				<input
					type="radio"
					name="tipoTramite"
					value={tipo.title}
					bind:group={formData.tipoTramite}
					class="sr-only"
				/>
				
				<!-- Icon -->
				<div class="text-3xl mb-3">{tipo.icon}</div>
				
				<!-- Title -->
				<h4 class="font-medium text-gray-900 text-center mb-2">{tipo.title}</h4>
				
				<!-- Description -->
				<p class="text-xs text-gray-600 text-center leading-relaxed">{tipo.description}</p>
				
				<!-- Selected indicator -->
				{#if formData.tipoTramite === tipo.title}
					<div class="absolute top-3 right-3 flex h-5 w-5 items-center justify-center rounded-full bg-blue-500 text-white">
						<svg class="h-3 w-3" fill="currentColor" viewBox="0 0 20 20">
							<path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
						</svg>
					</div>
				{/if}
			</label>
		{/each}
	</div>
</div>
