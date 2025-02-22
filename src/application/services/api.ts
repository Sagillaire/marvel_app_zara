import axios from "axios";
import md5 from "md5";
import KEYS_CONFIG from "./keys_config";

const TIMESTAMP = new Date().getTime();
const PRIVATE_KEY = KEYS_CONFIG.PRIVATE_KEY;
const PUBLIC_KEY = KEYS_CONFIG.PUBLIC_KEY;
const BASE_URL = KEYS_CONFIG.BASE_URL;
const HASH = md5(TIMESTAMP + PRIVATE_KEY + PUBLIC_KEY);

export const marvelAPi = axios.create({
  baseURL: BASE_URL,
  params: {
    ts: TIMESTAMP,
    apikey: PUBLIC_KEY,
    hash: HASH,
  },
});
