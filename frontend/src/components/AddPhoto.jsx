import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const AddPhoto = () => {
  const [title, setTitle] = useState("");
  const [about, setAbout] = useState("");
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title || !about || !image) {
      toast.error("Title, About and Image are required");
      return;
    }

    try {
      setLoading(true);
      const formData = new FormData();
      formData.append("title", title);
      formData.append("about", about);
      formData.append("image", image);

      const res = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/api/content/add`,
        formData
      );

      if (res.data.success) {
        toast.success("Photo added successfully 🎉");
        setTitle("");
        setAbout("");
        setImage(null);
        setPreview(null);
        e.target.reset();
      }
    } catch (err) {
      toast.error(err.response?.data?.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    /* CENTER CONTAINER */
    <div className="min-h-[calc(100vh-10rem)] flex items-center justify-center">

      {/* CARD */}
      <div className="w-full max-w-3xl bg-white rounded-2xl shadow-lg p-6 sm:p-8">
        <h2 className="text-2xl font-bold text-slate-800 mb-6 text-center">
          Add Photo Content
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* TITLE */}
          <div>
            <label className="block text-sm font-medium mb-1">Title</label>
            <input
              type="text"
              placeholder="Enter title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          {/* ABOUT */}
          <div>
            <label className="block text-sm font-medium mb-1">About</label>
            <textarea
              rows="4"
              placeholder="Enter description"
              value={about}
              onChange={(e) => setAbout(e.target.value)}
              className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          {/* IMAGE */}
          <div>
            <label className="block text-sm font-medium mb-1">Image</label>
            <input
              type="file"
              accept="image/*"
              onChange={(e) => {
                setImage(e.target.files[0]);
                setPreview(URL.createObjectURL(e.target.files[0]));
              }}
              className="w-full"
            />
          </div>

          {/* PREVIEW */}
          {preview && (
            <div className="flex justify-center">
              <img
                src={preview}
                alt="preview"
                className="h-40 rounded-lg border object-cover"
              />
            </div>
          )}

          {/* BUTTON */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2 rounded-lg font-medium transition disabled:opacity-60"
          >
            {loading ? "Uploading..." : "Add Photo"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddPhoto;
