import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import NewsLayout from '../layouts/NewsLayout'
import { Image } from 'antd'
import useListNews from '../hooks/useListNews'
import Card from '../components/Card'
import Title from '../components/Title'
import LoadingView from '../components/LoadingView'
import Breadcrumb from '../components/Breadcrumb'

const DetailNews = () => {
  const { id } = useParams()
  const { list, gotoNewsPage, gotoDetailPage, getList, loading } = useListNews()
  const detailData = list.find((li) => li.title === id)

  useEffect(() => {
    getList()
  }, [id])

  return (
    <NewsLayout>
      <div className='content-detail'>
        <div className='left-content'>
          <Breadcrumb id={id} onClick={gotoNewsPage} />

          {loading ? (
            <div className='div-loading'>
              <LoadingView />
            </div>
          ) : (
            <>
              <div className='title-div'>
                <Title text={detailData?.title} />
                <div className='space-between'>
                  <span>{detailData?.author}</span>
                  <span>{new Date(detailData?.publishedAt).toLocaleString()}</span>
                </div>
              </div>
              <div className='div-image'>
                <Image className='image-detail' src={detailData?.urlToImage} alt={detailData?.title} />
              </div>
              <div className='content-news'>
                {detailData?.content}
              </div>
            </>
          )}

        </div>
        <div className='sider'>
          {list.slice(0, 4).map((item, index) => (
            <Card
              key={index}
              author={item.author}
              content={item.content}
              image={item.urlToImage}
              onClick={() => gotoDetailPage(item.title)}
              title={item.title}
            />
          ))}
        </div>
      </div>
    </NewsLayout>
  )
}

export default DetailNews