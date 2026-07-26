import { useState } from "react";

export default function AuditForm({ onAnalyze }) {
  const [url, setUrl] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!url.trim()) {
      alert("Please enter a website URL");
      return;
    }

    onAnalyze(url);
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <input
        type="url"
        placeholder="https://example.com"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
      />

      <button type="submit">Analyze</button>
    </form>
  );
}