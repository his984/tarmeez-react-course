import "../App.css";
export default function Post({ title, email, text }) {
  console.log(title);
  return (
    <div className="post">
      <h1>{title}</h1>
      <span>{email}</span>
      <hr></hr>
      <p>{text}</p>
    </div>
  );
}
