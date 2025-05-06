import React from 'react';

type PrimaryButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
};

const PrimaryButton: React.FC<PrimaryButtonProps> = ({ children, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="mt-8 px-8 py-3 bg-gradient-to-br from-purple-500 to-purple-800 hover:from-purple-600 hover:to-purple-900 text-white rounded-lg text-lg font-medium transition duration-300 shadow-lg"
    >
      {children}
    </button>
  );
};

export default PrimaryButton;
