"use client";

import Link from "next/link";
import { format } from "date-fns";

interface NewsListProps {
  news: New[];
  filteredNews?: New[];
}

export interface New {
  id: string;
  title: string;
  author: string;
  createdAt: string;
  url: string;
}

export function NewsList({ news , filteredNews}: NewsListProps) {
  return (
    <div style={{padding:" 50px 30px"}}>
      {

      filteredNews.length > 0 ? filteredNews.map((newsItem) => (
        <div
        key={newsItem.id}
        style={{
          marginBottom: "1.5rem",
          borderRadius: "12px",
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
          overflow: "hidden",
          transition: "transform 0.3s ease, box-shadow 0.3s ease",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = "scale(1.01)";
          e.currentTarget.style.boxShadow = "0 6px 12px rgba(0, 0, 0, 0.2)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "scale(1)";
          e.currentTarget.style.boxShadow = "0 4px 6px rgba(0, 0, 0, 0.1)";
        }}
      >
         <Link href={newsItem.url} style={{ textDecoration: "none" }}>
        {/* <Link href={`/news/${newsItem.id}`} style={{ textDecoration: "none" }}> */}
          <div style={{ backgroundColor: "#fff", padding: "1.5rem" }}>
            <h2
              style={{
                fontSize: "1.75rem",
                fontWeight: "700",
                color: "#2d3748",
                marginBottom: "1rem",
                lineHeight: "1.4",
                transition: "color 0.3s ease",
              }}
              onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "#3182ce")}
              onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "#2d3748")}
            >
              {newsItem.title}
            </h2>
            <p
              style={{
                color: "#718096",
                marginBottom: "1rem",
                fontSize: "0.875rem",
              }}
            >
              {isNaN(new Date(newsItem.createdAt).getTime()) ? "Invalid date" : format(new Date(newsItem.createdAt), "MMMM d, yyyy")}
            </p>
            <p
              style={{
                color: "#3182ce",
                fontWeight: "500",
              }}
            >
              {newsItem.author}
            </p> <Link href={newsItem.url} style={{ textDecoration: "none" }}/>
          </div>
        </Link>
      </div>
      )) :
      news.map((newsItem) => (
        <div
        key={newsItem.id}
        style={{
          marginBottom: "1.5rem",
          borderRadius: "12px",
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
          overflow: "hidden",
          transition: "transform 0.3s ease, box-shadow 0.3s ease",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = "scale(1.01)";
          e.currentTarget.style.boxShadow = "0 6px 12px rgba(0, 0, 0, 0.2)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "scale(1)";
          e.currentTarget.style.boxShadow = "0 4px 6px rgba(0, 0, 0, 0.1)";
        }}
      >

        <Link href={newsItem.url} style={{ textDecoration: "none" }}>
        {/* <Link href={`/news/${newsItem.id}`} style={{ textDecoration: "none" }}> */}
          <div style={{ backgroundColor: "#fff", padding: "1.5rem" }}>
            <h2
              style={{
                fontSize: "1.75rem",
                fontWeight: "700",
                color: "#2d3748",
                marginBottom: "1rem",
                lineHeight: "1.4",
                transition: "color 0.3s ease",
              }}
              onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "#3182ce")}
              onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "#2d3748")}
            >
              {newsItem.title}
            </h2>
            <p
              style={{
                color: "#718096",
                marginBottom: "1rem",
                fontSize: "0.875rem",
              }}
            >
             {isNaN(new Date(newsItem.createdAt).getTime()) ? "Invalid date" : format(new Date(newsItem.createdAt), "MMMM d, yyyy")}
            </p>
            <p
              style={{
                color: "#3182ce",
                fontWeight: "500",
              }}
            >
              {newsItem.author}
            </p>
          </div>
        </Link>
      </div>
      
      ))}
    </div>
  );
}
