import { CrossIcon } from "../Icons/CrossIcon";
import { Input } from "./Input";
import { useRef, useState } from "react";
import { FaFileAlt, FaLink, FaPlay, FaTag, FaPlusCircle, FaTimes } from "react-icons/fa";

interface ContentModelInterface {
  open: boolean;
  onClose: () => void;
  onSubmit?: (data: {
    title: string;
    link: string;
    type: string;
    tags: string[];
  }) => void;
}

export const CreateContentModel = ({ open, onClose, onSubmit }: ContentModelInterface) => {
  const titleRef = useRef<HTMLInputElement>(null);
  const linkRef = useRef<HTMLInputElement>(null);
  const typeRef = useRef<HTMLSelectElement>(null);

  const [tagInput, setTagInput] = useState("");
  const [tags, setTags] = useState<string[]>([]);

  function resetForm() {
    if (titleRef.current) titleRef.current.value = "";
    if (linkRef.current) linkRef.current.value = "";
    if (typeRef.current) typeRef.current.value = "youtube";
    setTags([]);
    setTagInput("");
  }

  function addTag() {
    let cleanTag = tagInput.trim();
    if (!cleanTag) return;

    if (cleanTag.startsWith("#")) {
      cleanTag = cleanTag.slice(1);
    }

    if (!cleanTag) return;

    if (!tags.includes(cleanTag)) {
      setTags([...tags, cleanTag]);
    }
    setTagInput("");
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      e.preventDefault();
      addTag();
    }
  };

  function removeTag(tagToRemove: string) {
    setTags(tags.filter((t) => t !== tagToRemove));
  }

  function handleSubmit() {
    const title = titleRef.current?.value || "";
    const link = linkRef.current?.value || "";
    const type = typeRef.current?.value || "youtube";

    onSubmit?.({ title, link, type, tags });
    resetForm();
    onClose();
  }

  function handleClose() {
    resetForm();
    onClose();
  }

  if (!open) return null;

  return (
    <div className="h-screen w-screen fixed top-0 left-0 bg-black/60 flex justify-center items-center z-50 p-4 transition-all">
      <div className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 p-6 rounded-3xl w-full max-w-sm flex flex-col gap-5 shadow-2xl relative overflow-y-auto max-h-[90vh] transition-all">
        
        {/* Close Button */}
        <button 
          onClick={handleClose} 
          className="absolute right-4 top-4 bg-slate-100 dark:bg-slate-800 text-gray-500 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-100 p-2 rounded-full cursor-pointer transition-colors"
        >
          <CrossIcon size="sm" />
        </button>

        {/* Header Section */}
        <div className="flex flex-col items-center mt-2">
          <div className="w-16 h-16 bg-indigo-50 dark:bg-indigo-950/30 rounded-full flex items-center justify-center text-indigo-650 dark:text-indigo-400 mb-3 border border-indigo-100 dark:border-indigo-900/30 shadow-lg shadow-indigo-500/5">
            <FaFileAlt className="size-6 text-indigo-650 dark:text-indigo-400" />
          </div>
          <h2 className="text-xl font-bold text-slate-800 dark:text-slate-100">Add Content</h2>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">Add a new link to your collection ✨</p>
        </div>

        {/* Form Fields */}
        <div className="flex flex-col gap-4">
          
          {/* Title Field */}
          <div className="flex flex-col gap-1.5">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-indigo-50 dark:bg-indigo-950/50 rounded-lg flex items-center justify-center text-indigo-650 dark:text-indigo-400 text-xs font-bold font-mono">
                T
              </div>
              <label className="text-xs font-bold text-slate-700 dark:text-slate-350">Title</label>
            </div>
            <Input ref={titleRef} placeholder="Enter a catchy title" className="py-1" />
          </div>

          {/* Link Field */}
          <div className="flex flex-col gap-1.5">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-indigo-50 dark:bg-indigo-950/50 rounded-lg flex items-center justify-center text-indigo-650 dark:text-indigo-400">
                <FaLink className="size-3" />
              </div>
              <label className="text-xs font-bold text-slate-700 dark:text-slate-350">Link</label>
            </div>
            <Input ref={linkRef} placeholder="https://example.com" icon={<FaLink className="size-3.5 text-gray-400" />} className="py-1" />
          </div>

          {/* Platform Field */}
          <div className="flex flex-col gap-1.5">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-indigo-50 dark:bg-indigo-950/50 rounded-lg flex items-center justify-center text-indigo-650 dark:text-indigo-400">
                <FaPlay className="size-3" />
              </div>
              <label className="text-xs font-bold text-slate-700 dark:text-slate-350">Platform</label>
            </div>
            <select ref={typeRef} className="p-2.5 border border-slate-200 dark:border-slate-800 rounded-xl bg-white dark:bg-slate-800 text-sm text-slate-700 dark:text-slate-300 outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all cursor-pointer">
              <option value="youtube">YouTube</option>
              <option value="twitter">Twitter</option>
              <option value="instagram">Instagram</option>
              <option value="facebook">Facebook</option>
              <option value="reddit">Reddit</option>
            </select>
          </div>

          {/* Tags Field */}
          <div className="flex flex-col gap-1.5">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-indigo-50 dark:bg-indigo-950/50 rounded-lg flex items-center justify-center text-indigo-650 dark:text-indigo-400">
                <FaTag className="size-3" />
              </div>
              <label className="text-xs font-bold text-slate-700 dark:text-slate-350">Tags (optional)</label>
            </div>
            <div className="flex gap-2">
              <input
                value={tagInput}
                onChange={(e) => setTagInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Add a tag and press Enter"
                className="border border-slate-200 dark:border-slate-800 px-3 py-2 rounded-xl flex-1 bg-white dark:bg-slate-800 text-sm text-gray-800 dark:text-slate-200 outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all"
              />
              <button
                onClick={addTag}
                className="bg-indigo-50 dark:bg-indigo-950/50 text-indigo-650 dark:text-indigo-400 hover:bg-indigo-100 dark:hover:bg-indigo-900/50 px-4 rounded-xl text-xs font-bold transition-all cursor-pointer border border-indigo-100/30 dark:border-indigo-900/20"
              >
                Add
              </button>
            </div>

            {/* Tag Pills */}
            <div className="flex gap-1.5 flex-wrap mt-1">
              {tags.map((tag, index) => (
                <span 
                  key={index} 
                  className="bg-indigo-50 dark:bg-indigo-950/50 text-indigo-650 dark:text-indigo-400 px-2.5 py-1 rounded-full text-xs font-bold border border-indigo-100/30 dark:border-indigo-900/20 flex items-center gap-1.5"
                >
                  <span>{tag}</span>
                  <button 
                    onClick={() => removeTag(tag)}
                    className="text-indigo-400 hover:text-indigo-600 dark:hover:text-indigo-200 cursor-pointer"
                  >
                    <FaTimes className="size-2.5" />
                  </button>
                </span>
              ))}
            </div>
          </div>

        </div>

        {/* Submit Action */}
        <div className="mt-2">
          <button
            onClick={handleSubmit}
            className="w-full bg-gradient-to-r from-indigo-650 to-violet-650 hover:from-indigo-750 hover:to-violet-750 text-white font-bold py-3 px-4 rounded-xl shadow-lg shadow-indigo-600/20 active:scale-98 hover:scale-101 transition-all flex items-center justify-center gap-2 cursor-pointer text-sm"
          >
            <FaPlusCircle className="size-4" />
            <span>Add Content</span>
          </button>
        </div>

      </div>
    </div>
  );
};