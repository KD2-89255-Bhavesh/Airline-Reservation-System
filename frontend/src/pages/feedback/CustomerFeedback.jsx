
import React, { useState } from "react";
import { toast } from "react-toastify";
import { submitCustomerFeedBack } from "../../services/UserServices/feedback";
import { useNavigate } from "react-router-dom";

function CustomerFeedback() {
  const [userId, setUserId] = useState("4");
  const [bookingId, setBookingId] = useState("1");
  const [rating, setRating] = useState("");
  const [comment, setComment] = useState("");

  const navigate = useNavigate();

  const onFeedBack = async () => {
    if (rating < 1 && rating > 5) {
      toast.warn("please enter the rating inside 1-5");
    } else if (comment.length == 0) {
      toast.warn("please enter the comment..!");
    } else {
      const result = await submitCustomerFeedBack(
        userId,
        bookingId,
        rating,
        comment
      );
      if (!result) {
        toast.error("Error while feedback");
      } else {
        if (result["status"] == "success") {
          toast.success("successfully registered a user");
          navigate("/");
        } else {
          toast.error("Error while feedback");
        }
      }
    }
  };

  return (
    <>
      <div className="container mt-4">
        <h2>Submit Feedback</h2>
        <form className="mb-4">
          <div className="row">
            <div className="col-md-3">
              <label>User ID</label>
              <input
                type="number"
                name="user_id"
                className="form-control"
                value={userId}
                disabled
                readOnly
              />
            </div>

            <div className="col-md-3">
              <label>Booking ID</label>
              <input
                type="number"
                name="booking_id"
                className="form-control"
                value={bookingId}
                disabled
                readOnly
              />
            </div>
            <div className="col-md-2">
              <label>Rating</label>
              <select
                name="rating"
                className="form-control"
                value={rating}
                onChange={(e) => setRating(e.target.value)}
                required
              >
                {[1, 2, 3, 4, 5].map((r) => (
                  <option key={r} value={r}>
                    {r}
                  </option>
                ))}
              </select>
            </div>
            <div className="col-md-4">
              <label>Comments</label>
              <input
                type="text"
                name="comments"
                className="form-control"
                value={comment}
                onChange={(e) => setComment(e.target.value)}
              />
            </div>
          </div>
          <button
            onClick={onFeedBack}
            type="submit"
            className="btn btn-primary mt-3"
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
}

export default CustomerFeedback;


