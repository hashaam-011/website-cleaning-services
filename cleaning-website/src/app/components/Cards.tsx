import React from 'react';

interface CardProps {
  heading: string;
  description: string;
  buttonText: string;
  onClick?: () => void;
}

const Card: React.FC<CardProps> = ({
  heading = "Heading",
  description = "Torem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Torem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
  buttonText = "Check Now",
  onClick
}) => {
  return (
    <div className="bg-white rounded-2xl shadow-md p-6 max-w-sm">
      <h2 className="text-2xl font-bold text-center mb-4">{heading}</h2>

      <p className="text-gray-600 text-center text-sm mb-6">
        {description}
      </p>

      <div className="flex justify-center">
        <button
          onClick={onClick}
          className="bg-amber-300 hover:bg-amber-400 text-black px-4 py-2 rounded-md text-sm font-medium flex items-center"
        >
          {buttonText}
          <span className="ml-1 h-1.5 w-1.5 rounded-full bg-amber-500"></span>
        </button>
      </div>
    </div>
  );
};

export default Card;