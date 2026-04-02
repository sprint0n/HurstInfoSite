import {
  Form,
  useNavigate,
  useNavigation,
  redirect,
  useLoaderData,
} from "react-router-dom";
import classes from "./FeedbackForm.module.css";

const FeedbackForm = () => {
  const topicData = useLoaderData();
  const navigation = useNavigation();
  const navigate = useNavigate();

  const isSubmitting = navigation.state === "submitting";

  function cancelHandler() {
    navigate("..");
  }
  return (
    <Form method="post" className={classes.form}>
      <div className={classes.control}>
        <label htmlFor="name">Name (Optional):</label>
        <textarea name="name" id="name" />
      </div>
      <div className={classes.control}>
        <label htmlFor="topic">Topic:</label>
        <select name="topic" id="topic" required defaultValue="">
          <option value="" disabled>
            Select a topic
          </option>
          <option value="site-feedback">Site Feedback</option>
          {topicData
            .filter((topic) => topic.id !== "feedback")
            .map((topic) => (
              <option key={topic.id} value={topic.id}>
                {topic.id}
              </option>
            ))}
        </select>
      </div>
      <div className={classes.control}>
        <label htmlFor="feedback">Feedback:</label>
        <textarea name="feedback" id="feedback" required />
      </div>
      <div className={classes.actions}>
        <button
          type="button"
          onClick={cancelHandler}
          className={classes.btnCancel}
        >
          Cancel
        </button>
        <button disabled={isSubmitting} className={classes.btnSubmit}>
          {isSubmitting ? "Submitting..." : "Submit Feedback"}
        </button>
      </div>
    </Form>
  );
};
export default FeedbackForm;

export async function feedbackFormPosted({ request, params }) {
  const data = await request.formData();

  const feedbackData = {
    name: data.get("name"),
    topic: data.get("topic"),
    feedback: data.get("feedback"),
  };

  let url =
    "https://hurstinfodatabase-default-rtdb.firebaseio.com/feedback.json";

  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(feedbackData),
  });

  return redirect("/");
}
