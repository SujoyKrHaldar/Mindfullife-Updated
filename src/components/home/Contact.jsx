import ContactSVG from "../common/svg/ContactSVG";
import ContactContent from "./components/ContactContent";

function Contact() {
  return (
    <>
      <div className="container my-[5rem] flex items-center justify-center ">
        <div className="flex-1">
          <ContactContent />
        </div>
        <div className="flex-1">
          <ContactSVG />
        </div>
      </div>
    </>
  );
}

export default Contact;
