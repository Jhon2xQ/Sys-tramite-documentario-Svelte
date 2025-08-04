<script lang="ts">
	import { fade } from 'svelte/transition';

	export let formData: {
		montoPago: number;
		numeroOperacion: string;
		comprobantePago: File | null;
	};
</script>

<div class="space-y-4" in:fade>
	<h2 class="text-2xl font-semibold text-gray-800">Información de Pago</h2>

	<div class="rounded-lg bg-gray-50 p-4">
		<div class="flex items-center justify-between border-b pb-4">
			<span class="text-lg font-medium">Monto a pagar:</span>
			<span class="text-2xl font-bold text-purple-600">S/. {formData.montoPago.toFixed(2)}</span>
		</div>

		<div class="mt-4 space-y-4">
			<div>
				<label for="numeroOperacion" class="mb-2 block text-sm font-medium text-gray-700">
					Número de Operación
				</label>
				<input
					id="numeroOperacion"
					type="text"
					bind:value={formData.numeroOperacion}
					class="w-full rounded-lg border border-gray-300 p-2 focus:border-purple-500 focus:outline-none"
					placeholder="Ingrese el número de operación"
				/>
			</div>

			<div>
				<label for="comprobantePago" class="mb-2 block text-sm font-medium text-gray-700">
					Comprobante de Pago
				</label>
				<div class="flex w-full items-center justify-center">
					<label
						class="flex w-full cursor-pointer flex-col items-center rounded-lg border-2 border-dashed border-gray-300 bg-white p-6 hover:border-purple-500"
					>
						<svg
							class="h-10 w-10 text-gray-400"
							stroke="currentColor"
							fill="none"
							viewBox="0 0 48 48"
						>
							<path
								d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
								stroke-width="2"
								stroke-linecap="round"
								stroke-linejoin="round"
							/>
						</svg>
						<p class="mt-2 text-sm text-gray-600">Sube tu voucher de pago aquí</p>
						<input
							id="comprobantePago"
							type="file"
							accept="image/*,.pdf"
							class="hidden"
							on:change={(e) => {
								const input = e.target as HTMLInputElement | null;
								formData.comprobantePago = input?.files?.[0] || null;
							}}
						/>
					</label>
				</div>
				{#if formData.comprobantePago}
					<p class="mt-2 text-sm text-gray-600">
						Archivo seleccionado: {formData.comprobantePago.name}
					</p>
				{/if}
			</div>
		</div>
	</div>
</div>
