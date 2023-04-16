import React from 'react';
import "./About.css";
import aboutImg from "../../images/about.jpg";

const About = () => {
  return (
    <section className='about'>
      <div className='container'>
        <div className='section-title'>
          <h2>About</h2>
        </div>

        <div className='about-content grid'>
          <div className='about-img'>
            <img src = {aboutImg} alt = "" />
          </div>
          <div className='about-text'>
            <h2 className='about-title fs-26 ls-1'>About BookHub</h2>
            <p className='fs-17'>Welcome to our book search website! Here, you can easily search for any book you want, from classic literature to the latest bestsellers. Our website is designed to make it quick and easy for you to find the books you're looking for.

            On our homepage, you'll find a search bar where you can enter the title, author, or keywords related to the book you want to find. Once you've entered your search query, click on the "Search" button and our website will display a list of books that match your search criteria.
            
            </p>
            <p className='fs-17'>Each book listing includes important information such as the title, author, publisher, publication date, ISBN number, and a brief summary of the book. You can also see the cover image of the book, read reviews from other users, and see where you can buy the book.

              Our website also has a feature where you can create an account and save books to your wishlist or reading list. This makes it easy to keep track of the books you want to read and purchase in the future.

              In addition to searching for books, our website also has a blog section where you can read reviews, recommendations, and news about the latest releases in the book world.

              We hope you find our website useful and enjoyable to use for your book search needs!</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About