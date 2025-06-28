import React from 'react'




const ActionLink = ({ href, label, icon, outline }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`flex items-center gap-2 px-4 py-2 rounded transition font-medium ${
        outline
          ? "border border-[#F68537] text-[#F68537] hover:bg-[#F68537] hover:text-white"
          : "bg-[#F68537] text-white hover:bg-[#d96f28]"
      }`}
    >
      {label} {icon}
    </a>
  );
};

export default ActionLink