import { SUB_URL } from '../../sub_url';

export const PATH_URL_LOGIN = {
  post: `${SUB_URL.LOGIN}`,
  delete: (id) => `${SUB_URL.LOGIN}/${id}`,
  get: (id) => `${SUB_URL.LOGIN}/${id}`,
  put: (id) => `${SUB_URL.LOGIN}/${id}`,
}