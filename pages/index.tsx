import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useFormik } from 'formik'

const Home: NextPage = () => {
  const formik = useFormik({
    initialValues: {
      email: '',
    },
    onSubmit: (values) => {
      alert(`values! ${values}`)
    },
  })
  return (
    <div className={styles.container}>
      <Head>
        <title>Landing Page</title>
        <meta name='description' content='Resider Tour Scheduling' />
        <link rel='icon' href='/resider-favicon.png' />
      </Head>

      <main className={styles.main}>
        <div className={styles.sectionA}>
          <Image
            src='/resider-logo-header.svg'
            alt='Resider Logo square'
            width={72}
            height={16}
            className={styles.logo}
          />
          <h1>
            A <span className={styles.primaryColor}>better</span> way to
            generate leads
          </h1>
          <p>
            Resider is a smart, efficient and helpful way to qualify and
            schedule your prospective tenants.
          </p>
          {/* <Image alt='hero-circle' className={styles.heroImg} /> */}
        </div>

        <div className={styles.sectionB}>
          <h2 className={styles.title}>
            Platform <span>Integrity</span>
          </h2>
          <p>
            With a beautiful display of your property, we highlight key aspects
            including parking, pet and utility info.
          </p>
          {/* <Image alt='hero-circle' className={styles.heroImg} /> */}
        </div>

        <div className={styles.sectionB}>
          <h2>
            <span className={styles.primaryColor}>Move in date</span> filter
          </h2>
          <p>
            Qualified leads are our emphasis. Allowing users to narrow down
            exact availability by their move in date is the first step.
          </p>
          {/* <Image alt='hero-circle' className={styles.heroImg} /> */}
        </div>

        <div className={styles.sectionB}>
          <h2>
            <span className={styles.primaryColor}>Personalized</span> property
          </h2>
          <p>
            Qualified leads are our emphasis. Allowing users to narrow down
            exact availability by their move in date is the first step.
          </p>
          {/* <Image alt='hero-circle' className={styles.heroImg} /> */}
        </div>

        <div className={styles.sectionB}>
          <h2>
            <span className={styles.primaryColor}>Filtered</span> availability
          </h2>
          <p>
            Grouped by floor plan, available units are based on the user's
            filters to ensure eligible results, and qualified clients.
          </p>
          {/* <Image alt='hero-circle' className={styles.heroImg} /> */}
        </div>

        <div className={styles.sectionB}>
          <h2>
            <span className={styles.primaryColor}>Instant</span> booking
          </h2>
          <p>
            Through the RENTCafé platform, Resider syncs to your appointment
            calender and allows the user to instantly schedule an available
            tour.
          </p>
          {/* <Image alt='hero-circle' className={styles.heroImg} /> */}
        </div>

        <div className={styles.sectionB}>
          <h2>
            <span className={styles.primaryColor}>Tour</span> type
          </h2>
          <p>
            Users are able to book an in-person tour, or a remote tour using
            Zoom.
          </p>
          {/* <Image alt='hero-circle' className={styles.heroImg} /> */}
        </div>

        <div className={styles.sectionB}>
          <h2>
            <span className={styles.primaryColor}>Capture</span> required
            details
          </h2>
          <p>
            Before successfully booking, users are instructed to fill in
            mandatory information vital to the lead qualifying process.
          </p>
          {/* <Image alt='hero-circle' className={styles.heroImg} /> */}
        </div>

        <div className={styles.sectionB}>
          <h2>
            <span className={styles.primaryColor}>Tour</span> confirmation
          </h2>
          <p>
            Once a tour is booked, all captured information is logged as a guest
            card and stored in your RENTCafé CRM.
          </p>
          {/* <Image alt='hero-circle' className={styles.heroImg} /> */}
        </div>

        <form onSubmit={formik.handleSubmit}>
          <input
            id='email'
            name='email'
            type='email'
            onChange={formik.handleChange}
            value={formik.values.email}
          />
        </form>
      </main>

      <footer className={styles.footer}>
        <a href='#' target='_blank' rel='noopener noreferrer'>
          <span className={styles.logo}>
            <Image
              src='/resider-logo-header.svg'
              alt='Resider Logo'
              width={72}
              height={16}
            />
          </span>
        </a>
      </footer>
    </div>
  )
}

export default Home
