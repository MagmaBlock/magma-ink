export type LinkStyle = 'default' | 'premium';

export interface FriendLink {
  title: string;
  link: string;
  desc: string;
  img: string;
  style?: LinkStyle;
}

export interface LinkGroup {
  title: string;
  links: FriendLink[];
}

export const linkGroups: LinkGroup[] = [
  {
    title: '友链',
    links: [
      {
        link: 'https://blog.moeworld.tech/',
        title: '晓空blog – 空域',
        img: 'https://blog.moeworld.tech/wp-content/uploads/2019/07/10_avatar_big_waifu2x_art_noise1_scale_tta_1.png',
        desc: '探索更大的世界',
      },
      {
        link: 'https://ivampiresp.com',
        title: 'iVampireSP 的物语',
        img: 'https://nwl.im/avatar',
        desc: '比起千言万语，更重要的是心灵相通吧。',
      },
      {
        link: 'https://moe.tips',
        title: '萌 (//∇//) 贴士',
        img: 'https://img.cdn.18g.me/2022/02/19/d8d559274a2f6.jpg',
        desc: '介绍愿你把酒执剑，归来仍是少年',
      },
      {
        link: 'https://kokodayo.site/',
        title: '巴别图书馆',
        img: 'https://kokodayo.site/usr/uploads/fixed/head_640.jpg',
        desc: 'Qine的个人小站',
      },
      {
        link: 'https://www.moec.top',
        title: '老兄de博客',
        img: 'https://www.moec.top/logo.webp',
        desc: '杂七杂八的分享~',
      },
      {
        link: 'https://jixiejidiguan.top/',
        title: '画的个人记录',
        img: 'https://jixiejidiguan.top/favicon.ico',
        desc: '一条咸鱼躺平养成计划！',
      },
      {
        link: 'https://blog.iamsjy.com/',
        title: 'Tony’s Blog',
        img: 'https://blog.iamsjy.com/assets/favicon.jpg',
        desc: '一个萌新的博客',
      },
      {
        link: 'https://www.bcmonomial.xyz/',
        title: '单项式的笔记本',
        img: 'https://q1.qlogo.cn/g?b=qq&nk=3176459211&s=640',
        desc: '你想在这里看到什么呢？',
      },
      {
        link: 'https://imfurry.com',
        title: '中二病晚期の物語',
        img: 'https://imfurry.com/images/zebwq-furry.jpg',
        desc: '一只狐狸敲出的一个奇迹',
      },
      {
        link: 'https://blognas.hwb0307.com',
        title: 'Bensz',
        img: 'https://blognas.hwb0307.com/logo.jpg',
        desc: '百代繁华一朝都，谁非过客；千秋明月吹角寒，花是主人。',
      },
      {
        link: 'https://blog.hikki.site/',
        title: '小码博客',
        img: 'https://bu.dusays.com/2022/11/04/636511250b21b.jpg',
        desc: '喜欢的东西就努力去追求，万一成功了呢！',
      },
      {
        link: 'https://www.frostfox.cn',
        title: '霜狐的科技屋',
        img: 'https://www.frostfox.cn/logo.png',
        desc: '开源创新，自由共享！',
      },
      {
        link: 'https://blog.5252025.xyz/',
        title: 'CasecoRI',
        img: 'https://blog.5252025.xyz/img/icon-256.png',
        desc: '高智熵博主',
      },
      {
        link: 'https://arthals.ink/',
        title: '尘埃舞流萤',
        img: 'https://cdn.arthals.ink/Arthals.png',
        desc: '写代码的医学牲',
      },
      {
        link: 'https://zkpeace.com/',
        title: 'Zkpeace',
        desc: 'nothing to say.',
        img: 'https://raw.githubusercontent.com/Uzizkp/jscdn/main/blog/img/beauty_1647190656575.jpg',
      },
      {
        title: '满久琦的个人网站',
        desc: '天上如是，地下亦然',
        link: 'https://www.manjiuqi.com',
        img: 'https://cdn.yhdzz.cn/websites/blog/2024/07/b_0b7fb0de4d59b216ada8a36ae807e29c.jpg',
      },
      {
        title: 'Pinpe 的云端',
        desc: '一个属于自己的云朵。',
        link: 'https://pinpe.top/',
        img: 'https://pinpe.top/head.jpg',
      },
      {
        title: 'Lynn的小站',
        desc: '林中抚琴曲委婉，群山听懂我悲欢',
        link: 'https://blog.lynn6.cn/',
        img: 'https://blog-dogecdn.lynn6.cn/pic/fb2c42d74892b1e208c0be7af2be20b31627004540489.jpeg',
      },
      {
        title: 'Peter267',
        desc: '无限进步！',
        link: 'https://peter267.github.io/',
        img: 'https://wmimg.com/i/1169/2024/09/66e8b5d8e0843.jpg',
      },
      {
        title: 'Ethan',
        desc: "Don't stay awake for too long.",
        link: 'https://hanlife02.com',
        img: 'https://hanlife02.com/avatar.svg',
      },
      {
        link: 'https://blog.woo.moe',
        title: 'Hinai',
        img: 'https://data.woo.moe/image/ico/104491469_0_r.png',
        desc: '曇花一現',
      },
      {
        title: '林七湖的日记站',
        desc: '这是什么？好吃的？吃一口',
        link: 'https://blog.linqihu.top',
        img: 'https://blog.linqihu.top/pictures/智乃天下第一.jpg',
        style: 'premium',
      },
      {
        title: 'imxizhen',
        img: 'https://q1.qlogo.cn/g?b=qq&nk=89525295&s=640',
        desc: '永远相信美好的事情即将发生.',
        link: 'https://www.imxizhen.cn/',
      },
      {
        title: 'LYEy_isine',
        desc: '花海无一日，少年踏自来',
        link: 'https://caiyifeng.top/',
        img: 'https://caiyifeng.top/avatar.webp',
      },
      {
        title: '少年工作室',
        desc: '彼方尚有荣光在.',
        link: 'https://www.snkj.xyz',
        img: 'https://pan.snkj.xyz/view.php/a7033c427c88302b468fbc4257f4125b.jpg',
      },
    ],
  },
];
