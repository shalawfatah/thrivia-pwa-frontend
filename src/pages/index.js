import { navigate } from "gatsby";
import React, {useEffect} from "react"
import Seo from "../components/seo"
import '../styles/launch.css';

const IndexPage = () => {
  useEffect(() => {
    setTimeout(() => {
      navigate('/home')
    }, 3000)
  }, [])
  return (
  <section className="launch-screen prevent-select h-screen w-screen flex items-center justify-center">
    <h1 className="text-6xl tracking-tighter font-title">
      <span className="primary">T</span>
      <span className="secondary">hr</span>
      <span className="primary">i</span>
      <span className="secondary">v</span>
      <span className="primary">i</span>
      <span className="secondary">a</span>
    </h1>
  </section>
  )
}

export const Head = () => <Seo title="Home" />

export default IndexPage
