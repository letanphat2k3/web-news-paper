"use client";

import { useState } from 'react'
import { FiSearch } from 'react-icons/fi'

interface SearchBarProps {
  handleSearch: (query: string) => void
}

export function SearchBar({ handleSearch}: SearchBarProps) {
  const [query, setQuery] = useState('')

  const handleChange = (e: React.FormEvent) => {
    const value = (e.target as HTMLInputElement).value;
    e.preventDefault()
    handleSearch((value));

    setQuery(value);
  }

  return (
<form
  className="w-full max-w-2xl mx-auto mb-8"
  style={{
    marginTop: "2rem",
    transition: "transform 0.3s ease",
    padding: "0 16px",
  }}
  onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.02)")}
  onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
>
  <div className="relative group" 
      style={{
        padding: "12px 48px 12px 48px",
        border: "1px solid #d1d5db",
        borderRadius: "9999px",
        background: "linear-gradient(135deg, #f5f7fa, #c3cfe2)",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        fontSize: "1rem",
        color: "#2d3748",
        transition: "background 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease",
        position: "relative",
         display:"flex",
         alignItems:"center",
      }}
  
  >
    <input
      type="text"
      value={query}
      onChange={(e) => handleChange(e)}
      placeholder="Search news..."
      style={{
  border:"none",
  outline:"none",
  width:"100%",
  background:"transparent",
      }}
   
      onBlur={(e) => {
        e.target.style.background = "linear-gradient(135deg, #f5f7fa, #c3cfe2)";
      }}
 
      onMouseLeave={(e) =>
        ((e.target as HTMLInputElement).style.background = "linear-gradient(135deg, #f5f7fa, #c3cfe2)")
      }
    />
    <FiSearch
      style={{

        color: "#a0aec0",
        fontSize: "1.2rem",
        pointerEvents: "none",
        transition: "color 0.3s ease",
      }}
    />
  </div>
</form>

  )
}