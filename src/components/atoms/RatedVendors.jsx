import Ratings from "./Ratings";

const RatedVendors = () => {
  return (
    <div className="bg-white min-w-[100px] min-h-[400px] p-4 rounded-lg shadow-md mb-4">
      <h3 className="text-xl font-semibold mb-4">Top Rated Vendors</h3>

      <div className="space-y-2">
        <Ratings
          userName="Esosa Bolaji"
          userImage="https://cdn.pixabay.com/photo/2024/02/24/22/37/ai-generated-8594846_1280.png"
          profession="Electrician"
        />
        <Ratings
          userName="Esosa Bolaji"
          userImage="https://cdn.pixabay.com/photo/2024/02/24/22/37/ai-generated-8594846_1280.png"
          profession="Electrician"
        />
        <Ratings
          userName="Esosa Bolaji"
          userImage="https://cdn.pixabay.com/photo/2024/02/24/22/37/ai-generated-8594846_1280.png"
          profession="Electrician"
        />
        <Ratings
          userName="Esosa Bolaji"
          userImage="https://cdn.pixabay.com/photo/2024/02/24/22/37/ai-generated-8594846_1280.png"
          profession="Electrician"
        />
        <Ratings
          userName="Esosa Bolaji"
          userImage="https://cdn.pixabay.com/photo/2024/02/24/22/37/ai-generated-8594846_1280.png"
          profession="Electrician"
        />
      </div>
    </div>
  );
};

export default RatedVendors;
