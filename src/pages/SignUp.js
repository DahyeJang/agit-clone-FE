import React from "react";
import styled from "styled-components";
import SignUpForm from "../components/SignUp/SignUpForm";

const SignUp = () => {
  return (
    <StDiv>
      <SignUpForm/>
    </StDiv>
    )
};

const StDiv = styled.div`
  color: var(--color-point-blue);
  width: 1200px;
  height: 700px;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export default SignUp;


// import React from "react";
// import styled from "styled-components";
// import SignUpForm from "../components/signUp/SignUpForm";

// const Container = styled.div`
//   display: flex;
//   justify-content: center;
// `;

// const SignUp = () => {
//   return (
//     <Container>
//       <SignUpForm />
//     </Container>
//   );
// };

// export default SignUp;
