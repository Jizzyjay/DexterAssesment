import Ratings from "./Ratings";

const RatedVendors = () => {
  return (
    <div className="bg-white lg:w-[320px] md:w-full max-h-[360px] p-4 rounded-lg shadow-md mb-4 overflow-y-auto">
      <h3 className="text-xl text-[#6A6B6D] items-center font-normal">Top Rated Vendors</h3>

      <div className="space-y-1">
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
