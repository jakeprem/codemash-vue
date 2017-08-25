export default {
  groupBy (list, prop) {
    return list.reduce(function (grouped, item) {
      var key = typeof prop === 'function' ? prop.apply(this, [item]) : item[prop]
      grouped[key] = grouped[key] || []
      grouped[key].push(item)
      return grouped
    }, {})
  }
}
