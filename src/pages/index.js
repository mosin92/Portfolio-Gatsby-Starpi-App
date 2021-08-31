  import React from "react"
import Experience from "../Components/Experience"
import FeatureProject from "../Components/FeatureProject"
import Home_Hero_Section from "../Components/Home_Hero_Section"
import Layout from "../Components/Layout"
import Services from "../Components/Services"

  export default function Home() {

    return (
      <Layout>
      <Home_Hero_Section />

      <section className="service_section">
         <div className="home_body">
        <Services />
      </div>
      </section>
     
     <Experience />
      
      <section className="feature_project_section">
        <FeatureProject />
      </section>
      </Layout>
    ) 
  }
