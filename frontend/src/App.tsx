import { MusicContent } from "./components/music/music-content";
import { MusicContainer } from "./components/music/music-container";

export default function App() {
  return (
    <div>
      <MusicContainer>
        {Array.from({ length: 8 }, (_, index) => (
          <MusicContent key={index} />
        ))}
      </MusicContainer>
    </div>
  );
}
