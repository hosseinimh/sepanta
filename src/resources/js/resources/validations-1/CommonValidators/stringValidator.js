import utils from "../../../utils/Utils";

const stringValidator = (
    schema,
    field,
    min = null,
    max = null,
    required = true
) => {
    const { validation } = utils.getLSLocale();
    if (min) {
        schema = schema.min(
            min,
            validation.minMessage.replace(":field", field).replace(":min", min)
        );
    }
    if (max) {
        schema = schema.max(
            max,
            validation.maxMessage.replace(":field", field).replace(":max", max)
        );
    }
    if (required) {
        schema = schema.required(
            validation.requiredMessage.replace(":field", field)
        );
    }
    return schema;
};

export default stringValidator;
