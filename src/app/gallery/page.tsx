"use client"
import { useState, useEffect } from 'react';
import { Play, Eye, X } from 'lucide-react';
import { client, urlFor, galleryQueries } from '../../sanity/lib/client';
import NextImage from 'next/image';

// Types
interface GalleryImage {
  _id: string;
  title: string;
  image: {
    asset: {
      _id: string;
      url: string;
    };
  };
  description: string;
}

interface GalleryVideo {
  _id: string;
  title: string;
  video: {
    asset: {
      url: string;
    };
  };
  description: string;
}

type GalleryItem = (GalleryImage & { type: 'image' }) | (GalleryVideo & { type: 'video' });

// Image Modal Component
interface ImageModalProps {
  image: GalleryImage | null;
  isOpen: boolean;
  onClose: () => void;
}

const ImageModal: React.FC<ImageModalProps> = ({ image, isOpen, onClose }) => {
  if (!isOpen || !image) return null;

  return (
    <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4" onClick={onClose}>
      <div className="relative max-w-4xl max-h-[90vh] bg-white rounded-xl overflow-hidden" onClick={(e) => e.stopPropagation()}>
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-10 h-10 bg-black/50 text-white rounded-full flex items-center justify-center hover:bg-black/70 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>
        
        <div className="w-full h-96 bg-gray-200 flex items-center justify-center overflow-hidden">
          {image.image?.asset ? (
            <NextImage
              src={urlFor(image.image).width(800).height(600).url()}
              alt={image.title}
              width={800}
              height={600}
              className="w-full h-full object-cover"
            />
          ) : (
            <span className="text-gray-500">Image: {image.title}</span>
          )}
        </div>
        
        <div className="p-6">
          <h3 className="text-2xl font-bold text-[#006293] mb-2">{image.title}</h3>
          <p className="text-gray-700">{image.description}</p>
        </div>
      </div>
    </div>
  );
};

// Video Modal Component
interface VideoModalProps {
  video: GalleryVideo | null;
  isOpen: boolean;
  onClose: () => void;
}

const VideoModal: React.FC<VideoModalProps> = ({ video, isOpen, onClose }) => {
  if (!isOpen || !video) return null;

  return (
    <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4" onClick={onClose}>
      <div className="relative max-w-5xl w-full bg-black rounded-xl overflow-hidden" onClick={(e) => e.stopPropagation()}>
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-10 h-10 bg-black/50 text-white rounded-full flex items-center justify-center hover:bg-black/70 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>
        
        <video
          controls
          autoPlay
          className="w-full h-auto max-h-[80vh]"
        >
          <source src={video.video.asset.url} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        
        <div className="p-6 text-white">
          <h3 className="text-2xl font-bold mb-2">{video.title}</h3>
          <p className="text-gray-300">{video.description}</p>
        </div>
      </div>
    </div>
  );
};

// Gallery Item Component
interface GalleryItemProps {
  item: GalleryItem;
  onImageClick: (image: GalleryImage) => void;
  onVideoClick: (video: GalleryVideo) => void;
}

