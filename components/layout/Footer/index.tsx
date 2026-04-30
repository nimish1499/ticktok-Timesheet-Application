const Footer = () => {
  return (
    <div className="bg-white rounded-lg py-8 shadow-card mt-4">
      <p className="text-sm text-center font-normal text-gray-500 leading-normal tracking-normal">
        © {new Date().getFullYear()} tentwenty. All rights reserved.
      </p>
    </div>
  );
};

export default Footer;
