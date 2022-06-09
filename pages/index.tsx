import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useFormik } from "formik";

const Home: NextPage = () => {
  const formik = useFormik({
    initialValues: {
      comments: "comments placeholder",
    },
    onSubmit: (values) => {
      console.log("values");
    },
  });
  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <label htmlFor="text">Comments</label>
        <input
          id="comments"
          name="comments"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.comments}
        />
        <button type="submit">Submit</button>
      </form>
      <Head>
        <title>Landing Page</title>
        <meta name="description" content="Resider Tour Scheduling" />
        <link rel="icon" href="/resider-favicon.png" />
      </Head>

      <div className="flex justify-between shadow-lg p-4">
        <Image
          src="/resider-logo-header.svg"
          alt="Resider Logo"
          width={72}
          height={16}
        />
        <button className="drop-shadow-lg rounded-lg bg-slate-500 text-white p-2">
          Request a Demo
        </button>
      </div>

      <main className="text-center">
        <div>
          <Image
            src="/resider-logo-square.svg"
            alt="Resider Logo"
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
          {/* <Image alt='hero-circle' /> */}
        </div>

        <div>
          <h2>
            Platform <span>Integrity</span>
          </h2>
          <p>
            With a beautiful display of your property, we highlight key aspects
            including parking, pet and utility info.
          </p>
          {/* <Image alt='hero-circle' /> */}
        </div>

        <div>
          <h2>
            <span>Move in date</span> filter
          </h2>
          <p>
            Qualified leads are our emphasis. Allowing users to narrow down
            exact availability by their move in date is the first step.
          </p>
          {/* <Image alt='hero-circle' /> */}
        </div>

        <div>
          <h2>
            <span>Personalized</span> property
          </h2>
          <p>
            Qualified leads are our emphasis. Allowing users to narrow down
            exact availability by their move in date is the first step.
          </p>
          {/* <Image alt='hero-circle' /> */}
        </div>

        <div>
          <h2>
            <span>Filtered</span> availability
          </h2>
          <p>
            Grouped by floor plan, available units are based on the user&apos;s
            filters to ensure eligible results, and qualified clients.
          </p>
          {/* <Image alt='hero-circle' /> */}
        </div>

        <div>
          <h2>
            <span>Instant</span> booking
          </h2>
          <p>
            Through the RENTCafé platform, Resider syncs to your appointment
            calender and allows the user to instantly schedule an available
            tour.
          </p>
          {/* <Image alt='hero-circle' /> */}
        </div>

        <div>
          <h2>
            <span>Tour</span> type
          </h2>
          <p>
            Users are able to book an in-person tour, or a remote tour using
            Zoom.
          </p>
          {/* <Image alt='hero-circle' /> */}
        </div>

        <div>
          <h2>
            <span>Capture</span> required details
          </h2>
          <p>
            Before successfully booking, users are instructed to fill in
            mandatory information vital to the lead qualifying process.
          </p>
          {/* <Image alt='hero-circle' /> */}
        </div>

        <div>
          <h2>
            <span>Tour</span> confirmation
          </h2>
          <p>
            Once a tour is booked, all captured information is logged as a guest
            card and stored in your RENTCafé CRM.
          </p>
          {/* <Image alt='hero-circle' /> */}
        </div>
      </main>
    </div>
  );
};

export default Home;
