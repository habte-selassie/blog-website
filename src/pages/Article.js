import React from 'react'
//import Article from './Article';
import { useParams } from 'react-router-dom';
import articleComponent from './article-Content';

const Article = ({ match }) => {
    const { name } = useParams() 
    const article = articleComponent.find((article)=>article.name === name)
    if (!article) return <h1>Article is lost brother </h1>
    
  
   return (
    <React.Fragment>
    <h1 className='sm:text-4xl text-2xl 
    font-bold mt-6 mb-6 text-gray-900'>
      {article.title}
      </h1>
      {article.content.map((paragraph,index)=>(
        <p className='x-auto leading-relaxed text-base mb-4' key={index}>{paragraph}</p>
      ))}
    </React.Fragment>
  )
}

export default Article