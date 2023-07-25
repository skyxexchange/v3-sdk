import { BigintIsh } from '@skyxexchange/sdk-core';
import { Position } from './entities';
import { AddLiquidityOptions, CollectOptions, RemoveLiquidityOptions } from './nonfungiblePositionManager';
import { MethodParameters } from './utils';
interface WidthDrawOptions {
    tokenId: BigintIsh;
    to: string;
}
interface HarvestOptions {
    tokenId: BigintIsh;
    to: string;
}
export declare abstract class MasterChefV3 {
    static ABI: ({
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
        anonymous?: undefined;
        name?: undefined;
        outputs?: undefined;
    } | {
        anonymous: boolean;
        inputs: {
            indexed: boolean;
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        type: string;
        stateMutability?: undefined;
        outputs?: undefined;
    } | {
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        outputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
        anonymous?: undefined;
    } | {
        inputs: {
            components: {
                internalType: string;
                name: string;
                type: string;
            }[];
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        outputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
        anonymous?: undefined;
    })[];
    /**
     * Cannot be constructed.
     */
    private constructor();
    static addCallParameters(position: Position, options: AddLiquidityOptions): MethodParameters;
    private static encodeCollect;
    static collectCallParameters(options: CollectOptions): MethodParameters;
    static removeCallParameters(position: Position, options: RemoveLiquidityOptions): MethodParameters;
    static harvestCallParameters(options: HarvestOptions): {
        calldata: string;
        value: string;
    };
    static batchHarvestCallParameters(options: HarvestOptions[]): {
        calldata: string;
        value: string;
    };
    static encodeHarvest(options: HarvestOptions): string[];
    static withdrawCallParameters(options: WidthDrawOptions): {
        calldata: string;
        value: string;
    };
}
export {};
