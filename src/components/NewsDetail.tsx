"use client";

import { format } from "date-fns";
import { New } from "./NewsList";



interface NewsDetailProps {
  news: New;
}

export function NewsDetail({ news }: NewsDetailProps) {
  return (
<article
  style={{
    maxWidth: "800px",
    margin: "2rem auto",
    padding: "2rem",
    backgroundColor: "#ffffff",
    borderRadius: "12px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    lineHeight: "1.6",
  }}
>
  <div>
    <h1
      style={{
        fontSize: "2.5rem",
        fontWeight: "700",
        marginBottom: "1rem",
        color: "#2d3748",
        lineHeight: "1.4",
      }}
    >
      {news.title}
    </h1>
    <p
      style={{
        fontSize: "1rem",
        fontWeight: "500",
        color: "#4a5568",
        marginBottom: "0.5rem",
      }}
    >
      By <span style={{ color: "#3182ce" }}>{news.author}</span>
    </p>
    <p
      style={{
        fontSize: "0.9rem",
        color: "#718096",
        marginBottom: "1.5rem",
      }}
    >
      {isNaN(new Date(news.createdAt).getTime()) ? "Invalid date" : format(new Date(news.createdAt), "MMMM d, yyyy")}
    </p>
  </div>
</article>

  );
}
