export const imageSizes = {
  thumbnail: { width: 400, suffix: 'sm' },
  medium: { width: 800, suffix: 'md' },
  large: { width: 1200, suffix: 'lg' },
  full: { width: 1920, suffix: 'xl' }
}

export const getResponsiveSrcSet = (baseUrl, sizes = ['sm', 'md', 'lg']) => {
  const srcsetParts = sizes.map(size => {
    const sizeConfig = Object.values(imageSizes).find(s => s.suffix === size)
    if (!sizeConfig) return null
    const url = `${baseUrl}?w=${sizeConfig.width}&q=80`
    return `${url} ${sizeConfig.width}w`
  }).filter(Boolean)

  return srcsetParts.join(', ')
}

export const getOptimizedImageUrl = (baseUrl, width = 800, quality = 80) => {
  if (baseUrl.includes('unsplash.com')) {
    return `${baseUrl.split('?')[0]}?w=${width}&q=${quality}`
  }
  return baseUrl
}

export const aspectRatioClasses = {
  '4/3': 'aspect-[4/3]',
  '3/4': 'aspect-[3/4]',
  '16/9': 'aspect-video',
  '1/1': 'aspect-square'
}

export const loadingStrategies = {
  lazy: 'lazy',
  eager: 'eager',
  auto: 'auto'
}

export const formatSupport = {
  webp: 'image/webp',
  avif: 'image/avif',
  jpeg: 'image/jpeg'
}

export const defaultImageProps = {
  loading: 'lazy',
  decoding: 'async',
  sizes: '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
}

export const galleryLayoutConfig = {
  grid: {
    columns: { mobile: 1, tablet: 2, desktop: 3 },
    gap: 'gap-4'
  },
  masonry: {
    enabled: false
  },
  lightbox: {
    enabled: true,
    backdropOpacity: 0.9
  }
}

export default {
  imageSizes,
  getResponsiveSrcSet,
  getOptimizedImageUrl,
  aspectRatioClasses,
  loadingStrategies,
  formatSupport,
  defaultImageProps,
  galleryLayoutConfig
}