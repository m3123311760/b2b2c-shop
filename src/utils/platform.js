export const isH5 = process.env.VUE_APP_PLATFORM === 'h5'
export const isWeapp = process.env.VUE_APP_PLATFORM === 'weapp'
export const isApp = process.env.VUE_APP_PLATFORM === 'app'

export function getPlatform() {
  if (isH5) return 'h5'
  if (isWeapp) return 'weapp'
  if (isApp) return 'app'
  return 'unknown'
}