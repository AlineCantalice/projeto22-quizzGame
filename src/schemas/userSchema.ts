import joi from 'joi';

const userSchema = joi.object({
    username: joi.string().required()
});

export default userSchema;