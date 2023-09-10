import Image, { StaticImageData } from 'next/image';

import imgNotAvailable from '../../_public/img/img_not_available.webp';
import { useState } from 'react';

interface IProps {
  imgSample: StaticImageData;
  feedDescription: string;
}

export default function Feed(props: IProps) {
  const { imgSample, feedDescription } = props;

  const [imgSrc, setImgSrc] = useState<StaticImageData | string>('/ste');

  const replaceWithErrorImg = () => {
    setImgSrc(imgNotAvailable);
  };

  return (
    <div className="w-11/12 max-w-xs max-h-72 rounded overflow-hidden shadow-lg">
      <Image
        className="w-full max-w-xs max-h-36"
        src={imgSrc}
        width={300}
        height={300}
        onError={replaceWithErrorImg}
        alt="Feed"
      />
      <div className="py-2 w-fit h-fit flex items-center">
        <p className="md:text-xs lg:text-base font-bold px-4 py-2 mb-2 text-center min-h-fit">
          {feedDescription}
        </p>
      </div>
    </div>
  );
}
