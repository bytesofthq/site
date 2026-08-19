export default function App() {
  return (
    <div className="min-h-screen bg-[#121212] text-neutral-100 flex flex-col justify-between p-8 md:p-16 selection:bg-neutral-700 selection:text-white font-sans">
      {/* Top Brand / Logo */}
      <header>
        <h1 className="text-xl md:text-2xl font-bold tracking-tight text-white font-['Space_Grotesk']">
          ByteSoft
        </h1>
      </header>

      {/* Main Content */}
      <main className="max-w-2xl my-auto py-12 space-y-6">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-white font-['Space_Grotesk'] leading-tight">
          ByteSoft is Currently Being Soft.
        </h2>
        
        <div className="space-y-3 text-lg sm:text-xl text-neutral-400 font-normal leading-relaxed">
          <p>
            We’re making some changes behind the scenes.
          </p>
          <p>
            Currently <span className="text-neutral-200 font-medium">69%</span> operational. We’re not entirely sure what the other <span className="text-neutral-200 font-medium">31%</span> is doing.
          </p>
        </div>

        {/* Minimalist Progress Bar Accent */}
        <div className="pt-4 max-w-xs">
          <div className="h-1.5 w-full bg-neutral-800 rounded-full overflow-hidden">
            <div className="h-full bg-neutral-400 rounded-full" style={{ width: '69%' }}></div>
          </div>
        </div>
      </main>

      {/* Minimal Footer */}
      <footer className="text-xs text-neutral-600">
        &copy; {new Date().getFullYear()} ByteSoft. All rights reserved.
      </footer>
    </div>
  );
}

