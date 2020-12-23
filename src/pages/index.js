import * as React from "react"
import Footer from "../components/Footer";
import Achievements from "../components/sections/Achievements";
import Blogs from "../components/sections/Blogs";
import Expertises from "../components/sections/Expertises";
import Header from "../components/sections/Header";
import Partners from "../components/sections/Partners";
import '../modules/index.css';
// styles

// data

// markup
const IndexPage = () => {
  return (
    <div>
      <Header />
      <Expertises />
      <Achievements />
      <Partners />
      <Blogs />
      <Footer />
    </div>
  )
}

export default IndexPage
