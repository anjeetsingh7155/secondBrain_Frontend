import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { Card } from "../components/ui/Card";
import { Backend_Url } from "../config";
import { BrainIcon } from "../components/Icons/BrainIcon";

interface SharedContentType {
  id: string;
  title: string;
  link: string;
  type: "youtube" | "twitter" | "instagram" | "facebook" | "reddit";
  tags: string[];
}

export const SharedBrain = () => {
  const { shareId } = useParams<{ shareId: string }>();
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [contents, setContents] = useState<SharedContentType[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchSharedBrain() {
      try {
        setLoading(true);
        setError("");
        const res = await axios.get(`${Backend_Url}/api/v1/brain/${shareId}`);
        setUsername(res.data.username);
        setContents(res.data.content);
      } catch (err: unknown) {
        console.error(err);
        let message = "Failed to load shared brain";

        if (axios.isAxiosError(err)) {
          message = err.response?.data?.message || err.message || message;
        } else if (err instanceof Error) {
          message = err.message;
        }

        setError(message);
      } finally {
        setLoading(false);
      }
    }

    if (shareId) {
      fetchSharedBrain();
    }
  }, [shareId]);

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      {/* Header */}
      <header className="bg-white border-b border-slate-200 px-6 py-4 shadow-sm flex items-center justify-between sticky top-0 z-10">
        <div className="flex items-center gap-3">
          <div className="text-indigo-600">
            <BrainIcon size="md" />
          </div>
          <div>
            <h1 className="text-xl font-bold text-gray-800">Second Brain</h1>
            <p className="text-xs text-gray-500">Shared content showcase</p>
          </div>
        </div>

        <div>
          <button
            onClick={() => navigate("/signin")}
            className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors cursor-pointer"
          >
            Create Your Own
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 max-w-7xl mx-auto w-full px-6 py-8">
        {loading ? (
          <div className="flex flex-col items-center justify-center py-20 gap-3">
            <div className="w-10 h-10 border-4 border-indigo-600 border-t-transparent rounded-full animate-spin"></div>
            <p className="text-gray-500 font-medium text-sm">Fetching shared mind space...</p>
          </div>
        ) : error ? (
          <div className="max-w-md mx-auto bg-white border border-red-100 shadow-md rounded-2xl p-8 text-center mt-12">
            <div className="text-red-500 text-5xl mb-4">⚠️</div>
            <h2 className="text-lg font-bold text-gray-800 mb-2">Failed to View Brain</h2>
            <p className="text-gray-500 text-sm mb-6">{error}</p>
            <button
              onClick={() => navigate("/")}
              className="bg-gray-800 hover:bg-gray-900 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors cursor-pointer"
            >
              Go to Homepage
            </button>
          </div>
        ) : (
          <div>
            {/* Banner info */}
            <div className="bg-linear-to-r from-indigo-500 to-purple-600 rounded-3xl p-8 md:p-12 text-white shadow-lg mb-8 relative overflow-hidden">
              <div className="absolute right-0 top-0 translate-x-12 -translate-y-12 w-64 h-64 bg-white/10 rounded-full blur-3xl pointer-events-none"></div>
              <div className="relative z-10 flex flex-col gap-2">
                <span className="bg-white/20 text-white text-xs font-semibold px-3 py-1 rounded-full w-max">
                  Public Board
                </span>
                <h2 className="text-2xl md:text-4xl font-extrabold tracking-tight mt-2">
                  Welcome to {username}'s Second Brain
                </h2>
                <p className="text-indigo-100 max-w-xl text-sm md:text-base mt-2">
                  Explore links, documents, and tweets aggregated by {username} to optimize learning and knowledge retention.
                </p>
              </div>
            </div>

            {/* Grid display */}
            {contents.length === 0 ? (
              <div className="text-center py-16 bg-white border border-slate-100 rounded-2xl shadow-sm">
                <p className="text-gray-400 text-lg mb-2 font-medium">This brain is empty</p>
                <p className="text-gray-400 text-sm">Owner hasn't added any public items yet.</p>
              </div>
            ) : (
              <div className="flex gap-6 flex-wrap justify-start items-stretch">
                {contents.map((c) => (
                  <Card
                    key={c.id}
                    title={c.title}
                    type={c.type}
                    link={c.link}
                    tags={c.tags}
                  />
                ))}
              </div>
            )}
          </div>
        )}
      </main>
    </div>
  );
};
