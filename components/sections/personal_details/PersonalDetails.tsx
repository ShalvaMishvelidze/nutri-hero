"use client";
import { AccountAddress } from "@/components/organisms/account_address";
import { BodyMeasurements } from "@/components/organisms/body_measurements";
import { ContactDetails } from "@/components/organisms/contact_details";
import { Form } from "antd";
import { PersonalDetails as PersonalDetailsComponent } from "@/components/organisms/personal_details";
import dayjs from "dayjs";

const content_form = "flex flex-col gap-[50px] w-full";

const initialValues = {
  username: "TheRuthIsOnFire",
  first_name: "Ruth",
  last_name: "Mendoza",
  gender: "female",
  date_of_birth: dayjs("1988-05-31"),
  address: "23 Watkin Street",
  city: "Swansea",
  post_code: "SA16YD",
  phone: "07854572535",
  email: "theruththeruth@onfire.com",
};

const PersonalDetails = () => {
  return (
    <>
      <BodyMeasurements />
      <Form initialValues={initialValues} className={content_form}>
        <PersonalDetailsComponent />
        <AccountAddress />
        <ContactDetails />
      </Form>
    </>
  );
};
export default PersonalDetails;
