import Image from "next/image";

export const CoachStaff = ({ coach }) => {
  return (
    <div className="w-full py-3 px-3 flex items-center justify-center flex-col">
      <div className="w-[200px] h-[200px] flex items-center justify-center overflow-hidden rounded-full border-4 border-yellow ">
        <Image
          src={coach.image}
          alt={coach.name}
          width={400}
          height={300}
          className="w-full h-[200px] object-cover"
        />
      </div>
      <div className="mt-4 text-center">
        <h3 className="text-2xl font-semibold text-gray-900">{coach.name}</h3>
        <p className="text-sm text-gray-500 font-medium">{coach.role}</p>
        <p className="mt-2 text-gray-700">{coach.bio}</p>
      </div>
    </div>
  );
};
