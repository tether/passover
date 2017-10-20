
/**
 * This is a simple description.
 *
 * @api public
 */

module.exports = function (obj) {
  return (...args) => {
    let tmp = obj
    for (var i = 0, l = args.length; i < l; i++) {
      const item = tmp[args[i]]
      if (item == null) return
      tmp = item
    }
    return tmp
  }
}
