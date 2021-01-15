import { AxiosRequestConfig } from 'axios'
import { Context, Plugin } from '@nuxt/types'

const axiosPlugin: Plugin = (ctx: Context) => {
  ctx.$axios.interceptors.request.use(
    (x): AxiosRequestConfig => {
      // console.log(x)
      return { ...x }
    }
  )
}
export default axiosPlugin
