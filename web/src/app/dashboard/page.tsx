'use client';
import imgSample from '../_sample/img/img_test.webp';
import Feed from '../_components/feed/layout';

export default function Dashboard() {
  return (
    <div className="flex justify-center">
      <div className="lg:w-11/12 grid place-items-center min-h-screen">
        <div className="p-4 grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          <Feed key={1} imgSample={imgSample} feedDescription={''} />
          <Feed key={1} imgSample={imgSample} feedDescription={''} />
          <Feed key={1} imgSample={imgSample} feedDescription={''} />
          <Feed key={1} imgSample={imgSample} feedDescription={''} />
          <Feed key={1} imgSample={imgSample} feedDescription={''} />
          <Feed key={1} imgSample={imgSample} feedDescription={''} />
          <Feed key={1} imgSample={imgSample} feedDescription={''} />
          <Feed key={1} imgSample={imgSample} feedDescription={''} />
          <Feed key={1} imgSample={imgSample} feedDescription={''} />
          <Feed
            key={2}
            imgSample={imgSample}
            feedDescription={
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla par'
            }
          />
          <Feed
            key={3}
            imgSample={imgSample}
            feedDescription={
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incid'
            }
          />
          <Feed
            key={4}
            imgSample={imgSample}
            feedDescription={'minim veniam, quis nostrud'}
          />
          <Feed
            key={5}
            imgSample={imgSample}
            feedDescription={
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure'
            }
          />
          <Feed
            key={6}
            imgSample={imgSample}
            feedDescription={
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incid'
            }
          />
        </div>
      </div>
    </div>
  );
}
