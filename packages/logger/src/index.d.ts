import { PackageConfig, PackageContract } from '@castaminofen/types';
export * from '@castaminofen/types';
export type LogLevel = 'debug' | 'info' | 'warn' | 'error';
export interface LogEntry {
    readonly level: LogLevel;
    readonly message: string;
    readonly timestamp: string;
    readonly context: string | undefined;
}
export declare class LoggerService implements PackageContract {
    readonly config: PackageConfig;
    private readonly sink;
    constructor(config: PackageConfig, sink?: (...args: unknown[]) => void);
    initialize(): string;
    debug(message: string, context?: string): void;
    info(message: string, context?: string): void;
    warn(message: string, context?: string): void;
    error(message: string, context?: string): void;
    private write;
}
export declare const packageMetadata: {
    name: string;
    version: string;
    enabled: boolean;
};
//# sourceMappingURL=index.d.ts.map