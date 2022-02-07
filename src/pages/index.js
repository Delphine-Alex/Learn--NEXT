import TitlePage from "../components/TitlePage";
import Contact from "../components/Contact";

export default function Home() {
  return (
    <div className="home_page">
      < TitlePage title="My homepage" />
      < Contact title="Contact us" />
    </div>
  )
}
