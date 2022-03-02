import { css } from 'lit-element';

export const profileComponentStyle = css`
  .container {
    width: 14rem;
    font-family: 'Open Sans', sans-serif, Arial;
    letter-spacing: 0.4px;
    text-align: left;
  }


  .photo-redondo {
    border-radius: 50%;
    width: 14rem;
    margin: 10px 0px;
    border-color: #ededed;
    border-style: solid;
    border-width: 2px;
  }

  .mini-redondo {
    width: 2rem;
    position: relative;
    margin-top: -76px;
    float: right;
  }

  .nickname {
    font-size: 20px;
    font-weight: bold;
  }

  .login {
    color: #5f5f5f;
    font-size: 16px;
  }

  .editar {
    width: 14rem;
    height: 25px;
    padding: 0;
    font-size: 12px;
    font-weight: bold;
    background-color: #f6f6f8;
    border-radius: 5px;
    border-color: #d7d7d7;
    margin-top: 10px;
    border-style: solid;
    border-width: 1px;
    cursor: pointer;
  }

  .bio {
    margin-top: 10px;
    font-size: 13px;
    font-weight: bold;
  }

  .fllw {
    color: #5f5f5f;
    font-size: 12px;
    margin: 10px 0px;
  }

  .svg-icon {
    width: 1em;
    height: 1em;
  }

  .company {
    font-size: 12px;
  }

  .location {
    font-size: 12px;
  }

  .email {
    font-size: 12px;
  }

  .blog {
    font-size: 12px;
  }

  .enlace {
    text-decoration: none;
    color: black;
  }

  .hover {
    fill: rgb(28 108 207);
    color: rgb(28 108 207);
    cursor: pointer;
  }

  @media (min-width: 768px) {
    .title {
      width: 40%;
    }

    .points {
      width: 15%;
    }

    .index {
      display: block;
      width: auto;
      min-width: 30px;
    }

    .date {
      display: block;
    }

    .author {
      display: block;
    }

    .info-container {
      display: none;
    }

  }
`;
