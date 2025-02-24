import Image from "next/image";

export const GalleryCard = ({ gallery }) => {
  return (
    <div className="h-[250px] overflow-hidden rounded-md w-full  bg-gray-200">
      <Image alt="gallery_img" className="w-full" src={gallery.img} width={250} height={250} />
    </div>
  );
};
