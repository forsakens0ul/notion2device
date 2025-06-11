import { fetchDevicesFromNotion } from "@/lib/notion"
import EquipmentPage from "@/pages/equipment"

export const revalidate = 3600 // 每小时重新验证一次

export default async function Page() {
  try {
    // 在服务器端获取设备数据
    const devices = await fetchDevicesFromNotion()

    // 将数据作为props传递给EquipmentPage组件
    return <EquipmentPage devices={devices} />
  } catch (error) {
    console.error("Error fetching devices in app/page.tsx:", error)
    // 发生错误时传递空数组
    return <EquipmentPage devices={[]} />
  }
}
