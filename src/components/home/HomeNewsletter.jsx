export default function HomeNewsletter() {
    return (
      <section className="home-newsletter">
        <form className="container">
          <label htmlFor="email">
            <span>Subscribe to our</span>
            Newsletter
          </label>
  
          <input
            type="email"
            name="email"
            id="email"
            placeholder="enter your email address to receive the latest news"
          ></input>
  
          <button type="submit" title="Subscribe">
            Subscribe
          </button>
        </form>
      </section>
    );
  }