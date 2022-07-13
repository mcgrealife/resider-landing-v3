import React, { useRef, useEffect, useState } from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image, { StaticImageData } from 'next/image'
import { Field, Form, Formik, FormikProps } from 'formik'
import logoSquare from '../public/resider-logo-square-new.svg'
import logoRectangle from '../public/resider-logo-header.svg'
import img0 from '../public/images/0.png'
import img1 from '../public/images/1.png'
import classes from '../styles/Home.module.css'
import clsx from 'clsx'
import imageTab0 from '../public/images/tab-0.png'
import imageTab1 from '../public/images/tab-1.png'
import imageTab2 from '../public/images/tab-2.png'
import filteredAvailability from '../public/images/filtered-availability.png'
import booking1 from '../public/images/booking-1.png'
import booking2 from '../public/images/booking-2.png'
import booking3 from '../public/images/booking-3.png'
import booking4 from '../public/images/booking-4.png'

const Home: NextPage = () => {
  interface BookingProps {
    title: string
    subtext: string
    image: StaticImageData
  }
  const BookingCard = ({ title, subtext, image }: BookingProps) => {
    return (
      <div className={classes.bookingCard}>
        <Image src={image} width={516} height={322} priority />
        <h2>{title}</h2>
        <p>{subtext}</p>
      </div>
    )
  }

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

  const [selectedTab, setSelectedTab] = useState(0)

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
          <div className={classes.textCon}>
            <h1>
              Qualifed, booked and <span>ready to tour</span>.
            </h1>
            <p>
              Resider.com is redefining customer acquisition. From new user to
              new client, our powerful rental platform fluidly delivers eligible
              prospects, comprehensive details, and a scheduled appointment
              booked instantly to your calendar.
            </p>
          </div>
          <div className={classes.imgCon}>
            <Image
              priority
              src={img0}
              alt='img'
              layout='fill'
              objectFit='contain'
              // className={classes.sectionImage}
            />
          </div>
        </div>

        <div className={classes.sectionTabs}>
          <h1>
            Find the right apartment <span>faster</span>
          </h1>
          <p>
            Advanced search tools quickly put the user on the right track to
            locating eligible apartment homes.
          </p>
          <div className={classes.tabs}>
            <div
              className={
                selectedTab == 0
                  ? clsx(classes.tab, classes.selectedTab)
                  : classes.tab
              }
              onClick={() => setSelectedTab(0)}
            >
              Data
            </div>
            <div
              className={
                selectedTab == 1
                  ? clsx(classes.tab, classes.selectedTab)
                  : classes.tab
              }
              onClick={() => setSelectedTab(1)}
            >
              Filter
            </div>
            <div
              className={
                selectedTab == 2
                  ? clsx(classes.tab, classes.selectedTab)
                  : classes.tab
              }
              onClick={() => setSelectedTab(2)}
            >
              Commute
            </div>
          </div>
          <div className={classes.tabContent}>
            {selectedTab == 0 && (
              <>
                <div className={classes.imgWrap}>
                  <div className={classes.imgCon0}>
                    <Image
                      priority
                      src={imageTab0}
                      className={classes.tabImage}
                      alt='img'
                      layout='fill'
                      objectFit='contain'
                    />
                  </div>
                </div>
                <div className={classes.textCon}>
                  <h2>Data</h2>
                  <p>
                    To ensure accurate and up-to-date information, all
                    properties featured on Resider are syndicated through data
                    API’s.{' '}
                  </p>
                </div>
              </>
            )}
            {selectedTab == 1 && (
              <>
                <div className={classes.imgWrap}>
                  <div className={classes.imgCon1}>
                    <Image
                      priority
                      src={imageTab1}
                      className={classes.tabImage}
                      alt='img'
                      layout='fill'
                      objectFit='contain'
                    />
                  </div>
                </div>
                <div className={classes.textCon}>
                  <h2>Filter</h2>
                  <p>
                    Allowing users to narrow down exact availability, including
                    by move-in-date, is the first step to matching a qualified
                    client to your property.
                  </p>
                </div>
              </>
            )}
            {selectedTab == 2 && (
              <>
                <div className={classes.imgWrap}>
                  <div className={classes.imgCon2}>
                    <Image
                      priority
                      src={imageTab2}
                      className={classes.tabImage}
                      alt='img'
                      layout='fill'
                      objectFit='contain'
                    />
                  </div>
                </div>
                <div className={classes.textCon}>
                  <h2>Commute</h2>
                  <p>
                    Fine tune results even further by filtering properties that
                    fall within a desired commute time.
                  </p>
                </div>
              </>
            )}
          </div>
        </div>

        <div className={classes.sectionB}>
          <div className={classes.textCon}>
            <h2>
              <span>Property</span>
            </h2>
            <p>
              With a beautiful display of your property, we highlight key
              aspects including parking, pet, and utility information.
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
          <div className={classes.textCon} id='filteredAvailabilityTextCon'>
            <h2>
              <span>Filtered</span> availability
            </h2>
            <p>
              Grouped by floor plan, available units are based on the user’s
              filters to ensure eligible results and qualified clients.
            </p>
          </div>
          <div className={classes.imgCon} id='filteredAvailability'>
            <Image
              priority
              src={filteredAvailability}
              alt='img'
              layout='fill'
              objectFit='contain'
              className={classes.sectionImage}
            />
          </div>
        </div>

        <div className={classes.bookingSection}>
          <div className={classes.bookingSectionTitleRow}>
            <h1>
              <span>Instant</span> Booking
            </h1>
            {isDesktop && (
              <div style={{ display: 'flex', gap: '36px', marginTop: '124px' }}>
                <img src='/arrow-left.svg' />
                <img src='/arrow-right.svg' />
              </div>
            )}
          </div>

          <div className={classes.booking}>
            <BookingCard
              title='Select timeslot'
              subtext='In real-time, Resider syncs to your appointment calender and allows the user to instantly schedule an available tour.'
              image={booking1}
            />
            <BookingCard
              title='Tour type'
              subtext='Tour booking options include in-person, live video using Zoom, or self guided.'
              image={booking2}
            />
            <BookingCard
              title='Capture details'
              subtext='Before successfully booking, users are instructed to fill in mandatory information vital to the lead qualifying process.'
              image={booking3}
            />
            <BookingCard
              title='Tour confirmation'
              subtext='Once a tour is booked, all captured information is logged as a guest card and stored in your CRM.'
              image={booking4}
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
