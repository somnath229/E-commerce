import LoginForm from "./LoginForm";
import SignUpForm from "./SignUpForm";
import FilterableProductTable from "./FilterableProductTable";
import Navbar from "./Navbar";
import CarouselUse from "./CarouselUse";
import { useState } from "react";

export default function Profile() {
  const [showLoginForm, setShowLoginForm] = useState(false);
  const [showSignUpForm, setShowSignUpForm] = useState(false);

  const handleShowLoginForm = () => {
    setShowLoginForm(!showLoginForm);
  };

  const handleShowSignUpForm = () => {
    setShowSignUpForm(!showSignUpForm);
  };

  return (
    <div>
      <div>
        <Navbar
          onShowLoginForm={handleShowLoginForm}
          onShowSignUpForm={handleShowSignUpForm}
          showLoginForm={showLoginForm}
          showSignUpForm={showSignUpForm}
        />
        {showLoginForm && <LoginForm />}
        {showSignUpForm && <SignUpForm />}
      </div>
      <div>
        <CarouselUse />
        <FilterableProductTable />
      </div>
    </div>
  );
}

{
  /* 
  // const user = {
//   name: "Hedy Lamarr",
//   imageUrl: "https://i.imgur.com/yXOvdOSs.jpg",
//   imageSize: 90,
// };
     {/* {!isLoggedIn ? (
        <div
          type="submit"
          style={{ background: "#6D4FC2", margin: "0 .2rem" }}>
          Sign In <AdminPanel />{" "}
        </div>
      ) : (
        <div
          type="submit"
          style={{ background: "#6D4FC2", margin: "0 2rem" }}>
          
          </div>
        )} 
  <h1>{user.name}</h1>
      <img
        className="avatar"
        src={user.imageUrl}
        alt={"Photo of " + user.name}
        style={{
          width: user.imageSize,
          height: user.imageSize,
        }}
      />
      <h5>
        This btn will show diffrent count becouse it calls seperate MyButton
        fuction and if we define useState in parent component and pass down as
        props it will update count and can be used further.
      </h5>
      <MyButton count={count} setCount={setCount} />
      <MyButton count={count} setCount={setCount} />

      <h5>
        This btn will show same count becouse it calls UseState of main fuction
      </h5> */
  /* <MyBtn count={count} onClick={handleClick} /> */
}
