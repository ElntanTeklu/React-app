import React from 'react'
import Link from 'gatsby-link'

const IndexPage = () => (
  <div>
    <h1>ChemAid</h1>
    <p>Chemistry aid</p>
    <p>View information</p>
    <Link to="/page-2/">Go to page 2</Link>
    <p> stuff </p> 
    <Link to="/page-3/">Go to page 3</Link>
  </div>
)

export default IndexPage

