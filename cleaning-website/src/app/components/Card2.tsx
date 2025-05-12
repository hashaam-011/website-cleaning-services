import React from 'react';
import Image from 'next/image';

interface Card2Props {
  quote: string;
  name: string;
  avatarUrl?: string;
  rating?: number;
}

const Card2: React.FC<Card2Props> = ({
  quote = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Nunc vulputate libero et velit interdum.",
  name = "Name",
  avatarUrl = "/placeholder.svg",
  rating = 5
}) => {
  return (
    <div className="bg-gray-50 rounded-2xl shadow-sm p-5 max-w-sm">
      {/* Quote icon */}
      <div className="text-yellow-400 text-3xl font-serif mb-2">
        "
      </div>

      {/* Quote text */}
      <p className="text-gray-700 text-sm mb-4">
        {quote}
      </p>

      {/* Author section */}
      <div className="flex items-center mb-2">
        <div className="w-8 h-8 bg-gray-300 rounded-full mr-2 overflow-hidden">
          {avatarUrl && (
            <Image
              src={avatarUrl || "/placeholder.svg"}
              alt={name}
              width={32}
              height={32}
              className="object-cover"
            />
          )}
        </div>
        <span className="text-blue-500 text-sm font-medium">{name}</span>
      </div>

      {/* Rating stars */}
      <div className="flex">
        {[...Array(5)].map((_, i) => (
          <svg
            key={i}
            className={`w-4 h-4 ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
    </div>
  );
};

export default Card2;