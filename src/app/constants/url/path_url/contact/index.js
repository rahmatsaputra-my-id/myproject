import { SUB_URL } from '../../sub_url';

export const PATH_URL_CONTACT = {
  post_contact: `${SUB_URL.CONTACT}`,
  delete_contact: (id) => `${SUB_URL.CONTACT}/${id}`,
  get_contact_by_id: (id) => `${SUB_URL.CONTACT}/${id}`,
  put_contact: (id) => `${SUB_URL.CONTACT}/${id}`,
}