// import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { fas } from '@fortawesome/free-solid-svg-icons'

interface MessageBoxProps {
  message: string;
}
export default function MessageBox({ message }: MessageBoxProps) {
  return (
    <div className="text-xl text-[#6c757d] font-bold xxs:h-full md:h-auto flex-1 md:mb-5 md:mt-0 xxs:mt-12 xxs:mb-[148px] flex justify-center items-center overflow-y-auto ">
      {/* <FontAwesomeIcon
        icon={faQuoteLeft}
        style={{ color: '#6c757d', fontSize: '30px', paddingRight: '20px' }}
      ></FontAwesomeIcon> */}

      <div className="h-full flex items-center">{message}</div>
    </div>
  );
}
