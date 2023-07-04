import React from "react";
import styled from "styled-components";
import check_on from "../../../static/img/check_on.png";
import check_off from "../../../static/img/check_off.png";
import check_on_hover from "../../../static/img/check_on_hover.png";
import check_off_hover from "../../../static/img/check_off_hover.png";
import check_disabled_on from "../../../static/img/check_disabled_on.png";
import check_disabled_off from "../../../static/img/check_disabled_off.png";

const Checkbox = ({ onChange, checked, status }) => {

  return (
    <>
      {status === "disabledOn" ? (
        <DisabledOnCheckBox>
          <input type="checkbox" />
          <div id="showCheckbox" />
        </DisabledOnCheckBox>
      ) : status === "disabledOff" ? (
        <DisabledOffCheckBox>
          <input type="checkbox" />
          <div id="showCheckbox" />
        </DisabledOffCheckBox>
      ) : (
        <DefaultCheckBox>
          <input type="checkbox" onChange={onChange} checked={checked} />
          <div id="showCheckbox" />
        </DefaultCheckBox>
      )}
    </>
  );
};

const DefaultCheckBox = styled.label`
  display: flex;
  align-items: center;
  gap: 8px;
  /* width: 100%; */
  cursor: pointer;

  input {
    display: none;
  }

  input:checked + #showCheckbox {
    background: url(${check_on});
    background-size: contain;

    @media (min-width: 791px) {
      :hover {
        background: url(${check_on_hover});
        background-size: contain;
      }
    }
  }

  #showCheckbox {
    width: 24px;
    height: 24px;
    background-image: url(${check_off});
    background-size: contain;

    @media (min-width: 791px) {
      :hover {
        background-image: url(${check_off_hover});
        background-size: contain;
      }
    }
  }
`;

const DisabledOnCheckBox = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  input {
    display: none;
  }

  input:checked + #showCheckbox {
    background: url(${check_disabled_on});
    background-size: contain;
  }

  #showCheckbox {
    width: 24px;
    height: 24px;
    background-image: url(${check_disabled_off});
    background-size: contain;
  }
`;

const DisabledOffCheckBox = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  input {
    display: none;
  }

  input:checked + #showCheckbox {
    background: url(${check_disabled_on});
    background-size: contain;
  }

  #showCheckbox {
    width: 24px;
    height: 24px;
    background-image: url(${check_disabled_off});
    background-size: contain;
  }
`;

export default Checkbox;