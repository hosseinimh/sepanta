import * as yup from "yup";

import { numberValidator } from "../CommonValidators";
import { useLSLocale } from "../../../hooks";

const { editChallengeRulePage: strings } = useLSLocale();

const editChallengeRuleSchema = yup.object().shape({
  duration1: numberValidator(yup.number(), strings.duration1, 1, 30),
  duration2: numberValidator(yup.number(), strings.duration2, 30, 60),
  durationReal: numberValidator(yup.number(), strings.durationReal, 0, 90),
  durationFree: numberValidator(yup.number(), strings.durationFree, 1, 30),
  dailySl1: numberValidator(yup.number(), strings.dailySl1, 0, 20),
  dailySl2: numberValidator(yup.number(), strings.dailySl2, 0, 20),
  dailySlReal: numberValidator(yup.number(), strings.dailySlReal, 0, 20),
  dailySlFree: numberValidator(yup.number(), strings.dailySlFree, 0, 20),
  totalSl1: numberValidator(yup.number(), strings.totalSl1, 0, 20),
  totalSl2: numberValidator(yup.number(), strings.totalSl2, 0, 20),
  totalSlReal: numberValidator(yup.number(), strings.totalSlReal, 0, 20),
  totalSlFree: numberValidator(yup.number(), strings.totalSlFree, 0, 20),
  target1: numberValidator(yup.number(), strings.target1, 0, 20),
  target2: numberValidator(yup.number(), strings.target2, 0, 20),
  targetReal: numberValidator(yup.number(), strings.targetReal, 0, 20),
  targetFree: numberValidator(yup.number(), strings.targetFree, 0, 20),
  tradeDays1: numberValidator(yup.number(), strings.tradeDays2, 0, 20),
  tradeDays2: numberValidator(yup.number(), strings.tradeDays2, 0, 20),
  tradeDaysReal: numberValidator(yup.number(), strings.tradeDaysReal, 0, 20),
  tradeDaysFree: numberValidator(yup.number(), strings.tradeDaysFree, 0, 20),
});

export default editChallengeRuleSchema;
