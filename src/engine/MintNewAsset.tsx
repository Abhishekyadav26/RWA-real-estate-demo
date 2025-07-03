import { prepareContractCall, Engine } from "thirdweb";
import { serverWallet } from "./ServerWallet";
import { client } from "../client";
import { rwaContract } from "./RWAContract";


export const createNewProperty = async(
    propertyAddress: string,
    price: bigint,
    squaremeters: number,
    leagelIdentifier: string,
    documentHash: string,
    imageURL: string,
) => {
    console.log("creating a property");
    try {
        const transaction = prepareContractCall({
            contract: rwaContract,
            method: "function createProperty(string, uint256, uint256, string, string, string)",
            params: [
                propertyAddress,
                price,
                BigInt(squaremeters),
                leagelIdentifier,
                documentHash,
                imageURL,
            ],
        });

        try{
            const{ transactionId } = await serverWallet.enqueueTransaction({
                transaction,
            });

            const executionResult = await Engine.getTransactionStatus({
                client,
                transactionId,
            });

            console.log("transaction status details:",executionResult);

            const txHash = await Engine.waitForTransactionHash({
                client,
                transactionId,
            });
            return txHash;
        } catch(error){
            console.error(error)
        }

    } catch (error) {
        console.error(error)
    }
};