import Head from "next/head"
import EquipmentCard from "@/components/EquipmentCard"
import { fetchDevicesFromNotion } from "@/lib/notion"
import { TooltipProvider } from "@/components/ui/tooltip"

export interface Device {
  name: string
  category: string
  cover: string
  description: string
  link?: string
}

interface Props {
  devices: Device[]
}

export async function getStaticProps() {
  try {
    const devices = await fetchDevicesFromNotion()
    return { props: { devices }, revalidate: 3600 }
  } catch (error) {
    console.error("Error fetching devices:", error)
    return { props: { devices: [] }, revalidate: 3600 }
  }
}

const categoryEmojis = {
  生产力: "⚡️",
  家庭娱乐: "🎮",
  出行: "🚗",
  健康生活: "💪",
}

const categoryDescriptions = {
  生产力: "提升工作效率的专业设备与工具",
  家庭娱乐: "丰富日常的玩家设备",
  出行: "让旅行更便捷高质量的随身装备",
  健康生活: "守护健康的科技生活好物",
}

export default function EquipmentPage({ devices = [] }: Props) {
  const categories = ["生产力", "家庭娱乐", "出行", "健康生活"]
  console.log("Loaded devices:", devices)

  return (
    <>
      <Head>
        <title>我的设备 & 工具清单</title>
        <meta name="description" content="分享我日常使用的各种设备，涵盖生产力工具、娱乐设备、出行装备和健康生活用品" />
      </Head>

      {/* 页面背景 */}
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
        {/* 头部区域 */}
        <div className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10 dark:from-blue-400/5 dark:to-purple-400/5"></div>
          <div className="relative max-w-7xl mx-auto px-4 py-16 sm:py-24">
            <div className="text-center">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-sm font-medium mb-6">
                <span className="mr-2">🛠️</span>
                持续更新中
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
                我的设备
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  {" "}
                  & 工具清单
                </span>
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
                分享我日常使用的各种设备，从提升工作效率的生产力工具，到丰富生活的娱乐设备，
                每一件都是经过精心挑选的好物推荐
              </p>
              <div className="mt-8 flex justify-center">
                <div className="flex items-center space-x-6 text-sm text-gray-500 dark:text-gray-400">
                  <div className="flex items-center">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>共 {devices.length} 件设备
                  </div>
                  <div className="flex items-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                    精选好物
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 设备展示区域 */}
        <TooltipProvider>
          <main className="max-w-7xl mx-auto px-4 pb-16 pt-16">
            {devices.length === 0 ? (
              <div className="text-center py-20">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-100 dark:bg-gray-800 mb-4">
                  <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-medium text-gray-900 dark:text-white mb-2">暂无设备数据</h3>
                <p className="text-gray-500 dark:text-gray-400 max-w-md mx-auto">
                  设备数据可能正在加载中，或者 Notion 数据库连接出现问题。请稍后再试。
                </p>
              </div>
            ) : (
              <div className="space-y-16">
                {categories.map((category, categoryIndex) => {
                  const categoryDevices = devices.filter((d) => d.category === category)
                  if (categoryDevices.length === 0) return null

                  return (
                    <section key={category} className="relative">
                      {/* 分类标题 */}
                      <div className="mb-8">
                        <div className="flex items-center justify-between mb-4">
                          <div className="flex items-center space-x-4">
                            <div className="flex items-center space-x-3">
                              <span className="text-3xl">
                                {categoryEmojis[category as keyof typeof categoryEmojis]}
                              </span>
                              <h2 className="text-3xl font-bold text-gray-900 dark:text-white">{category}</h2>
                            </div>
                            <div className="hidden sm:flex items-center px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 text-sm">
                              {categoryDevices.length} 件设备
                            </div>
                          </div>
                        </div>
                        <p className="text-gray-600 dark:text-gray-400 text-lg ml-12">
                          {categoryDescriptions[category as keyof typeof categoryDescriptions]}
                        </p>
                      </div>

                      {/* 设备网格 */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        {categoryDevices.map((device, deviceIndex) => (
                          <div
                            key={`${category}-${deviceIndex}`}
                            className="transform transition-all duration-300 hover:scale-105"
                            style={{
                              animationDelay: `${categoryIndex * 0.1 + deviceIndex * 0.05}s`,
                            }}
                          >
                            <EquipmentCard device={device} />
                          </div>
                        ))}
                      </div>

                      {/* 分割线 */}
                      {categoryIndex < categories.length - 1 && (
                        <div className="mt-16 flex justify-center">
                          <div className="w-24 h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-600 to-transparent"></div>
                        </div>
                      )}
                    </section>
                  )
                })}
              </div>
            )}

            {/* 页面底部信息 */}
            <div className="mt-20 pt-12 border-t border-gray-200 dark:border-gray-700">
              <div className="text-center space-y-4">
                <div className="flex justify-center items-center space-x-2 text-gray-500 dark:text-gray-400">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span>数据每小时自动更新</span>
                </div>
                <p className="text-sm text-gray-400 dark:text-gray-500">
                  所有设备信息来源于 Notion 数据库，确保信息的实时性和准确性
                </p>
              </div>
            </div>
          </main>
        </TooltipProvider>
      </div>
    </>
  )
}
