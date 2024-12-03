
"use client";




import { NewsList } from '../components/NewsList'
import { SearchBar } from '../components/SearchBar'
import { useEffect, useState } from 'react';
import Image from 'next/image';


export default  function Home() {
const [news, setNews] = useState([]);
const [newError, setNewError] = useState(null);
const [loading, setLoading] = useState(true);
const [filteredNews, setFilteredNews] = useState([]);



  useEffect(() => {

    (async () => {

      const resp = await fetch('/api/news');
      const data = await resp.json();


      if(!resp.ok) {
        setNewError(data);

        setLoading(false);
        return;
      }


      setNews(data);

      setLoading(false);
    })()
  
    

  },[]);


  const handleSearch = async (query) => {

    const filter = news.filter((item) => {
      return item.title.toLowerCase().includes(query.toLowerCase()) || item.author.toLowerCase().includes(query.toLowerCase());
    });

    setFilteredNews(filter);


  }


  if(loading) {
    return (
        <p className="text-center">Loading...</p>
    )
  }

  if(newError) {
    return (
        <p className="text-center text-red-500">{newError.message}</p>
    )
  }



  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-8">Latest News</h1>
      <Image src="/images/banner.png" alt="News" unoptimized width={800} height={400} style={{width:"100%", height:"500px",objectFit:"cover" }} />
      <SearchBar  handleSearch={handleSearch} />
      <NewsList news={news} filteredNews={filteredNews}/>
    </main>
  )
}