// components/HomeHeader.js

const HomeHeader = () => {
    return (
      <section id="home" className="relative h-[50vh]">
        <video
          autoPlay
          muted
          loop
          className="absolute inset-0 w-full h-full object-cover z-[-1]" // Video covers the section background
        >
          <source src="/coverr-secure-online-shopping-experience-1080p.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
  
        <div className="flex flex-col justify-center items-center h-full text-center relative z-10">
          <h2 className="text-3xl font-bold">Welcome to Yemna's Fusion Mart</h2>
          <p className="mt-4 text-lg">Discover stylish fashion and accessories at unbeatable prices!</p>
        </div>
      </section>
    );
  };
  
  export default HomeHeader;
  