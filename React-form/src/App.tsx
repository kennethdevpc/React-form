import { FormEvent } from 'react';
import './App.css';
import FormReactHook from './components/FormReactHook';

function App() {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault(); // Previene la recarga de la página
    const form = event.target as HTMLFormElement; // Obtenemos el formulario desde el evento
    const input = form.elements.namedItem('lastname') as HTMLInputElement; // Obtenemos el campo de apellido
    console.log('el input', input.value); // Mostramos el valor del input en la consola
  }

  return (
    <>
      <FormReactHook></FormReactHook>
    </>
  );
}

export default App;
