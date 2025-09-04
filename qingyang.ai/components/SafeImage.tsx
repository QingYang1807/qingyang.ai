'use client';

import Image, { ImageProps } from 'next/image';
import { useState } from 'react';

type SafeImageProps = Omit<ImageProps, 'src' | 'onError'> & {
  src?: string;
  fallback?: React.ReactNode;
};

export default function SafeImage({
  src,
  alt,
  className,
  fallback,
  ...rest
}: SafeImageProps) {
  const [failed, setFailed] = useState(false);

  // 没有路径 或 加载失败 → 显示占位
  if (!src || failed) {
    return (
      <div className="flex items-center justify-center bg-gray-100 dark:bg-gray-800 rounded-lg">
        {fallback ?? (
          <div className="text-center p-4">
            <svg
              className="w-10 h-10 text-gray-400 mx-auto mb-1"
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
            <p className="text-xs text-gray-500 dark:text-gray-400">暂无图片</p>
          </div>
        )}
      </div>
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      className={className}
      onError={() => setFailed(true)}
      {...rest}
    />
  );
}
