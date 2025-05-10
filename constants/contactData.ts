import { ItemData } from '@/types/itemData';

import IcWhatsapp from '@/public/images/ic_whatsapp.svg';
import IcLinkedin from '@/public/images/ic_linkedin.svg';
import IcGithub from '@/public/images/ic_github.svg';
import IcInstagram from '@/public/images/ic_instagram.svg';
import IcFacebook from '@/public/images/ic_facebook.svg';
import IcYoutube from '@/public/images/ic_youtube.svg';

export interface ValuedItemData extends ItemData {
    value: string;
    url: string;
}

const CONTACT_DATA: ValuedItemData[] = [
  {
    name: 'Whatsapp',
    value: '+6282116917200',
    icon: IcWhatsapp,
    url: 'https://wa.me/6282116917200',
  },
  {
    name: 'Linkedin',
    value: 'https://www.linkedin.com/in/krisna-rusdiono',
    icon: IcLinkedin,
    url: 'https://www.linkedin.com/in/krisna-rusdiono',
  },
  {
    name: 'GitHub',
    value: 'https://github.com/krisnaRusdiono',
    icon: IcGithub,
    url: 'https://github.com/krisnaRusdiono',
  },
  {
    name: 'Instagram',
    value: 'https://www.instagram.com/krisnarusdiono',
    icon: IcInstagram,
    url: 'https://www.instagram.com/krisnarusdiono',
  },
  {
    name: 'Facebook',
    value: 'https://www.facebook.com/krisna.rusdiono',
    icon: IcFacebook,
    url: 'https://www.facebook.com/krisna.rusdiono',
  },
  {
    name: 'Youtube',
    value: 'https://www.youtube.com/@KrisnaRusdionoYT',
    icon: IcYoutube,
    url: 'https://www.youtube.com/@KrisnaRusdionoYT',
  },
];

export default CONTACT_DATA;
