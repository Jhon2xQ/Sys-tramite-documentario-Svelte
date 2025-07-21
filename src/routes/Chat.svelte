<script lang="ts">
	import { chatStore } from '../lib/stores/Chat.svelte';

	// Variable para el contenedor del chat
	let chatContainer: HTMLDivElement;

	// Establecer referencia del contenedor cuando el componente se monte
	$effect(() => {
		if (chatContainer) {
			chatStore.setChatContainer(chatContainer);
		}
	});
</script>

<!-- Heading -->
<div class="flex flex-col space-y-1.5 pb-6">
	<h2 class="text-lg font-semibold tracking-tight">Chatbot</h2>
	<p class="text-sm leading-3 text-[#6b7280]">Powered by LangChain</p>
</div>

<!-- Chat Container -->
<div bind:this={chatContainer} class="h-[474px] min-w-full overflow-y-auto pr-4">
	{#each chatStore.messages as message (message.id)}
		{#if message.type === 'ai'}
			<!-- Chat Message AI -->
			<div class="my-4 flex flex-1 gap-3 text-sm text-gray-600">
				<span class="relative flex h-8 w-8 shrink-0 overflow-hidden rounded-full">
					<div class="rounded-full border bg-gray-100 p-1">
						<svg
							stroke="none"
							fill="black"
							stroke-width="1.5"
							viewBox="0 0 24 24"
							aria-hidden="true"
							height="20"
							width="20"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z"
							>
							</path>
						</svg>
					</div>
				</span>
				<p class="leading-relaxed">
					<span class="block font-bold text-gray-700">AI</span>
					{message.content}
				</p>
			</div>
		{:else}
			<!-- User Chat Message -->
			<div class="my-4 flex flex-1 gap-3 text-sm text-gray-600">
				<span class="relative flex h-8 w-8 shrink-0 overflow-hidden rounded-full">
					<div class="rounded-full border bg-gray-100 p-1">
						<svg
							stroke="none"
							fill="black"
							stroke-width="0"
							viewBox="0 0 16 16"
							height="20"
							width="20"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z"
							>
							</path>
						</svg>
					</div>
				</span>
				<p class="leading-relaxed">
					<span class="block font-bold text-gray-700">You</span>
					{message.content}
				</p>
			</div>
		{/if}
	{/each}

	<!-- Loading indicator -->
	{#if chatStore.isLoading}
		<div class="my-4 flex flex-1 gap-3 text-sm text-gray-600">
			<span class="relative flex h-8 w-8 shrink-0 overflow-hidden rounded-full">
				<div class="rounded-full border bg-gray-100 p-1">
					<svg
						stroke="none"
						fill="black"
						stroke-width="1.5"
						viewBox="0 0 24 24"
						aria-hidden="true"
						height="20"
						width="20"
						xmlns="http://www.w3.org/2000/svg"
						class="animate-spin"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z"
						>
						</path>
					</svg>
				</div>
			</span>
			<p class="leading-relaxed">
				<span class="block font-bold text-gray-700">AI</span>
				<span class="text-gray-500 italic">Escribiendo...</span>
			</p>
		</div>
	{/if}
</div>

<!-- Input box -->
<div class="flex items-center pt-0">
	<form
		class="flex w-full items-center justify-center space-x-2"
		on:submit|preventDefault={() => chatStore.sendMessage()}
	>
		<input
			bind:value={chatStore.inputValue}
			on:keypress={chatStore.handleKeypress}
			class="flex h-10 w-full rounded-md border border-[#e5e7eb] px-3 py-2 text-sm text-[#030712] placeholder-[#6b7280] focus:ring-2 focus:ring-[#9ca3af] focus:outline-none focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
			placeholder="Type your message"
			disabled={chatStore.isLoading}
		/>
		<button
			type="submit"
			disabled={!chatStore.inputValue.trim() || chatStore.isLoading}
			class="inline-flex h-10 items-center justify-center rounded-md bg-black px-4 py-2 text-sm font-medium text-[#f9fafb] hover:bg-[#111827E6] disabled:pointer-events-none disabled:opacity-50"
		>
			{chatStore.isLoading ? 'Enviando...' : 'Send'}
		</button>
	</form>
</div>

<style>
	/* Estilos para la animación de loading */
	@keyframes spin {
		from {
			transform: rotate(0deg);
		}
		to {
			transform: rotate(360deg);
		}
	}

	.animate-spin {
		animation: spin 1s linear infinite;
	}
</style>
