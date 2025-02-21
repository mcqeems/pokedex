import Form from "../components/ContactForm";

function Contact() {
  return (
    <>
      <div className="flex h-screen w-[90%] flex-col items-center justify-center justify-self-center bg-white px-3 pt-20 pb-5 md:flex-row md:px-10 md:py-30">
        <Form></Form>
      </div>
    </>
  );
}

export default Contact;
