export class TypesService {
    config;
    constructor(config) {
        this.config = config;
    }
    initialize() {
        return `${this.config.name} initialized`;
    }
}
export const packageMetadata = {
    name: '@castaminofen/types',
    version: '0.1.0',
    enabled: true,
};
//# sourceMappingURL=index.js.map