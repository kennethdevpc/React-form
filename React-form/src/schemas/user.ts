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
      (password) => /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{3,}$/.test(password),
      { message: 'password invalida' }
    ),
});

export type userForm = z.infer<typeof userSchema>;
