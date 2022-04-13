import { BUTTON_TYPES } from "@utils/consts";
import Button from "@components/button";
import Register from "./register";
import Image from "next/image";

export default function Auth() {
  return (
    <div className="auth-comp">
      <div className="header-container">
        <div className="h-icon">
          <Image
            alt="back button icon"
            src="/imgs/backicon.svg"
            height={30}
            width={30}
          />
        </div>
        <div className="h-logo">
          <Image
            alt="header logo"
            src="/imgs/logo.svg"
            height={40}
            width={150}
          />
        </div>
      </div>

      <div className="a-landing">
        <h3>Book from the future.</h3>
        <p>
          Are you ready to book your next stay through NFT? Book from the
          future.
        </p>
        <p className="al-bwt">Book with Takyon.</p>
      </div>

      <Button value="More Info" type={BUTTON_TYPES.normal} />

      <Register />
    </div>
  );
}
