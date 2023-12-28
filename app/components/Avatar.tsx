import Image from "next/image";
import { FaCircleUser } from "react-icons/fa6";

interface AvatarProps {
  src?: string | null | undefined;
}

const Avatar: React.FC<AvatarProps> = ({ src }) => {
  if (src) {
    return (
      <Image
        src={src}
        alt="Avatar"
        className="rounded-full"
        width="30"
        height="30"
      />
    );
  }
  return <FaCircleUser size={24} />;
};

export default Avatar;
