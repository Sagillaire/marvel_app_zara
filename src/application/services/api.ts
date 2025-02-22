import axios from "axios";
import md5 from "md5";

const TIMESTAMP = new Date().getTime();
const PRIVATE_KEY = "ca9d9ad18bf2aacab93a7d33a0882b4b9328d46d";
const PUBLIC_KEY = "42061944cb4f0a20eb1dae72f475afdd";
const BASE_URL = `http://gateway.marvel.com/v1/public`;
const HASH = md5(TIMESTAMP + PRIVATE_KEY + PUBLIC_KEY);

export const marvelAPi = axios.create({
  baseURL: BASE_URL,
  params: {
    ts: TIMESTAMP,
    apikey: PUBLIC_KEY,
    hash: HASH,
  },
});
