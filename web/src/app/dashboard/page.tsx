'use client';
import Image from 'next/image';
import imgSample from '../_sample/img/img_test.webp';
import Feed from '../_components/feed/layout';

export default function Dashboard() {
  const start = 1;
  const end = 15;

  const numbersList = Array.from({ length: end - start + 1 }, (_, index) => {
    return start + index;
  });

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
      {numbersList.map((_, index) => (
        <Feed key={index} imgSample={imgSample} />
      ))}
    </div>
  );
}
