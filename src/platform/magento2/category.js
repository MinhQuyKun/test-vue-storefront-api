import AbstractCategoryProxy from '../abstract/category'
import { multiStoreConfig } from './util'

class CategoryProxy extends AbstractCategoryProxy {
  constructor (config, req) {
    const Magento2Client = require('magento2-rest-client').Magento2Client;
    super(config, req)
    this.api = Magento2Client(multiStoreConfig(config.magento2.api, req));
  }

  list (skus) {
    const query = '';
    return this.api.categories.list(query)
  }
}

module.exports = CategoryProxy
