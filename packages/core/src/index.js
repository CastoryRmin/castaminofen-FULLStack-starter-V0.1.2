export * from '@castaminofen/types';
export class CoreService {
    config;
    constructor(config) {
        this.config = config;
    }
    initialize() {
        return `${this.config.name} initialized`;
    }
    createId(prefix) {
        const value = typeof globalThis.crypto !== 'undefined' && 'randomUUID' in globalThis.crypto
            ? globalThis.crypto.randomUUID()
            : `${Date.now()}-${Math.random().toString(16).slice(2)}`;
        return `${prefix}_${value}`;
    }
}
export const packageMetadata = {
    name: '@castaminofen/core',
    version: '0.1.0',
    enabled: true,
};
//# sourceMappingURL=index.js.map