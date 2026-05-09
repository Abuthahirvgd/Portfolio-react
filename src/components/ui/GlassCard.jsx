const GlassCard = ({ children, className = '' }) => {
  return (
    <div
      className={`rounded-2xl border border-white/10 bg-white/5 shadow-[0_12px_40px_rgba(0,0,0,0.35)] backdrop-blur-xl ${className}`}
    >
      {children}
    </div>
  )
}

export default GlassCard