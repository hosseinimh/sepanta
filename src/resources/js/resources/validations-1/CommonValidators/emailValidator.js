import utils from "../../../utils/Utils";

const emailValidator = (schema, field, required = true) => {
    const { validation } = utils.getLSLocale();
    schema = schema
        .email(validation.emailMessage)
        .matches(/@[^.]*\./, validation.emailMessage)
        .min(
            5,
            validation.minMessage.replace(":field", field).replace(":min", "5")
        )
        .max(
            50,
            validation.maxMessage.replace(":field", field).replace(":max", "50")
        );
    if (required) {
        schema = schema.required(
            validation.requiredMessage.replace(":field", field)
        );
    }
    return schema;
};

export default emailValidator;
