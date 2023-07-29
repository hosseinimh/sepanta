import * as yup from "yup";

import {  stringValidator } from "../CommonValidators";
import { useLSLocale } from "../../../hooks";

const { editRelationshipsPage: strings } = useLSLocale();

const editRelationshipSchema = yup.object().shape({
  relationship: stringValidator(yup.string(), strings.relationship, 3, 50),
});

export default editRelationshipSchema;
