import joi from 'joi';

const userSchema = joi.object({
    username: joi.string().regex(/[a-zA-Z][a-zA-Z0-9-_]{4,30}/).required()
});

export default userSchema;