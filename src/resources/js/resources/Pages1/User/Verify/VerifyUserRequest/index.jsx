import React, { useEffect, useState } from "react";

import {
  BlankPage,
  InputDatePickerColumn,
  InputRow,
  InputSelectColumn,
  InputTextColumn,
} from "../../../../components";
import { PageUtils } from "./PageUtils";
import { useLocale } from "../../../../../hooks";

const VerifyUserRequest = () => {
  const [selfieFileSelected, setSelfieFileSelected] = useState(null);
  const [identityFileSelected, setIdentityFileSelected] = useState(null);
  const { verifyUserPage: strings, genderTypes } = useLocale();
  const pageUtils = new PageUtils();
  const types = [
    { id: 1, value: genderTypes.male },
    { id: 2, value: genderTypes.female },
  ];

  const onChangeSelfieFile = (e) => {
    const file = e?.target?.files[0];
    if (file) {
      const imgPreview = document.querySelector("#img-preview-selfie");
      imgPreview.src = URL.createObjectURL(file);
      setSelfieFileSelected(true);
      pageUtils.onSetSelfieFile(file);
    }
  };

  const onChangeIdentityFile = (e) => {
    const file = e?.target?.files[0];

    if (file) {
      const imgPreview = document.querySelector("#img-preview-identity");
      imgPreview.src = URL.createObjectURL(file);
      setIdentityFileSelected(true);
      pageUtils.onSetIdentityFile(file);
    }
  };

  const removeSelfieFile = () => {
    document.querySelector(".img-input.selfie").value = "";
    const imgPreview = document.querySelector("#img-preview-selfie");
    imgPreview.src = "";
    setSelfieFileSelected(false);
    pageUtils.onSetSelfieFile(null);
  };

  const removeIdentityFile = () => {
    document.querySelector(".img-input.identity").value = "";
    const imgPreview = document.querySelector("#img-preview-identity");
    imgPreview.src = "";
    setIdentityFileSelected(false);
    pageUtils.onSetIdentityFile(null);
  };

  useEffect(() => {
    if (selfieFileSelected === null) {
      return;
    }
    const uploadImage = document.querySelector(".upload-img.selfie");
    const imgPreview = document.querySelector(".img-preview.selfie");
    if (selfieFileSelected) {
      uploadImage.style.opacity = "0";
      imgPreview.style.display = "flex";
      setTimeout(() => {
        uploadImage.style.display = "none";
        imgPreview.style.opacity = "1";
      }, 400);
    } else if (selfieFileSelected === false) {
      imgPreview.style.opacity = "0";
      uploadImage.style.display = "flex";
      setTimeout(() => {
        imgPreview.style.display = "none";
        uploadImage.style.opacity = "1";
      }, 400);
    }
  }, [selfieFileSelected]);

  useEffect(() => {
    if (identityFileSelected === null) {
      return;
    }
    const uploadImage = document.querySelector(".upload-img.identity");
    const imgPreview = document.querySelector(".img-preview.identity");
    if (identityFileSelected) {
      uploadImage.style.opacity = "0";
      imgPreview.style.display = "flex";
      setTimeout(() => {
        uploadImage.style.display = "none";
        imgPreview.style.opacity = "1";
      }, 400);
    } else if (identityFileSelected === false) {
      imgPreview.style.opacity = "0";
      uploadImage.style.display = "flex";
      setTimeout(() => {
        imgPreview.style.display = "none";
        uploadImage.style.opacity = "1";
      }, 400);
    }
  }, [identityFileSelected]);

  return (
    <BlankPage pageUtils={pageUtils}>
      <div className="section fix-mr15">
        <div className="block pd-30">
          <div className="block-title pd-d-20">
            <h3>{strings.title1}</h3>
          </div>
          <InputRow>
            <InputTextColumn field="name" fullRow={false} icon={"icon-user"} />
            <InputTextColumn
              field="family"
              fullRow={false}
              icon={"icon-user"}
            />
            <InputTextColumn
              field="fatherName"
              fullRow={false}
              icon={"icon-personalcard4"}
            />
          </InputRow>
          <InputRow>
            <InputTextColumn
              field="nationalCode"
              type="number"
              textAlign="left"
              fullRow={false}
              icon={"icon-personalcard4"}
            />
            <InputTextColumn
              field="identityNo"
              type="number"
              textAlign="left"
              fullRow={false}
              icon={"icon-personalcard4"}
            />
            <InputDatePickerColumn field="birthDate" fullRow={false} />
            <InputSelectColumn field="gender" items={types} fullRow={false} />
          </InputRow>
          <div className="block-border"></div>
          <div className="block-title pd-d-20">
            <h3>{strings.title2}</h3>
          </div>
          <InputRow>
            <InputTextColumn
              field="mobile"
              type="number"
              textAlign="left"
              fullRow={false}
              icon={"icon-mobile"}
            />
            <InputTextColumn
              field="tel"
              type="number"
              textAlign="left"
              fullRow={false}
              icon={"icon-call-calling"}
            />
            <InputTextColumn
              field="email"
              textAlign="left"
              fullRow={false}
              icon={"icon-sms"}
            />
          </InputRow>
          <InputTextColumn
            field="address"
            fullRow={false}
            icon={"icon-location4"}
          />
          <div className="block-border"></div>
          <div className="block-title pd-d-20">
            <h3>{strings.title3}</h3>
          </div>
          <div className="d-flex-wrap mb-20">
            <div className="upload-box">
              <div className="upload-img-box">
                <div className="img-preview selfie">
                  <div className="img">
                    <img id="img-preview-selfie" alt={strings.selfieFile} />
                  </div>
                  <div className="remove-img" onClick={removeSelfieFile}>
                    <i className="icon-trash"></i>
                  </div>
                </div>
                <div className="upload-img selfie">
                  <h3 className="text" style={{ marginBottom: "0.5rem" }}>
                    {strings.selfieFile}
                  </h3>
                  <span>{strings.selfieFileProperties}</span>
                  <input
                    accept="image/*"
                    type="file"
                    className="img-input selfie"
                    onChange={(e) => onChangeSelfieFile(e)}
                  />
                  <button>{strings.selfieImage}</button>
                </div>
              </div>
            </div>
            <div className="upload-box-info d-flex-wrap align-center just-around">
              <div className="upload-box-text">
                <h3>{strings.selfieFileTips}</h3>
                <p className="text-warning" style={{ textAlign: "justify" }}>
                  {strings.selfieFileDescription1}
                </p>
                <p className="text-warning" style={{ textAlign: "justify" }}>
                  {strings.selfieFileDescription2}
                </p>
                <p style={{ textAlign: "justify" }}>
                  {strings.selfieFileDescription3}
                </p>
              </div>
              <div className="upload-box-img">
                <img
                  src="https://kifpool.me/panel_v2/images/verify2.png"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="block-border"></div>
          <div className="block-title pd-d-20">
            <h3>{strings.title4}</h3>
          </div>
          <div className="d-flex-wrap">
            <div className="upload-box">
              <div className="upload-img-box">
                <div className="img-preview identity">
                  <div className="img">
                    <img id="img-preview-identity" alt={strings.identityFile} />
                  </div>
                  <div className="remove-img" onClick={removeIdentityFile}>
                    <i className="icon-trash"></i>
                  </div>
                </div>
                <div className="upload-img identity">
                  <h3 className="text" style={{ marginBottom: "0.5rem" }}>
                    {strings.identityFile}
                  </h3>
                  <span>{strings.identityFileProperties}</span>
                  <input
                    accept="image/*"
                    type="file"
                    className="img-input identity"
                    onChange={(e) => onChangeIdentityFile(e)}
                  />
                  <button>{strings.identityImage}</button>
                </div>
              </div>
            </div>
            <div className="upload-box-info d-flex-wrap align-center just-around">
              <div className="upload-box-text">
                <h3>{strings.identityFileTips}</h3>
                <p className="text-warning" style={{ textAlign: "justify" }}>
                  {strings.identityFileDescription1}
                </p>
                <p className="text-warning" style={{ textAlign: "justify" }}>
                  {strings.identityFileDescription2}
                </p>
                <p style={{ textAlign: "justify" }}>
                  {strings.identityFileDescription3}
                </p>
              </div>
              <div className="upload-box-img">
                <img
                  src="https://kifpool.me/panel_v2/images/verify2.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </BlankPage>
  );
};

export default VerifyUserRequest;
