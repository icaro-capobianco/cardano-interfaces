import { NumericalString } from "..";
export declare type SimpleMetadata = {
    string: string;
} | {
    int: number;
} | {
    bytes: string;
};
export declare type MetadataList = {
    list: SimpleMetadata[];
};
export declare type MetadataMap = {
    map: {
        k: SimpleMetadata;
        v: SimpleMetadata;
    }[];
};
export declare type Metadata = {
    [k in NumericalString]: Array<SimpleMetadata | MetadataList | MetadataMap>;
};
//# sourceMappingURL=index.d.ts.map