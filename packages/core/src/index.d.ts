import { PackageConfig, PackageContract } from '@castaminofen/types';
export * from '@castaminofen/types';
export declare class CoreService implements PackageContract {
    readonly config: PackageConfig;
    constructor(config: PackageConfig);
    initialize(): string;
    createId(prefix: string): string;
}
export declare const packageMetadata: {
    name: string;
    version: string;
    enabled: boolean;
};
//# sourceMappingURL=index.d.ts.map