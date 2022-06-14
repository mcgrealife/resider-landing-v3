import React, { useRef, useEffect, useState } from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { Field, Form, Formik, useFormik, FormikProps } from 'formik'
import logoSquare from '../public/resider-logo-square-new.svg'
import logoRectangle from '../public/resider-logo-header.svg'
import img0 from '../public/phone/0.png'
import img1 from '../public/phone/1.png'
import img2 from '../public/phone/2.png'
import img3 from '../public/phone/3.png'
import img4 from '../public/phone/4.png'
import img5 from '../public/phone/5.png'
import img6 from '../public/phone/6.png'
import img7 from '../public/phone/7.png'
import img8 from '../public/phone/8.png'
import classes from '../styles/Home.module.css'
import clsx from 'clsx'

const Home: NextPage = () => {
  const [isDesktop, setIsDesktop] = useState(false)

  useEffect(() => {
    window.innerWidth > 795 && setIsDesktop(true)
  })

  const sectionForm = useRef<HTMLDivElement>(null)

  const handleClick = (): void => {
    sectionForm.current?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    })
  }

  const headerRef = useRef<HTMLDivElement>(null)

  const [scrollDir, setScrollDir] = useState('')
  const [lastScroll, setLastScroll] = useState(0)

  useEffect(() => {
    window.addEventListener('scroll', function (e: any) {
      const curScrollTop = e.target.scrollingElement.scrollTop
      console.log(lastScroll, curScrollTop)
      let scrollDir = ''
      if (curScrollTop > lastScroll) {
        setScrollDir('down')
        console.log('down')
      }
      if (curScrollTop < lastScroll) {
        setScrollDir('up')
        console.log('up')
      }
      console.log(scrollDir)
      setLastScroll(curScrollTop)
    })
  })

  return (
    <div className={classes.root}>
      <Head>
        <title>Landing Page</title>
        <meta name='description' content='Resider Tour Scheduling' />
        <link rel='icon' href='/resider-favicon-new.svg' />
      </Head>

      <div
        ref={headerRef}
        className={
          !isDesktop && scrollDir == 'down'
            ? classes.headerHidden
            : isDesktop && lastScroll == 0
            ? clsx(classes.header, classes.shadowNone)
            : classes.header
        }
      >
        <Image
          priority
          src={logoRectangle}
          alt='Resider Logo'
          width={124}
          height={18}
        />
        <button onClick={handleClick}>Request A Demo</button>
      </div>

      <main className={classes.main}>
        <div className={classes.sectionA}>
          <div className={classes.imgCon0}>
            <Image
              priority
              src={logoSquare}
              alt='Resider Logo'
              layout='fill'
              objectFit='contain'
            />
          </div>
          <h1>
            A <span>better</span> way
            <br /> to generate leads
          </h1>
          <p>
            Resider is a smart, efficient and helpful way to qualify and
            schedule your prosepective tenants.
          </p>
          <div className={classes.imgCon}>
            <Image
              priority
              src={img0}
              alt='img'
              layout='fill'
              objectFit='contain'
              className={classes.sectionImage}
            />
          </div>
        </div>

        <div className={classes.sectionB}>
          <div className={classes.textCon}>
            <h2>
              Platform <span>integrity</span>
            </h2>
            <p>
              Resider solely consists of rental properties syndicated through
              data API’s. With up to date and accurate listings, your clients
              can browse with confidence.
            </p>
          </div>
          <div className={classes.imgCon}>
            <Image
              priority
              src={img1}
              alt='img'
              layout='fill'
              objectFit='contain'
              className={classes.sectionImage}
            />
          </div>
        </div>

        <div className={classes.sectionB}>
          <div className={classes.textCon}>
            <h2>
              <span>Move in</span> date
            </h2>
            <p>
              Qualified leads are our emphasis. Allowing users to narrow down
              exact availability by their move in date is the first step.
            </p>
          </div>
          <div className={classes.imgCon}>
            <Image
              priority
              src={img2}
              alt='img'
              layout='fill'
              objectFit='contain'
              className={classes.sectionImage}
            />
          </div>
        </div>

        <div className={classes.sectionB}>
          <div className={classes.textCon}>
            <h2>
              <span>Personalized</span> property
            </h2>
            <p>
              With a beautiful display of your property, we highlight key
              aspects including parking, pet, and utility information.
            </p>
          </div>
          <div className={classes.imgCon}>
            <Image
              priority
              src={img3}
              alt='img'
              layout='fill'
              objectFit='contain'
              className={classes.sectionImage}
            />
          </div>
        </div>

        <div className={classes.sectionB}>
          <div className={classes.textCon}>
            <h2>
              <span>Filtered</span> availability
            </h2>
            <p>
              Grouped by floor plan, available units are based on user&apos;s
              filters to ensure eligible results and qualified clients.
            </p>
          </div>
          <div className={classes.imgCon}>
            <Image
              priority
              src={img4}
              alt='img'
              layout='fill'
              objectFit='contain'
              className={classes.sectionImage}
            />
          </div>
        </div>

        <div className={classes.sectionB}>
          <div className={classes.textCon}>
            <h2>
              <span>Instant</span> booking
            </h2>
            <p>
              Through the RENTCafé platform, Resider syncs to your appointment
              calender and allows the user to instantly schedule an available
              tour.
            </p>
          </div>
          <div className={classes.imgCon}>
            <Image
              priority
              src={img5}
              alt='img'
              layout='fill'
              objectFit='contain'
              className={classes.sectionImage}
            />
          </div>
        </div>

        <div className={classes.sectionB}>
          <div className={classes.textCon}>
            <h2>
              Tour <span>type</span>
            </h2>
            <p>
              Users are able to book an in-person tour, or a live video tour
              using Zoom.
            </p>
          </div>
          <div className={classes.imgCon}>
            <Image
              priority
              src={img6}
              alt='img'
              layout='fill'
              objectFit='contain'
              className={classes.sectionImage}
            />
          </div>
        </div>

        <div className={classes.sectionB}>
          <div className={classes.textCon}>
            <h2>
              <span>Capture</span> required details
            </h2>
            <p>
              Before successfully booking, users are instruted to fill in
              mandatory information vital to the lead qualifying process.
            </p>
          </div>
          <div className={classes.imgCon}>
            <Image
              priority
              src={img7}
              alt='img'
              layout='fill'
              objectFit='contain'
              className={classes.sectionImage}
            />
          </div>
        </div>

        <div className={classes.sectionB}>
          <div className={classes.textCon}>
            <h2>
              Tour <span>confirmation</span>
            </h2>
            <p>
              Once a tour is booked, all captured information is logged as a
              guest card and stored in your RENTCafé CRM.
            </p>
          </div>
          <div className={classes.imgCon}>
            <Image
              priority
              src={img8}
              alt='img'
              layout='fill'
              objectFit='contain'
              className={classes.sectionImage}
            />
          </div>
        </div>
      </main>

      <div className={classes.sectionForm} ref={sectionForm}>
        <h1>Request a Demo</h1>
        <p>Sign up to learn more about Resider.</p>
        <Formik
          initialValues={
            {
              // firstName: 'First name',
              // lastName:
              // 'Last name',
              // workEmail: 'Work Email',
              // phone: 'Phone number',
              // managementCo: 'Property management company',
              // propertySize: '0-100',
            }
          }
          onSubmit={(values, actions) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2))
              actions.setSubmitting(false)
            }, 1000)
          }}
        >
          {(props: FormikProps<any>) => (
            <Form>
              <div className={classes.form}>
                <Field name='First name' placeholder='First name *' required />
                <Field name='Last name' placeholder='Last name *' required />
                <Field
                  type='email'
                  name='email'
                  placeholder='Work Email *'
                  required
                />
                <Field
                  type='tel'
                  name='phone'
                  placeholder='Phone number *'
                  required
                />
                <Field
                  name='managementCo'
                  placeholder='Property management company *'
                  required
                />
                <Field
                  as='select'
                  name='propertySize'
                  placeholder='Property size *'
                  required
                >
                  <option value='' className={classes.placeholder}>
                    Property size *{/* validate this empty value */}
                  </option>
                  <option value='0-100'>0-100</option>
                  <option value='101-500'>101-500</option>
                  <option value='501-1000'>501-1000</option>
                  <option value='1000+'>1000+</option>
                </Field>
              </div>
              <div className={classes.formBottom}>
                <p>
                  Resider LLC
                  <br />
                  550 West Washington Blvd. Suite 201
                  <br />
                  Chicago, IL 60661
                </p>
                <button type='submit'>Submit</button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
      <div className={classes.mobileFooter}>
        <div className={classes.divider} />
        <Image
          priority
          src={logoRectangle}
          alt='Resider Logo'
          width={124}
          height={18}
        />
        <p>
          Resider LLC
          <br />
          550 West Washington Blvd. Suite 201
          <br />
          Chicago, IL 60661
        </p>
      </div>
    </div>
  )
}

export default Home
