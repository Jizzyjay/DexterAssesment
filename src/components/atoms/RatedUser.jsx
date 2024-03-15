import UserRatings from "./UserRatings";

const RatedUsers = () => {
  return (
    <div className="bg-white lg:w-[320px] md:w-full max-h-[360px] p-4 rounded-lg shadow-md mb-4 overflow-y-auto lg:gap-0 md:gap-10">
      <h3 className="text-xl font-semibold mb-4">Top Rated Users</h3>
      <div className="space-y-2">
        <UserRatings
          userName="Esosa Bolaji"
          userImage="https://cdn.pixabay.com/photo/2024/02/24/22/37/ai-generated-8594846_1280.png"
        />
        <UserRatings
          userName="Esosa Bolaji"
          userImage="https://cdn.pixabay.com/photo/2024/02/24/22/37/ai-generated-8594846_1280.png"
        />
        <UserRatings
          userName="Esosa Bolaji"
          userImage="https://cdn.pixabay.com/photo/2024/02/24/22/37/ai-generated-8594846_1280.png"
        />
        <UserRatings
          userName="Esosa Bolaji"
          userImage="https://cdn.pixabay.com/photo/2024/02/24/22/37/ai-generated-8594846_1280.png"
        />
        <UserRatings
          userName="Esosa Bolaji"
          userImage="https://cdn.pixabay.com/photo/2024/02/24/22/37/ai-generated-8594846_1280.png"
        />
      </div>
    </div>
  );
};

export default RatedUsers;
