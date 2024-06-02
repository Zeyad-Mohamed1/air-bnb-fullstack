"use client";

import Image from "next/image";

const Avatar = ({ src }: { src?: string | null }) => {
  return (
    <Image
      src={src || "/images/placeholder.jpg"}
      alt="Avatar"
      width={30}
      height={30}
      className="rounded-full"
      style={{ objectFit: "cover" }}
    />
  );
};

export default Avatar;
