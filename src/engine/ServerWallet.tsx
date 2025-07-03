import { Engine } from "thirdweb";
import { client } from "../client";

export const serverWallet = Engine.serverWallet({
    client: client,
    address: "0x046704eC64349B42Ef0f49379c97Cb56248e46ab" as string,
    vaultAccessToken: "vt_act_GQQ6RGGKRTBSRZB3FXFXTYA7HKB7LWLGS5TWGE6XBPCO7FJFYTEMJG7XNF2YERZXUUEFGNLXUZ5KQAH5CBOCV36QIJIIEGQSGFVLKDCZ" as string,
});