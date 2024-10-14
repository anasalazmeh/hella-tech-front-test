import { useEffect } from "react"
import NavBar from "../../Components/NavBar/NavBar"
import CardStory from "../../Components/Stories/CardStory"
import Header from "../../Components/Stories/Header"
import SkeletonCardStory from "../../Components/Stories/SkeletonCardStory"
import Stories from "../../Components/Stories/Stories"

const PageStories = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);
  return (
    <div>
      <NavBar sectionRefs={null} isVideo/>
      <Header/>
      {/* <SkeletonCardStory/> */}
      <Stories/>
    </div>
  )
}

export default PageStories