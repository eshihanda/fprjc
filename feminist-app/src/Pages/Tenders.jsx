import React from "react";
import "../Styles/Tenders.css";

const categories = [
  {
    code: "A",
    title: "Supply of General Goods/Services",
    items: [
      {
        no: 1,
        ref: "FPRJC/PQ/01/2027",
        description:
          "Design and production of materials e.g. printed stationery, notebooks, folders, banners, promotional materials, etc.",
      },
      {
        no: 2,
        ref: "FPRJC/PQ/02/2027",
        description:
          "Supply and delivery of general office stationeries e.g. printing paper, toner cartridges, etc.",
      },
      {
        no: 3,
        ref: "FPRJC/PQ/03/2027",
        description:
          "Supply of computers, laptops, computer software, printers and hardware equipment.",
      },
      {
        no: 4,
        ref: "FPRJC/PQ/04/2027",
        description: "Supply of office furniture.",
      },
    ],
  },
  {
    code: "B",
    title: "Provision of Services",
    items: [
      {
        no: 5,
        ref: "FPRJC/PQ/05/2027",
        description:
          "Provision of air ticketing and other travel agency services.",
      },
      {
        no: 6,
        ref: "FPRJC/PQ/06/2027",
        description: "Provision of courier services.",
      },
      {
        no: 7,
        ref: "FPRJC/PQ/07/2027",
        description:
          "Hotel services and/or conference facilities.",
      },
      {
        no: 8,
        ref: "FPRJC/PQ/08/2027",
        description:
          "Provision of photography and videography services.",
      },
      {
        no: 9,
        ref: "FPRJC/PQ/09/2027",
        description:
          "Provision of event management services e.g. PA system, plasma screens, décor, entertainment, etc.",
      },
      {
        no: 10,
        ref: "FPRJC/PQ/10/2027",
        description:
          "Provision of transport and taxi services.",
      },
      {
        no: 11,
        ref: "FPRJC/PQ/11/2027",
        description:
          "Provision of website upgrade and management services.",
      },
      {
        no: 12,
        ref: "FPRJC/PQ/12/2027",
        description: "Provision of legal services.",
      },
      {
        no: 13,
        ref: "FPRJC/PQ/13/2027",
        description: "Provision of tagging services for assets.",
      },
      {
        no: 14,
        ref: "FPRJC/PQ/14/2027",
        description: "Provision of IT services.",
      },
      {
        no: 15,
        ref: "FPRJC/PQ/15/2027",
        description: "Provision of graphic design and artworks.",
      },
      {
        no: 16,
        ref: "FPRJC/PQ/16/2027",
        description:
          "Repair, servicing and maintenance of computers, laptops and photocopiers.",
      },
      {
        no: 17,
        ref: "FPRJC/PQ/17/2027",
        description: "Repair of office furniture.",
      },
      {
        no: 18,
        ref: "FPRJC/PQ/18/2027",
        description:
          "Repair, servicing and maintenance of security systems.",
      },
      {
        no: 19,
        ref: "FPRJC/PQ/19/2027",
        description:
          "Repair, renovation of buildings and general construction.",
      },
    ],
  },
];

