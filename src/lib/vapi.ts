import Vapi from "@vapi-ai/web";
import config from "../../lib/config";

export const vapi = new Vapi(config.env.vapi.apiKey);
