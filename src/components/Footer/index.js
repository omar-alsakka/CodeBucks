import styled from "styled-components";


const FOOTER = styled.footer`
  width: 100%;
  background-color: var(--black);
  padding: 1.2rem calc(2.5rem + 2.5vw);
  font-size: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: var(--white);
  @media only Screen and (max-width: 48em) {
    flex-direction: column;
    align-items: center;
    div {
      &:first-child {
        margin-bottom: 1rem;
      }
    }
  }
`;

const LeftText = styled.div`
  text-align: left;
  a {
    color: inherit;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
`;
const Footer = () => {
  return (
    <FOOTER>
      <LeftText>
        © 2026 Built and Design by{" "}
        <a href="https://www.linkedin.com/in/omar-sakka-1804b9257/" target="_blank" rel="noreferrer">
          @omarAlsakka
        </a>
      </LeftText>
    </FOOTER>
  );
};

export default Footer;

//© 2021 by CodeBucks. Design by @CodeBucks.
