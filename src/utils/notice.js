import { Notification } from 'element-ui'

export function successShow (content) {
  return Notification({
    title: 'Success',
    message: content,
    type: 'success'
  })
}

export function errorShow (content) {
  return Notification({
    title: 'Error',
    message: content,
    type: 'error'
  })
}
