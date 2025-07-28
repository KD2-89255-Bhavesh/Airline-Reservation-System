import React from "react";

function ResetPasswordPage() {
  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6 col-lg-4">
          <div className="card shadow-lg p-4 rounded-4">
            <h2 className="card-title text-center mb-4 text-info fw-bold">
              Reset Your Password
            </h2>
            {error && (
              <div className="alert alert-danger rounded-3">{error}</div>
            )}
            {message && (
              <div className="alert alert-success rounded-3">{message}</div>
            )}
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="newPasswordInput" className="form-label">
                  New Password
                </label>
                <input
                  type="password"
                  className={`form-control rounded-3 ${
                    passwordError ? "is-invalid" : ""
                  }`}
                  id="newPasswordInput"
                  value={newPassword}
                  onChange={handleNewPasswordChange}
                  required
                />
                {passwordError && (
                  <div className="invalid-feedback">{passwordError}</div>
                )}
                <div className="form-text text-muted">
                  Must be 8+ characters with letters, numbers, and special
                  characters.
                </div>
              </div>
              <div className="mb-3">
                <label htmlFor="confirmNewPasswordInput" className="form-label">
                  Confirm New Password
                </label>
                <input
                  type="password"
                  className={`form-control rounded-3 ${
                    confirmPasswordError ? "is-invalid" : ""
                  }`}
                  id="confirmNewPasswordInput"
                  value={confirmNewPassword}
                  onChange={handleConfirmNewPasswordChange}
                  required
                />
                {confirmPasswordError && (
                  <div className="invalid-feedback">{confirmPasswordError}</div>
                )}
              </div>
              <button
                type="submit"
                className="btn btn-info w-100 rounded-3 py-2 fw-bold"
                disabled={
                  loading ||
                  passwordError ||
                  confirmPasswordError ||
                  !newPassword ||
                  !confirmNewPassword
                }
              >
                {loading ? (
                  <span
                    className="spinner-border spinner-border-sm"
                    role="status"
                    aria-hidden="true"
                  ></span>
                ) : (
                  "Reset Password"
                )}
              </button>
            </form>
            <div className="mt-3 text-center">
              <Link to="/login" className="text-muted">
                Back to Login
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ResetPasswordPage;
