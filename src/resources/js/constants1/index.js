import serverConfig from "../../../server-config.json";
import { MESSAGE_TYPES } from "./messageTypes";
import { MESSAGE_CODES } from "./messageCodes";
import { UPLOADED_FILE } from "./UploadedFile";
import { LOCALES } from "./locales";
import { USER_ROLES } from "./userRoles";
import { TICKET_TYPES } from "./ticketTypes";
import { TICKET_STATUSES } from "./ticketStatuses";
import { CHALLENGE_LEVELS } from "./challengeLevels";
import { CHALLENGE_STATUSES } from "./challengeStatuses";
import {
  BASE_PATH,
  ASSETS_PATH,
  IMAGES_PATH,
  STORAGE_PATH,
  PAGE_ITEMS,
  THEMES,
  themes,
} from "./theme";

const BASE_URL = serverConfig.baseUrl;

export {
  BASE_URL,
  BASE_PATH,
  ASSETS_PATH,
  IMAGES_PATH,
  STORAGE_PATH,
  PAGE_ITEMS,
  THEMES,
  themes,
  MESSAGE_TYPES,
  MESSAGE_CODES,
  UPLOADED_FILE,
  LOCALES,
  USER_ROLES,
  TICKET_TYPES,
  TICKET_STATUSES,
  CHALLENGE_LEVELS,
  CHALLENGE_STATUSES,
};
