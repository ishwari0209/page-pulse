import { useState } from "react";

import api from "./services/api";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AuditResult from "./components/AuditResult";
import Footer from "./components/Footer";

export default function App() {
  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");

  const analyzeWebsite = async () => {
    if (!url.trim()) {
      setError("Please enter a website URL.");
      return;
    }

    setLoading(true);
    setError("");
    setResult(null);

    try {
      const response = await api.post("/audit", {
        url,
      });

      setResult(response.data);
    } catch (err) {
      if (err.response) {
        setError(err.response.data.detail);
      } else {
        setError("Unable to connect to the server.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar />

      <main className="max-w-6xl mx-auto px-6 py-20">
        <div className="bg-white rounded-[35px] shadow-2xl p-16">

          <Hero
            url={url}
            setUrl={setUrl}
            loading={loading}
            analyzeWebsite={analyzeWebsite}
          />

          {error && (
            <div className="mt-8 rounded-xl border border-red-200 bg-red-50 p-4 text-center text-red-600 font-medium">
              {error}
            </div>
          )}

          {result && (
            <div className="mt-10">
              <AuditResult data={result} />
            </div>
          )}

        </div>
      </main>

      <Footer />
    </>
  );
}