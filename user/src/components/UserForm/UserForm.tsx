import { useFormInput } from "../../hooks/useFormInput";
import { Gender, User } from "../../types/User";
import DateInput from "../DateInput/DateInput";
import SelectInput from "../SelectInput/SelectInput";
import SumbitButton from "../SubmitButton/SubmitButton";
import TextInput from "../TextInput/TextInput";

type UserFormProps = {
  user: User | undefined;
  onSubmit: (user: User) => void;
};

function UserForm({ user, onSubmit }: UserFormProps) {
  console.log(user);
  const userNameProps = useFormInput("", true);
  const dobProps = useFormInput("", true);
  const genderProps = useFormInput("", true);
  const emailProps = useFormInput("", true);
  const addressProps = useFormInput("", true);
  const telephoneProps = useFormInput("", true);
  const websiteProps = useFormInput("", true);

  function convertStringToGender(value: string): Gender {
    switch (value) {
      case "Male":
        return Gender.MALE;
      case "Female":
        return Gender.FEMALE;
      case "Other":
        return Gender.OTHER;
      default:
        return Gender.OTHER;
    }
  }

  function isValidInputs(): boolean {
    const isUserNameValid = userNameProps.validateInput(userNameProps.value);
    const isDobValid = dobProps.validateInput(dobProps.value);
    console.log(genderProps.value);
    const isGenderValid = genderProps.validateInput(
      convertStringToGender(genderProps.value)
    );
    const isEmailValid = emailProps.validateInput(emailProps.value);
    const isAddressValid = addressProps.validateInput(addressProps.value);
    const istelephoneValid = telephoneProps.validateInput(telephoneProps.value);
    const isWebsiteValid = websiteProps.validateInput(websiteProps.value);
    return (
      isUserNameValid &&
      isDobValid &&
      isGenderValid &&
      isEmailValid &&
      isAddressValid &&
      istelephoneValid &&
      isWebsiteValid
    );
  }
  function handleSumbitNewUser() {
    if (isValidInputs()) {
      const user: User = {
        id: Math.random(),
        name: userNameProps.value,
        dob: dobProps.value,
        gender: convertStringToGender(genderProps.value),
        email: emailProps.value,
        address: addressProps.value,
        phone: telephoneProps.value,
        web: websiteProps.value,
      };
      onSubmit(user);
    } else {
      alert("Please enter information In");
    }
  }

  return (
    <div className="input-form-container">
      <div className="input-container">
        <span className="input-title">Username</span>
        <br />
        <TextInput
          value={userNameProps.value}
          onChange={userNameProps.handleInputChangeEvent}
          error={userNameProps.error}
        />
      </div>
      <div className="input-container">
        <span className="input-title">DOB</span>
        <br />
        <DateInput
          value={dobProps.value}
          onChange={dobProps.handleInputChangeEvent}
          error={dobProps.error}
        />
      </div>
      <div className="input-container">
        <span className="input-title">Gender</span>
        <br />
        <SelectInput
          value={genderProps.value}
          onChange={genderProps.handleInputChangeEvent}
          options={["MALE", "FEMALE"]}
          error={genderProps.error}
        />
      </div>
      <div className="input-container">
        <span className="input-title">Email</span>
        <br />
        <TextInput
          value={emailProps.value}
          onChange={emailProps.handleInputChangeEvent}
          error={emailProps.error}
        />
      </div>
      <div className="input-container">
        <span className="input-title">Post Address</span>
        <br />
        <TextInput
          value={addressProps.value}
          onChange={addressProps.handleInputChangeEvent}
          error={addressProps.error}
        />
      </div>
      <div className="input-container">
        <span className="input-title">Telephone</span>
        <br />
        <TextInput
          value={telephoneProps.value}
          onChange={telephoneProps.handleInputChangeEvent}
          error={telephoneProps.error}
        />
      </div>
      <div className="input-container">
        <span className="input-title">Website</span>
        <br />
        <TextInput
          value={websiteProps.value}
          onChange={websiteProps.handleInputChangeEvent}
          error={websiteProps.error}
        />
      </div>
      <SumbitButton onClick={handleSumbitNewUser} />
    </div>
  );
}
export default UserForm;
