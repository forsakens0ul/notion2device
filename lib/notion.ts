import { Client } from '@notionhq/client'

const notion = new Client({ auth: process.env.NOTION_TOKEN })

export async function fetchDevicesFromNotion() {
  try {
    const databaseId = process.env.NOTION_DATABASE_ID!
    const response = await notion.databases.query({
      database_id: databaseId,
      page_size: 100,
    })

    return response.results.map((page: any) => {
      const props = page.properties
      return {
        name: props.name?.title?.[0]?.plain_text || '未命名设备',  // 注意属性名改为小写
        category: props.category?.select?.name || '未分类',  // 注意属性名改为小写
        cover: props.cover?.files?.[0]?.file?.url || '',  // 修改封面图获取方式
        description: props.description?.rich_text?.[0]?.plain_text || '暂无描述',
        link: props.link?.url || '',
      }
    })
  } catch (error) {
    console.error('获取Notion数据时出错:', error)
    return []
  }
}
