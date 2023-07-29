import { BASE_URL } from "../../constants";
import Entity from "./Entity";

export class ChallengeRule extends Entity {
  constructor() {
    super();
  }

  async get() {
    return await this.handlePost(`${BASE_URL}/u/challenge_rules/show`);
  }

  async update(
    duration1,
    duration2,
    durationReal,
    durationFree,
    dailySl1,
    dailySl2,
    dailySlReal,
    dailySlFree,
    totalSl1,
    totalSl2,
    totalSlReal,
    totalSlFree,
    target1,
    target2,
    targetReal,
    targetFree,
    tradeDays1,
    tradeDays2,
    tradeDaysReal,
    tradeDaysFree
  ) {
    return await this.handlePost(`${BASE_URL}/a/challenge_rules/update`, {
      duration_1: duration1,
      duration_2: duration2,
      duration_real: durationReal,
      duration_free: durationFree,
      daily_sl_1: dailySl1,
      daily_sl_2: dailySl2,
      daily_sl_real: dailySlReal,
      daily_sl_free: dailySlFree,
      total_sl_1: totalSl1,
      total_sl_2: totalSl2,
      total_sl_real: totalSlReal,
      total_sl_free: totalSlFree,
      target_1: target1,
      target_2: target2,
      target_real: targetReal,
      target_free: targetFree,
      trade_days_1: tradeDays1,
      trade_days_2: tradeDays2,
      trade_days_real: tradeDaysReal,
      trade_days_free: tradeDaysFree,
    });
  }
}
