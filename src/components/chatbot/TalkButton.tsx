// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
// import { faMicrophone, faMicrophoneSlash, faSquare } from '@fortawesome/free-solid-svg-icons';
// import { useTranslation } from 'next-i18next';
import Lottie from "lottie-react";
import aiAnimation from "D:/git/alvira/public/Animation - 1725269749563.json";
import aiAnimation2 from "D:/git/alvira/public/Animation - 1725271005923.json";
import aiAnimation3 from "D:/git/alvira/public/Animation - 1725272152735.json";

import { INITIALS } from './initials';

interface TalkButtonProps {
  userCall: () => void;
  userSpeak: () => void;
  userStopSpeaking: () => void;
  listening: boolean;
  isCalling: boolean;
  endCall: () => void;
  isChatbotSpeaking: boolean;
}

export default function TalkButton({
  userCall,
  userSpeak,
  userStopSpeaking,
  listening,
  isCalling,
  endCall,
  isChatbotSpeaking,
}: TalkButtonProps) {
  // const { t } = useTranslation();
  if (!isCalling) {
    return (
      <div className="w-auto flex flex-row items-center justify-center">
        <Lottie animationData={aiAnimation} loop={true} className="w-[60px] h-[60px]" />
        <div className='flex flex-row justify-center items-center align-middle'>
          <button
            className="cursor-pointer outline-none md:text-base text-white border-none shadow"
            onClick={userCall}
            style={{ height: '40px' }} // Match the button height with the icon
          >
            <div className="w-[110px] h-[30px] text-xl text-slate-800 font-bold flex justify-center items-center transition-all duration-300 ease-in-out hover:text-slate-500">
              {INITIALS.call}
            </div>
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="flex justify-center flex-row items-center absolute bottom-7 md:relative lg:bottom-0">
      {listening ? (
        <div className='flex flex-row items-center justify-center'>
          <button className="py-4" onClick={userStopSpeaking}>
            <span className="relative flex h-[30px] w-[30px]">
              <span className="absolute inline-flex h-full w-full rounded-full bg-[#014f86] "></span>
                <span className="relative inline-flex rounded-full h-[30px] w-[30px] bg-[#014f86] opacity-15 justify-center items-center">
                  {/* <FontAwesomeIcon
                    icon={faSquare}
                    style={{ color: 'white', fontSize: '20px' }}
                  ></FontAwesomeIcon> */}
              </span>
            </span>
          </button>
          <Lottie animationData={aiAnimation3} loop={true} className="w-[60px] h-[60px] mr-2 ml-2" />
        </div>
      ) : (
        <div className='flex flex-row items-center justify-center'>
          <button
            className={`py-4 ${isChatbotSpeaking ? 'pointer-events-none' : ''}`}
            onClick={userSpeak}
          >
            <span className="relative flex h-[30px] w-[30px]">
              <span className="absolute inline-flex h-full w-full rounded-full bg-gray-300"></span>
              <span
                className={`relative inline-flex rounded-full h-[30px] w-[30px] opacity-15 justify-center items-center bg-[#014f86]`}
              >
                {/* <FontAwesomeIcon
                  icon={isChatbotSpeaking ? faMicrophoneSlash : faMicrophone}
                  style={{ color: 'white', fontSize: '20px' }}
                ></FontAwesomeIcon> */}
              </span>
            </span>
          </button>
          {isChatbotSpeaking && <Lottie animationData={aiAnimation2} loop={true} className="w-[60px] h-[60px] mr-2 ml-2" />}
          {!isChatbotSpeaking && <p className='ml-2 mr-4'>Tap to Speak</p>}
        </div>
      )}

      <button
        className="cursor-pointer outline-none min-w-[100px] w-auto h-[40px] md:text-base text-white bg-[#a4161a] rounded-full border-none border-r-5 shadow pl-2 pr-2"
        onClick={endCall}
      >
        {INITIALS.hangUp}
      </button>
    </div>
  );
}
