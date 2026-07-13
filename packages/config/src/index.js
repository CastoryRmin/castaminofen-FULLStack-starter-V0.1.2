export * from '@castaminofen/types';
export class ConfigService {
    config;
    runtimeOverrides;
    constructor(config, runtimeOverrides = {}) {
        this.config = config;
        this.runtimeOverrides = runtimeOverrides;
    }
    initialize() {
        return `${this.config.name} initialized`;
    }
    getRuntimeConfig() {
        return {
            nodeEnv: process.env.NODE_ENV ?? 'development',
            port: Number(process.env.PORT ?? 3000),
            apiBasePath: this.runtimeOverrides.apiBasePath ?? '/api',
        };
    }
}
export const packageMetadata = {
    name: '@castaminofen/config',
    version: '0.1.0',
    enabled: true,
};
//# sourceMappingURL=index.js.map