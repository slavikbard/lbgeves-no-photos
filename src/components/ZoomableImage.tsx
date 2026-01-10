import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';

interface ZoomableImageProps {
  src: string;
  alt: string;
  className?: string;
}

const ZoomableImage = ({ src, alt, className = '' }: ZoomableImageProps) => {
  return (
    <Zoom>
      <img
        src={src}
        alt={alt}
        className={className}
      />
    </Zoom>
  );
};

export default ZoomableImage;
