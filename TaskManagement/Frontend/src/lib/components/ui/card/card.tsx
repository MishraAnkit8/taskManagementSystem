import React from 'react';
import '../../../../../src/App.css';
interface CardProps {
  title: string;
  children: React.ReactNode; 
}

const Card: React.FC<CardProps> = ({ title, children }) => {
  return (
    <div className="rounded-2xl border-[1px] border-[#E5E9F1] p-2.5 !pt-0 shadow-card sm:p-6">
    <h2 className="w-fit rounded-b-xl bg-base px-6 py-[11px] text-body-2 font-medium text-red-500 sm:text-body-1">
      {title}
    </h2>
    {children} {/* Renders the nested content */}
  </div>
  
  );
};

export default Card;
