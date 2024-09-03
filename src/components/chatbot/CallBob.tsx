import 'regenerator-runtime/runtime';

// import ConversionIdea from './ConversionIdea';
import MessageBox from './MessageBox';
import TalkButton from './TalkButton';
import { useCallManager } from './CallManager';
import { useParams } from 'react-router-dom';

export default function CallBob() {
  const {
    userCall,
    userSpeak,
    userStopSpeaking,
    listening,
    isCalling,
    endCall,
    handleSend,
    messages,
    isChatbotSpeaking,
    setVoiceType
  } = useCallManager();

  const {id} = useParams<{id:string}>();

  if(id=="1013" || id=="2242"){
    setVoiceType('Microsoft Ravi - English (India)');
  }else{
    setVoiceType('Microsoft Heera - English (India)')
  }

  return (
    <div className="flex h-full flex-col items-center justify-center w-full overflow-auto px-8 pt-[50px]">
      {/* <div className="bg-[url(../public/assets/Bob.gif)] lg:h-[500px] lg:w-[500px] xxs:h-0 w-full bg-no-repeat bg-contain bg-center"></div> */}
      <div className="flex justify-center flex-col items-center w-full h-full pb-10">
        <MessageBox message={messages[messages.length - 1].message} />
        <TalkButton
            userCall={userCall}
            userSpeak={userSpeak}
            userStopSpeaking={userStopSpeaking}
            listening={listening}
            isCalling={isCalling}
            endCall={endCall}
            isChatbotSpeaking={isChatbotSpeaking}
          />
      </div>
    </div>
  );
}
