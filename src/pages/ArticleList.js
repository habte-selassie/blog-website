import React from 'react'
import { Link } from 'react-router-dom'
import articleComponent from './article-Content'


const ArticleList = () => {
  return (
    <React.Fragment>
    <h1 className='sm:text-4xl text-2xl font-bold mt-6 mb-6 text-gray-900'>
      Articles </h1>
      
      <div className='container py-4 mx-auto'>
        <div className='flex flex-wrap -m-4'>
        
         {articleComponent.map((article,index)=>(
           <div key={index} className="p-4 md:w-1/2">
          
           <div className='h-full border-2 border-gray-200 border-opacity-60 rounded-lg
              overflow-hidden'>
            
             <Link to={`/article/${article.name}`}></Link>

            <img className='lg:h-48 md:h-36 w-full object-cover object-center'
               src={article.thumbnail} alt='blog' />

             <div className='p-6'>
                <Link key={index} to={`/article/${article.name}`}>
               <h3 className='title-font text-lg font-medium text-gray-900 mb-3'>
              {article.name}
            </h3>
          </Link>
          <p className="leading-relaxed mb-4">
            {article.content[0].substring(0,125)}
          ....</p>

          <div className="flex item-center flex-wrap">
          <Link className="flex-bg-indigo-500 inline-flex items-center md:mb-2
          lg:mb-0" to={`/article/${article.name}`}>
          </Link>
          Learning More....
          </div>
        </div>
    </div>
  </div>

         )
 
         )}
        </div>
      </div>
    </React.Fragment>
  )
}

export default ArticleList