const Hero = () => {
  return (
    <main className="hero container">
      <div className="hero-content">
        <h1>YOUR FEET DESERVE THE BEST</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <div className="hero-btn">
          <button>Shop Now</button>
          <button className="secondary-btn">Category</button>
        </div>
        <div className="shopping">
          <p>Also Available On</p>
          <div className="brand-icons">
            <img src="./images/amazon.png" alt="amazon-logo" />
            <img src="./images/flipkart.png" alt="flipkart-logo" />
          </div>
        </div>
      </div>
      <div className="hero-image">
        <img src="./images/shoe_image.png" alt="shoe-image" />
      </div>
    </main>
  );
};
export default Hero;
