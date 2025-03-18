function Maps() {
  return (
    <>
      <div className="p-10" id="map-location">
        <h1 className="font-bold text-5xl text-center mb-10">
          Warung Bude Location
        </h1>
        <div className="h-[500px] w-full">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d1983.0299463729652!2d107.07987843610594!3d-6.255840438886961!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNsKwMTUnMjEuMCJTIDEwN8KwMDQnNTAuMyJF!5e0!3m2!1sen!2sid!4v1729436253571!5m2!1sen!2sid"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </>
  );
}

export default Maps;