const Tenders = () => {
  return (
    <div className="tenders-page">

      {/* HERO */}
      <section className="tenders-hero">
        <div className="container">
          <div className="tenders-hero-content">
            <span className="tenders-label">
              PROCUREMENT NOTICE · 2027
            </span>

            <h1>
              Pre-Qualification of Suppliers
            </h1>

            <p>
              Supply of Goods & Services for the Year 2027
            </p>

            <div className="deadline-badge">
              <span>Submission Deadline</span>
              <strong>15 November 2026 · 12:00 PM</strong>
            </div>
          </div>
        </div>
      </section>


      {/* INTRODUCTION */}
      <section className="py-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">

              <div className="intro-box">
                <h2>Pre-Qualification Notice</h2>

                <p>
                  Feminist for Peace, Rights and Justice Centre (FPRJC)
                  invites eligible suppliers and service providers to
                  submit applications for pre-qualification for the supply
                  of goods and provision of services for the year 2027.
                </p>

                <p className="mb-0">
                  Interested suppliers are invited to review the
                  pre-qualification categories below and download the
                  full pre-qualification document for the application
                  requirements and submission instructions.
                </p>
              </div>

            </div>
          </div>
        </div>
      </section>


      {/* CATEGORIES */}
      <section className="categories-section pb-5">
        <div className="container">

          <div className="section-heading">
            <span>PRE-QUALIFICATION CATEGORIES</span>
            <h2>Goods & Services</h2>
            <p>
              Suppliers may apply for the category or categories relevant
              to their goods and services.
            </p>
          </div>


          {categories.map((category) => (
            <div className="category-block" key={category.code}>

              <div className="category-heading">
                <div className="category-letter">
                  {category.code}
                </div>

                <div>
                  <span>Category {category.code}</span>
                  <h3>{category.title}</h3>
                </div>
              </div>


              <div className="table-responsive">
                <table className="table tender-table">
                  <thead>
                    <tr>
                      <th style={{ width: "7%" }}>No.</th>
                      <th style={{ width: "23%" }}>
                        Reference No.
                      </th>
                      <th>Item Description</th>
                    </tr>
                  </thead>

                  <tbody>
                    {category.items.map((item) => (
                      <tr key={item.no}>
                        <td>{item.no}</td>
                        <td>
                          <span className="reference-number">
                            {item.ref}
                          </span>
                        </td>
                        <td>{item.description}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

            </div>
          ))}

        </div>
      </section>


      {/* SUBMISSION */}
      <section className="submission-section py-5">
        <div className="container">

          <div className="row g-4 align-items-stretch">

            <div className="col-lg-7">
              <div className="submission-card h-100">

                <span className="small-heading">
                  HOW TO SUBMIT
                </span>

                <h2>Submission of Documents</h2>

                <p>
                  The duly completed pre-qualification document should
                  be enclosed in a plain sealed envelope, clearly marked
                  with the relevant reference number and tender
                  description.
                </p>

                <h5>Physical submission</h5>

                <p>
                  <strong>The Procurement Officer</strong><br />
                  Feminist for Peace, Rights and Justice Centre<br />
                  P.O. Box 56571-00200<br />
                  Nairobi, Kenya
                </p>

                <p>
                  The document may be delivered to the FPRJC office
                  located at <strong>Kibera Olympic Shopping Centre,
                  next to the Chief's Camp.</strong>
                </p>

              </div>
            </div>


            <div className="col-lg-5">
              <div className="email-card h-100">

                <div className="email-icon">
                  ✉
                </div>

                <span className="small-heading">
                  EMAIL SUBMISSION
                </span>

                <h3>
                  Submit electronically
                </h3>

                <p>
                  Suppliers may also submit a scanned PDF copy of the
                  completed document by email.
                </p>

                <a
                  href="mailto:kiberafeminists@gmail.com"
                  className="email-link"
                >
                  kiberafeminists@gmail.com
                </a>

                <div className="deadline-box">
                  <span>Deadline</span>
                  <strong>
                    15 November 2026<br />
                    12:00 PM
                  </strong>
                </div>

              </div>
            </div>

          </div>

        </div>
      </section>


      {/* DOWNLOAD */}
      <section className="download-section">
        <div className="container">
          <div className="download-card">

            <div>
              <span className="small-heading">
                FULL DOCUMENT
              </span>

              <h2>
                Ready to apply?
              </h2>

              <p>
                Download the complete pre-qualification document,
                review the requirements and submit your application
                before the deadline.
              </p>
            </div>

            <a
              href="/PQ-2027.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn download-btn"
            >
              Download Pre-Qualification Form
              <span>↗</span>
            </a>

          </div>
        </div>
      </section>


      {/* FOOTER NOTE */}
      <section className="py-4">
        <div className="container">
          <p className="text-center footer-note mb-0">
            Tenders shall be opened soon after the submission deadline
            at the FPRJC office in the presence of bidders in attendance
            or their authorized representatives.
          </p>
        </div>
      </section>

    </div>
  );
};

export default Tenders;