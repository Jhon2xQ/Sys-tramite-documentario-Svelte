<script lang="ts">
	import { fade } from 'svelte/transition';

	export let formData: {
		asunto: string;
		descripcion: string;
		documentosAdjuntos: File[];
	};

	let dragOver = false;
	let fileInputRef: HTMLInputElement;

	function handleFileChange(event: Event) {
		const input = event.target as HTMLInputElement;
		if (input.files) {
			formData.documentosAdjuntos = Array.from(input.files);
		}
	}

	function handleDrop(event: DragEvent) {
		event.preventDefault();
		dragOver = false;
		if (event.dataTransfer?.files) {
			formData.documentosAdjuntos = Array.from(event.dataTransfer.files);
		}
	}

	function handleDragOver(event: DragEvent) {
		event.preventDefault();
		dragOver = true;
	}

	function handleDragLeave(event: DragEvent) {
		event.preventDefault();
		dragOver = false;
	}

	function removeFile(index: number) {
		formData.documentosAdjuntos = formData.documentosAdjuntos.filter((_, i) => i !== index);
	}

	function formatFileSize(bytes: number): string {
		if (bytes === 0) return '0 Bytes';
		const k = 1024;
		const sizes = ['Bytes', 'KB', 'MB', 'GB'];
		const i = Math.floor(Math.log(bytes) / Math.log(k));
		return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
	}
</script>

<div class="space-y-6" in:fade>
	<div class="text-center mb-8">
		<h3 class="text-lg font-medium text-gray-900 mb-2">Información del trámite</h3>
		<p class="text-gray-600 text-sm">Complete los detalles y adjunte los documentos necesarios</p>
	</div>

	<!-- Asunto -->
	<div class="space-y-2">
		<label for="asunto-input" class="block text-sm font-medium text-gray-900">Asunto *</label>
		<input
			id="asunto-input"
			type="text"
			bind:value={formData.asunto}
			class="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-100 transition-colors duration-200"
			placeholder="Ingrese el asunto de su trámite"
			required
		/>
	</div>

	<!-- Descripción -->
	<div class="space-y-2">
		<label for="descripcion-textarea" class="block text-sm font-medium text-gray-900">Descripción detallada *</label>
		<textarea
			id="descripcion-textarea"
			bind:value={formData.descripcion}
			class="w-full h-32 rounded-lg border border-gray-300 px-4 py-3 text-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-100 transition-colors duration-200 resize-none"
			placeholder="Describa detalladamente su trámite, incluya toda la información relevante"
			required
		></textarea>
		<p class="text-xs text-gray-500">Mínimo 20 caracteres</p>
	</div>

	<!-- Documentos Adjuntos -->
	<div class="space-y-3">
		<label for="file-upload" class="block text-sm font-medium text-gray-900">Documentos adjuntos</label>
		<p class="text-xs text-gray-600">Formatos permitidos: PDF, DOC, DOCX, JPG, PNG (máx. 10MB por archivo)</p>
		
		<!-- Drop Zone -->
		<div
			class={`relative flex flex-col items-center justify-center w-full h-32 border-2 border-dashed rounded-lg cursor-pointer transition-all duration-200 ${
				dragOver
					? 'border-blue-400 bg-blue-50'
					: 'border-gray-300 bg-gray-50 hover:border-blue-400 hover:bg-blue-50'
			}`}
			role="button"
			tabindex="0"
			aria-label="Zona de subida de archivos. Haga clic o presione Enter para seleccionar archivos"
			on:drop={handleDrop}
			on:dragover={handleDragOver}
			on:dragleave={handleDragLeave}
			on:click={() => fileInputRef?.click()}
			on:keydown={(e) => e.key === 'Enter' && fileInputRef?.click()}
		>
			<svg class="w-8 h-8 mb-2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
				<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
			</svg>
			<p class="text-sm text-gray-600 text-center">
				<span class="font-medium">Haga clic para subir</span> o arrastre sus archivos aquí
			</p>
			<input
				id="file-upload"
				bind:this={fileInputRef}
				type="file"
				multiple
				accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
				on:change={handleFileChange}
				class="hidden"
			/>
		</div>

		<!-- Lista de archivos seleccionados -->
		{#if formData.documentosAdjuntos.length > 0}
			<div class="space-y-2">
				<p class="text-sm font-medium text-gray-900">Archivos seleccionados ({formData.documentosAdjuntos.length}):</p>
				<div class="space-y-2 max-h-32 overflow-y-auto">
					{#each formData.documentosAdjuntos as doc, index}
						<div class="flex items-center justify-between p-3 bg-gray-50 rounded-lg border">
							<div class="flex items-center space-x-3 flex-1 min-w-0">
								<svg class="w-5 h-5 text-gray-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
									<path fill-rule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clip-rule="evenodd" />
								</svg>
								<div class="flex-1 min-w-0">
									<p class="text-sm font-medium text-gray-900 truncate">{doc.name}</p>
									<p class="text-xs text-gray-500">{formatFileSize(doc.size)}</p>
								</div>
							</div>
							<button
								type="button"
								on:click={() => removeFile(index)}
								class="ml-3 p-1 text-gray-400 hover:text-red-500 transition-colors duration-200"
								aria-label={`Eliminar archivo ${doc.name}`}
							>
								<svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
									<path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" />
								</svg>
							</button>
						</div>
					{/each}
				</div>
			</div>
		{/if}
	</div>
</div>
