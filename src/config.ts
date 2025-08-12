import type {
  LicenseConfig,
  NavBarConfig,
  ProfileConfig,
  SiteConfig,
} from './types/config'
import { LinkPreset } from './types/config'

export const siteConfig: SiteConfig = {
  title: '熔岩墨迹',
  subtitle: 'Magma Ink',
  lang: 'zh_CN',         // 'en', 'zh_CN', 'zh_TW', 'ja', 'ko'
  themeColor: {
    hue: 50,         // Default hue for the theme color, from 0 to 360. e.g. red: 0, teal: 200, cyan: 250, pink: 345
    fixed: false,     // Hide the theme color picker for visitors
  },
  banner: {
    enable: true,
    src: 'assets/images/banner/jerry-wang-x5DbmzUBg4g-unsplash.jpg',   // Relative to the /src directory. Relative to the /public directory if it starts with '/'
    position: 'center',      // Equivalent to object-position, only supports 'top', 'center', 'bottom'. 'center' by default
    credit: {
      enable: true,         // Display the credit text of the banner image
      text: 'Jerry Wang',              // Credit text to be displayed
      url: 'https://unsplash.com/photos/city-skyline-during-night-time-x5DbmzUBg4g'                // (Optional) URL link to the original artwork or artist's page
    }
  },
  toc: {
    enable: true,           // Display the table of contents on the right side of the post
    depth: 2                // Maximum heading depth to show in the table, from 1 to 3
  },
  favicon: [    // Leave this array empty to use the default favicon
    {
      src: '/favicon/logo.png',    // Path of the favicon, relative to the /public directory
    //   theme: 'light',              // (Optional) Either 'light' or 'dark', set only if you have different favicons for light and dark mode
    //   sizes: '32x32',              // (Optional) Size of the favicon, set only if you have favicons of different sizes
    }
  ]
}

export const navBarConfig: NavBarConfig = {
  links: [
    LinkPreset.Home,
    LinkPreset.Archive,
    {
      name: "友联",
      url: "/links/",
    },
    LinkPreset.About,
    {
      name: "联系",
      url: "/contact/",
    },
    {
      name: "开往",
      url: "https://www.travellings.cn/go.html",
      external: true,
    },
  ],
}

export const profileConfig: ProfileConfig = {
  avatar: 'assets/images/avatar.jpg',  // Relative to the /src directory. Relative to the /public directory if it starts with '/'
  name: '岩浆块Magma',
  bio: '为美好的生活献礼',
  links: [
    {
      name: "GitHub",
      icon: "fa6-brands:github",
      url: "https://github.com/MagmaBlock",
    },
    {
      name: "Bilibili",
      icon: "fa6-brands:bilibili",
      url: "https://space.bilibili.com/6281315",
    },
    {
      name: "Mastodon",
      icon: "fa6-brands:mastodon",
      url: "https://hydrate.space/@magma",
    },
    {
      name: "邮件",
      icon: "material-symbols:mail",
      url: "mailto:magmablock@qq.com",
    },
    {
      name: "RSS",
      icon: "fa6-solid:rss",
      url: "/rss.xml",
    },
  ],
}

export const licenseConfig: LicenseConfig = {
  enable: true,
  name: 'CC BY-NC-SA 4.0',
  url: 'https://creativecommons.org/licenses/by-nc-sa/4.0/',
}
