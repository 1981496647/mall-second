const devBaseURL = "http://152.136.185.210:7878/api/hy66";
const proBaseURL = "http://152.136.185.210:7878/api/hy66";
export const BASE_URL =
  process.env.NODE_ENV === "development" ? devBaseURL : proBaseURL;
export const TIMEOUT = 5000;
