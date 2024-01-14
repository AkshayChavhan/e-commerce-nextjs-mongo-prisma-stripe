import Container from '../Container'
import React from 'react'
import FooterList from './FooterList'
import Link from 'next/link'
import { MdFacebook } from 'react-icons/md'
import { AiFillInstagram, AiFillTwitterCircle } from 'react-icons/ai'
import { CgYoutube } from 'react-icons/cg'

type Props = {}

function Footer({ }: Props) {
  return (
    <footer
      className='
    bg-slate-700 
    text-slate-200 
    text-sm 
    mt-16'>
      <Container>
        <div className='flex'>
          <FooterList>
            <h3 className='text-base font-bold'>Shop Catagories</h3>
            <Link href='#'>Phone</Link>
            <Link href='#'>Laptop</Link>
            <Link href='#'>Desktops</Link>
            <Link href='#'>Watches</Link>
            <Link href='#'>TV's</Link>
            <Link href='#'>Accessories</Link>
          </FooterList>
          <FooterList>
            <h3
              className='text-base font-bold'>
              Customer Service
            </h3>
            <Link href='#'>Contact Us</Link>
            <Link href='#'>Shipping Policy</Link>
            <Link href='#'>Return and Exchange</Link>
            <Link href='#'>FAQ</Link>
          </FooterList>
          <div
            className='w-full md:w-1/3 mb-6 md:mb-0'>
            <h3
              className='text-base font-bold mb-2'>
              Contact Us
            </h3>
            <p className='mb-2'>Our Electronics store,We are
              dedicated to providing the latest and greatest
              and accesories to our customers.With a wide
              selectino of phones,TV's.Laptops,Watches and
              accessories.
            </p>
            <p>&copy; {new Date().getFullYear()}
              E-Shop.All rights reserved.</p>
          </div>
          <FooterList>
            <h3
              className='text-base font-bold'>
              Follow Us
            </h3>
            <Link href='#'><MdFacebook size={24}/></Link>
            <Link href='#'><AiFillTwitterCircle/></Link>
            <Link href='#'><AiFillInstagram/></Link>
            <Link href='#'><CgYoutube /></Link>
          </FooterList>
        </div>
      </Container>
    </footer>
  )
}

export default Footer