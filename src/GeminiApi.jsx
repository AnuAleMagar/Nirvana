import { React, useState } from "react";
import { useEffect } from "react";
import { GoogleGenAI } from "@google/genai";
const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
const ai = new GoogleGenAI({ apiKey });

function GeminiApi() {
  const [aiResponse, setAiResponse] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const cleanResponse = (text) => {
    return (
      text
        // Remove code blocks
        .replace(/```[\s\S]*?```/g, "")
        // Remove inline code
        .replace(/`([^`]+)`/g, "$1")
        // Remove bold and italic
        .replace(/\*\*\*?(.*?)\*\*\*?/g, "$1")
        // Remove links but keep text
        .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1")
        // Remove headers
        .replace(/^#{1,6}\s+.*$/gm, "")
        // Remove list markers
        .replace(/^[\s]*[-*+]\s+/gm, "")
        .replace(/^[\s]*\d+\.\s+/gm, "")
        .trim()
    );
  };

  const handleGemini = async () => {
    try {
      setIsLoading(true);
      const response = await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: `Generate 1 short, original meditation quote. It should be under 20 words, calming, inspiring, and encourage mindfulness.Output Format :“In stillness, we meet the most honest version of ourselves.”
`,
      });
      setAiResponse(cleanResponse(response.text));
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setAiResponse(error.message);
    }
  };
  useEffect(()=>{
    handleGemini()
  },[]);
  return (
  <div className="flex flex-col items-center justify-start  pt-12 space-y-4 ">
  <div className="w-full max-w-2xl p-16 border border-gray-300 rounded-[50px] bg-white shadow-sm font-bold italic focus-within:ring-2 focus-within:ring-blue-400 mt-20 mb-5 ">
    {aiResponse}
  </div>

  <button
    onClick={handleGemini}
    className="px-6 py-2 bg-white text-blue-500 rounded-full shadow-md hover:shadow-lg hover:bg-gray-100 transition-all duration-200"
  >
    {isLoading ? "Loading...." : "Generate New Quotes"}
  </button>
</div>

  );
}

export default GeminiApi;
