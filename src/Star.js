import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { AiOutlineStar } from "react-icons/ai";
import styled from "styled-components";

const Star = ({ star, review }) => {
  console.log("🚀 ~ Star ~ reviews:", review);
  console.log("🚀 ~ Star ~ stars:", star);
  const ratingStar = Array.from({ length: 5 }, (_, index) => {
    const rating = index + 1;
    const isHalfStar = star >= rating - 0.5 && star < rating;
    const isFullStar = star >= rating;

    return (
      <span key={index}>
        {isFullStar ? (
          <FaStar className="icon" />
        ) : isHalfStar ? (
          <FaStarHalfAlt className="icon" />
        ) : (
          <AiOutlineStar className="icon" />
        )}
      </span>
    );
  });
  return (
    <Wrapper>
      <div className="icon-style">
        {ratingStar}
        <p>({review} customer reviews)</p>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .icon-style {
    display: flex;
    gap: 0.2rem;
    align-items: center;
    justify-content: flex-start;

    .icon {
      font-size: 2rem;
      color: orange;
    }

    .empty-icon {
      font-size: 2.6rem;
    }
    p {
      margin: 0;
      padding-left: 1.2rem;
    }
  }
`;

export default Star;
