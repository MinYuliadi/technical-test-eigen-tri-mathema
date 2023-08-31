import React, { useEffect } from 'react'
import useListNews from './hooks/useListNews'
import NewsLayout from './layouts/NewsLayout'
import LoadingView from './components/LoadingView'
import Card from './components/Card'
import Breadcrumb from './components/Breadcrumb'

const ListNews = () => {
  const { list, loading, getList, gotoDetailPage } = useListNews()

  useEffect(() => {
    getList()
  }, [])

  return (
    <NewsLayout>
      {loading ? (
        <LoadingView />
      ) : (
        <>
          <Breadcrumb />

          <div className='list-card'>
            {list.map((item, index) => (
              <Card
                key={index}
                author={item.author}
                content={item.content}
                title={item.title}
                image={item.urlToImage}
                onClick={() => gotoDetailPage(item.title)} />
            ))}
          </div>
        </>
      )}
    </NewsLayout>
  )
}

export default ListNews