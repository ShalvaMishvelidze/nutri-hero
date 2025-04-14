"use client";
import { AccountAddress } from "@/components/organisms/account_address";
import { BodyMeasurements } from "@/components/organisms/body_measurements";
import { ContactDetails } from "@/components/organisms/contact_details";
import { Form } from "antd";
import { PersonalDetails as PersonalDetailsComponent } from "@/components/organisms/personal_details";

const content_form = "flex flex-col gap-[50px] w-full";

const PersonalDetails = () => {
  return (
    <>
      <BodyMeasurements />
      <Form className={content_form}>
        <PersonalDetailsComponent />
        <AccountAddress />
        <ContactDetails />
      </Form>
    </>
  );
};
export default PersonalDetails;
