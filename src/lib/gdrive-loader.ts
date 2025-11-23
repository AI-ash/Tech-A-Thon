// g-drive-loader.ts
export default function gdriveLoader({ src, width, quality }) {
    if (src.includes('drive.google.com')) {
      const newSrc = src.replace('/file/d/', '/uc?id=').replace('/view?usp=sharing', '');
      return `${newSrc}&w=${width}&q=${quality || 75}`;
    }
    return `${src}?w=${width}&q=${quality || 75}`;
  }
  