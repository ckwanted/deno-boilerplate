import { createLogger, LogLevel } from "https://deno.land/x/deno_structured_logging/mod.ts";
import { consoleSink, fileSink } from "https://deno.land/x/deno_structured_logging/sinks/mod.ts";

const logger = createLogger({
    minimumLevel: LogLevel.INFO,
    sinks: [consoleSink(), fileSink("logs/combine.log")],
});

export default logger;
