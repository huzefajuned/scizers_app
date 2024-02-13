const UserCard = ({ user }) => {
  const { name, hair_color, skin_color, gender, vehicles } = user;

  return (
    <div
      className="p-4 m-2 rounded-lg shadow-lg cursor-pointer border-2 border-white hover:border-2 hover:border-gray-400 text-white dark:text-red-500"
      style={{ backgroundColor: hair_color, minHeight: "280px" }} // Set minimum height for cards
    >
      <div className="flex justify-between gap-2 items-center mb-4">
        <h2 className="text-2xl font-bold  text-blue-600  w-28 truncate">
          {name}
        </h2>
        <img
          src={`https://picsum.photos/400/300?random=${name}`}
          alt={name}
          className="w-24 h-24 rounded-full object-cover "
        />
      </div>
      <div className="flex flex-col flex-grow gap-2">
        <p className="text-yellow-900">
          <span className="font-bold">Hair color:</span> {hair_color}
        </p>
        <p className="text-yellow-900">
          <span className="font-bold">Skin color:</span> {skin_color}
        </p>
        <p className="text-yellow-900">
          <span className="font-bold">Gender:</span> {gender}
        </p>
        <p className="text-yellow-900">
          <span className="font-bold">Number of vehicles:</span>{" "}
          {vehicles.length}
        </p>
        <div className="border-t border-dotted border-gray-400 mt-auto"></div>
      </div>
    </div>
  );
};

export default UserCard;
