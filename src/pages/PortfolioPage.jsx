import React, { useState, useEffect } from "react";
import {
  ChevronDown,
  Play,
  ExternalLink,
  Info,
  SlidersHorizontal,
} from "lucide-react";
import LoadingAnimation from "./LoadingAnimation";

const PortfolioPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedTool, setSelectedTool] = useState("all");
  const [showFilters, setShowFilters] = useState(false);


  const portfolioItems = [
    {
      id: 1,
      title: "Marketing Talking Head Video",
      description:
        "Professional business presentation with dynamic overlays and engaging visual effects",
      category: "Marketing",
      tags: ["Talking Head"],
      tools: ["Davinci Resolve", "Short Form Content", "After Effects"],
      image:
        "https://imgs.search.brave.com/KDAom5XQFY9T-MtLJxRsBaGqhkcOWTiPvLOfbMl5IcA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJjYXZlLmNv/bS93cC93cDcxMTA2/MzkuanBn",
      videoUrl: "#",
    },
    {
      id: 2,
      title: "DigitalBrandz Podcast",
      description:
        "Podcast production with high-quality audio and visual elements",
      category: "Podcast",
      tags: ["Audio", "Visual"],
      tools: ["Davinci Resolve", "Adobe Audition", "Short Form Content"],
      image:
        "https://imgs.search.brave.com/Zv4UY-FMcswZlM4Cr8MYFosZ_X7Pu0twhtZlnxyZ3GY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzA3LzkzLzk0Lzk3/LzM2MF9GXzc5Mzk0/OTc1NF83T2U2eFFm/aHdHSmtzZ0JMVjFh/eW05TE5McDJialVQ/Yi5qcGc",
      videoUrl: "#",
    },
    {
      id: 3,
      title: "Real-Estate Video Ad",
      description:
        "Cinematic property showcase with professional color grading",
      category: "Real Estate",
      tags: ["Commercial"],
      tools: ["Davinci Resolve", "Short Form Content", "Premiere Pro"],
      image:
        "https://imgs.search.brave.com/uo1_PfkpbDQUHI67wP7MjFualIfJLm9hteaBE3otYMI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/dmlkZW9wcm9jLmNv/bS9pbWFnZXMvdnAt/c2VvL3Zwdi1mZWF0/dXJlcy5qcGc",
      videoUrl: "https://drive.google.com/file/d/12dy3kJ0PJnsQ8rUgyVyCtDOg9IGYUWDh/view?usp=sharing",
    },
  ];

  // Extract unique tools from all portfolio items
  const allTools = Array.from(
    new Set(portfolioItems.flatMap((item) => item.tools))
  ).sort();

  // Extract unique categories
  const allCategories = Array.from(
    new Set(portfolioItems.map((item) => item.category))
  ).sort();

  const filteredItems = portfolioItems.filter((item) => {
    const matchesSearch = item.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === "all" || item.category === selectedCategory;
    const matchesTool =
      selectedTool === "all" || item.tools.includes(selectedTool);
    return matchesSearch && matchesCategory && matchesTool;
  });

  useEffect(() => {
    // Simulate loading time and ensure minimum display time for loading animation
    const minLoadingTime = 2000; // 2 seconds minimum loading time
    const startTime = Date.now();

    // Create a promise that resolves when all images are loaded
    const loadImages = () => {
      const images = document.querySelectorAll("img");
      const imagePromises = Array.from(images).map((img) => {
        if (img.complete) return Promise.resolve();
        return new Promise((resolve) => {
          img.onload = resolve;
          img.onerror = resolve; // Handle error case as well
        });
      });
      return Promise.all(imagePromises);
    };

    // Handle page loading
    Promise.all([
      loadImages(),
      new Promise((resolve) => {
        const timeLeft = minLoadingTime - (Date.now() - startTime);
        setTimeout(resolve, Math.max(0, timeLeft));
      }),
    ]).then(() => {
      // Add a slight delay before hiding loading screen for smoother transition
      setTimeout(() => {
        setIsLoading(false);
      }, 300);
    });
  }, []);

  return (
    <>
      {isLoading ? (
        <LoadingAnimation />
      ) : (
        <div className="animate-fadeIn">
          <div className="min-h-screen bg-black text-white">
            {/* Enhanced Animated background */}
            <div className="fixed inset-0 z-0 overflow-hidden">
              {/* Primary gradients */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(50,50,255,0.15),transparent_50%)] animate-pulse blur-2xl" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(255,50,255,0.15),transparent_50%)] animate-pulse delay-75 blur-2xl" />

              {/* Additional lighting effects */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(0,200,255,0.12),transparent_40%)] animate-pulse delay-150 blur-3xl" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_90%_90%,rgba(255,100,50,0.12),transparent_45%)] animate-pulse delay-200 blur-3xl" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_10%,rgba(50,255,150,0.1),transparent_35%)] animate-pulse delay-300 blur-3xl" />

              {/* Moving light beams */}
              <div className="absolute top-0 left-0 w-full h-full">
                <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-blue-500/10 rotate-45 animate-[spin_8s_linear_infinite] blur-3xl" />
                <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-purple-500/10 -rotate-45 animate-[spin_12s_linear_infinite] blur-3xl" />
              </div>

              {/* Subtle overlay for depth */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/20" />
            </div>
            {/* Hero Section */}
            <div className="relative z-10 h-screen flex items-center justify-center">
              <div
                className="text-center transition-all duration-700"
              >
                <h1 className="text-5xl md:text-7xl h-28 md:h-20 font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
                  Portfolio <br className="md:hidden"/> Repositories
                </h1>
                <p className="text-lg md:text-xl text-blue-300 mb-8">
                  Discover my creative work collection
                </p>
                <button
                  onClick={() =>
                    window.scrollTo({
                      top: window.innerHeight,
                      behavior: "smooth",
                    })
                  }
                  className="group rounded-full p-4 transition-all duration-300"
                >
                  <ChevronDown className="w-6 h-6 animate-bounce" />
                </button>
              </div>
            </div>

            {/* Portfolio Section */}
            <div className="relative z-10 min-h-screen bg-transparent backdrop-blur-xl">
              <div className="max-w-7xl mx-auto px-4 py-16">
                {/* Search and Filters */}
                <div className="sticky top-4 z-20 mb-12 bg-transparent backdrop-blur-xl rounded-2xl border border-gray-800/50 p-4">
                  <div className="flex flex-wrap gap-4 justify-center mb-4">
                    <input
                      type="text"
                      placeholder="Search projects..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="flex-1 max-w-md bg-gray-900/50 border border-gray-700 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <button
                      onClick={() => setShowFilters(!showFilters)}
                      className={`flex items-center gap-2 px-4 py-2 rounded-xl border transition-all duration-300 ${
                        showFilters
                          ? "bg-blue-500/20 border-blue-500/50 text-blue-400"
                          : "bg-gray-900/50 border-gray-700 hover:bg-blue-500/10"
                      }`}
                    >
                      <SlidersHorizontal className="w-4 h-4" />
                      Filters
                      <span className="ml-1 text-xs">
                        {selectedCategory !== "all" || selectedTool !== "all"
                          ? "•"
                          : ""}
                      </span>
                    </button>
                  </div>

                  {/* Expandable Filters */}
                  <div
                    className={`grid grid-cols-1 md:grid-cols-2 gap-4 transition-all duration-300 ${
                      showFilters
                        ? "opacity-100 max-h-96"
                        : "opacity-0 max-h-0 overflow-hidden"
                    }`}
                  >
                    {/* Categories */}
                    <div className="space-y-2">
                      <label className="text-sm text-gray-400">Category</label>
                      <div className="flex flex-wrap gap-2">
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

                    {/* Tools */}
                    <div className="space-y-2">
                      <label className="text-sm text-gray-400">Tools</label>
                      <div className="flex flex-wrap gap-2">
                        <button
                          onClick={() => setSelectedTool("all")}
                          className={`px-3 py-1 rounded-full text-sm transition-all duration-300 ${
                            selectedTool === "all"
                              ? "bg-purple-500 text-white"
                              : "bg-gray-800/50 hover:bg-purple-500/20 text-gray-300"
                          }`}
                        >
                          All
                        </button>
                        {allTools.map((tool) => (
                          <button
                            key={tool}
                            onClick={() => setSelectedTool(tool)}
                            className={`px-3 py-1 rounded-full text-sm transition-all duration-300 ${
                              selectedTool === tool
                                ? "bg-purple-500 text-white"
                                : "bg-gray-800/50 hover:bg-purple-500/20 text-gray-300"
                            }`}
                          >
                            {tool}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Portfolio Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {filteredItems.map((item) => (
                    <div
                      key={item.id}
                      className="group relative bg-gray-900/30 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-800/50 hover:border-blue-500/50 transition-all duration-500"
                    >
                      {/* Image Container */}
                      <div className="relative aspect-video overflow-hidden">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent opacity-60" />
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <button className="bg-blue-500 hover:bg-blue-600 rounded-full p-4 transform hover:scale-110 transition-all duration-300">
                            <Play className="w-6 h-6" />
                          </button>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="p-6">
                        {/* Tags */}
                        <div className="flex flex-wrap gap-2 mb-4">
                          {item.tags.map((tag) => (
                            <span
                              key={tag}
                              className="px-3 py-1 text-sm bg-blue-500/10 text-blue-300 rounded-full"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>

                        <h3 className="text-xl font-semibold mb-2">
                          {item.title}
                        </h3>
                        <p className="text-gray-400 mb-4">{item.description}</p>

                        {/* Tools */}
                        <div className="flex flex-wrap gap-2">
                          {item.tools.map((tool) => (
                            <span
                              key={tool}
                              className={`px-3 py-1 text-sm rounded-full transition-all duration-300 ${
                                selectedTool === tool
                                  ? "bg-purple-500 text-white"
                                  : "bg-purple-500/10 text-purple-300"
                              }`}
                            >
                              {tool}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Hover Actions */}
                      <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <button className="p-2 bg-black/50 backdrop-blur-sm rounded-full hover:bg-blue-500/20 transition-colors">
                          <ExternalLink className="w-4 h-4" />
                        </button>
                        <button className="p-2 bg-black/50 backdrop-blur-sm rounded-full hover:bg-blue-500/20 transition-colors">
                          <Info className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default PortfolioPage;
