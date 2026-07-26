import { Globe, Loader2, Search, Rocket } from "lucide-react";

export default function Hero({
  url,
  setUrl,
  loading,
  analyzeWebsite,
}) {
  return (
    <>
      {/* Logo */}
      <div className="flex justify-center">
        <div className="w-24 h-24 rounded-full bg-blue-50 flex items-center justify-center shadow-md">
          <Globe
            size={55}
            className="text-blue-600"
            strokeWidth={1.8}
          />
        </div>
      </div>

      {/* Heading */}

      <h1 className="mt-8 text-center text-6xl font-extrabold text-slate-800">
        Page Pulse
      </h1>

      <p className="text-center text-slate-500 text-xl mt-4">
        Analyze any website in seconds.
      </p>

      {/* Search Section */}

      <div className="mt-14 flex flex-col lg:flex-row gap-6">

        {/* Input */}

        <div className="relative flex-1">

          <Search
            className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-400"
            size={28}
          />

          <input
            type="url"
            placeholder="https://example.com"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            className="
            w-full
            h-18
            rounded-2xl
            border
            border-slate-200
            bg-white
            pl-16
            pr-6
            text-xl
            outline-none
            shadow-sm
            focus:border-blue-500
            focus:ring-4
            focus:ring-blue-200
            transition
            "
          />

        </div>

        {/* Button */}

        <button
          onClick={analyzeWebsite}
          disabled={loading}
          className="
          h-18
          px-10
          rounded-2xl
          text-white
          text-xl
          font-semibold
          bg-gradient-to-r
          from-blue-600
          to-purple-600
          hover:scale-105
          hover:shadow-xl
          transition-all
          duration-300
          flex
          items-center
          justify-center
          gap-3
          "
        >
          {loading ? (
            <>
              <Loader2 className="animate-spin" />
              Loading
            </>
          ) : (
            <>
              Analyze
              <Rocket size={22} />
            </>
          )}
        </button>

      </div>
    </>
  );
}