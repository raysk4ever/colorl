const STYLES = require('./styles');

module.exports = {
  info: (message = 'info') => console.info('%cinfo', STYLES.info, '', message),
  warn: (message = 'warn') => console.warn('%cwarning', STYLES.warn, '', message),
  error: (message = 'error') => console.error('%cerror', STYLES.error, '', message),
  debug: (message = 'debug') => console.debug('%cdebug', STYLES.debug, '', message),
  silly: (message = 'silly') => console.log('%csilly', STYLES.silly, '', message),
  verbose: (message = 'verbose') => console.log('%cverbose', STYLES.verbose, '', message),
  custom: (message= 'custom', tag = 'custom', style=STYLES.tag) => console.log(`%c${tag}`, style, '', message),
}