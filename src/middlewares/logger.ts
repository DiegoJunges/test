import { getNamespace } from 'continuation-local-storage';
import winston from 'winston';

const options = {
  console: {
    level: 'info',
    format: winston.format.combine(
      winston.format.colorize(),
      winston.format.simple(),
    ),
    prettyPrint: true,
    colorize: process.stdout.isTTY,
  },
};

const logger = winston.createLogger({
  transports: [new winston.transports.Console(options.console)],
  exitOnError: false,
});

const formatMessage = (message: string) => {
  // This is where we retrieve the request id that will be stored in storage
  const namespace = getNamespace('request');
  const id = namespace && namespace.get('id');
  return id ? `[${id}] ${message}` : message;
};

/**
 * here we return the log levels
 * formatting the message with the request id if it exists
 */
export default {
  log: (message: string): winston.Logger => logger.info(message),
  info: (message: string, obj?: any): winston.Logger =>
    logger.info(formatMessage(message), obj),
  error: (message: string, obj?: any): winston.Logger =>
    logger.error(formatMessage(message), obj),
  warn: (message: string, obj?: any): winston.Logger =>
    logger.warn(formatMessage(message), obj),
  debug: (message: string, obj?: any): winston.Logger =>
    logger.debug(formatMessage(message), obj),
  silly: (message: string, obj?: any): winston.Logger =>
    logger.silly(formatMessage(message), obj),
};
