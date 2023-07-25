import { BigintIsh, Token } from '@skyxexchange/sdk-core';
import { Interface } from '@ethersproject/abi';
export interface StandardPermitArguments {
    v: number;
    r: string;
    s: string;
    amount: BigintIsh;
    deadline: BigintIsh;
}
export interface AllowedPermitArguments {
    v: number;
    r: string;
    s: string;
    nonce: BigintIsh;
    expiry: BigintIsh;
}
export declare type PermitOptions = StandardPermitArguments | AllowedPermitArguments;
export declare abstract class SelfPermit {
    static INTERFACE: Interface;
    /**
     * Cannot be constructed.
     */
    private constructor();
    static encodePermit(token: Token, options: PermitOptions): string;
}
