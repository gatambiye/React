import React from 'react';

const Hero = ({title= 'Become a React Dev',subtitle= 'Find the React job that fits your skills and needs'}) => {
  const sectionStyle = {
    backgroundColor: '#4F46E5', // Example blue color
    padding: '40px 20px', 
  };

  const containerStyle = {
    maxWidth: '1200px', 
    margin: '0 auto', 
    padding: '0 20px',
  };

  const heroTextStyle = {
    textAlign: 'center',
  };

  const heroHeadingStyle = {
    fontSize: '2.25rem', 
    fontWeight: '800', 
    color: 'white',
  };

  const heroParagraphStyle = {
    margin: '16px 0',
    fontSize: '1.25rem', 
    color: 'white',
  };

  return (
    <section style={sectionStyle}>
      <div style={containerStyle}>
        <div style={heroTextStyle}>
          <h1 style={heroHeadingStyle}>
            {title || 'Become a React Dev'}
          </h1>
          <p style={heroParagraphStyle}>
            {subtitle || 'Find the React job that fits your skills and needs'}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
