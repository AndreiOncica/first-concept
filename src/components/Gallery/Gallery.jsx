import React, { useEffect, useState } from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import "./gallery.css";

export default function Gallery() {
  const [projects, setProjects] = useState({});
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    fetch("https://firstconcept.ro/projects/projects.php")
      .then((res) => res.json())
      .then((data) => setProjects(data))
      .catch((err) => console.error("Failed to fetch projects:", err));
  }, []);

  const formatGalleryImages = (images) =>
    images.map((url) => ({
      original: url,
      thumbnail: url,
    }));

  const formatProjectTitle = (folderName) => {
    const decoded = decodeURIComponent(folderName);
    const split = decoded.split(".");
    return split.length > 1 ? split.slice(1).join(".").trim() : decoded;
  };
  

  return (
    <div>
      <div className="project-carousel">
        {Object.entries(projects).map(([folder, images]) => (
          <div
            key={folder}
            className="project-card"
            onClick={() => setSelectedProject(images)}
          >
            <img src={images[0]} alt={folder} />
            <div className="card-title">{formatProjectTitle(folder)}</div>
          </div>
        ))}
      </div>

      {selectedProject && (
        <div className="lightbox" onClick={() => setSelectedProject(null)}>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <ImageGallery
              items={formatGalleryImages(selectedProject)}
              showThumbnails={true}
              showPlayButton={false}
              showFullscreenButton={false}
            />
          </div>
        </div>
      )}
    </div>
  );
}
