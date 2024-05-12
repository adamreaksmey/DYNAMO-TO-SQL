import { Logger } from '@/functions/utils/functions'

export const navBarData = [
  {
    index: 1,
    urlPath: '/',
    navTitle: 'Home',
  },
  { index: 2, urlPath: '/about_us', navTitle: 'About Us' },
  {
    index: 3,
    urlPath: '/contact_us',
    navTitle: 'Contact Us',
  },
]

Logger({ message: 'Hello World', option: 'success' })
