export function LoadingSpinner() {
  return (
    <div className="flex items-center justify-center py-16">
      <div className="relative w-12 h-12">
        <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary rounded-full opacity-25 animate-pulse"></div>
        <div className="absolute inset-0 border-4 border-slate-700/30 border-t-primary rounded-full animate-spin"></div>
      </div>
    </div>
  );
}

export function SectionLoadingSpinner() {
  return (
    <div className="flex items-center justify-center py-32">
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/50 to-primary/50 rounded-full blur-xl opacity-50 animate-pulse"></div>
        <div className="relative w-16 h-16 border-4 border-slate-700/30 border-t-primary rounded-full animate-spin shadow-lg shadow-primary/20"></div>
      </div>
    </div>
  );
}
