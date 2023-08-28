import React, { useState } from "react";

interface PostModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function PostModal({ isOpen, onClose }: PostModalProps) {
  const [content, setContent] = useState<string>("");
  const [image, setImage] = useState<File | null>(null);

  const handleContentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setContent(e.target.value);
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedImage = e.target.files?.[0];
    setImage(selectedImage || null);
  };

  const handlePostSubmit = () => {
    console.log(content, image);
  };

  return (
    isOpen && (
      <div className="fixed inset-0 flex items-center justify-center z-50">
        <div className="bg-white dark:bg-gray-900 rounded-lg p-8 shadow-lg max-w-md">
          <h2 className="text-lg font-semibold mb-4">Create a New Post</h2>
          <textarea
            className="w-full p-2 border rounded-md mb-4"
            placeholder="Write your post content..."
            value={content}
            onChange={handleContentChange}
            rows={4}
          />
          <input
            type="file"
            accept="image/*"
            className="mb-4"
            onChange={handleImageChange}
          />
          {image && (
            <img
              src={URL.createObjectURL(image)}
              alt="Selected"
              className="w-full h-auto mb-4"
            />
          )}
          <div className="flex justify-end">
            <button
              className="mr-2 px-4 py-2 bg-primary-700 text-white rounded-lg hover:bg-primary-800"
              onClick={handlePostSubmit}
            >
              Post
            </button>
            <button
              className="px-4 py-2 border rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700"
              onClick={onClose}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    )
  );
}
