import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const AddVideo = () => {
  const [title, setTitle] = useState("");
  const [videoUrl, setVideoUrl] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title || !videoUrl) {
      toast.error("All fields are required");
      return;
    }

    try {
      setLoading(true);
      const res = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/api/content/video/add`,
        { title, videoUrl }
      );

      if (res.data.success) {
        toast.success("Video added successfully 🎥");
        setTitle("");
        setVideoUrl("");
      }
    } catch {
      toast.error("Failed to add video");
    } finally {
      setLoading(false);
    }
  };

  return (
    /* CENTER CONTAINER */
    <div className="min-h-[calc(100vh-10rem)] flex items-center justify-center">

      {/* CARD */}
      <div className="w-full max-w-2xl bg-white rounded-2xl shadow-lg p-6 sm:p-8">
        <h2 className="text-2xl font-bold text-center mb-6">
          Add Video Content
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-sm font-medium mb-1">
              Video Title
            </label>
            <input
              type="text"
              placeholder="Enter video title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">
              Video URL
            </label>
            <input
              type="text"
              placeholder="YouTube / Cloudinary URL"
              value={videoUrl}
              onChange={(e) => setVideoUrl(e.target.value)}
              className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-indigo-600 hover:bg-indigo-700
                       text-white py-2 rounded-lg transition
                       disabled:opacity-60"
          >
            {loading ? "Adding..." : "Add Video"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddVideo;
