import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import {
  Field,
  Form,
  Formik,
  useFormik,
  FormikProps,
  FormikHelpers,
} from 'formik'
import classes from '../styles/Home.module.css'
import { useRef } from 'react'

const Home: NextPage = () => {
  const sectionForm = useRef<HTMLDivElement>(null)
  const formik = useFormik({
    initialValues: {
      // firstName: 'First name',
      // lastName: 'Last name',
      // workEmail: 'Work Email',
      // phone: 'Phone number',
      // managementCo: 'Property Managemennt Company',
      // propertySizes: ['Property Size', '101-500'],
    },
    onSubmit: () => {
      const options: RequestInit = {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: 'Basic ZjIyYjM4MjM4YzM1NGNhMDk4ZmYyN2EwYjcxODdkZDQ6',
        },
        body: JSON.stringify({ name: 'test1234' }),
      }

      fetch(
        'https://www.streak.com/api/v2/pipelines/agxzfm1haWxmb29nYWVyMgsSDE9yZ2FuaXphdGlvbiILcmVzaWRlci5jb20MCxIIV29ya2Zsb3cYgICmi7m-igkM/boxes',
        options
      )
        .then((response) => response.json())
        .then((response) => console.log(response))
        .catch((err) => console.error(err))
    },
  })

  const handleClick = (): void => {
    sectionForm.current?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    })
  }
  return (
    <div>
      <Head>
        <title>Landing Page</title>
        <meta name='description' content='Resider Tour Scheduling' />
        <link rel='icon' href='/resider-favicon.png' />
      </Head>

      <div className={classes.header}>
        <Image
          src='/resider-logo-header.svg'
          alt='Resider Logo'
          width={72}
          height={16}
        />
        <button onClick={handleClick}>Request A Demo</button>
      </div>

      <main className={classes.main}>
        <div className={classes.sectionA}>
          <Image
            src='/resider-logo-square.svg'
            alt='Resider Logo'
            width={50}
            height={50}
          />
          <h1>
            A <span>better</span> way to generate leads
          </h1>
          <p>
            Resider is a smart, efficient and helpful way to qualify and
            schedule your prospective tenants.
          </p>
          <div className={classes.imgContainer}>
            <Image
              src='/phone/0.png'
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
              Platform <span>Integrity</span>
            </h2>
            <p>
              With a beautiful display of your property, we highlight key
              aspects including parking, pet and utility info.
            </p>
          </div>
          <div className={classes.imgContainer}>
            <Image
              src='/phone/1.png'
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
          <div className={classes.imgContainer}>
            <Image
              src='/phone/2.png'
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
              Qualified leads are our emphasis. Allowing users to narrow down
              exact availability by their move in date is the first step.
            </p>
          </div>
          <div className={classes.imgContainer}>
            <Image
              src='/phone/3.png'
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
              Grouped by floor plan, available units are based on the
              user&apos;s filters to ensure eligible results, and qualified
              clients.
            </p>
          </div>
          <div className={classes.imgContainer}>
            <Image
              src='/phone/4.png'
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
          <div className={classes.imgContainer}>
            <Image
              src='/phone/5.png'
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
              Users are able to book an in-person tour, or a remote tour using
              Zoom.
            </p>
          </div>
          <div className={classes.imgContainer}>
            <Image
              src='/phone/6.png'
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
              Before successfully booking, users are instructed to fill in
              mandatory information vital to the lead qualifying process.
            </p>
          </div>
          <div className={classes.imgContainer}>
            <Image
              src='/phone/7.png'
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
          <div className={classes.imgContainer}>
            <Image
              src='/phone/8.png'
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
        <p>Sign up to learn more about Resider</p>
        <Formik
          initialValues={
            {
              // firstName: 'First name',
              // lastName: 'Last name',
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
            <Form className={classes.form}>
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
              <button type='submit'>Submit</button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  )
}

export default Home
