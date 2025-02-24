/**
 * Configuration object that holds sensitive API keys and the base URL.
 *
 * This object retrieves values from environment variables to securely store
 * the private key, public key, and base URL needed to interact with the Marvel API.
 * The values are accessed using the `import.meta.env` object, which is configured
 * in the build environment (e.g., Vite).
 *
 * @example
 * ```ts
 * import KEYS_CONFIG from "./keys_config";
 * console.log(KEYS_CONFIG.PUBLIC_KEY); // Logs the public API key
 * ```
 */
const KEYS_CONFIG = {
  /** The private API key used for authentication with the Marvel API. */
  PRIVATE_KEY: import.meta.env.VITE_PRIVATE_KEY,
  /** The public API key used for authentication with the Marvel API. */
  PUBLIC_KEY: import.meta.env.VITE_PUBLIC_KEY,
  /** The base URL for the Marvel API. */
  BASE_URL: import.meta.env.VITE_BASE_URL,
};

export default KEYS_CONFIG;
