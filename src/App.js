import "./App.css";
import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Posts from "./Components/Posts";
import PostDetails from "./Components/PostDetails";
import { postsContext } from "./Contexts/postContext";

const postsData = [
  {
    id: 1,
    title: "Enid",
    body: "Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc.",
    date: "2024-07-24",
  },
  {
    id: 2,
    title: "Avivah",
    body: "Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molesti.",
    date: "2023-11-16",
  },
  {
    id: 3,
    title: "Locke",
    body: "Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.\n\nPraesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.",
    date: "2023-11-06",
  },
  {
    id: 4,
    title: "Travus",
    body: "In congue. Etiam justo. Etiam pretium iaculis justo.In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.",
    date: "2024-07-21",
  },
  {
    id: 5,
    title: "Ashlie",
    body: "In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.",
    date: "2023-12-15",
  },
  {
    id: 6,
    title: "Finn",
    body: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus.",
    date: "2024-03-29",
  },
  {
    id: 7,
    title: "Estrella",
    body: "Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.",
    date: "2024-07-11",
  },
  {
    id: 8,
    title: "Adrianne",
    body: "Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.\n\nCurabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.",
    date: "2024-08-27",
  },
  {
    id: 9,
    title: "Minda",
    body: "Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.\n\nCras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.\n\nQuisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.",
    date: "2024-09-11",
  },
  {
    id: 10,
    title: "Zora",
    body: "Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo.",
    date: "2024-05-20",
  },
  {
    id: 11,
    title: "Juliet",
    body: "Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.",
    date: "2023-10-29",
  },
  {
    id: 12,
    title: "Kayne",
    body: "Maecenas leo odio, condimentum id, luctus e cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.",
    date: "2024-05-22",
  },
  {
    id: 13,
    title: "Farley",
    body: "Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.",
    date: "2024-09-19",
  },
  {
    id: 14,
    title: "Nico",
    body: "Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, em.",
    date: "2023-12-21",
  },
  {
    id: 15,
    title: "Walt",
    body: "Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipobortis sapien sapien non mi. Integer ac neque.",
    date: "2024-07-18",
  },
];
// APP
function App() {
  return (
    <postsContext.Provider value={postsData}>
      <div className="root">
        <Navbar></Navbar>
        {/* Routs */}
        <Routes>
          <Route
            path="/"
            element={
              // Add component here! as element
              <div>
                <h1>Home page</h1>
                <Posts></Posts>
              </div>
            }
          />
          <Route path="/postDetails/:postID" element={<PostDetails />} />
        </Routes>
      </div>
    </postsContext.Provider>
  );
}
export default App;
