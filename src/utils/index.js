exports.validatePayload = (payload, schema) => {
  const options = {
    errors: {
      wrap: {
        label: "",
      },
    },
  };
  const result = schema.validate(payload, options);
  if (result.error) console.error(result.error);
  //   return next(createError(422, result.error.details[0].message));
};
