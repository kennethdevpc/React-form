import { ChangeEvent, FormEvent, useRef } from 'react';
import './App.css';

function App() {
  const nombre = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const form = e.target.className.valueOf;
    console.log(form);
  };

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
