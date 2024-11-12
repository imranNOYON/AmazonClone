import React from 'react'
import Container from './Container'
import { footerData } from '@/constants'
import FooterMiddleList from './FooterMiddleList'

const Footer = () => {
  return (
    <footer className='bg-colors-footerBg text-colors-lightText'>
        <Container className='py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5'>
            {
            footerData?.map((item)=>(
                 <FooterMiddleList key={item?._id}
                 title={item?.title} listItem={item?.listItem}/>
            ))
            }
        </Container>
       
    </footer>
  )
}

export default Footer