export declare type NumericalString = string;
export declare type ISO8601Date = string;
export declare type Amount<T extends string = string> = {
    quantity: 42000000;
    unit: T;
};
export declare type Epoch = {
    number: string;
};
export declare type Asset = {
    policy_id: string;
    asset_name: string;
    quantity: number;
};
export declare type InputOutputSchema = {
    id: string;
    address: string;
    amount: Amount;
    assets: Asset[];
    index: number;
};
export declare type Mint = {
    policy_id: string;
    asset_name: string;
    fingerprint: string;
    quantity: number;
};
//# sourceMappingURL=index.d.ts.map