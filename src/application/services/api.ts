import axios from "axios";
import md5 from "md5";
import KEYS_CONFIG from "./keys_config";

const TIMESTAMP = new Date().getTime();
const PRIVATE_KEY = KEYS_CONFIG.PRIVATE_KEY;
const PUBLIC_KEY = KEYS_CONFIG.PUBLIC_KEY;
const BASE_URL = KEYS_CONFIG.BASE_URL;
const HASH = md5(TIMESTAMP + PRIVATE_KEY + PUBLIC_KEY);

/**
 * A configured instance of Axios for interacting with the Marvel API.
 *
 * This instance is pre-configured with the required query parameters (timestamp, API key, and hash)
 * needed to authenticate requests to the Marvel API. The hash is generated using MD5 with a combination
 * of the timestamp, private key, and public key.
 *
 * @see https://developer.marvel.com/docs
 *
 * The instance is set to the base URL specified in the `KEYS_CONFIG` and includes the necessary
 * authentication parameters for making requests to the Marvel API.
 */
export const marvelAPi = axios.create({
  baseURL: BASE_URL,
  params: {
    ts: TIMESTAMP,
    apikey: PUBLIC_KEY,
    hash: HASH,
  },
});
