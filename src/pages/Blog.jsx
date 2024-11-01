import React, { useState, useEffect } from 'react';
import { ChevronDown, ExternalLink, Info, SlidersHorizontal, Clock, User, Tag } from 'lucide-react';
import LoadingAnimation from './LoadingAnimation';

const BlogPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedTag, setSelectedTag] = useState('all');
  const [headerVisible, setHeaderVisible] = useState(true);
  const [showFilters, setShowFilters] = useState(false);

  const blogPosts = [
    {
      id: 1,
      title: "The Future of Web Development",
      excerpt: "Exploring upcoming trends and technologies that will shape the future of web development in the coming years. Learn about the latest innovations and prepare for what's next.",
      author: "John Doe",
      date: "2024-03-15",
      category: "Technology",
      tags: ["Web Development", "Future Tech", "Programming"],
      readTime: "5 min",
      image: "https://imgs.search.brave.com/UAfMnsd9OMT_djJzjepovZHEHXGZjE1uYCL57DXjxvs/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/ZWxlZ2FudHRoZW1l/cy5jb20vYmxvZy93/cC1jb250ZW50L3Vw/bG9hZHMvMjAyNC8w/Ny9HaWdhcGl4ZWwt/QUkuanBn"
    },
    {
      id: 2,
      title: "Mastering React Hooks",
      excerpt: "A comprehensive guide to using React Hooks effectively in your applications. Deep dive into useState, useEffect, and custom hooks.",
      author: "Jane Smith",
      date: "2024-03-10",
      category: "Programming",
      tags: ["React", "JavaScript", "Web Development"],
      readTime: "8 min",
      image: "https://imgs.search.brave.com/MGcO3f-0pZP9HTxFELzUrlk7NUiJ4aBi9Asv0XVldx4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly82NC5t/ZWRpYS50dW1ibHIu/Y29tL2I2YWY1Mjkx/NDFhMDMxYjQ3Mjli/YzIwNjM1ZTc1MWFm/L2ZlZTdlMDQ2ZDEw/Zjc2Y2MtOGYvczEy/ODB4MTkyMC82MzYz/MDAxMTA0NGUyNzNl/ODc3NTQyMGE1NGRj/NTBkMmIxMGJiYjI1/LmpwZw"
    },
    {
      id: 3,
      title: "UI Design Principles",
      excerpt: "Essential principles for creating beautiful and functional user interfaces. Learn about color theory, typography, and layout design.",
      author: "Alex Johnson",
      date: "2024-03-05",
      category: "Design",
      tags: ["UI/UX", "Design Theory", "Web Design"],
      readTime: "6 min",
      image: "https://imgs.search.brave.com/gDpr9yRPkNWTOQYB18sslcXFNx-KxCHQaeNfx0KR444/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly82NC5t/ZWRpYS50dW1ibHIu/Y29tLzc3YzdjOGNj/Mzc1NGUxYTA2ZmQw/YTZlYzUyY2EzYjIx/LzAyYWViNjY3N2Q0/YTA5ZDctZjYvczEy/ODB4MTkyMC8xOWVh/NDM2OTY3ZGM3M2Nk/ZjBmMGI4OTYwMDEw/Y2Q4NDRjNzkxYzI1/LnBuZw"
    }
  ];

  // Extract unique categories and tags
  const allCategories = Array.from(new Set(blogPosts.map(post => post.category))).sort();
  const allTags = Array.from(new Set(blogPosts.flatMap(post => post.tags))).sort();

  // Filter posts based on search, category, and tag
  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
    const matchesTag = selectedTag === 'all' || post.tags.includes(selectedTag);
    return matchesSearch && matchesCategory && matchesTag;
  });

  useEffect(() => {
    const handleScroll = () => {
      setHeaderVisible(window.scrollY < window.innerHeight * 0.8);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <LoadingAnimation />;
  }

  return (
    <div className="animate-fadeIn">
      <div className="min-h-screen bg-black text-white">
        {/* Animated Background */}
        <div className="fixed inset-0 z-0 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(50,50,255,0.15),transparent_50%)] animate-pulse blur-2xl" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(255,50,255,0.15),transparent_50%)] animate-pulse delay-75 blur-2xl" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/20" />
        </div>

        {/* Hero Section */}
        <div className="relative z-10 h-screen flex items-center justify-center">
          <div className={`text-center transition-all duration-700 ${headerVisible ? 'opacity-100 transform-none' : 'opacity-0 translate-y-10'}`}>
            <h1 className="text-6xl md:text-7xl h-24 font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
              Blog
            </h1>
            <p className="text-xl text-blue-300 mb-8">Insights and Stories</p>
            <button 
              onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
              className="group rounded-full p-4 transition-all duration-300"
            >
              <ChevronDown className="w-6 h-6 animate-bounce" />
            </button>
          </div>
        </div>

        {/* Blog Section */}
        <div className="relative z-10 min-h-screen bg-transparent backdrop-blur-xl">
          <div className="max-w-7xl mx-auto px-4 py-16">
            {/* Search and Filters */}
            <div className="sticky top-4 z-20 mb-12 bg-black/30 backdrop-blur-xl rounded-2xl border border-gray-800/50 p-4">
              <div className="flex flex-wrap gap-4 justify-between mb-4">
                <input
                  type="text"
                  placeholder="Search posts..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="flex-1 max-w-md bg-gray-900/50 border border-gray-700 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button
                  onClick={() => setShowFilters(!showFilters)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-xl border transition-all duration-300 ${
                    showFilters 
                      ? 'bg-blue-500/20 border-blue-500/50 text-blue-400'
                      : 'bg-gray-900/50 border-gray-700 hover:bg-blue-500/10'
                  }`}
                >
                  <SlidersHorizontal className="w-4 h-4" />
                  Filters
                </button>
              </div>

              {/* Expandable Filters */}
              <div className={`grid grid-cols-1 md:grid-cols-2 gap-4 transition-all duration-300 ${
                showFilters ? 'opacity-100 max-h-96' : 'opacity-0 max-h-0 overflow-hidden'
              }`}>
                {/* Categories */}
                <div className="space-y-2">
                  <label className="text-sm text-gray-400">Category</label>
                  <div className="flex flex-wrap gap-2">
                    <button
                      onClick={() => setSelectedCategory('all')}
                      className={`px-3 py-1 rounded-full text-sm transition-all duration-300 ${
                        selectedCategory === 'all'
                          ? 'bg-blue-500 text-white'
                          : 'bg-gray-800/50 hover:bg-blue-500/20 text-gray-300'
                      }`}
                    >
                      All
                    </button>
                    {allCategories.map(category => (
                      <button
                        key={category}
                        onClick={() => setSelectedCategory(category)}
                        className={`px-3 py-1 rounded-full text-sm transition-all duration-300 ${
                          selectedCategory === category
                            ? 'bg-blue-500 text-white'
                            : 'bg-gray-800/50 hover:bg-blue-500/20 text-gray-300'
                        }`}
                      >
                        {category}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Tags */}
                <div className="space-y-2">
                  <label className="text-sm text-gray-400">Tags</label>
                  <div className="flex flex-wrap gap-2">
                    <button
                      onClick={() => setSelectedTag('all')}
                      className={`px-3 py-1 rounded-full text-sm transition-all duration-300 ${
                        selectedTag === 'all'
                          ? 'bg-purple-500 text-white'
                          : 'bg-gray-800/50 hover:bg-purple-500/20 text-gray-300'
                      }`}
                    >
                      All
                    </button>
                    {allTags.map(tag => (
                      <button
                        key={tag}
                        onClick={() => setSelectedTag(tag)}
                        className={`px-3 py-1 rounded-full text-sm transition-all duration-300 ${
                          selectedTag === tag
                            ? 'bg-purple-500 text-white'
                            : 'bg-gray-800/50 hover:bg-purple-500/20 text-gray-300'
                        }`}
                      >
                        {tag}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Blog Posts Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post) => (
                <div
                  key={post.id}
                  className="group relative bg-gray-900/30 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-800/50 hover:border-blue-500/50 transition-all duration-500"
                >
                  {/* Image */}
                  <div className="relative aspect-video overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent opacity-60" />
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className="flex items-center gap-4 text-sm text-gray-400 mb-4">
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {post.readTime}
                      </div>
                      <div className="flex items-center gap-1">
                        <User className="w-4 h-4" />
                        {post.author}
                      </div>
                    </div>

                    <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
                    <p className="text-gray-400 mb-4">{post.excerpt}</p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {post.tags.map((tag) => (
                        <span 
                          key={tag}
                          className={`px-3 py-1 text-sm rounded-full transition-all duration-300 ${
                            selectedTag === tag
                              ? 'bg-purple-500 text-white'
                              : 'bg-purple-500/10 text-purple-300'
                          }`}
                        >
                          {tag}
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
  );
};

export default BlogPage;