const GalleryItem: React.FC<GalleryItemProps> = ({ item, onImageClick, onVideoClick }) => {
  const isVideo = item.type === 'video';

  const handleClick = () => {
    if (isVideo) {
      onVideoClick(item as GalleryVideo);
    } else {
      onImageClick(item as GalleryImage);
    }
  };

  return (
    <div className="relative h-64 bg-gray-200 rounded-xl overflow-hidden group cursor-pointer hover:scale-105 transition-transform duration-300">
      <div className="w-full h-full flex items-center justify-center" onClick={handleClick}>
        {!isVideo && (item as GalleryImage).image?.asset ? (
          <NextImage
            src={urlFor((item as GalleryImage).image).width(400).height(300).url()}
            alt={item.title}
            width={400}
            height={300}
            className="w-full h-full object-cover"
          />
        ) : (
          <span className="text-gray-600 text-center px-4">
            {isVideo ? '🎥' : '📷'} {item.title}
          </span>
        )}
        
        {/* Video Play Icon */}
        {isVideo && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-16 h-16 bg-black/50 rounded-full flex items-center justify-center backdrop-blur-sm">
              <Play className="w-6 h-6 text-white ml-1" />
            </div>
          </div>
        )}
      </div>
      
      {/* Description Overlay */}
      <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent text-white">
        <h4 className="font-semibold mb-1">{item.title}</h4>
        <p className="text-sm opacity-90 line-clamp-2">{item.description}</p>
      </div>
      
      {/* Hover Button */}
      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 bg-black/40 transition-opacity duration-300">
        <button className="flex items-center px-4 py-2 bg-white text-[#006293] font-medium rounded-lg hover:bg-gray-100 transition-colors duration-200">
          {isVideo ? <Play className="mr-2 w-4 h-4" /> : <Eye className="mr-2 w-4 h-4" />}
          {isVideo ? 'Play' : 'View'}
        </button>
      </div>
    </div>
  );
};

// Main Gallery Page Component
const GalleryPage: React.FC = () => {
  const [galleryItems, setGalleryItems] = useState<GalleryItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [selectedVideo, setSelectedVideo] = useState<GalleryVideo | null>(null);
  const [isImageModalOpen, setIsImageModalOpen] = useState(false);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  useEffect(() => {
    const fetchGalleryData = async () => {
      try {
        console.log('Fetching gallery data from Sanity...');
        
        // Fetch images and videos from Sanity using your queries
        const [images, videos] = await Promise.all([
          client.fetch(galleryQueries.getAllImages),
          client.fetch(galleryQueries.getAllVideos)
        ]);
        
        console.log('Images fetched:', images);
        console.log('Videos fetched:', videos);
        
        // Combine with type indicators
        const combinedItems: GalleryItem[] = [
          ...images.map((img: GalleryImage) => ({ ...img, type: 'image' as const })),
          ...videos.map((vid: GalleryVideo) => ({ ...vid, type: 'video' as const }))
        ];
        
        console.log('Combined items:', combinedItems);
        setGalleryItems(combinedItems);
      } catch (error) {
        console.error('Error fetching gallery data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchGalleryData();
  }, []);

  const handleImageClick = (image: GalleryImage) => {
    setSelectedImage(image);
    setIsImageModalOpen(true);
  };

  const handleVideoClick = (video: GalleryVideo) => {
    setSelectedVideo(video);
    setIsVideoModalOpen(true);
  };

  const closeImageModal = () => {
    setIsImageModalOpen(false);
    setSelectedImage(null);
  };

  const closeVideoModal = () => {
    setIsVideoModalOpen(false);
    setSelectedVideo(null);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-[#006293] mb-4"></div>
          <p className="text-[#006293] font-medium">Loading gallery...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#006293] to-[#89d6fb]">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Our Gallery
          </h1>
          <p className="text-xl text-white/90 leading-relaxed max-w-3xl mx-auto">
            Visual stories from research journeys and professional experiences.
          </p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-[#006293] text-center mb-12">
            Images & Videos
          </h2>
          
          {galleryItems.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {galleryItems.map((item) => (
                <GalleryItem 
                  key={item._id} 
                  item={item}
                  onImageClick={handleImageClick}
                  onVideoClick={handleVideoClick}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-600 text-lg mb-4">
                No gallery items found.
              </p>
              <p className="text-gray-500 text-sm">
                Make sure to add content in Sanity Studio under &apos;Gallery Images&apos; and &apos;Gallery Videos&apos;
              </p>
              <p className="text-gray-500 text-sm">
                Items loaded: {galleryItems.length} | Loading: {loading ? 'Yes' : 'No'}
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Modals */}
      <ImageModal 
        image={selectedImage}
        isOpen={isImageModalOpen}
        onClose={closeImageModal}
      />
      
      <VideoModal 
        video={selectedVideo}
        isOpen={isVideoModalOpen}
        onClose={closeVideoModal}
      />
    </div>
  );
};

export default GalleryPage;