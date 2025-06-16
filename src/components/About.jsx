import React from 'react'


const About = () => {
  return (
    <>
      <div className="w-full h-[100vh] flex flex-col lg:flex-row items-center">
        <div className="left-img relative mt-[100px] lg:mt-[200px] w-full lg:w-[1000px] bg-[url(https://websitedemos.net/creative-agency-04/wp-content/uploads/sites/93/2017/11/02-image-free-img.jpg)] h-[50vh] lg:h-[70vh] bg-cover bg-no-repeat bg-center">
          <h1 className="absolute -top-10 lg:-top-20 font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl w-[90%] sm:w-[80%] lg:w-[60%] left-[5%] sm:left-[10%] lg:left-[50%]">
            Are you seeking a specialist in Global Talent?
          </h1>
        </div>
        <div className="right w-full lg:w-[40%] px-4 sm:px-6 flex flex-col gap-y-6 lg:gap-y-8 mt-8 lg:mt-0">
          <h1 className="text-xl sm:text-2xl lg:text-3xl mt-4 lg:mt-[200px]">
            RECRUITMENT & STAFFING
          </h1>
          <div className="para">
            <p className="w-full lg:w-[85%] text-sm sm:text-base">
              Building a successful company starts with hiring the right person
              for the right job, & here at <strong>HiFive Consulting</strong>,
              we understand how recruitment and staffing hold essential
              positions in any company. Our journey began in the United States
              of America under the name of Hi5 Consulting, where we gained
              tremendous exposure and expertise in connecting outstanding
              individuals from successful organizations and having skills as
              well as qualifications from a wide range of sectors. But now, as
              we move forward, We are delighted to offer our tried-and-true
              services to Qatar, a competitive market full of unique ideas and a
              land of opportunity.
            </p>
          </div>
          <p className="w-full lg:w-[80%] text-sm sm:text-base">
            In the field of human resources recruiting and staffing, accuracy
            and productivity are essential. Our team of experts uses the latest
            innovative technology to speed up the hiring process. We search
            everywhere for the best individuals for your company, from locating
            top talent through focused recruiting to carrying out comprehensive
            screening and interviews.
          </p>
        </div>
      </div>
    </>
  )
}

export default About