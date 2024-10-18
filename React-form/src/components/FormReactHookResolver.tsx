import { useForm } from 'react-hook-form';
import { userSchema } from '../schemas/user';
import { zodResolver } from '@hookform/resolvers/zod';
import { userForm as Form } from '../schemas/user'; //-----utilizndo el typo del schema, par apoder ahorrar codigo
type Props = {};
const errorLetter = { color: 'black', fontWeight: 'bold' };
function FormReactHookResolver({}: Props) {
  /* type Form = {  //-----lo utlizamos si no usamos el "type userForm" de el archivo "schemas/user.ts"
    name: string;
    lastName: string;
    age: number;
    email: string;
    password: string;
  }; */

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
      {errors.name && <span style={errorLetter}>{errors?.name?.message?.toString()}</span>}
      <label htmlFor="">Last name</label>
      <input type="text" id="lastName" {...register('lastName')} />
      {errors.lastName && <span style={errorLetter}>{errors?.lastName?.message?.toString()}</span>}
      <label htmlFor="">Age</label>
      <input type="text" id="age" {...register('age')} />
      {errors.age && <span style={errorLetter}>{errors?.age?.message?.toString()}</span>}
      <label htmlFor="">Email</label>
      <input type="text" id="email" {...register('email')} />
      {errors.email && <span style={errorLetter}>{errors?.email?.message?.toString()}</span>}
      <label htmlFor="">Password</label>
      <input type="text" id="password" {...register('password')} />
      {errors.password && <span style={errorLetter}>{errors?.password?.message?.toString()}</span>}
      <br />
      <button type="submit">Save</button>
    </form>
  );
}

export default FormReactHookResolver;
