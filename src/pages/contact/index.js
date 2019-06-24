import React from 'react'
// import { navigate } from 'gatsby-link'
import Layout from '../../components/Layout'






export default class Index extends React.Component {
  constructor(props) {
    super(props)
    this.state = { isValidated: false }
  }

  

  render() {
    return (
      <Layout>
        <section className="section">
          <div className="container">
            <div className="content">
              <h1>Contact</h1>
             <iframe title='cacMap' style={{width: '100%', height: '800px'}} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3302.
             1266085425677!2d-117.3174087999485!3d34.14310283684344!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c34d12e15af493%3A0x21675a3dac458303!2s
             Christ+Apostolic+Church+Disciples+of+Christ!5e0!3m2!1sen!2sus!4v1561387461829!5m2!1sen!2sus" ></iframe>
            </div>
          </div>
        </section>
      </Layout>
    )
  }
}
