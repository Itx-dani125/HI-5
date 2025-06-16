import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const CardSlider = () => {
  const settings = {
    dots: false,
    arrows: true,
    slidesToShow: 4,
    infinite: true,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerMode: true,
          centerPadding: '40px'
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          centerMode: true,
          centerPadding: '20px'
        }
      }
    ]
  };

  const products = [
    {
      id: 1,
      title: 'Permanent Recruitment (Direct Hire)',
      image: './svg1.svg',
      alt: 'Icon representing permanent recruitment and direct hire services',
      description:
        'We deliver permanent staffing solutions with long-term value in mind. Our direct hire service connects you with thoroughly vetted professionals who fit your organization both technically and culturally. We don’t just fill roles, we help build the teams that shape your future',
    },
    {
      id: 2,
      title: 'Temporary/Contract Staffing',
      image: './svg1.svg',
      alt: 'Icon representing temporary and contract staffing solutions',
      description:
        'Need workforce flexibility without sacrificing quality? Our temporary and contract staffing solutions provide fast, reliable access to skilled professionals for project-based work, seasonal demands, or urgent talent gaps.',
    },
    {
      id: 3,
      title: 'Executive Search (Headhunting)',
      image: './svg1.svg',
      alt: 'Icon representing executive search and headhunting services',
      description:
        'When it comes to leadership, there is no room for compromise. Our executive search service is built for organizations seeking transformative leaders who can drive strategic impact. We engage in discreet, high-level searches to identify, assess, and attract top executive talent — regionally and globally.',
    },
    {
      id: 4,
      title: 'Recruitment Process Outsourcing (RPO)',
      image: './svg1.svg',
      alt: 'Icon representing recruitment process outsourcing services',
      description:
        'Our RPO services are designed for companies seeking to streamline, scale, or fully delegate their hiring operations. We embed our team into your HR function, delivering a seamless recruitment engine that supports everything from sourcing and screening to onboarding and compliance.',
    },
    {
      id: 5,
      title: 'Talent Mapping & Market Research',
      image: './svg1.svg',
      alt: 'Icon representing talent mapping and market research services',
      description:
        'Strategic hiring starts with intelligence. Our Talent Mapping & Market Research services equip you with real-time data on talent availability, competitor hiring trends, salary benchmarks, and skill gaps across your target market.',
    },
  ]

  // Custom arrow components
  const NextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={`${className} custom-arrow`}
        style={{ ...style, display: "block",
           background: "#3358D4",
           borderRadius: '50%',
           height: '40px', width: '40px',
           top:'-10%', right:'2%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white' }}
        onClick={onClick}
      />
    );
  };

  const PrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={`${className} custom-arrow`}
        style={{ ...style,
           display: "block",
           background: "#3358D4 ",
           borderRadius: '50%',
           height: '40px', width: '40px',
           top:'-10%', left:'90%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white' }}
        onClick={onClick}
      />
    );
  };

  return (
    <div className="cards-container w-full min-h-screen flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="services-heading w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-primary mb-4 text-lg sm:text-xl">Our Services</h2>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-medium w-full lg:w-3/5 mb-8 sm:mb-12">
          We are a client-needs driven company
        </h1>
      </div>
      <div className="card-slider-container w-full max-w-7xl px-4">
        <Slider
          {...settings}
          className="card-slider"
          nextArrow={<NextArrow />}
          prevArrow={<PrevArrow />}
        >
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}
        </Slider>
      </div>
    </div>
  )
};

const ProductCard = ({ product }) => {
  return (
    <div className="card px-2">
      <div className="main-link flex flex-col h-full p-6">
        <div className="image mb-6 flex justify-center">
          <img src={product.image} alt={product.alt} className="w-20 h-20 object-contain" />
        </div>
        <h2 className="title text-lg font-semibold text-center mb-3">{product.title}</h2>
        <p className="description text-sm text-gray-600 text-center flex-grow">
          {product.description}
        </p>
      </div>
    </div>
  );
};

export default CardSlider;