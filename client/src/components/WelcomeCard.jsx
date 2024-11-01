const WelcomeCard = ({ username }) => {
  return (
    <div className="bg-white rounded-xl shadow-xl p-8 max-w-md w-full transform transition-all hover:scale-105">
      <div className="space-y-4">
        <div className="h-2 w-20 bg-indigo-600 rounded"></div>
        <h1 className="text-3xl font-bold text-gray-800">
          Bienvenido a DevSpace,
        </h1>
        <p className="text-2xl text-indigo-600 font-semibold">{username}!</p>
        <p className="text-gray-600">
          Tu espacio personal para crear, colaborar y crecer.
        </p>
      </div>
    </div>
  );
};

export default WelcomeCard;
