
const MusicContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex justify-start flex-wrap gap-4 p-4 ml-20">
      {children}
    </div>
  )
}

export { MusicContainer };