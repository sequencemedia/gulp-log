import {
  expect
} from 'chai'

import getLogger from '#gulp-log'

describe('gulp-log', () => {
  let logger

  beforeEach(() => {
    logger = getLogger('gulp-log')
  })

  afterEach(() => {
    logger.remove()
  })

  it('emits a `debug` event when `debug` is invoked', (done) => {
    logger
      .on('debug', (message) => {
        expect(message)
          .to.equal('MOCK MESSAGE')

        done()
      })

    logger.debug('MOCK MESSAGE')
  })

  it('emits an `info` event when `info` is invoked', (done) => {
    logger
      .on('info', (message) => {
        expect(message)
          .to.equal('MOCK MESSAGE')

        done()
      })

    logger.info('MOCK MESSAGE')
  })

  it('emits a `warn` event when `warn` is invoked', (done) => {
    logger
      .on('warn', (message) => {
        expect(message)
          .to.equal('MOCK MESSAGE')

        done()
      })

    logger.warn('MOCK MESSAGE')
  })

  it('emits an `error` event when `error` is invoked', (done) => {
    logger
      .on('error', (message) => {
        expect(message)
          .to.equal('MOCK MESSAGE')

        done()
      })

    logger.error('MOCK MESSAGE')
  })

  it('formats a string message', (done) => {
    logger
      .on('debug', (message) => {
        expect(message)
          .to.equal('MOCK MESSAGE')

        done()
      })

    logger.debug('MOCK %s', 'MESSAGE')
  })

  it('does not format a non-string message', (done) => {
    const expected = { mock: 'message' }

    logger
      .on('debug', (message) => {
        expect(message)
          .to.equal(expected)

        done()
      })

    logger.debug(expected)
  })

  describe('Destructuring the log-level functions', () => {
    it('logs `debug`', (done) => {
      const {
        debug
      } = logger

      logger
        .on('debug', (message) => {
          expect(message)
            .to.equal('MOCK MESSAGE')

          done()
        })

      debug('MOCK MESSAGE')
    })

    it('logs `info`', (done) => {
      const {
        info
      } = logger

      logger
        .on('info', (message) => {
          expect(message)
            .to.equal('MOCK MESSAGE')

          done()
        })

      info('MOCK MESSAGE')
    })

    it('logs `warn`', (done) => {
      const {
        warn
      } = logger

      logger
        .on('warn', (message) => {
          expect(message)
            .to.equal('MOCK MESSAGE')

          done()
        })

      warn('MOCK MESSAGE')
    })

    it('logs `error`', (done) => {
      const {
        error
      } = logger

      logger
        .on('error', (message) => {
          expect(message)
            .to.equal('MOCK MESSAGE')

          done()
        })

      error('MOCK MESSAGE')
    })
  })
})
