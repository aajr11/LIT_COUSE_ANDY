import { css } from 'lit-element';

export const profileComponentStyle = css`
  .container {
    width: 14rem;
    font-family: 'Open Sans', sans-serif, Arial;
    letter-spacing: 0.4px;
  }

  .row > * {
    text-align: left;
    padding-right: 10px;

    height: 30px;
    line-height: 30px;
  }

  .row > *,
  .info-container {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .row.header {
    margin-bottom: 20px;
  }

  .row.header > * {
    letter-spacing: 1.2px;
    color: #959595;
  }

  .row {
    display: flex;
    flex-flow: row nowrap;
    border-bottom: 1px solid #ebebeb;
    padding: 10px 0px;
  }

  .row:first-child {
    border: none;
  }

  .clear-btn {
    padding: 0;
    border: none;
    background-color: transparent;
    outline: none;
    cursor: pointer;
  }

  .index {
    display: none;
    padding-left: 20px;
    color: #999999;
  }

  .title {
    width: 70%;
    color: #285659;
  }

  .date {
    display: none;
    width: 20%;
  }

  .author {
    display: none;
    width: 15%;
  }

  .light-grey {
    color: #747474;
  }

  .blue {
    color: #0589aa;
    text-decoration: none;
  }

  .yellow {
    color: #878943;
  }

  .points {
    width: 20%;
  }

  .info {
    width: 10%;
  }

  .info-container {
    display: block;
  }

  .row.data {
    margin-bottom: 40px;
  }

  .show-more-container {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    margin: 50px 0px;
  }

  .show-more {
    background-color: transparent;
    border: 1px solid grey;
    padding: 10px;
    outline: none;
    cursor: pointer;
  }

  .show-more:hover {
    background-color: #f1f1f1;
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

    .row {
      padding: 20px 0px;
    }

    .row.header {
      margin-bottom: 0px;
    }

    .row.data {
      margin-bottom: 0px;
    }

    .row.data:hover {
      background-color: #f5f6f7;
    }
  }
`;
