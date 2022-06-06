import React from "react";
import classes from "./channels.module.css";
import { GetCollegesData, GetCategoriesData } from "../../../SERVICES/service";
import CCBar from "./Bar/ccbar";
import CBar from "./CBar/cbar";
import ClockLoader from "react-spinners/ClockLoader";
import { css } from "@emotion/react";
import { useState } from "react";

const Channels = () => {
  const [colleges, setColleges] = React.useState([{}]);
  const [categories, setCategories] = React.useState([{}]);
  const [loading, setLoading] = useState(true);
  const [color, setColor] = useState("#FD752C");

  const override = css`
    display: block;
    margin: auto 0;
    top: 220px;
    left: 45%;
  `;

  React.useEffect(() => {
    try {
      getColleges();
      getCategories();
    } catch (error) {
      console.log(error);
    }
  }, []);

  const getColleges = () => {
    GetCollegesData().then((data) => {
      setLoading(!loading);
      setColleges(data.data.colleges);
    });
  };

  const getCategories = () => {
    GetCategoriesData().then((data) => {
      setCategories(data.data.result);
    });
  };

  const ChannelsTable = () => {
    return <CCBar data={colleges} />;
  };

  const CategoriesTable = () => {
    return <CBar data={categories} />;
  };

  return (
    <div>
      {loading ? (
        <ClockLoader
          css={override}
          color={color}
          loading={loading}
          size={100}
        />
      ) : (
        <div className={classes.MainContainer}>
          <div className={classes.Heading}>Messaging Channels & Categories</div>
          {colleges.length > 1 ? <ChannelsTable /> : null}

          {categories.length > 1 ? <CategoriesTable /> : null}
        </div>
      )}
    </div>
  );
};

export default Channels;
