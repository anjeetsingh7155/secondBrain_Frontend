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

  function addTag() {
    if (!tagInput.trim()) return;

    setTags([...tags, tagInput]);
    setTagInput("");
  }

  function handleSubmit() {
    const title = titleRef.current?.value || "";
    const link = linkRef.current?.value || "";
    const type = typeRef.current?.value || "youtube";

    onSubmit?.({ title, link, type, tags });

    onClose();
  }

  if (!open) return null;

  return (
    <div className="h-screen w-screen fixed top-0 left-0 bg-black/60 flex justify-center items-center">

      <div className="bg-white p-6 rounded-xl w-80 flex flex-col gap-4">

        <div className="flex justify-end cursor-pointer" onClick={onClose}>
          <CrossIcon size="md" />
        </div>

        <Input ref={titleRef} placeholder="Title" />
        <Input ref={linkRef} placeholder="Link" />

        <select ref={typeRef} className="p-2 border rounded-md">
          <option value="youtube">YouTube</option>
          <option value="twitter">Twitter</option>
        </select>

        <div className="flex gap-2">
          <input
            value={tagInput}
            onChange={(e) => setTagInput(e.target.value)}
            placeholder="Add tag"
            className="border p-2 rounded-md flex-1"
          />
          <button
            onClick={addTag}
            className="bg-blue-500 text-white px-3 rounded"
          >
            Add
          </button>
        </div>

        <div className="flex gap-2 flex-wrap">
          {tags.map((tag, index) => (
            <span key={index} className="bg-indigo-100 px-2 py-1 rounded">
              {tag}
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