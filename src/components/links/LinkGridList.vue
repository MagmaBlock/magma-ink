<template>
  <div class="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-8 my-4">
    <LinkCard
      v-for="link in randomLinks"
      :key="link.link"
      :title="link.title"
      :desc="link.desc"
      :link="link.link"
      :img="link.img"
    />
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import LinkCard from "./LinkCard.vue";

const links: { title: string; link: string; desc: string; img: string }[] = [
  {
    link: "https://blog.moeworld.tech/",
    title: "晓空blog – 空域",
    img: "https://img.cdn.loliloli.net/content/images/users/V3Q/av_1625277536.png",
    desc: "探索更大的世界",
  },
  {
    link: "https://ivampiresp.com",
    title: "iVampireSP 的物语",
    img: "https://nwl.im/avatar",
    desc: "比起千言万语，更重要的是心灵相通吧。",
  },
  {
    link: "https://moe.tips",
    title: "萌 (//∇//) 贴士",
    img: "https://img.cdn.18g.me/2022/02/19/d8d559274a2f6.jpg",
    desc: "介绍愿你把酒执剑，归来仍是少年",
  },
  {
    link: "https://kokodayo.site/",
    title: "巴别图书馆",
    img: "https://kokodayo.site/usr/uploads/fixed/head_640.jpg",
    desc: "Qine的个人小站",
  },
  {
    // 2024年7月18日 打不开
    link: "https://blog.awsl.love/",
    title: "悲催の记事账簿",
    img: "https://blog.awsl.love/logo2.webp",
    desc: "– 水能载舟，亦能覆舟 –",
  },
  {
    link: "https://www.moec.top",
    title: "老兄de博客",
    img: "https://www.moec.top/logo.webp",
    desc: "杂七杂八的分享~",
  },
  {
    link: "https://jixiejidiguan.top/",
    title: "画的个人记录",
    img: "https://jixiejidiguan.top/favicon.ico",
    desc: "其实没有你们想的那么复杂！",
  },
  {
    link: "https://blog.iamsjy.com/",
    title: "Tony’s Blog",
    img: "https://blog.iamsjy.com/assets/favicon.jpg",
    desc: "一个萌新的博客",
  },
  // {
  //   link: "https://www.baiduniang.com/",
  //   title: "摆渡娘",
  //   img: "https://www.baiduniang.com/wp-content/uploads/2021/08/v2-7d019ee242e42d9acee0bc709277728b_xll.jpg",
  //   desc: "摆渡博客",
  // },
  {
    link: "https://www.bcmonomial.xyz/",
    title: "单项式的笔记本",
    img: "https://q1.qlogo.cn/g?b=qq&nk=3176459211&s=640",
    desc: "你想在这里看到什么呢？",
  },
  // {
  //   link: "https://dioxide-cn.ink",
  //   title: "Dioxide.CNの时间轴",
  //   img: "https://s1.ax1x.com/2022/04/21/LyjYZ9.jpg",
  //   desc: "茶边话旧，看几许星迢露冕，从淮海南来。",
  // },
  {
    link: "https://imfurry.com",
    title: "中二病晚期の物語",
    img: "https://imfurry.com/images/zebwq-furry.jpg",
    desc: "一只狐狸敲出的一个奇迹",
  },
  {
    link: "https://blognas.hwb0307.com",
    title: "浮云翩迁之间",
    img: "https://blognas.hwb0307.com/logo.jpg",
    desc: "百代繁华一朝都，谁非过客；千秋明月吹角寒，花是主人。",
  },
  {
    link: "https://blog.hikki.site/",
    title: "小码博客",
    img: "https://bu.dusays.com/2022/11/04/636511250b21b.jpg",
    desc: "喜欢的东西就努力去追求，万一成功了呢！",
  },
  {
    link: "https://www.frostfox.cn",
    title: "霜狐的科技屋",
    img: "https://www.frostfox.cn/logo.png",
    desc: "开源创新，自由共享！",
  },
  {
    link: "https://irr.ink/",
    title: "不可方思",
    img: "https://irr.ink/logo.jpg",
    desc: "Like tears in rain.",
  },
  // {
  //   link: "https://www.casecori.top/",
  //   title: "CasecoRI",
  //   img: "https://cdn.casecori.top/gh/cystee/om/favicon.png",
  //   desc: "高智熵博主",
  // },
  {
    link: "https://www.limingliang.top",
    title: "Eucalyptus",
    img: "http://limingliang.top/wp-content/uploads/2023/07/lanan.png",
    desc: "我亦无他，惟手熟尔",
  },
  {
    link: "https://arthals.ink/",
    title: "尘埃舞流萤",
    img: "https://cdn.arthals.ink/Arthals.png",
    desc: "写代码的医学牲",
  },
  // {
  //   link: "https://wuminboke.site/",
  //   title: "无名博客",
  //   img: "https://wuminboke.site/avatar.jpg",
  //   desc: "一个无聊的人罢了~",
  // },
  {
    link: "https://henrywhu.cn/",
    title: "Henry Moreau",
    img: "https://bu.dusays.com/2024/06/28/667e684e0adbe.png",
    desc: "Student / Designer / Dreamchaser",
  },
  {
    link: "https://zkpeace.com/",
    title: "Zkpeace",
    desc: "nothing to say.",
    img: "https://raw.githubusercontent.com/Uzizkp/jscdn/main/blog/img/beauty_1647190656575.jpg",
  },
  {
    title: "满久琦的个人网站",
    desc: "天上如是，地下亦然",
    link: "https://www.manjiuqi.com",
    img: "https://static.yhdzz.cn/logos/512x512.png",
  },
  {
    title: "Pinpe 的云端",
    desc: "一个属于自己的云朵。",
    link: "https://pinpe.top/",
    img: "https://pinpe.top/head.jpg",
  },
  {
    title: "Lynn的小站",
    desc: "林中抚琴曲委婉，群山听懂我悲欢",
    link: "https://blog.lynn6.cn/",
    img: "https://blog-dogecdn.lynn6.cn/pic/fb2c42d74892b1e208c0be7af2be20b31627004540489.jpeg",
  },
  {
    title: "Peter",
    desc: "无限进步",
    link: "https://peter267.zeabur.app/",
    img: "https://wmimg.com/i/1169/2024/09/66e8b5d8e0843.jpg",
  },
  {
    title: "Ethan",
    desc: "Don't stay awake for too long.",
    link: "https://hanlife02.com.cn/",
    img: "https://hanlife02.com.cn/api/v2/objects/avatar/evcvs61h0ajgvoai07.jpeg",
  },
  {
    link: "https://blog.woo.moe",
    title: "Nikoのblog",
    img: "https://data.woo.moe/img/ico/blog200.png",
    desc: "雨嶼沫",
  },
  {
    link: "https://sbsb.life",
    title: "Tanの笔记",
    img: "https://pic.imgdb.cn/item/637dbff316f2c2beb1d0d922.jpg",
    desc: "一直快乐",
  },
];

const randomLinks = computed(() => links.sort(() => Math.random() - 0.5));
</script>
