import React, { useState, useEffect } from "react";
import { ExternalLink, Expand, X } from "lucide-react";
import LoadingAnimation from "./LoadingAnimation";

const Gallary = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [expandedImage, setExpandedImage] = useState(null);


  // Sample gallery items with varying aspect ratios
  const galleryItems = [
    {
      id: 1,
      title: "Urban Landscape",
      description: "Cityscape at sunset with vibrant colors",
      category: "Landscape",
      aspectRatio: "aspect-video", // 16:9
      image: "https://imgs.search.brave.com/9SgCkJR0zCj-nz-dKlZWcklCRlsCthzqtoEAb5yIh44/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJzLmNvbS9p/bWFnZXMvZmVhdHVy/ZWQvNGstb2FheDE4/a2FhcGtva2Fyby5q/cGc",
    },
    {
      id: 2,
      title: "Mountain Portrait",
      description: "Serene mountain peak in morning light",
      category: "Portrait",
      aspectRatio: "aspect-[3/4]", // Portrait
      image: "https://imgs.search.brave.com/pmNCX7oy9e9Rc8BwRUVET4OPsv3qz3JsOKqXCiJ7DPQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzA1LzcwLzkyLzQ3/LzM2MF9GXzU3MDky/NDcwNF9DUkZzZTZy/SHZKR1c4YkRYOUNo/Q1BOdmZTRzB3eW9Z/di5qcGc",
    },
    {
      id: 3,
      title: "Forest Meditation",
      description: "Misty forest with soft morning light",
      category: "Nature",
      aspectRatio: "aspect-square", // 1:1
      image: "https://imgs.search.brave.com/91dwccaDDKUmidDAF0A0qrO1X4ZaLFcpkPSOsIgICi0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJzLmNvbS9p/bWFnZXMvZmVhdHVy/ZWQvNGstYW51Ymlz/LXQ5YXo4bDNzODFy/ZGJoazUuanBn",
    },
    {
      id: 4,
      title: "Urban Architecture",
      description: "Modern architectural design with glass facade",
      category: "Architecture",
      aspectRatio: "aspect-[16/9]", // Wide landscape
      image: "https://imgs.search.brave.com/kadkQAS4yOADwqNnfWe0DPSRHR01PG3QFxxdhis5rog/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTQx/MTEzMzY0NS9waG90/by9hZXJpYWwtdmll/dy1vZi1saXR0bGUt/bGFnb29uLXNoYXJr/LWJheS1kcm9uZS1w/aG90by00ay5qcGc_/cz02MTJ4NjEyJnc9/MCZrPTIwJmM9bFFn/ZXpzeXViMU1mVmdX/bERTZG1MdDRoTnV5/N3Q5THdlRzJrODJZ/X3ZyQT0",
    },
    {
      id: 5,
      title: "Minimalist Landscape",
      description: "Serene coastal scene with minimal composition",
      category: "Landscape",
      aspectRatio: "aspect-[4/3]", // 4:3 landscape
      image: "https://imgs.search.brave.com/oLfS1H2Z9QKR-GawvYNKRC3BRxNfLCY-xWf_Ob2Ys-c/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTM2/ODAwODY0NS9waG90/by9zcGxpbmV3b3Js/ZC1kaWdpdGFsbHkt/Z2VuZXJhdGVkLWlt/YWdlLmpwZz9zPTYx/Mng2MTImdz0wJms9/MjAmYz1KQ2Etazh1/N1ZYWXZYRmZ2WHMx/eXVyTlZDX2tqbWhD/RVFMQ1I1Xzk5RER3/PQ",
    },
    {
      id: 6,
      title: "Vertical Urban Scene",
      description: "Skyscrapers reaching into the sky",
      category: "Architecture",
      aspectRatio: "aspect-[2/3]", // Tall portrait
      image: "https://imgs.search.brave.com/G_gtXQPg8GpYbuxK5hBg9br83RPrPyElprWivbZ_vKc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJzLmNvbS9p/bWFnZXMvZmVhdHVy/ZWQvNGstYXJjaGl0/ZWN0dXJlLWIzdXd6/MThweTFiMGU1YTcu/anBn",
    }
  ];

  // Get unique categories
  const allCategories = Array.from(
    new Set(galleryItems.map((item) => item.category))
  ).sort();

  // Filtering logic
  const filteredItems = galleryItems.filter((item) => {
    const matchesSearch = item.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === "all" || item.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  // Simulate loading effect
  useEffect(() => {
    const loadingTimer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(loadingTimer);
  }, []);

  // Expand image handler
  const handleExpandImage = (image) => {
    setExpandedImage(image);
  };

  // Close expanded image
  const handleCloseExpand = () => {
    setExpandedImage(null);
  };

  return (
    <>
      {isLoading ? (
        <LoadingAnimation />
      ) : (
        <div className="animate-fadeIn">
          <div className="min-h-screen bg-black text-white">
      {/* Animated Background Similar to Portfolio Page */}
      <div className="fixed inset-0 z-0 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(50,50,255,0.15),transparent_50%)] animate-pulse blur-2xl" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(255,50,255,0.15),transparent_50%)] animate-pulse delay-75 blur-2xl" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
            Visual Gallery
          </h1>
          <p className="text-xl text-blue-300 mb-8">
            Diverse collection of visual stories
          </p>
        </div>

        {/* Search and Category Filters */}
        <div className="sticky top-4 z-20 mb-12 bg-transparent backdrop-blur-xl rounded-2xl border border-gray-800/50 p-4">
          <div className="flex flex-wrap gap-4 justify-center mb-4">
            <input
              type="text"
              placeholder="Search images..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="flex-1 max-w-md bg-gray-900/50 border border-gray-700 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-2">
            <button
              onClick={() => setSelectedCategory("all")}
              className={`px-3 py-1 rounded-full text-sm transition-all duration-300 ${
                selectedCategory === "all"
                  ? "bg-blue-500 text-white"
                  : "bg-gray-800/50 hover:bg-blue-500/20 text-gray-300"
              }`}
            >
              All
            </button>
            {allCategories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-3 py-1 rounded-full text-sm transition-all duration-300 ${
                  selectedCategory === category
                    ? "bg-blue-500 text-white"
                    : "bg-gray-800/50 hover:bg-blue-500/20 text-gray-300"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Masonry-like Grid with Dynamic Aspect Ratios and Gaps */}
        <div className="grid grid-cols-3 grid-rows-2 h-[600px] gap-4">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              className={`relative overflow-hidden rounded-2xl
                ${
                  index === 0 ? "row-span-2 col-span-2" : // First image larger
                  index === 1 ? "row-span-1 col-span-1" :
                  index === 2 ? "row-span-1 col-span-1" :
                  index === 3 ? "row-span-1 col-span-1" :
                  index === 4 ? "row-span-1 col-span-1" :
                  "row-span-1 col-span-1"
                }`}
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/20 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <div className="text-white">
                  <h3 className="text-lg font-semibold mb-1">{item.title}</h3>
                  <p className="text-sm text-gray-300 mb-2">{item.description}</p>
                  <div className="flex gap-2">
                    <button 
                      onClick={() => handleExpandImage(item)}
                      className="bg-blue-500/20 hover:bg-blue-500/40 p-2 rounded-full transition-colors"
                    >
                      <Expand className="w-4 h-4" />
                    </button>
                    <button className="bg-blue-500/20 hover:bg-blue-500/40 p-2 rounded-full transition-colors">
                      <ExternalLink className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Expanded Image Modal */}
      {expandedImage && (
        <div 
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-8"
          onClick={handleCloseExpand}
        >
          <div className="relative max-w-6xl max-h-[90vh]">
            <img 
              src={expandedImage.image} 
              alt={expandedImage.title} 
              className="max-w-full max-h-full object-contain"
              onClick={(e) => e.stopPropagation()}
            />
            <button 
              onClick={handleCloseExpand}
              className="absolute top-4 right-4 bg-white/20 hover:bg-white/40 p-2 rounded-full"
            >
              <X className="w-6 h-6 text-white" />
            </button>
            <div className="absolute bottom-4 left-4 text-white">
              <h3 className="text-2xl font-bold">{expandedImage.title}</h3>
              <p className="text-gray-300">{expandedImage.description}</p>
            </div>
          </div>
        </div>
      )}
    </div>
        </div>
      )}
    </>
  );
};

export default Gallary;
