import { Token } from '@skyxexchange/sdk-core';
import { FeeAmount } from '../constants';
/**
 * Computes a pool address
 * @param poolDeployerAddress The SkyX V3 pool deployer address
 * @param tokenA The first token of the pair, irrespective of sort order
 * @param tokenB The second token of the pair, irrespective of sort order
 * @param fee The fee tier of the pool
 * @param initCodeHashManualOverride Override the init code hash used to compute the pool address if necessary
 * @returns The pool address
 */
export declare function computePoolAddress({ poolDeployerAddress, tokenA, tokenB, fee, initCodeHashManualOverride }: {
    poolDeployerAddress: string;
    tokenA: Token;
    tokenB: Token;
    fee: FeeAmount;
    initCodeHashManualOverride?: string;
}): string;
