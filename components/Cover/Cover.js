import Image from "next/image";
export const Cover = ({ children, background }) => {
  return (
    <div className="h-screen bg-slate-800 text-white relative min-h-[400px] flex justify-center items-center">
      <Image
        className="mix-blend-soft-light object-cover"
        src={background}
        alt="cover"
        fill
      />
      <div className="max-w-5xl z-10">{children}</div>
    </div>
  );
};
