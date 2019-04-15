export const arr = [
  {
    language: "javascript",
    title: 'npm',

code: `npm install -g gatsby-cli
gatsby new gatsby-site

gatsby develop`
		},{
			language: "javascript",
			title: 'bootstrap',
	
code: `// dovnload && import to layout

npm i bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'`
			},{
    language: "jsx",
    title: 'Linking',

code: `import { Link } from 'gatsby'

return (
	<Link to="/product/">
		<h2>Details</h2>
	</Link>
	<Link to={\`/product/\${product.title}\`}>
		<h2>Details</h2>
	</Link>
)`
		},{
    language: "javascript",
    title: 'gatsby-plugin-sass',

code: `npm install --save node-sass gatsby-plugin-sass

// in gatsby-config.js
plugins: [\`gatsby-plugin-sass\`]`
		},{
    language: "javascript",
    title: 'Styled Components',

code: `npm install --save gatsby-plugin-styled-components
styled-components babel-plugin-styled-components

plugins: [\`gatsby-plugin-styled-components\`]

import styled from "styled-components"

const Container = styled.div\`
	margin: 3rem auto;
	&:last-child {
    margin-bottom: 0;
  }
\`
const User = props => (
	<Container></Container>
)`
		},{
    language: "javascript",
    title: 'Global Styled Components',

code: `import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle\`
  body {
    color: \${props => (props.whiteColor ? 'white' : 'black')};
  }
\`
const User = props => (
	</GlobalStyle>
)`
		},{
    language: "javascript",
    title: 'React Icons',

code: `npm install react-icons --save

import { FaBeer } from 'react-icons/fa';

const props => <h3> Lets go for a <FaBeer />? </h3>`
		},{
    language: "javascript",
    title: 'Images pages from contenful',

code: `import { graphql } from 'gatsby'
import Img from 'gatsby-image'

export const query = graphql\`
{
  products: allContentfulProduct{
    edges{
      node{
        image{
          title
          fixed(width: 1000){
            ...GatsbyContentfulFixed_tracedSVG
          }
        }
      }
    }
  }
}
\`

{data.products.edges.map(({node:product}) => {
	return (
		<Img fixed={product.image.fixed}/>
	)
})}`
		},{
    language: "jsx",
    title: 'Image components from folder',

code: `import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Image = () => (
  <StaticQuery
    query={graphql\`
      query {
        placeholderImage: file(relativePath: { eq: "gatsby-astronaut.png" }) {
          childImageSharp {
            fluid(maxWidth: 300) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    \`}
    render={data => <Img fluid={data.placeholderImage.childImageSharp.fluid} />}
  />
)`
		},{
    language: "javascript",
    title: 'Contentful',

code: `npm install --

plugins: [
	{
		resolve: \`gatsby-source-contentful\`,
		options: {
			// .env key
			spaceId: process.env.SPACE_ID,
			// .env token
			accessToken: process.env.ACCESS_TOKEN,
		},
	},
]`
		},{
    language: "javascript",
    title: '.env.development',

code: `SPACE_ID=ylxj44cf3tq1
ACCESS_TOKEN=6ca8cdc73698370
`
		},{
    language: "javascript",
    title: 'graphql component',

code: `mport { StaticQuery, graphql } from 'gatsby'

const getImage = graphql\`
{
  file(relativePath:{eq:"gatsby-astronaut.png"}){
    childImageSharp{
      fixed(width: 150){
        ...GatsbyImageSharpFixed_tracedSVG
      }
    }
  }
}
\`
const render = data => <Img fixed={data.file.childImageSharp.fixed}/>

export default function dude(props) {
	return (
		<StaticQuery
			query={getImage}
			render={render}
		/>
	)
}`
		},{
    language: "javascript",
    title: 'graphql pages',

code: `import { graphql } from 'gatsby'

export const query = graphql\`
{
	allFile {
		edges {
			node {
				relativePath
			}
		}
	}
}
\`

function images({ data }) {
	const images = data.allFile.edges
	return (
		<Layout>
			<h6>{data.allFile.edges[0].node.relativePath}</h6>
			{images.map(({node}, index) => {
				return <h3></h3>
			})}
		</Layout>
	)
}`
		},{
    language: "javascript",
    title: 'generator page (part1)',

code: `|-- gatsby-node.js

const path = require('path')

exports.createPages = ({ graphql, actions }) => {
	const { createPage } = actions

	return graphql(\`
	{
		allContentfulProduct{
			edges{
				node{
					id
					title
				}
			}
		}
	}
	\`)
		.then(result => (
			result.data.allContentfulProduct.edges.forEach(({ node }) => {
				createPage({ 
					path: \`product/\${node.title}\`,
					component: path.resolve('src/templates/product-templates.js'),
					context: { id: node.id }
				})
			})
		))
		.catch(error => console.log(error))
}`
		},{
    language: "javascript",
    title: 'generator page (part2)',

code: `|-- templates/product-templates.js

import React from 'react'
import PropTypes from 'prop-types'
import { graphql, Link } from 'gatsby'
import Img from 'gatsby-image'

import Layout from '../components/layout'

function productTemplate({ data }) {
	const { title, price } = data.contentfulProduct
	const { description } = data.contentfulProduct.description
	const { fluid } = data.contentfulProduct.image

	return (
		<Layout>
			<h1>Single Produc Template</h1>
			<Img fluid={fluid} />
			<h1>{title} <span style={{marginLeft: '50xp', color: 'red'}}>{price}</span></h1>
			<p>{description}</p>
			<Link to='/products/'><h2>Back to Products</h2></Link>
		</Layout>
	)
}
export default productTemplate

export const query = graphql\`
query($id: String!){
  contentfulProduct(id:{eq:$id}){
    title
    price
    description{
      description
    }
    image{
      fluid{
        ...GatsbyContentfulFluid_tracedSVG
      }
    }
  }
}
\``
		},
]