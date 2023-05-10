import {
  format
} from 'node:util'

import sparkles from 'sparkles'

const LEVELS = [
  'debug',
  'info',
  'warn',
  'error'
]

function getLoggerFor (logger, level) {
  return function (message, ...args) {
    if (typeof message === 'string') {
      message = format(message, ...args)
    }

    logger.emit(level, message)
  }
}

export default function getLogger (namespace) {
  const logger = sparkles(namespace)

  LEVELS
    .forEach((level) => {
      logger[level] = getLoggerFor(logger, level)
    })

  return logger
}
