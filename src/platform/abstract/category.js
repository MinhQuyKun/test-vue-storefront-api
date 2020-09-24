class AbstractCategoryProxy {
  constructor (config, req) {
    this._config = config
    this._request = req
  }

  list (skus) {
    throw new Error('Category::list must be implemented for specific platform')
  }
}

export default AbstractCategoryProxy
