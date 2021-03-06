import React from 'react';
import styled from 'styled-components';

const MovieDesc = (props) => {
   function imgError(e) {
     e.target.onerror = null;
     e.target.src =
       "https://www.wildhareboca.com/wp-content/uploads/sites/310/2018/03/image-not-available.jpg";
   };

  console.log(props);
  if(!props.movie.Title) {
    return <DescContainer>
      <h2>Find information on your favorite pieces of film.</h2>
    </DescContainer>;
  } else {
    return (
      <DescContainer>
        <div className="img-wrapper">
          <img
            src={
              props.movie.Poster === "N/A"
                ? "https://www.wildhareboca.com/wp-content/uploads/sites/310/2018/03/image-not-available.jpg"
                : props.movie.Poster
            }
            alt={props.movie.Title}
            onError={imgError}
          />
        </div>
        <div className="film-info">
          <div className="film-info--head-container">
            <h3 className="film-info--title">{props.movie.Title}</h3>
            <span className="accent-text">{props.movie.Year}</span>
            <p className="film-info--summary">
              <span className="accent-text-strong">Plot Summary:</span>
              <br />
              {props.movie.Plot}
            </p>
          </div>
        </div>
      </DescContainer>
    );
  }
};

const DescContainer = styled.div`
  display: flex;
  height: calc(80vh - 128px);
  align-self: flex-start;
  width: 100%;

  & h2 {
    font-size: 48px;
    margin: 0;
    align-self: center;
    width: 50%;
  }

  & div img {
    height: 300px;
  }

  .film-info {
    &--head-container {
    }

    &--title {
      margin: 0;
      font-size: 24px;
      width: 100%;
      text-transform: uppercase;
    }

    &--summary {
      font-weight: 300;
      font-size: 14px;
    }
  }

  .img-wrapper {
    margin-right: 16px;
  }

  .accent-text {
    font-weight: 300;
    font-size: 16px;
    color: rgba(255, 255, 255, .4);

    &-strong {
      font-weight: 400;
      font-size: 16px;
      text-transform: uppercase;
    }
  }
`

export default MovieDesc;