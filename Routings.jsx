import React from "react";
import {
  BrowserRouter,
  Routes,
  useParams,
  Route,
  Link,
  Outlet,
} from "react-router-dom";

const Routings = () => {
  return (
    <div>
      <BrowserRouter>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/About">About</Link>
          </li>
          <li>
            <Link to="/service">service</Link>
          </li>
        </ul>
        <Routes>
          <Route path="/" element={<Home></Home>} />
          <Route path="about" element={<About></About>} />
          <Route path="service/:id" element={<Service></Service>}>
            {/* <Route index element={<ServiceIndex />} /> */}
            <Route path="service1" element={<Service1 />} />
            <Route path="service2" element={<Service2 />} />
            <Route path="service3" element={<Service3 />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

const Home = () => {
  return <h2>home page</h2>;
};
const About = () => {
  return <h2>about page</h2>;
};
const Service = () => {
  return (
    <>
      service page
      <ul>
        <li>
          <Link to="service1">service1</Link>
        </li>
      </ul>
      <ul>
        <li>
          <Link to="service2">service2</Link>
        </li>
      </ul>
      <ul>
        <li>
          <Link to="service3">service3</Link>
        </li>
      </ul>
      <Outlet></Outlet>
    </>
  );
};
const Service1 = () => {
  let { id } = useParams();
  return <h2>service1 page {id}</h2>;
};
const Service2 = () => {
  return <h2>service2 page</h2>;
};
const Service3 = () => {
  return <h2>service3 page</h2>;
};

export default Routings;
