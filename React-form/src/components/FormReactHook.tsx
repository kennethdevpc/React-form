import React from 'react';
import { FieldValues, useForm } from 'react-hook-form';

type Props = {};

function FormReactHook({}: Props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  console.log('errores son', errors);

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
