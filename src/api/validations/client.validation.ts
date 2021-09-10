import * as Yup from 'yup';

export const createClientSchema = Yup.object({
    name: Yup.string().required().max(100),
    lastname: Yup.string().required().max(100),
    dateBirthday: Yup.date().required(),
}).defined();
