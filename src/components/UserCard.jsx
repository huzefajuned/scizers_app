const UserCard = ({ user }) => {
  const { name, hair_color, skin_color, gender, vehicles } = user;

  return (
    <div
      className="p-4 m-4 rounded-lg shadow-lg"
      style={{ backgroundColor: hair_color }}
    >
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">{name}</h2>
        <img
          src={`https://picsum.photos/400/300?random=${name}`}
          alt={name}
          className="w-24 h-24 rounded-full object-cover"
        />
      </div>
      <div className="flex flex-col">
        <p className="text-gray-900">
          <span className="font-bold">Hair color:</span> {hair_color}
        </p>
        <p className="text-gray-900">
          <span className="font-bold">Skin color:</span> {skin_color}
        </p>
        <p className="text-gray-900">
          <span className="font-bold">Gender:</span> {gender}
        </p>
        <p className="text-gray-900">
          <span className="font-bold">Number of vehicles:</span>{" "}
          {vehicles.length}
        </p>
      </div>
    </div>
  );
};

export default UserCard;
