🌐 **[React hook form tutorial](https://www.react-hook-form.com/)**

**<summary>**[React Hook Form](#rhf)**</summary>**

---

# 30) Paso a paso/ Step by Step

<details>
     <summary style="font-weight: bold; text-decoration: underline; cursor: pointer;">30) Formularios</summary>

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

</details>

<details>
     <summary style="font-weight: bold; text-decoration: underline; cursor: pointer;">30.3) 💥 React Hook Form 💥</summary>

## <a name="rhf"></a> 30.3) 💥 React Hook Form 💥

- #### u: `react-form\src\components\FormReactHook.tsx`
- #### c: `npm i react-hook-form@7.51.3`

  ### Implementación:

  React Hook Form simplifica la gestión de formularios en React al reducir el número de renders innecesarios y mejorar el rendimiento. A continuación, se muestra cómo configurarlo.

  ### Ejemplo de código:

  ```tsx
  import React from 'react';
  import { useForm } from 'react-hook-form';

  function FormReactHook() {
    // useForm nos proporciona métodos como register, handleSubmit y formState
    const { register, handleSubmit, formState: { errors } } = useForm();

    // Función que se ejecuta al enviar el formulario
    const onSubmit = (data: FieldValues) => {
      console.log('Datos del formulario:', data);
    };

    return (
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-3">
          <label htmlFor="name">Nombre</label>
          <input
            id="name"
            {...register('name', { required: true })} // Registramos el input con validación
            className="form-control"
          />
          {errors.name && <span>El nombre es obligatorio</span>}  {/* Manejo de errores */}
        </div>

        <div className="mb-3">
          <label htmlFor="lastname">Apellido</label>
          <input
            id="lastname"
            {...register('lastname', { required: true })} // Registramos otro input
            className="form-control"
          />
          {errors.lastname && <span>El apellido es obligatorio</span>} {/* Manejo de errores */}
        </div>

        <button type="submit" className="btn btn-primary">
          Enviar
        </button>
      </form>
    );
  }

  export default FormReactHook;
  `
  ```

  ### 30.3.2) Registro de campos con React Hook Form

  - #### u: `react-form\src\components\FormReactHook.tsx`

  ### Implementación:

  Cuando usamos `register` de React Hook Form, conectamos el campo de entrada a las funcionalidades de formulario proporcionadas por la biblioteca, como la gestión de cambios, el desenfoque y la referencia.

  ### Ejemplo de código:

  ```tsx
  import React from 'react';
  import { useForm } from 'react-hook-form';

  function FormReactHook() {
    const { register } = useForm(); // Registramos los inputs

    return (
      <form onSubmit={(e) => e.preventDefault()}>
        <div className="mb-3">
          <label htmlFor="name">Nombre</label>
          {/* Registramos el input "name" */}
          <input {...register('name')} type="text" id="name" className="form-control" />
        </div>

        <div className="mb-3">
          <label htmlFor="lastname">Apellido</label>
          {/* Registramos el input "lastname" */}
          <input {...register('lastname')} type="text" id="lastname" className="
  ```

  n: El método `register(<input {...register('name')} />)` de React Hook Form podría devolver algo similar a:

  ```typescript
  {
    name: 'name',
    ref: someFunction,
    onChange: someFunction,
    onBlur: someFunction
  }
  ```

  -Es decir algo como:

  ```js
  <input name="name" ref={someFunction} onChange={someFunction} onBlur={someFunction} />
  ```

  - El spread operator ({...register('name')}) en React Hook Form trae consigo estas propiedades para manejar el campo del formulario de manera controlada.

  ### 30.3.3) Ahora, para obtener los datos de ese campo registrado:

  ```typescript
  function FormReactHook() {
    //----obtengo el handleSubmit
    const { register, handleSubmit } = useForm();

    return (
      //-------aquí el handleSubmit posee la info del register
      <form
        onSubmit={handleSubmit((data) =>
        //-------Aquí se manejan los datos del formulario
          console.log("Información obtenida desde el 'register'", data)
        )}
      >
        <div className="mb-3">
  ```

  #### forma2

  ```TypeScript
      function FormReactHook({}: Props) {
      const { register, handleSubmit } = useForm();
      const onSubmit = (data: FieldValues) => {
        console.log('Datos del formulario:', data.nombre);
      };
      return (
        <div>
          <form action="" onSubmit={handleSubmit(onSubmit)}>
            <input type="text" id="nombre" {...register('nombre')} />
          </form>
        </div>
      );
    }
  ```

  ```console
    Datos del formulario: Juan
  ```

  ### 30.3.4) Validaciones con el "register"

  Para realizar validaciones utilizando `register`, puedes aprovechar las funcionalidades proporcionadas por `formState`, como `errors`. Aquí te muestro cómo implementarlo:

  - **_Tambien puede implementarse_**
  - \*max: para establecer un valor máximo.
  - \*min: para establecer un valor mínimo.
  - \*pattern: para validar con expresiones regulares.
  - \*validate: para crear una función de validación personalizada, como: `(value) => (value.length < 4 ? 'Largo mínimo 4' : true)`.

  ```typescript
  import { useForm } from 'react-hook-form';

  function FormReactHook() {
    const { register, formState } = useForm();

    // Puedes ver los errores en formState.errors
    console.log(formState.errors);

    return (
      <form onSubmit={(e) => e.preventDefault()}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Nombre
          </label>
          <!-- agrego las validaciones -->
          <input
            {...register('name', {
              required: true, // Ejemplo de validación requerida
              maxLength: 20, // Ejemplo de validación de longitud máxima
              minLength: 2, // Ejemplo de validación de longitud mínima
              pattern: /^[A-Za-z]+$/i, // Ejemplo de validación con expresión regular
              validate: (value) => (value.length < 4 ? 'Longitud mínima de 4 caracteres' : true), // Ejemplo de validación personalizada
            })}
            type="text"
            id="name"
            className="form-control"
          />
          {/* Aquí podrías mostrar los errores si existen */}
          {formState.errors.name && <span>{formState.errors.name.message}</span>}
        </div>
      </form>
    );
  }

  export default FormReactHook;
  ```

  #### 30.3.4.2) Para usar la Desestructuración anidada:

  - **Forma 1**: Defino un tipo para que acepte las propiedades `name` y `lastname`.

    ```typescript
    type Form = {
      //----creo este tipo para que acepte estos
      name: string;
      lastname: string;
    };

    const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm<Form>(); //----le agrego el tipo para evitar errores con "name" y "lastname"
    console.log(errors);
    // Uso en el HTML:

    return (
      <div>
        <form action="" onSubmit={handleSubmit(onSubmit)}>
          <input
            type="text"
            id="nombre"
            {...register('nombre', {
              required: { value: true, message: 'Este campo es obligatorio' },
            })}
          />
          {errors.name && <span>{errors?.name?.message}</span>}
        </form>
      </div>
    );
    ```

  - **Forma 2**: Sin usar la interfaz o tipo.

    ```typescript
    const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm();
    console.log(errors);

    // Uso en el HTML:
    return (
      <div>
        <form action="" onSubmit={handleSubmit(onSubmit)}>
          <input
            type="text"
            id="nombre"
            {...register('nombre', {
              required: { value: true, message: 'Este campo es obligatorio' },
            })}
          />
            <!-- //Se hace el uso del toString() para que no presente errores de typos -->

          {errors.nombre && <span>{errors?.nombre?.message?.toString()}</span>}
        </form>
      </div>
    );
    ```

  ### 30.3.5) Colocando la función del handleSubmit en una función aparte:

  - Se define una función `onsubmit` que maneja el envío de datos solo si no hay errores. Esta función se pasa como argumento a `handleSubmit`.
  - **Forma 1**: usar la interfaz o tipo.

    ```typescript
    type Form = {
      //----creo este tipo para que acepte estos
      name: string;
      lastname: string;
      nombre: string;
    };
    function FormReactHook({}: Props) {
      const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm<Form>(); //------Se le pasa el Form para que pueda saber el tipo de cada input
      console.log('errores son', errors);
      //--------aqui tambien se le pasa el Form , aquí se define la función onSubmit que recibe los datos validados
      const onSubmit = (data: Form) =>
        console.log("informacion Obtenida desde el 'register'", data);

      return (
        <div>
          <form action="" onSubmit={handleSubmit(onSubmit)}>
            <input
              type="text"
              id="nombre"
              {...register('nombre', {
                required: { value: true, message: 'Este campo es obligatorio' }, //---validación requerida
              })}
            />
            <!-- //Se hace el uso del toString() para que no presente errores de typos -->
                   {errors.nombre && <span>{errors?.nombre?.message}</span>}
                 //---muestra el mensaje de error si existe
          </form>
        </div>
      );
    }

    export default FormReactHook;
    ```

  - **Forma 2**: usando el tipo `FieldValues`

        ```typescript
        //---no se utiliza lel tipo Form, solo se usa el FieldValues de react hook
        function FormReactHook({}: Props) {
          const {
            register,
            handleSubmit,
            formState: { errors },
          } = useForm(); //------como se ve aqui no se usa el Form
          console.log('errores son', errors);
          //---------aquí se define la función onSubmit que recibe los datos como FieldValues
          const onSubmit = (data: FieldValues) =>
            console.log("informacion Obtenida desde el 'register'", data);

          return (
            <div>
              <form action="" onSubmit={handleSubmit(onSubmit)}>
                <input
                  type="text"
                  id="nombre"
                  {...register('nombre', {
                    required: { value: true, message: 'Este campo es obligatorio' },
                  })}
                />
                {errors.nombre && <span>{errors?.nombre?.message?.toString()}</span>}
              </form>
            </div>
          );
        }

        export default FormReactHook;
        ```

</details>

<details>
     <summary style="font-weight: bold; text-decoration: underline; cursor: pointer;">31) ZOD biblioteca</summary>

# 31) ZOD biblioteca para manejo de formularios muy pesados

- **ZOD** es una biblioteca utilizada para la validación de esquemas, ofreciendo una forma sencilla y efectiva de manejar formularios complejos.
- Otras bibliotecas de validación similares incluyen **Joi** y **Yup**, pero aquí nos enfocaremos en **ZOD** debido a su simplicidad y eficiencia en la validación de tipos.

- **Ventajas de usar ZOD**:

  - Proporciona validación de tipo estática.
  - Permite definir esquemas de validación de forma clara y concisa.
  - Soporta integración fácil con bibliotecas de formularios como **React Hook Form**.

  ## 31.0) Instalación de ZOD

  - Para comenzar a usar ZOD en tu proyecto, primero necesitas instalar la biblioteca. Puedes hacerlo ejecutando el siguiente comando en tu terminal:

    ```bash
      npm i zod@3.22.4
    ```

    - Después de instalar ZOD, puedes crear una carpeta y un archivo donde definirás tus esquemas de validación. Por ejemplo:
      - Crea una carpeta llamada schemas (o cualquier nombre que prefieras) en la raíz de tu proyecto.
      - Crea un archivo dentro de esa carpeta, por ejemplo userSchema.ts, donde definirás tu esquema de validación con ZOD:

  ## 31.1) Creación del esquema

  - Para definir un esquema de validación con ZOD, puedes seguir este ejemplo.
    El archivo donde se define el esquema es

  - #### u: `react-form\src\schemas\user.ts`

    ```typescript
    // Importa ZOD para crear esquemas
    import { z } from 'zod';

    // Definición del esquema para un usuario
    export const userSchema = z.object({
      // Validación del campo 'name'
      name: z
        .string({ required_error: 'Nombre es requerido' }) //----mensaje de error personalizado cuando el campo es requerido
        .min(3, { message: 'longitud minima 3' }) //----mínimo de 3 caracteres
        .max(20), //----máximo de 20 caracteres

      // Validación del campo 'lastname'
      lastname: z
        .string({ required_error: 'Apellido es requerido' })
        .min(3, { message: 'longitud minima 3' })
        .max(20),

      // Validación del campo 'amount' (debe ser un número)
      amount: z
        .number({ coerce: true, invalid_type_error: 'el campo debe ser numerico' }) //----coerce convierte valores a número
        .min(1, { message: 'el campo es requerido' }),

      //----Validación de 'age' como ejemplo de una función personalizada
      // age: z.string().refine(
      //   (age) => { return Number(age) >= 18; }, //----comprueba si la edad es mayor o igual a 18
      //   { message: "You must be 18 years or older" }, //----mensaje de error personalizado
      // ),
    });
    ```

  - ### 31.1.2) Algunas validaciones posibles en ZOD

    - Aquí se muestran algunos ejemplos de validaciones posibles que puedes usar con ZOD. Las validaciones van desde tipos básicos hasta más complejas como arreglos, enums, refinamientos y cadenas personalizadas.

    ```link
      https://github.com/kennethdevpc/reactUpdates24/blob/master/zod.txt
    ```

    ```typescript
    import { z } from 'zod';

    // Ejemplos de validaciones con ZOD

    // Validación de cadenas de texto
    const stringSchema = z.string().min(2).max(100); //----cadenas entre 2 y 100 caracteres
    const emailSchema = z.string().email(); //----validación de email

    // Validación de números
    const numberSchema = z.number().int().positive(); //----números enteros y positivos
    const ageSchema = z.number().min(18, { message: 'Debes ser mayor de 18 años' }); //----número mínimo con mensaje personalizado

    // Validación de fechas
    const dateSchema = z
      .date()
      .min(new Date('2020-01-01'), { message: 'La fecha debe ser posterior a 2020' });

    // Validación de booleanos
    const booleanSchema = z.boolean();

    // Validación de arreglos
    const arraySchema = z.array(z.string()).nonempty(); //----arreglo de cadenas no vacío
    const arrayNumberSchema = z.array(z.number()).length(5); //----arreglo de 5 números

    // Validación de enums
    const roleSchema = z.enum(['admin', 'user', 'guest']); //----solo acepta valores del enum

    // Validación de objetos anidados
    const addressSchema = z.object({
      street: z.string(),
      city: z.string(),
      zipCode: z.string().length(5), //----código postal de longitud 5
    });

    // Validación de refinamiento
    const passwordSchema = z
      .string()
      .min(8)
      .refine((password) => /[A-Z]/.test(password), {
        message: 'Debe tener al menos una letra mayúscula',
      });

    // Validación condicional con refinamiento
    const conditionalSchema = z.union([
      z.string().length(4), //----si es cadena, debe tener 4 caracteres
      z.number().min(10), //----si es número, debe ser mayor a 10
    ]);

    // Uso de 'refine' para validaciones personalizadas
    const customSchema = z.string().refine((val) => val === 'valid', {
      message: 'El valor debe ser "valid"',
    });

    // Validación opcional
    const optionalSchema = z.string().optional(); //----campo opcional
    ```

  ## 31.2) Utilizando el esquema ZOD en el formulario, método `parse`

  - Aquí se muestra cómo utilizar el esquema de validación creado con ZOD dentro de un formulario de React usando `react-hook-form`.
  - Inicialmente, se utiliza el método `parse` para validar los datos, pero se advierte que **no es la forma recomendada** para manejar errores en formularios.
  - La opción recomendada es usar un **resolver** para manejar de manera más efectiva la validación, ya que este evalúa los resultados de la validación sin necesidad de capturar excepciones.

    - **Archivo:** `react-form/src/components/FormReactHook.tsx`

    ```typescript
    import { userSchema } from '../schemas/user'; //-----importo el esquema creado

    function FormReactHook() {
      //----usando react-hook-form con ZOD para la validación del esquema
      type Form = { name: string; lastname: string };

      const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm<Form>();

      const onSubmit = (data: Form) => {
        try {
          //--------Uso un try-catch para manejar la validación con ZOD
          const result = userSchema.parse(data); //----uso el método `parse` del esquema ZOD
          console.log('Datos validados sin errores', result);
        } catch (error) {
          //--------Capturo el error si el esquema no es válido
          // Para solucionar el error, se debe tipar explícitamente la variable error como 'Error' para que TypeScript lo reconozca como objeto de error.
          console.log(`${(error as Error).message}`);

          //--------Verifico si el error contiene 'errors' para más detalles
          if (error instanceof Error && 'errors' in error) {
            console.log('Datos del formulario inválidos', error.message);
          } else {
            console.log('Ocurrió un error desconocido', error);
          }
        }
      };

      return (
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-3">
            {/* Input para el campo 'name', usando `register` para la conexión con react-hook-form */}
            <input {...register('name')} type="text" id="name" className="form-control" />
            {/* Mostrar errores si existen */}
            {errors.name && <span>{errors?.name?.message}</span>}
          </div>
        </form>
      );
    }

    export default FormReactHook;
    ```

    - #### ejemplo

      - #### u: `reactform\React-form\src\schemas\user.ts`
      - schema

      ```ts
      import { z } from 'zod';

      export const userSchema = z.object({
        name: z
          .string()
          .min(3, { message: 'longitud minima 3' }) //----mínimo de 3 caracteres
          .max(20), //----máximo de 20 caracteres
        lastName: z
          .string()
          .min(3, { message: 'longitud minima 3' }) //----mínimo de 3 caracteres
          .max(20), //----máximo de 20 caracteres
        age: z
          .number({ coerce: true, invalid_type_error: 'el campo debe ser numerico' }) //----coerce convierte valores a número
          .min(1, { message: 'el campo es requerido' })
          .refine((val) => val >= 18, {
            message: 'Debe ser mayor de edad',
          }),
        email: z.string().email(),
        password: z
          .string()
          .refine(
            (password) =>
              /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{3,}$/.test(password),
            { message: 'password invalida' }
          ),
      });
      ```

      - Ahora voy al formulario y verifico con el submit los errores sin embargo aun no se mostraran en pantalla solo en consola
        - #### u: `reactform\React-form\src\components\FormReactHook.tsx  `

      ```tsx
      import React from 'react';
      import { FieldValues, useForm } from 'react-hook-form';
      import { userSchema } from '../schemas/user';

      type Props = {};
      type Form = { name: string; lastName: string; age: number; email: string; password: string };
      function FormReactHook({}: Props) {
        const {
          register,
          handleSubmit,
          formState: { errors },
        } = useForm<Form>();
        console.log('errores son', errors);

        const onSubmit = (data: Form) => {
          try {
            //--------Uso un try-catch para manejar la validación con ZOD
            const result = userSchema.parse(data); //----uso el método `parse` del esquema ZOD
            console.log('Datos validados sin errores', result);
          } catch (error) {
            //--------Capturo el error si el esquema no es válido
            // Para solucionar el error, se debe tipar explícitamente la variable error como 'Error' para que TypeScript lo reconozca como objeto de error.
            console.log(`${(error as Error).message}`);

            //--------Verifico si el error contiene 'errors' para más detalles
            if (error instanceof Error && 'errors' in error) {
              console.log('Datos del formulario inválidos', error.message);
            } else {
              console.log('Ocurrió un error desconocido', error);
            }
          }
        };
        return (
          <div>
            <form
              action=""
              onSubmit={handleSubmit(onSubmit)}
              style={{ display: 'flex', color: 'red', flexDirection: 'column' }}
            >
              <label htmlFor="">Name</label>
              <input type="text" id="name" {...register('name')} />
              {errors.name && <span>{errors?.name?.message?.toString()}</span>}
              <label htmlFor="">Last name</label>
              <input type="text" id="lastName" {...register('lastName')} />
              {errors.lastName && <span>{errors?.lastName?.message?.toString()}</span>}
              <label htmlFor="">Age</label>
              <input type="text" id="age" {...register('age')} />
              {errors.age && <span>{errors?.age?.message?.toString()}</span>}
              <label htmlFor="">Email</label>
              <input type="text" id="email" {...register('email')} />
              {errors.email && <span>{errors?.email?.message?.toString()}</span>}
              <label htmlFor="">Password</label>
              <input type="text" id="password" {...register('password')} />
              {errors.password && <span>{errors?.password?.message?.toString()}</span>}
              <br />
              <button type="submit">Save</button>
            </form>
          </div>
        );
      }

      export default FormReactHook;
      ```

      - al ejecutar save se ilustran los errores en consola:

      ```console
          Datos del formulario inválidos [
          {
            "code": "too_small",
            "minimum": 3,
            "type": "string",
            "inclusive": true,
            "exact": false,
            "message": "longitud minima 3",
            "path": [
              "name"
            ]
          },
          {
            "code": "too_small",
            "minimum": 3,
            "type": "string",
            "inclusive": true,
            "exact": false,
            "message": "longitud minima 3",
            "path": [
              "lastName"
            ]
          },
          {
            "code": "too_small",
            "minimum": 1,
            "type": "number",
            "inclusive": true,
            "exact": false,
            "message": "el campo es requerido",
            "path": [
              "age"
            ]
          },
          {
            "code": "custom",
            "message": "Debe ser mayor de edad",
            "path": [
              "age"
            ]
          },
          {
            "validation": "email",
            "code": "invalid_string",
            "message": "Invalid email",
            "path": [
              "email"
            ]
          },
          {
            "code": "custom",
            "message": "password invalida",
            "path": [
              "password"
            ]
          }
        ]
      ```

  ## 31.3) Método Resolver: Utilizando el resolver con Zod para manejar errores

  - Ahora, se utiliza el método **resolver** en combinación con la biblioteca `@hookform/resolvers`, lo cual permite una mejor integración y manejo de los errores definidos en los esquemas de Zod.
    Este enfoque elimina la necesidad de manejar manualmente los errores dentro de un `try-catch`, lo que simplifica el código y proporciona una manera más eficiente de trabajar con los formularios.

  - Beneficios del Resolver:

    - Con el zodResolver, los errores definidos en el esquema Zod son manejados automáticamente por react-hook-form, lo que proporciona una validación más eficiente.
    - Evita el uso de estructuras try-catch para manejar errores y simplifica el código.
    - Los errores se muestran directamente en los elementos de la UI asociados con cada campo del formulario.

    - **Repositorio de resolvers:** [GitHub - react-hook-form/resolvers](https://github.com/react-hook-form/resolvers)
    - **Instalación de la biblioteca:**

      ```bash
      npm install @hookform/resolvers@3.3.4
      ```

    - **Archivo:** `react-form/src/components/FormReactHookResolver.tsx`

    ```typescript
    import { useForm } from 'react-hook-form';
    import { zodResolver } from '@hookform/resolvers/zod'; //---importo el resolver de Zod
    import { userSchema } from '../schemas/user'; //---importo el mismo esquema
    type Props = {};
    const errorLetter = { color: 'black', fontWeight: 'bold' };
    function FormReactHookResolver({}: Props) {
      type Form = {
        name: string;
        lastName: string;
        age: number;
        email: string;
        password: string;
      };

      const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm<Form>({
        resolver: zodResolver(userSchema), //-----uso el resolver de Zod con el esquema
      });

      console.log('Errores validados por Zod:', errors);

      const onsubmit = (data: Form) => {
        console.log('Datos enviados:', data);
      };

      return (
        <form
          action=""
          onSubmit={handleSubmit(onsubmit)}
          style={{ display: 'flex', color: 'red', flexDirection: 'column', maxWidth: '300px' }}
        >
          <label htmlFor="">Name</label>
          <input type="text" id="name" {...register('name')} />
          {/* Muestra el error si existe */}
          {errors.name && <span style={errorLetter}>{errors?.name?.message?.toString()}</span>}
          <label htmlFor="">Last name</label>
          <input type="text" id="lastName" {...register('lastName')} />
          {errors.lastName && (
            <span style={errorLetter}>{errors?.lastName?.message?.toString()}</span>
          )}
          <label htmlFor="">Age</label>
          <input type="text" id="age" {...register('age')} />
          {errors.age && <span style={errorLetter}>{errors?.age?.message?.toString()}</span>}
          <label htmlFor="">Email</label>
          <input type="text" id="email" {...register('email')} />
          {errors.email && <span style={errorLetter}>{errors?.email?.message?.toString()}</span>}
          <label htmlFor="">Password</label>
          <input type="text" id="password" {...register('password')} />
          {errors.password && (
            <span style={errorLetter}>{errors?.password?.message?.toString()}</span>
          )}
          <br />
          <button type="submit">Save</button>
        </form>
      );
    }

    export default FormReactHookResolver;
    ```

</details>
