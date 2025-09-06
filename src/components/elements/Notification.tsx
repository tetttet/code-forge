"use client";

import { X } from "lucide-react";
import { useState } from "react";

const Notification = () => {
  const [shown, setShown] = useState(true);

  if (!shown) return null;

  return (
    <div className="w-full max-h-24 bg-[#eceef3] text-sm font-normal leading-6 overflow-hidden transition-all duration-300">
      <div className="flex justify-between items-start px-6 py-3">
        {/* Description */}
        <div className="flex items-start text-[#232735] gap-2">
          {/* Icon */}
          <div className="w-[19px] h-6 min-w-[19px] min-h-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="19"
              height="24"
              fill="none"
              viewBox="0 0 19 24"
            >
              <path
                fill="#487BFC"
                d="M2.5 10a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"
              />
              <path
                fill="#487BFC"
                d="M9.5 10a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5ZM16.5 10a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5ZM2.5 17a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5ZM9.5 17a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5ZM16.5 17a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"
              />
            </svg>
          </div>

          <span>
            <b>Yotitle</b> — мощный инструмент AI для объединения и&nbsp;
            категоризации фидбека!
          </span>

          <a
            href="https://yotitle.ru/?utm_source=uxfeedback&utm_medium=referral&utm_campaign=yotitle_banner_main"
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold text-[#536ced] underline cursor-pointer"
          >
            Подробнее
          </a>
        </div>

        {/* Close button */}
        <button
          onClick={() => setShown(false)}
          className="w-6 h-6 min-w-6 min-h-6 cursor-pointer"
        >
          <X className="w-6 h-6 text-[#acb2c3]" />
        </button>
      </div>
    </div>
  );
};

export default Notification;
