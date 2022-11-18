import styled from "styled-components";

export const Container = styled.header`
  background: #d73035;
  display: flex;
  justify-content: center;
  height: 12.37rem;
  align-items: center;
`;
export const Content = styled.div`
  width: 100%;
  max-width: 76rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .page-details {
    h1 {
      color: #fff;
      font-size: 2rem;
    }

    h2 {
      color: #fff;
      font-size: 1rem;
      font-weight: 400;
      opacity: 0.9;
      margin-top: 6px;
    }
  }
`;
