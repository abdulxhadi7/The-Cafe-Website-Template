import About from "./about/page";
import CollaborationPage from "./collaboration/page";
import GalleryPage from "./gallery/page";
import Home from "./home/home";
import SipsAndStuff from "./sips-stuff/page";

export default function Page() {
  return (
    <>
      <Home />
      <About />
      <SipsAndStuff />
      <GalleryPage />
      <CollaborationPage />
    </>
  );
}
