
import { PATH_URL_CONTACT } from '../../constants/url/path_url/contact';
import api from '../api';

export const provider_contact = {
  postContact: (body) =>
    api.post(PATH_URL_CONTACT.contact, body),
  getAllContact: () =>
    api.get(PATH_URL_CONTACT.contact),
  deleteContact: (userId) =>
    api.delete(PATH_URL_CONTACT.contact_by_id(userId)),
  getDetailContact: (userId) =>
    api.get(PATH_URL_CONTACT.contact_by_id(userId)),
  putContact: (userId, body) =>
    api.put(PATH_URL_CONTACT.contact_by_id(userId), body),
} 