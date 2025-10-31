import { ReactNode, useEffect, useState } from 'react';

interface ResponsiveSectionProps {
  children: ReactNode;
  designWidth?: number;
  designHeight: number;
}

export function ResponsiveSection({ 
  children, 
  designWidth = 1920, 
  designHeight 
}: ResponsiveSectionProps) {
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const handleResize = () => {
      const viewportWidth = window.innerWidth;
      const newScale = viewportWidth / designWidth;
      setScale(newScale);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [designWidth]);

  const scaledHeight = designHeight * scale;

  return (
    <div 
      className="w-full overflow-hidden"
      style={{ height: `${scaledHeight}px` }}
    >
      <div
        style={{
          width: `${designWidth}px`,
          height: `${designHeight}px`,
          transform: `scale(${scale})`,
          transformOrigin: 'top left',
        }}
      >
        {children}
      </div>
    </div>
  );
}
