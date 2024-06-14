
const MusicContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="container mx-auto flex flex-wrap gap-4 p-4">
      {children}
    </div>
  )
}

export { MusicContainer };