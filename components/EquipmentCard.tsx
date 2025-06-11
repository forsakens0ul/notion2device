"use client"

import { useState } from "react"
import type { Device } from "@/pages/equipment"

export default function EquipmentCard({ device }: { device: Device }) {
  const [showTooltip, setShowTooltip] = useState(false)

  return (
    <div className="group relative rounded-2xl overflow-hidden border border-gray-200/50 dark:border-gray-700/50 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm shadow-sm hover:shadow-xl transition-all duration-300 hover:border-blue-300 dark:hover:border-blue-600">
      {/* 设备图片 */}
      <div className="relative overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-700 dark:to-gray-800">
        {device.cover ? (
          <img
            src={device.cover || "/placeholder.svg"}
            alt={device.name}
            className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
          />
        ) : (
          <div className="w-full h-48 flex items-center justify-center">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-3 bg-gray-200 dark:bg-gray-600 rounded-full flex items-center justify-center">
                <svg
                  className="w-8 h-8 text-gray-400 dark:text-gray-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <span className="text-sm text-gray-400 dark:text-gray-500">暂无图片</span>
            </div>
          </div>
        )}

        {/* 悬浮遮罩 */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>

      {/* 设备信息 */}
      <div className="p-5">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200">
          {device.name}
        </h3>

        {/* 描述文本和悬停提示 */}
        <div className="relative">
          <p
            className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-4 line-clamp-2 cursor-help"
            onMouseEnter={() => setShowTooltip(true)}
            onMouseLeave={() => setShowTooltip(false)}
          >
            {device.description || "暂无描述"}
          </p>

          {/* 自定义悬停提示框 */}
          {showTooltip && device.description && device.description.length > 33 && (
            <div className="absolute z-50 bottom-full left-0 mb-2 p-3 max-w-xs bg-gray-900 text-white dark:bg-white dark:text-gray-900 rounded-lg shadow-lg text-sm animate-in fade-in-50 duration-200">
              <div className="relative">
                <p>{device.description}</p>
                <div className="absolute -bottom-2 left-4 w-4 h-4 bg-gray-900 dark:bg-white rotate-45 transform translate-y-1/2"></div>
              </div>
            </div>
          )}
        </div>

        {/* 底部操作区 */}
        <div className="flex items-center justify-between">
          {device.link ? (
            <a
              href={device.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-lg text-sm font-medium hover:bg-blue-100 dark:hover:bg-blue-900/50 transition-colors duration-200 group/link"
            >
              查看详情
              <svg
                className="w-4 h-4 ml-1 transition-transform duration-200 group-hover/link:translate-x-0.5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </a>
          ) : (
            <div className="px-4 py-2 bg-gray-50 dark:bg-gray-700 text-gray-400 dark:text-gray-500 rounded-lg text-sm">
              暂无链接
            </div>
          )}

          {/* 装饰性图标 */}
          <div className="w-8 h-8 bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 rounded-full flex items-center justify-center opacity-60 group-hover:opacity-100 transition-opacity duration-200">
            <svg
              className="w-4 h-4 text-blue-500 dark:text-blue-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
        </div>
      </div>

      {/* 卡片边框光效 */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/0 via-blue-500/5 to-purple-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
    </div>
  )
}
