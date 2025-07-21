import { tick } from 'svelte';

// INTERFACES Y TIPOS
// Define la estructura de un mensaje en el chat.
export interface Message {
	id: number;
	type: 'ai' | 'user';
	content: string;
}

// ESTADO INICIAL
// Mensajes con los que comenzará el chat cada vez que se cargue la página.
const initialMessages: Message[] = [
	{
		id: 1,
		type: 'ai',
		content: 'Hola, soy tu asistente virtual. ¿En qué puedo ayudarte hoy?'
	}
];

// CONFIGURACIÓN
// La URL de tu API backend. Asegúrate de que esté correcta.
const API_URL = '/api/chat';

/**
 * Clase ChatStore
 * Gestiona todo el estado y la lógica de la aplicación de chat,
 * incluyendo los mensajes, la entrada del usuario y la comunicación con la API.
 */
class ChatStore {
	// ===================================================================
	// ESTADO REACTIVO (usando Runas de Svelte 5)
	// ===================================================================
	public messages = $state<Message[]>(initialMessages);
	public inputValue = $state('');
	public isLoading = $state(false);

	// Referencia al elemento contenedor del chat para el scroll automático.
	private chatContainer?: HTMLDivElement;

	/**
	 * Almacena la referencia del elemento HTML del contenedor del chat.
	 * @param container - El elemento div que contiene los mensajes.
	 */
	setChatContainer(container: HTMLDivElement) {
		this.chatContainer = container;
	}

	/**
	 * Desplaza suavemente el chat hasta el último mensaje.
	 * Se ejecuta después de que el DOM se haya actualizado.
	 */
	private async scrollToBottom(): Promise<void> {
		await tick(); // tick() espera el próximo ciclo de actualización del DOM en Svelte.
		if (this.chatContainer) {
			this.chatContainer.scrollTop = this.chatContainer.scrollHeight;
		}
	}

	/**
	 * Envía el mensaje del usuario a la API y maneja la respuesta.
	 */
	async sendMessage(): Promise<void> {
		const trimmedInput = this.inputValue.trim();
		if (!trimmedInput || this.isLoading) return;

		// 1. Añade el mensaje del usuario a la interfaz.
		const userMessage: Message = {
			id: Date.now(),
			type: 'user',
			content: trimmedInput
		};
		this.messages.push(userMessage);

		// 2. Prepara el estado para la llamada a la API.
		const messageToSend = this.inputValue.trim();
		this.inputValue = ''; // Limpia el input.
		this.isLoading = true; // Muestra el indicador de "escribiendo...".
		this.scrollToBottom();

		try {
			// 3. Realiza la petición POST a la API.
			const response = await fetch(API_URL, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				// El cuerpo debe coincidir con lo que la API espera: { "question": "..." }
				body: JSON.stringify({
					question: messageToSend
				})
			});

			if (!response.ok) {
				throw new Error(`Error HTTP: ${response.status} ${response.statusText}`);
			}

			// 4. Parsea la respuesta JSON de la API.
			const data = await response.json();

			// 5. Extrae el texto de la respuesta anidada de forma segura.
			// Usa optional chaining (?.), por si `data.answer` no existiera.
			const aiResponseText = data.answer?.answer;

			// 6. Crea y añade el mensaje de la IA a la interfaz.
			const aiMessage: Message = {
				id: Date.now() + 1,
				type: 'ai',
				// Usa el texto extraído o un mensaje de error si no se encontró nada.
				content: aiResponseText || 'Lo siento, no he podido encontrar una respuesta.'
			};
			this.messages.push(aiMessage);
			this.scrollToBottom();
		} catch (error) {
			// 7. Maneja errores de red o de la API.
			console.error('Error al enviar el mensaje:', error);
			const errorMessage: Message = {
				id: Date.now() + 1,
				type: 'ai',
				content:
					'Lo siento, ha ocurrido un error al comunicarme con el servidor. Por favor, intenta de nuevo.'
			};
			this.messages.push(errorMessage);
			this.scrollToBottom();
		} finally {
			// 8. Finaliza el estado de carga.
			this.isLoading = false;
		}
	}

	/**
	 * Permite enviar el mensaje al presionar "Enter" sin Shift.
	 * @param event - El evento del teclado.
	 */
	handleKeypress(event: KeyboardEvent): void {
		if (event.key === 'Enter' && !event.shiftKey) {
			event.preventDefault(); // Evita que se añada una nueva línea.
			this.sendMessage();
		}
	}
}

// ===================================================================
// PATRÓN SINGLETON
// Se crea y exporta una única instancia de ChatStore.
// Cualquier componente que importe `chatStore` usará esta misma instancia.
// ===================================================================
export const chatStore = new ChatStore();
