import React from 'react';
import Link from 'next/link';

interface Card3Props {
  serviceName: string;
  details: string;
  count?: string;
  learnMoreUrl?: string;
  onClick?: () => void;
}

const Card3: React.FC<Card3Props> = ({
  serviceName = "Service Name",
  details = "Details",
  count = "00",
  learnMoreUrl = "#",
  onClick
}) => {
  return (
    <div className="bg-white rounded-lg shadow-sm p-4 relative max-w-xs">
      {/* Bell icon */}
      <div className="text-yellow-400 mb-6">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
          />
        </svg>
      </div>

      {/* Count badge */}
      <div className="absolute top-0 right-0 bg-yellow-400 text-white rounded-full w-10 h-10 flex items-center justify-center font-medium">
        {count}
      </div>

      {/* Service name and details */}
      <div className="mb-6">
        <h3 className="text-gray-800 font-medium mb-1">{serviceName}</h3>
        <p className="text-gray-500 text-sm">{details}</p>
      </div>

      {/* Learn more link */}
      <div className="text-right">
        <Link
          href={learnMoreUrl}
          className="text-blue-500 text-sm font-medium inline-flex items-center"
          onClick={onClick}
        >
          Learn More
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 ml-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
};

export default Card3;