/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_THIRDWEB_CLIENT_ID: string;
  readonly VITE_SERVER_WALLET_ADDRESS: string;
  readonly VITE_VALUT_ACCESS_TOKEN: string;
  readonly VITE_RWA_DEPLOYED_CONTRACT_ADDRESS: string;
}
interface ImportMeta {
  readonly env: ImportMetaEnv;
}