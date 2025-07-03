import { createThirdwebClient } from "thirdweb";

const clientId = import.meta.env.VITE_THIRDWEB_CLIENT_ID || "";
const SecretKey = import.meta.env.VITE_THIRDWEB_CLIENT_SECRET || "";

export const client = createThirdwebClient({
  clientId: clientId,
  secretKey: SecretKey,
});