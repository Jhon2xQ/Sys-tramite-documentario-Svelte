<script lang="ts">
	import { fade } from 'svelte/transition';

	export let formData: {
		categoria: string;
		tipoTramite: string;
		asunto: string;
		documentosAdjuntos: File[];
		montoPago: number;
		numeroOperacion: string;
	};
</script>

<div class="space-y-6" in:fade>
	<h2 class="text-2xl font-semibold text-gray-800">Confirmar Trámite</h2>

	<div class="rounded-lg bg-gray-50 p-6">
		<div class="space-y-4">
			<div>
				<h3 class="text-lg font-medium text-gray-900">Detalles del Trámite</h3>
				<div class="mt-2 space-y-2">
					<div class="flex justify-between border-b border-gray-200 py-2">
						<span class="text-gray-600">Categoría:</span>
						<span class="font-medium">{formData.categoria}</span>
					</div>
					<div class="flex justify-between border-b border-gray-200 py-2">
						<span class="text-gray-600">Tipo de Trámite:</span>
						<span class="font-medium">{formData.tipoTramite}</span>
					</div>
					<div class="flex justify-between border-b border-gray-200 py-2">
						<span class="text-gray-600">Asunto:</span>
						<span class="font-medium">{formData.asunto}</span>
					</div>
				</div>
			</div>

			<div>
				<h3 class="text-lg font-medium text-gray-900">Documentos Adjuntos</h3>
				<div class="mt-2">
					<ul class="list-inside list-disc space-y-1">
						{#each formData.documentosAdjuntos as doc}
							<li class="text-gray-600">{doc.name}</li>
						{/each}
					</ul>
				</div>
			</div>

			<div>
				<h3 class="text-lg font-medium text-gray-900">Información de Pago</h3>
				<div class="mt-2 space-y-2">
					<div class="flex justify-between border-b border-gray-200 py-2">
						<span class="text-gray-600">Monto:</span>
						<span class="font-medium">S/. {formData.montoPago.toFixed(2)}</span>
					</div>
					<div class="flex justify-between border-b border-gray-200 py-2">
						<span class="text-gray-600">N° Operación:</span>
						<span class="font-medium">{formData.numeroOperacion}</span>
					</div>
				</div>
			</div>
		</div>

		<div class="mt-6">
			<div class="rounded-md bg-yellow-50 p-4">
				<div class="flex">
					<div class="flex-shrink-0">
						<svg class="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
							<path
								fill-rule="evenodd"
								d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
								clip-rule="evenodd"
							/>
						</svg>
					</div>
					<div class="ml-3">
						<h3 class="text-sm font-medium text-yellow-800">Importante</h3>
						<div class="mt-2 text-sm text-yellow-700">
							<p>
								Revise cuidadosamente toda la información antes de confirmar el trámite. Una vez
								enviado, no se podrán realizar modificaciones.
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
