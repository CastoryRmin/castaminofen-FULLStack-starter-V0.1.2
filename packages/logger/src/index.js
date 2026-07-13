export * from '@castaminofen/types';
export class LoggerService {
    config;
    sink;
    constructor(config, sink = console.log) {
        this.config = config;
        this.sink = sink;
    }
    initialize() {
        return `${this.config.name} initialized`;
    }
    debug(message, context) {
        this.write('debug', message, context);
    }
    info(message, context) {
        this.write('info', message, context);
    }
    warn(message, context) {
        this.write('warn', message, context);
    }
    error(message, context) {
        this.write('error', message, context);
    }
    write(level, message, context) {
        const entry = {
            level,
            message,
            timestamp: new Date().toISOString(),
            context: context ?? undefined,
        };
        this.sink(entry);
    }
}
export const packageMetadata = {
    name: '@castaminofen/logger',
    version: '0.1.0',
    enabled: true,
};
//# sourceMappingURL=index.js.map