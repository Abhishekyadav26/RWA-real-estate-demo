import { getContract } from "thirdweb";
import { client } from "../client";

import { defineChain } from "thirdweb";

export const rwaContract = getContract({
    client,
    chain: defineChain(59141),
    address: "0x046704eC64349B42Ef0f49379c97Cb56248e46ab",
})