# 30) Formularios

- #### u: `react-form`

### Nota:

Se utiliza la biblioteca **React Hook Form**, la cual permite manejar formularios de manera eficiente usando referencias (no controlados) o el evento `onChange` (controlados). Esto optimiza el rendimiento al evitar que todo el formulario se vuelva a renderizar cuando cambia un solo campo.

### Implementación:

```bash
npm install react-hook-form
```

## 30.0) Formularios no controlados

- #### u: `react-form\src\components\form.tsx`

### Nota:

En los formularios no controlados, hacemos uso del hook **`useRef`** para obtener el valor de los campos de entrada solo cuando se realiza el envío del formulario. El `useRef` se utiliza para evitar el constante re-renderizado de los campos del formulario, permitiendo acceder a los valores en el momento del `submit`.

### Implementación:

```jsx
import React, { useRef, FormEvent } from 'react';

function Form() {
  // Definimos las referencias con useRef, apuntando inicialmente a null
  const nameRef = useRef<HTMLInputElement>(null);
  const lastnameRef = useRef<HTMLInputElement>(null);

  // Función que maneja el submit
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault(); // Previene la recarga de la página
    const data = {
      // Accediendo a los valores usando .current y .value
      name: nameRef.current?.value,
      lastname: lastnameRef.current?.value,
    };
    console.log(data); // Datos enviados
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="name">Nombre</label>
        {/* Referencia al campo de nombre */}
        <input ref={nameRef} name="nombre" type="text" id="name" className="form-control" />
      </div>
      <div className="mb-3">
        <label htmlFor="lastname">Apellido</label>
        {/* Referencia al campo de apellido */}
        <input ref={lastnameRef} type="text" id="lastname" className="form-control" />
      </div>
      <button className="btn btn-primary">Enviar</button>
    </form>
  );
}

export default Form;




---------
## deploy

- #### instalar vercel globalmente:
  `npm install -g vercel`
- crea un nuevo proyecto en verel y agrega tu proyeto en git
- proyect deployed: https://kpc-react-form.vercel.app/
```
