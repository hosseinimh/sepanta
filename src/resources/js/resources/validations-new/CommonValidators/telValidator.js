import utils from "../../../utils/Utils";

const telValidator = (schema, field, required = true) => {
  const { validation } = utils.getLSLocale();
  schema = schema.matches(
    /^([0][1-9][0-9]{9})+$/,
    validation.notValidMessage.replace(":field", field)
  );
  if (required) {
    schema = schema.required(
      validation.requiredMessage.replace(":field", field)
    );
  }
  return schema;
};

export default telValidator;
