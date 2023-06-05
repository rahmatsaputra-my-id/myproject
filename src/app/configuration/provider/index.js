
import { PATH_URL_CONTACT } from '../../constants/url/path_url/contact';
import api from '../api';

export const provider_contact = {
  postContact: () =>
    api.post(PATH_URL_CONTACT.post_contact),
  deleteContact: (userId) =>
    api.get(PATH_URL_CONTACT.delete_contact(userId)),
  getDetailContact: (userId) =>
    api.get(PATH_URL_CONTACT.get_contact_by_id(userId)),
  putContact: (userId) =>
    api.get(PATH_URL_CONTACT.put_contact(userId)),
} 