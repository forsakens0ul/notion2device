<aside>
😀 制作你的赛博展示柜

</aside>

# 🥳效果展示

https://device.chalice.lol/

![image.png](attachment:817df3ad-844a-4e00-8443-c06d412c2217:image.png)

# 💻工作流

项目地址：https://github.com/forsakens0ul/notion2device/

https://github.com/forsakens0ul/notion2device/

项目亮点：配置notion数据库，便捷地完成内容管理

![image.png](attachment:edc65f33-77b0-40c6-89fa-e72875d1d0ba:image.png)

只需对编辑数据库，即可实现展示设备的增删改

# 🥰实现步骤

1.star&fork本项目到你的仓库https://github.com/forsakens0ul/notion2device/

2.创建notion数据库，发布，获取数据库id

![image.png](attachment:edc65f33-77b0-40c6-89fa-e72875d1d0ba:image.png)

第一次使用可参考我的模板，[https://garnet-scarer-ec7.notion.site/20d3a17d9c2180bfa88bcaf5d21c739b?v=20d3a17d9c21805e85ef000c5e06ae40&source=copy_link](https://www.notion.so/20d3a17d9c2180bfa88bcaf5d21c739b?pvs=21)

记得配置属性的类型

3.创建notion集成[https://www.notion.com/zh-cn/integrations](https://www.notion.so/my-integrations) 获取密钥

![image.png](attachment:b1cc7b35-6d36-4867-a195-2563144362fa:ace40c69-29f1-4156-b590-8893cfd022d6.png)

访问权限授权给2.创建的数据库

![image.png](attachment:3d9b0da0-cf93-4099-be62-5bd4d5043924:image.png)

4.打开https://vercel.com/ 一键部署，或者用vercel的v0导入项目（方便调试）

5.配置2.获取的数据库id NOTION_DATABASE_ID 和 3.获取的集成NOTION_TOKENtoken 到项目的环境变量，通过console打印查看是否成功获取到notion的数据（本例name、category、cover、description、link），获取成功的话，结合项目的基本转换逻辑和展示，应该就能正常显示。

6.添加数据，欣赏结果。

![image.png](attachment:fd88938a-db84-401a-8f51-1c30f056b7c3:image.png)

# 📎 改进

如果有用，后续可以将1-5的工作流合并成fork+一键部署

<aside>
💡 有关Notion安装或者使用上的问题，欢迎您在底部评论区留言，一起交流~

</aside>
