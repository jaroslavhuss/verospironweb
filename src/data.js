import { getPermalink, getBlogPermalink } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text:"Úvod",
      href: getPermalink('/'),
    },
    {
      text: 'Srdeční selhání',
      links: [
        {
          text: 'Kazuistiky',
          href: "/srdceni-selhani/kazuistiky",
        },
        {
          text: 'Studie',
          href: "#",
        },
        {
          text: 'Reprinty',
          href: "#",
        },
        {
          text: 'Edukační videa',
          href: "#",
        },
        {
          text: 'Kurzy',
          href: "#",
        },
      ],
    },
    {
      text: 'Rezistentní hypertenze',
      links: [
        {
          text: 'Kazuistiky',
          href: "/rezistentni-hypertenze/kazuistiky",
        },
        {
          text: 'Studie',
          href: "#",
        },
        {
          text: 'Reprinty',
          href: "#",
        },
        {
          text: 'Edukační videa',
          href: "#",
        },
        {
          text: 'Kurzy',
          href: "#",
        },
      ],
    },
    {
      text: 'Články',
      href: getBlogPermalink(),
    },
    {
      text: 'Kontakt',
      href: "/kontakt",
    },
  ],
  actions: [
   // { type: 'button', text: 'Download', href: 'https://github.com/onwidget/astrowind' }
  ],
};
  
export const footerData = {
  links: [
    {
      title: 'Kontakt',
      links: [
        {
          text: 'Kontakt',
          href: "/kontakt",
        },
      ],
    },
    {
      title: 'Srdeční selhání',
      links: [
        {
          text: 'Kazuistiky',
          href: "/srdceni-selhani/kazuistiky",
        },
        {
          text: 'Studie',
          href: "/srdceni-selhani/studie",
        },
        {
          text: 'Reprinty',
          href: "/srdceni-selhani/reprinty",
        },
        {
          text: 'Edukační videa',
          href: "/srdceni-selhani/edukacni-videa",
        },
        {
          text: 'Kurzy',
          href: "/srdceni-selhani/kurzy",
        },
      ],
    },
    {
      title: 'Rezistentní hypertenze',
      links: [
        {
          text: 'Kazuistiky',
          href: "/rezistentni-hypertenze/kazuistiky",
        },
        {
          text: 'Studie',
          href: "/rezistentni-hypertenze/studie",
        },
        {
          text: 'Reprinty',
          href: "/rezistentni-hypertenze/reprinty",
        },
        {
          text: 'Edukační videa',
          href: "/rezistentni-hypertenze/edukacni-videa",
        },
        {
          text: 'Kurzy',
          href: "/rezistentni-hypertenze/kurzy",
        },
      ],
    },
    
  ],
  secondaryLinks: [
    { text: 'Podmínky použití', href: getPermalink('/zasady-cookies') },
    { text: 'Zásady ochrany osobních údajů', href: getPermalink('/zasady-ochrany-osobnich-udaju') },
  ],
  socialLinks: [
    // { ariaLabel: 'Twitter', icon: 'tabler:brand-twitter', href: '#' },
    // { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: '#' },
    // { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: '#' },
    // { ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') },
    // { ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/onwidget/astrowind' },
  ],
  footNote: `
    <span class="w-5 h-5 md:w-6 md:h-6 md:-mt-0.5 bg-cover mr-1.5 float-left rounded-sm bg-[url(https://onwidget.com/favicon/favicon-32x32.png)]"></span>
    Made by <a class="text-blue-600 hover:underline dark:text-gray-200" href="https://onwidget.com/"> onWidget</a> · All rights reserved.
  `,
};
