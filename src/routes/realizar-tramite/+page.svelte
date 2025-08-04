<script lang="ts">
	import ProcessHeader from './components/ProcessHeader.svelte';
	import ProgressIndicator from './components/ProgressIndicator.svelte';
	import FormContainer from './components/FormContainer.svelte';
	import NavigationButtons from './components/NavigationButtons.svelte';
	import Step1TipoTramite from './components/Step1TipoTramite.svelte';
	import Step2DetallesTramite from './components/Step2DetallesTramite.svelte';
	import Step3Pago from './components/Step3Pago.svelte';
	import Step4Confirmacion from './components/Step4Confirmacion.svelte';

	let currentStep = 1;
	let isSubmitting = false;
	let formData = {
		// Paso 1: Selección de trámite
		tipoTramite: '',
		categoria: '',

		// Paso 2: Información del trámite
		asunto: '',
		descripcion: '',
		documentosRequeridos: [] as string[],
		documentosAdjuntos: [] as File[],
		observaciones: '',

		// Paso 3: Información de pago
		montoPago: 0,
		numeroOperacion: '',
		comprobantePago: null as File | null,

		// Datos del usuario (obtenidos del login)
		codigo: '',
		facultad: '',
		carreraProfesional: '',
		email: '',
		telefono: ''
	};

	function nextStep() {
		if (currentStep < 4) currentStep++;
	}

	function prevStep() {
		if (currentStep > 1) currentStep--;
	}

	async function handleSubmit() {
		isSubmitting = true;
		try {
			// Aquí iría la lógica para enviar el formulario
			console.log('Formulario enviado:', formData);
			// Simular proceso de envío
			await new Promise((resolve) => setTimeout(resolve, 2000));
			alert('Trámite enviado exitosamente');
		} catch (error) {
			console.error('Error al enviar el trámite:', error);
			alert('Error al enviar el trámite. Intente nuevamente.');
		} finally {
			isSubmitting = false;
		}
	}
</script>

<div class="min-h-screen bg-gray-50 py-8">
	<div class="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
		<!-- Encabezado profesional -->
		<ProcessHeader />

		<!-- Indicador de progreso mejorado -->
		<ProgressIndicator {currentStep} />

		<!-- Contenedor del formulario -->
		<FormContainer>
			<form on:submit|preventDefault={handleSubmit}>
				<!-- Contenido del paso actual -->
				{#if currentStep === 1}
					<Step1TipoTramite {formData} />
				{:else if currentStep === 2}
					<Step2DetallesTramite {formData} />
				{:else if currentStep === 3}
					<Step3Pago {formData} />
				{:else if currentStep === 4}
					<Step4Confirmacion {formData} />
				{/if}

				<!-- Botones de navegación modulares -->
				<NavigationButtons
					{currentStep}
					{isSubmitting}
					on:next={nextStep}
					on:previous={prevStep}
					on:submit={handleSubmit}
				/>
			</form>
		</FormContainer>
	</div>
</div>
