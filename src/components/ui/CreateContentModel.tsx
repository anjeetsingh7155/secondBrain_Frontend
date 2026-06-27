import { CrossIcon } from "../Icons/CrossIcon";
import { Button } from "./Button";
import { Input } from "./Input";
import { useRef, useState } from "react";

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
    <div className="h-screen w-screen fixed top-0 left-0 bg-black/60 flex justify-center items-center z-50">

      <div className="bg-white dark:bg-slate-900 border dark:border-slate-800 p-6 rounded-xl w-80 flex flex-col gap-4 shadow-2xl transition-all">

        <div className="flex justify-end cursor-pointer text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200" onClick={handleClose}>
          <CrossIcon size="md" />
        </div>

        <Input ref={titleRef} placeholder="Title" />
        <Input ref={linkRef} placeholder="Link" />

        <select ref={typeRef} className="p-2 border rounded-md bg-white dark:bg-slate-800 border-gray-300 dark:border-slate-700 text-gray-900 dark:text-slate-100">
          <option value="youtube">YouTube</option>
          <option value="twitter">Twitter</option>
          <option value="instagram">Instagram</option>
          <option value="facebook">Facebook</option>
          <option value="reddit">Reddit</option>
        </select>

        <div className="flex gap-2">
          <input
            value={tagInput}
            onChange={(e) => setTagInput(e.target.value)}
            placeholder="Add tag"
            className="border dark:border-slate-700 p-2 rounded-md flex-1 bg-white dark:bg-slate-800 text-gray-900 dark:text-slate-100"
          />
          <button
            onClick={addTag}
            className="bg-blue-500 text-white px-3 rounded cursor-pointer"
          >
            Add
          </button>
        </div>

        <div className="flex gap-2 flex-wrap">
          {tags.map((tag, index) => (
            <span key={index} className="bg-indigo-100 dark:bg-slate-800 text-indigo-700 dark:text-indigo-300 px-2 py-1 rounded text-xs">
              #{tag}
            </span>
          ))}
        </div>

        <Button
          variant="primary"
          size="md"
          text="Add Content"
          onClick={handleSubmit}
        />

      </div>
    </div>
  );
};