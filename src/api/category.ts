import { apiStatus, sgnSrc, apiError } from '../lib/util';
import { Router } from 'express';
import PlatformFactory from '../platform/factory';

export default ({ config, db }) => {
  let categoryApi = Router();

  const _getProxy = (req) => {
    const platform = config.platform
    const factory = new PlatformFactory(config, req)
    return factory.getAdapter(platform, 'category')
  };

  /**
   * GET get categories info
   */
  categoryApi.get('/list', (req, res) => {
    const categoryProxy = _getProxy(req)

    categoryProxy.list().then((result) => {
      apiStatus(res, result, 200);
    }).catch(err => {
      apiError(res, err);
    })
  })

  return categoryApi
}
