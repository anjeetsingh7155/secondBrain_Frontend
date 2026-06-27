import { Button } from '../components/ui/Button'
import { PlusIcon } from '../components/Icons/PlusIcon'
import { Card } from '../components/ui/Card'
import { ShareIcon } from '../components/Icons/ShareIcon'
import { CreateContentModel } from '../components/ui/CreateContentModel'
import { useEffect, useState } from 'react'
import { SideBar } from '../components/ui/SideBar'
import axios from 'axios'
import { Backend_Url } from '../config'
import { useNavigate } from 'react-router-dom'

interface ContentType {
  id: string;
  title: string;
  link: string;
  type: "youtube" | "twitter" | "instagram" | "facebook" | "reddit";
  tags: string[];
}

import { FaBars } from 'react-icons/fa'

export const DashBoard = () => {
  const [ModelOpen, SetModelOpen] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [contents, setContents] = useState<ContentType[]>([]);
  const navigate = useNavigate();

  const token = localStorage.getItem("authorization");

  useEffect(() => {
    if (!token) {
      navigate("/signin");
      return;
    }

    async function loadData() {
      try {
        const res = await axios.get(`${Backend_Url}/api/v1/content`, {
          headers: {
            Authorization: token,
          },
        });

        setContents(res.data.contents);
      } catch (err) {
        console.log(err);
      }
    }

    loadData();
  }, [token, navigate]);

  async function deleteContent(id: string) {
    try {
      await axios.delete(`${Backend_Url}/api/v1/content`, {
        headers: {
          Authorization: token,
        },
        data: { id },
      });


      const res = await axios.get(`${Backend_Url}/api/v1/content`, {
        headers: {
          Authorization: token,
        },
      });

      setContents(res.data.contents);
    } catch (err) {
      console.log(err);
    }
  }

 async function addContent(data: {
  title: string;
  link: string;
  type: string;
  tags: string[];
}) {
  try {
    await axios.post(`${Backend_Url}/api/v1/content`, data, {
      headers: {
        Authorization: token,
      },
    });

    const res = await axios.get(`${Backend_Url}/api/v1/content`, {
      headers: {
        Authorization: token,
      },
    });

    setContents(res.data.contents);

  } catch (err) {
    console.log(err);
  }
}

  async function shareBrain() {
    try {
      const res = await axios.post(
        `${Backend_Url}/api/v1/brain/share`,
        { share: true },
        {
          headers: {
            Authorization: token,
          },
        }
      );

      // Backend returns e.g. "/api/v1/brain/abc123xyz"
      const shareToken = res.data.link.split("/").pop();
      const fullLink = `${window.location.origin}/share/${shareToken}`;

      navigator.clipboard.writeText(fullLink);
      alert("Link copied!");
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div className="min-h-screen bg-blue-50 dark:bg-slate-950 transition-colors">
      {/* Mobile Top Bar */}
      <div className="flex items-center justify-between p-4 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 md:hidden sticky top-0 z-20 transition-colors shadow-sm">
        <span className="font-bold text-gray-800 dark:text-slate-100 tracking-tight">Second Brain</span>
        <button 
          onClick={() => setSidebarOpen(true)}
          className="p-2 text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 cursor-pointer"
        >
          <FaBars className="size-5" />
        </button>
      </div>

      <SideBar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      <div className='p-4 ml-0 md:ml-72 min-h-screen text-gray-900 dark:text-slate-105'>
        
  
        <CreateContentModel
          open={ModelOpen}
          onClose={() => SetModelOpen(false)}
          onSubmit={addContent}
        />

        <div className='flex justify-end gap-2'>
          <Button
            variant='secondary'
            size='md'
            text='Share Brain'
            startIcon={<ShareIcon size='md' />}
            onClick={shareBrain}
          />

          <Button
            variant='primary'
            size='md'
            text='Add Content'
            startIcon={<PlusIcon size='md' />}
            onClick={() => SetModelOpen(true)}
          />
        </div>

        <div className='p-6 flex gap-4 flex-wrap'>
          {contents.map((c) => (
         <Card
  key={c.id}
  title={c.title}
  type={c.type}
  link={c.link}
  tags={c.tags}   
  onDelete={() => deleteContent(c.id)}
/>
          ))}
        </div>

      </div>
    </div>
  );
};