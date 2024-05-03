import Link from "next/link";
import styled from "styled-components";

export const WriteStyle = styled(Link)`
  text-decoration: none;
  display: flex;
  align-items: center;
  color : #4FAAFF;
  font-size: 18px;
  font-weight: 500;
  border: 1px solid #4FAAFF;
  background: #FFFFFF;
  border-radius: 4px;
  width: 127px;
  height: 52px;
  justify-content: center;
  margin-left: auto;
  margin-top: 24px;
  img {
    margin-right: 4px;
  }
`;