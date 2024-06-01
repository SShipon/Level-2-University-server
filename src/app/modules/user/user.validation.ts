import { z } from 'zod';

const userValidationSchema = z.object({
  //id: z.string(), //bd theke asbe
    password: z.string({
      invalid_type_error:'password must be string'
  })
    .max(20, { message: 'password can not be more than 20 character' })
    .optional(),

});

export const UserValidation = {
  userValidationSchema,
};
