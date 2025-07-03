import { Engine } from "thirdweb";
import { client } from "../client";

export const serverWallet = Engine.serverWallet({
    client: client,
    address: import.meta.env.SERVER_WALLET_ADDRESS,
    vaultAccessToken: import.meta.env.VAULT_ACCESS_TOKEN,
});