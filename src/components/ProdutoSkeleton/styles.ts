import styled, { keyframes } from "styled-components"

export const shimmer = keyframes`
  0% {
    background-position: -468px 0;
  }
  100% {
    background-position: 468px 0;
  }
`
export const SkeletonContainer = styled.div`
    width: 218px;
    height: 371px;

    border-radius: 8px 8px 0 0;
    background-color: #ffffff;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.13);

    background: linear-gradient(to right, #ffffff 20%, #ececec 40%, #ffffff 60%);
    animation: ${shimmer} 5s infinite linear;

    @media screen and (max-width: 1200px) {
      width: 300px;
  }
`
