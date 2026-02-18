"use client";

import { useState, useEffect } from "react";

export default function About1() {
  const [showModal, setShowModal] = useState(false);

  const handleOpenPositions = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  // Prevent body scroll when modal open
  useEffect(() => {
    document.body.style.overflow = showModal ? "hidden" : "auto";
  }, [showModal]);

  // Close modal on ESC key
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") setShowModal(false);
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  return (
    <>
      <section className="about-product pt-space pb-20">
        <div className="container">
          <div className="row g-xxl-7 g-lg-5 g-7">
            <div className="col-lg-6">
              <div className="about-product-thumb w-100">
                <img
                  src="https://www.kambala.co.in/wp-content/uploads/2024/08/Kambala-Solutions.png"
                  alt="img"
                  className="w-100"
                />
              </div>
            </div>

            <div className="col-lg-6">
              <div className="about-product-content ps-xxl-10">
                <h2 style={{ color: "#004f39", marginBottom: "20px" }}>
                  Join E26 Media
                </h2>

                <p style={{ color: "#004f39", marginBottom: "20px" }}>
                  Bring to the table win-win survival strategies to ensure
                  proactive domination.
                </p>

                <button
                  type="button"
                  onClick={handleOpenPositions}
                  className="open-btn"
                >
                  View Open Positions
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modal */}
      {showModal && (
        <div className="modal-overlay" onClick={handleClose}>
          <div className="modal-card" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={handleClose}>
              ×
            </button>

            <h3>No Current Openings</h3>
            <p>
              We don't have any open positions at the moment. Please check back
              later.
            </p>

            <button className="close-action" onClick={handleClose}>
              Close
            </button>
          </div>
        </div>
      )}

      <style jsx>{`
        .open-btn {
          background: #004f39;
          color: #fff;
          border: none;
          padding: 12px 25px;
          border-radius: 6px;
          cursor: pointer;
          position: relative;
          transition: all 0.3s ease;
        }
        .open-btn:hover {
          background: #006f55;
          transform: translateY(-2px);
          box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
        }

        .modal-overlay {
          position: fixed;
          inset: 0;
          background: rgba(0, 0, 0, 0.6);
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 99999;
          animation: fadeIn 0.3s ease;
        }

        .modal-card {
          background: rgba(255, 255, 255, 0.9);
          backdrop-filter: blur(12px);
          padding: 40px 30px;
          border-radius: 12px;
          width: 90%;
          max-width: 450px;
          text-align: center;
          position: relative;
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
          animation: slideUp 0.4s ease;
        }

        .modal-card h3 {
          color: #004f39;
          margin-bottom: 15px;
          font-weight: 600;
        }

        .modal-card p {
          color: #444;
          margin-bottom: 20px;
          line-height: 1.5;
        }

        .close-btn {
          position: absolute;
          top: 12px;
          right: 15px;
          background: none;
          border: none;
          font-size: 26px;
          cursor: pointer;
          color: #004f39;
          transition: transform 0.2s ease;
        }
        .close-btn:hover {
          transform: rotate(90deg);
        }

        .close-action {
          background: #004f39;
          color: #fff;
          border: none;
          padding: 10px 25px;
          border-radius: 6px;
          cursor: pointer;
          transition: background 0.3s ease;
        }
        .close-action:hover {
          background: #006f55;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes slideUp {
          from {
            transform: translateY(30px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
      `}</style>
    </>
  );
}
