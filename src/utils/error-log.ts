import Vue from 'vue'
import { ErrorLogModule } from '@/vue-typescript-admin-template/src/store/modules/error-log'
import { isArray } from '@/vue-typescript-admin-template/src/utils/validate'
import settings from '@/vue-typescript-admin-template/src/settings'

const { errorLog: needErrorLog } = settings

const checkNeed = () => {
  const env = process.env.NODE_ENV
  if (isArray(needErrorLog) && env) {
    return needErrorLog.includes(env)
  }
  return false
}

if (checkNeed()) {
  Vue.config.errorHandler = function(err, vm, info) {
    ErrorLogModule.AddErrorLog({
      err,
      vm,
      info,
      url: window.location.href
    })
  }
}
