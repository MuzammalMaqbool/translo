"use client";
import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import "/src/assets/css/module-css/carrier.css";

const DispatchingServiceForm = () => {
  const formik = useFormik({
    initialValues: {
      companyName: "",
      dba: "",
      address: "",
      city: "",
      state: "",
      phone: "",
      email: "",
      mcNumber: "",
      usdotNumber: "",
      feinSsn: "",
      percentagePerLoad: "",
      flatFee: "",
      paymentMethod: "",
      numberOfTrucks: "",
      numberOfDrivers: "",
      equipmentType: "",
      factorInvoices: false,
      termsAccepted: false,
      mcAuthorityFile: null,
      w9Form: null,
      certificateOfInsurance: null,
      preferredStates: "",
      heardAboutUs: "",
      contactEmail: "",
    },
    validationSchema: Yup.object({
      companyName: Yup.string().required("Company Name is required"),
      dba: Yup.string(),
      address: Yup.string().required("Address is required"),
      city: Yup.string().required("City is required"),
      state: Yup.string().required("State is required"),
      phone: Yup.string().required("Phone number is required"),
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
      mcNumber: Yup.string().required("MC# is required"),
      usdotNumber: Yup.string().required("USDOT# is required"),
      feinSsn: Yup.string().required("FEIN/SSN is required"),
      percentagePerLoad: Yup.number()
        .typeError("Must be a number")
        .required("Percentage (per load) is required"),
      flatFee: Yup.number()
        .typeError("Must be a number")
        .required("Flat Fee (per week/truck) is required"),
      paymentMethod: Yup.string().required("Payment method is required"),
      numberOfTrucks: Yup.number()
        .typeError("Must be a number")
        .required("Number of Trucks is required"),
      numberOfDrivers: Yup.number()
        .typeError("Must be a number")
        .required("Number of Drivers is required"),
      equipmentType: Yup.string().required("Type of Equipment is required"),
      factorInvoices: Yup.boolean(),
      termsAccepted: Yup.boolean()
        .oneOf([true], "Terms & Conditions must be accepted")
        .required("Terms & Conditions must be accepted"),
      preferredStates: Yup.string(),
      heardAboutUs: Yup.string().required(
        "How did you hear about us? is required"
      ),
      contactEmail: Yup.string()
        .email("Invalid contact email address")
        .required("Contact Email is required"),
    }),
    onSubmit: (values) => {
      // Handle form submission logic here
      console.log(values);
    },
  });

  return (
    <div className="dispatch-form">
      <div className="dispatch-form__form-box">
        <div className="title">
          <h2>Feel free to write Us</h2>
        </div>

        <form id="dispatch-form" onSubmit={formik.handleSubmit}>
          <div className="row">
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
              <div className="dispatch-form__input-box">
                <input
                  type="text"
                  placeholder="Company Name *"
                  name="companyName"
                  value={formik.values.companyName}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.companyName && formik.errors.companyName ? (
                  <div className="error">{formik.errors.companyName}</div>
                ) : null}
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
              <div className="dispatch-form__input-box">
                <input
                  type="text"
                  placeholder="DBA (if Any)"
                  name="dba"
                  value={formik.values.dba}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.dba && formik.errors.dba ? (
                  <div className="error">{formik.errors.dba}</div>
                ) : null}
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
              <div className="dispatch-form__input-box">
                <input
                  type="text"
                  placeholder="Address *"
                  name="address"
                  value={formik.values.address}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.address && formik.errors.address ? (
                  <div className="error">{formik.errors.address}</div>
                ) : null}
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
              <div className="dispatch-form__input-box">
                <input
                  type="text"
                  placeholder="City *"
                  name="city"
                  value={formik.values.city}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.city && formik.errors.city ? (
                  <div className="error">{formik.errors.city}</div>
                ) : null}
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
              <div className="dispatch-form__input-box">
                <input
                  type="text"
                  placeholder="State *"
                  name="state"
                  value={formik.values.state}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.state && formik.errors.state ? (
                  <div className="error">{formik.errors.state}</div>
                ) : null}
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
              <div className="dispatch-form__input-box">
                <input
                  type="tel"
                  placeholder="Phone *"
                  name="phone"
                  value={formik.values.phone}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.phone && formik.errors.phone ? (
                  <div className="error">{formik.errors.phone}</div>
                ) : null}
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
              <div className="dispatch-form__input-box">
                <input
                  type="email"
                  placeholder="Email *"
                  name="email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.email && formik.errors.email ? (
                  <div className="error">{formik.errors.email}</div>
                ) : null}
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
              <div className="dispatch-form__input-box">
                <input
                  type="text"
                  placeholder="MC# *"
                  name="mcNumber"
                  value={formik.values.mcNumber}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.mcNumber && formik.errors.mcNumber ? (
                  <div className="error">{formik.errors.mcNumber}</div>
                ) : null}
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
              <div className="dispatch-form__input-box">
                <input
                  type="text"
                  placeholder="USDOT# *"
                  name="usdotNumber"
                  value={formik.values.usdotNumber}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.usdotNumber && formik.errors.usdotNumber ? (
                  <div className="error">{formik.errors.usdotNumber}</div>
                ) : null}
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
              <div className="dispatch-form__input-box">
                <input
                  type="text"
                  placeholder="FEIN/SSN *"
                  name="feinSsn"
                  value={formik.values.feinSsn}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.feinSsn && formik.errors.feinSsn ? (
                  <div className="error">{formik.errors.feinSsn}</div>
                ) : null}
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
              <div className="dispatch-form__input-box">
                <input
                  type="number"
                  placeholder="Percentage (per load) *"
                  name="percentagePerLoad"
                  value={formik.values.percentagePerLoad}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.percentagePerLoad &&
                formik.errors.percentagePerLoad ? (
                  <div className="error">{formik.errors.percentagePerLoad}</div>
                ) : null}
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
              <div className="dispatch-form__input-box">
                <input
                  type="number"
                  placeholder="Flat Fee (per week/truck) *"
                  name="flatFee"
                  value={formik.values.flatFee}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.flatFee && formik.errors.flatFee ? (
                  <div className="error">{formik.errors.flatFee}</div>
                ) : null}
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
              <div className="dispatch-form__input-box">
                <input
                  type="text"
                  placeholder="Payment Method *"
                  name="paymentMethod"
                  value={formik.values.paymentMethod}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.paymentMethod && formik.errors.paymentMethod ? (
                  <div className="error">{formik.errors.paymentMethod}</div>
                ) : null}
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
              <div className="dispatch-form__input-box">
                <input
                  type="number"
                  placeholder="Number of Trucks *"
                  name="numberOfTrucks"
                  value={formik.values.numberOfTrucks}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.numberOfTrucks &&
                formik.errors.numberOfTrucks ? (
                  <div className="error">{formik.errors.numberOfTrucks}</div>
                ) : null}
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
              <div className="dispatch-form__input-box">
                <input
                  type="number"
                  placeholder="Number of Drivers *"
                  name="numberOfDrivers"
                  value={formik.values.numberOfDrivers}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.numberOfDrivers &&
                formik.errors.numberOfDrivers ? (
                  <div className="error">{formik.errors.numberOfDrivers}</div>
                ) : null}
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
              <div className="dispatch-form__input-box">
                <input
                  type="text"
                  placeholder="Type of Equipment *"
                  name="equipmentType"
                  value={formik.values.equipmentType}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.equipmentType && formik.errors.equipmentType ? (
                  <div className="error">{formik.errors.equipmentType}</div>
                ) : null}
              </div>
            </div>
          </div>
          <div className="dispatch-form__checkbox-group">
            <label>
              <input
                type="checkbox"
                name="factorInvoices"
                checked={formik.values.factorInvoices}
                onChange={formik.handleChange}
              />
              Do you factor your invoices?
            </label>
            {formik.touched.factorInvoices && formik.errors.factorInvoices ? (
              <div className="error">{formik.errors.factorInvoices}</div>
            ) : null}
          </div>
          <div className="dispatch-form__checkbox-group">
            <label>
              <input
                type="checkbox"
                name="termsAccepted"
                checked={formik.values.termsAccepted}
                onChange={formik.handleChange}
              />
              I Agree to the Terms & Condition of the company *
            </label>
            {formik.touched.termsAccepted && formik.errors.termsAccepted ? (
              <div className="error">{formik.errors.termsAccepted}</div>
            ) : null}
          </div>

          <div className="dispatch-form__input-box">
            <label>MC Authority File</label>
            <input
              type="file"
              name="mcAuthorityFile"
              onChange={(event) => {
                formik.setFieldValue(
                  "mcAuthorityFile",
                  event.currentTarget.files[0]
                );
              }}
            />
          </div>
          <div className="dispatch-form__input-box">
            <label>W9 Form</label>
            <input
              type="file"
              name="w9Form"
              onChange={(event) => {
                formik.setFieldValue("w9Form", event.currentTarget.files[0]);
              }}
            />
          </div>
          <div className="dispatch-form__input-box">
            <label>Certificate of Insurance</label>
            <input
              type="file"
              name="certificateOfInsurance"
              onChange={(event) => {
                formik.setFieldValue(
                  "certificateOfInsurance",
                  event.currentTarget.files[0]
                );
              }}
            />
          </div>
          <div className="dispatch-form__input-box">
            <input
              type="text"
              placeholder="Preferred States"
              name="preferredStates"
              value={formik.values.preferredStates}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.preferredStates && formik.errors.preferredStates ? (
              <div className="error">{formik.errors.preferredStates}</div>
            ) : null}
          </div>
          <div className="dispatch-form__input-box">
            <input
              type="text"
              placeholder="How did you hear about us? *"
              name="heardAboutUs"
              value={formik.values.heardAboutUs}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.heardAboutUs && formik.errors.heardAboutUs ? (
              <div className="error">{formik.errors.heardAboutUs}</div>
            ) : null}
          </div>
          <div className="dispatch-form__input-box">
            <input
              type="email"
              placeholder="Contact Email *"
              name="contactEmail"
              value={formik.values.contactEmail}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.contactEmail && formik.errors.contactEmail ? (
              <div className="error">{formik.errors.contactEmail}</div>
            ) : null}
          </div>

          <div className="dispatch-form__btn">
            <button type="submit" className="thm-btn">
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default DispatchingServiceForm;
