"use client";

import { NewsDetail } from '../../../components/NewsDetail'
import { notFound } from 'next/navigation'
import { useEffect , useState} from 'react';
import { New } from '../../../components/NewsList';

export default  function NewsPage({
  params,
}: {
  params: { id: string }
}) {
  const [news, setNews] = useState<New | null>(null);




  useEffect(() => {
      
      (async () => {
  
        const resp = await fetch(`/api/news/${params.id}`);
        const data = await resp.json();

        if(data.error){
          notFound();
        }

        setNews(data);
      
  
      })()
  },[]);

  if(!news) return null;
 

  return (
    <main className="container mx-auto px-4 py-8">
      <NewsDetail news={news} />
    </main>
  )
}