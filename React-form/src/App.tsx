import { ChangeEvent, FormEvent, useRef } from 'react';
import './App.css';

function App() {
  const nombre = useRef<HTMLInputElement>(null);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault(); // Previene la recarga de la página
    const form = event.target as HTMLFormElement; // Obtenemos el formulario desde el evento
    const input = form.elements.namedItem('lastname') as HTMLInputElement; // Obtenemos el campo de apellido
    console.log('el input', input.value); // Mostramos el valor del input en la consola
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name">Nombre</label>
          <input name="nombre" type="text" id="name" className="form-control" />
        </div>
        <div className="mb-3">
          <label htmlFor="lastname">Apellido</label>
          <input name="lastname" type="text" id="lastname" className="form-control" />
        </div>
        <button className="btn btn-primary">Enviar</button>
      </form>
    </>
  );
}

export default App;
