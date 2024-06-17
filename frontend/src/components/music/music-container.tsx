
const MusicContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex justify-start flex-wrap gap-2">
      {children}
    </div>
  )
}

export { MusicContainer };