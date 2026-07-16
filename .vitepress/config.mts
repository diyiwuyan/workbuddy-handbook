import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'zh-CN',
  title: 'WorkBuddy 自学手册',
  description: 'WorkBuddy 自学手册 — 整合橙皮书、实战手册、蓝皮书，从安装到自动化的全链路系统指南',
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '使用手册', link: '/p1/00.md' },
      { text: '实战案例', link: '/p2/00.md' },
      { text: '进阶篇', link: '/p3/00.md' },
      { text: '岗位与行业', link: '/p4/00.md' },
      { text: '附录', link: '/appendix/00.md' },
    ],
    sidebar: {
      // ========== 第一篇：使用手册 ==========
      '/p1/': [
        {
          text: '使用手册',
          items: [
            { text: '导读', link: '/p1/00.md' },
            { text: '第1章 初识 WorkBuddy', link: '/p1/01.md' },
            { text: '第2章 下载、安装、登录与更新', link: '/p1/02.md' },
            { text: '第3章 主界面、任务与工作区', link: '/p1/03.md' },
            { text: '第4章 完成第一个 WorkBuddy 任务', link: '/p1/04.md' },
            { text: '第5章 加载一个真正用得上的 Skill', link: '/p1/05.md' },
            { text: '第6章 专家和专家团', link: '/p1/06.md' },
            { text: '第7章 使用连接器', link: '/p1/07.md' },
            { text: '第8章 接入小程序与IM助理', link: '/p1/08.md' },
            { text: '第9章 如何接入外部API', link: '/p1/09.md' },
            { text: '第10章 自动化任务', link: '/p1/10.md' },
            { text: '课外阅读：一章看懂AI工作系统', link: '/p1/bonus.md' },
          ],
        },
      ],
      // ========== 第二篇：案例篇 ==========
      '/p2/': [
        {
          text: '实战案例',
          items: [
            { text: '导读', link: '/p2/00.md' },
            { text: '第11章 办公三件套：Word、Excel、PPT', link: '/p2/11.md' },
            { text: '第12章 整理桌面文件这些小事', link: '/p2/12.md' },
            { text: '第13章 远程控制你的电脑', link: '/p2/13.md' },
            { text: '第14章 生活助手的价值', link: '/p2/14.md' },
            { text: '第15章 资讯整合', link: '/p2/15.md' },
            { text: '第16章 收藏不是知识管理', link: '/p2/16.md' },
            { text: '第17章 会议结束不是终点', link: '/p2/17.md' },
            { text: '第18章 把投资分析变成你的日常', link: '/p2/18.md' },
            { text: '第19章 一句话召唤AI视频团队', link: '/p2/19.md' },
            { text: '第20章 自媒体增长闭环', link: '/p2/20.md' },
            { text: '第21章 WorkBuddy也能做GEO专家', link: '/p2/21.md' },
          ],
        },
      ],
      // ========== 第三篇：进阶篇 ==========
      '/p3/': [
        {
          text: '进阶篇',
          items: [
            { text: '导读', link: '/p3/00.md' },
            { text: '第22章 打造skill', link: '/p3/22.md' },
            { text: '第23章 实操案例集', link: '/p3/23.md' },
            { text: '第24章 多Agent系统设计', link: '/p3/24.md' },
            { text: '第25章 自动化工作流的可靠性', link: '/p3/25.md' },
          ],
        },
      ],
      // ========== 第四篇：岗位与行业落地 ==========
      '/p4/': [
        {
          text: '岗位与行业落地',
          items: [
            { text: '导读', link: '/p4/00.md' },
            { text: '第26章 岗位路线图', link: '/p4/26.md' },
            { text: '第27章 行业路线图', link: '/p4/27.md' },
          ],
        },
      ],
      // ========== 附录 ==========
      '/appendix/': [
        {
          text: '附录',
          items: [
            { text: '附录导读', link: '/appendix/00.md' },
            { text: '附录A 常用指令模板', link: '/appendix/a.md' },
            { text: '附录B 场景速查表', link: '/appendix/b.md' },
            { text: '附录C Skill开发指南', link: '/appendix/c.md' },
            { text: '附录D MCP配置参考', link: '/appendix/d.md' },
            { text: '附录E 常见问题与避坑指南', link: '/appendix/e.md' },
          ],
        },
      ],
    },
    footer: {
      message: 'WorkBuddy 自学手册 · 非官方开源指南 · 由武小森编著',
      copyright: 'CC BY-SA 4.0',
    },
  },
  markdown: {
    theme: {
      light: 'vitesse-light',
      dark: 'vitesse-dark',
    },
  },
})
