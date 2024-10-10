import React from 'react';
import { FieldValues, useForm } from 'react-hook-form';

type Props = {};
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
  } = useForm<Form>();
  console.log('errores son', errors);

  const onSubmit = (data: Form) => console.log("informacion Obtenida desde el 'register'", data);

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
        {errors.nombre && <span>{errors?.nombre?.message}</span>}
      </form>
    </div>
  );
}

export default FormReactHook;
