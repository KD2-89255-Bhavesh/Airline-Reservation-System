import React from "react";

function VerifyEmailPage() {
  return (
    <div className="container mt-5 text-center">
      <div className="card shadow-lg p-4 rounded-4">
        <h2 className="card-title text-primary fw-bold mb-4">
          Email Verification
        </h2>
        {error && <p className="alert alert-danger rounded-3">{error}</p>}
        {verificationStatus && (
          <p
            className={`alert ${
              error ? "alert-danger" : "alert-info"
            } rounded-3`}
          >
            {verificationStatus}
          </p>
        )}

        {/* Show manual token input if no URL token and not loading */}
        {!urlToken && !loading && !error && (
          <form onSubmit={handleManualSubmit} className="mt-4">
            <div className="mb-3">
              <label
                htmlFor="manualTokenInput"
                className="form-label visually-hidden"
              >
                Enter Verification Token
              </label>
              <input
                type="text"
                className="form-control rounded-3"
                id="manualTokenInput"
                value={manualToken}
                onChange={(e) => setManualToken(e.target.value)}
                placeholder="Enter verification token"
                required
              />
            </div>
            <button
              type="submit"
              className="btn btn-primary rounded-pill px-4 py-2"
              disabled={loading}
            >
              {loading ? (
                <span
                  className="spinner-border spinner-border-sm me-2"
                  role="status"
                  aria-hidden="true"
                ></span>
              ) : (
                "Verify Manually"
              )}
            </button>
          </form>
        )}

        {loading && (
          <div className="spinner-border text-primary mt-3" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        )}

        <p className="mt-3">
          If you are not automatically redirected, please{" "}
          <Link to="/login" className="text-decoration-none fw-bold">
            click here to login
          </Link>
          .
        </p>
      </div>
    </div>
  );
}

export default VerifyEmailPage;
