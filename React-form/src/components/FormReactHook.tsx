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
      console.log(`${(error as Error).message}`, 'jjjjjj');

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
