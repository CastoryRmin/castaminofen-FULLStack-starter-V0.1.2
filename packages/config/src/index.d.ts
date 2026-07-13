import { PackageConfig, PackageContract } from '@castaminofen/types';
export * from '@castaminofen/types';
export interface RuntimeConfig {
    readonly nodeEnv: 'development' | 'test' | 'production';
    readonly port: number;
    readonly apiBasePath: string;
}
export declare class ConfigService implements PackageContract {
    readonly config: PackageConfig;
    private readonly runtimeOverrides;
    constructor(config: PackageConfig, runtimeOverrides?: Partial<RuntimeConfig>);
    initialize(): string;
    getRuntimeConfig(): RuntimeConfig;
}
export declare const packageMetadata: {
    name: string;
    version: string;
    enabled: boolean;
};
//# sourceMappingURL=index.d.ts.map