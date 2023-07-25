export declare const POOL_DEPLOYER_ADDRESS = "0x4a13A5a8415527Ea24877f9860fD287Cb5cd4bBa";
export declare const FACTORY_ADDRESS = "0x8C1FF117c5ad343Ddac145A9c1C974E704B8c3eD";
export declare const ADDRESS_ZERO = "0x0000000000000000000000000000000000000000";
export declare const POOL_INIT_CODE_HASH = "0x1b5c366cb0b7109926c0b161c0a85469fa485e75389d33a4dd753c35b22f157b";
/**
 * The default factory enabled fee amounts, denominated in hundredths of bips.
 */
export declare enum FeeAmount {
    LOWEST = 100,
    LOW = 500,
    MEDIUM = 3000,
    HIGH = 10000
}
/**
 * The default factory tick spacings by fee amount.
 */
export declare const TICK_SPACINGS: {
    [amount in FeeAmount]: number;
};
