import React from "react";
import "./Clients.css";

const steps = [
  {
    label: "Consult with Team",
    description: "Start by consulting with our expert team to understand your requirements and find the perfect match for your project needs.",
    icon: (
        <img
        src="./public/data-strategy.png"
        alt="Consult with Team"
        width="80"
        height="50"
        style={{ objectFit: 'cover' }}
      />
    )
  },
  {
    label: "Make a Schedule",
    description: "Plan and create a detailed timeline for the recruitment process, including interviews, assessments and onboarding steps.",
    icon: (
       <img
        src="./public/daily-task.png"
        alt="Consult with Team"
        width="80"
        height="50"
        style={{ objectFit: 'cover' }}
      />
    )
  },
  {
    label: "Hire & Enjoy",
    description: "Complete the hiring process and start working with your new team member while we ensure a smooth transition and ongoing support.",
    icon: (
        <img
        src="./public/hiring.png"
        alt="Consult with Team"
        width="80"
        height="50"
        style={{ objectFit: 'cover' }}
      />
    )
  }
];

// SVG for green scribble background
const Scribble = () => (
  <svg width="300" height="260" viewBox="0 0 210 160" fill="none" xmlns="http://www.w3.org/2000/svg" style={{position: 'absolute', top: 0, left: 0, zIndex: 0}}>
    <path d="M54 116C9 96 4 42 52 30c48-11 94-12 122 1 27.6 12.9 25 54-5 81s-81 25-116 4z" stroke="#27C24C" strokeWidth="4" fill="none"/>
    <path d="M122 21c-11.5 6.3-50 11.5-61 16.5C28.5 48 20 79 60 102s122 16.5 124-34.5c2-42.5-68.5-52.5-112-41z" stroke="#27C24C" strokeWidth="2" fill="none"/>
  </svg>
);

function ChooseRecviteSection() {
  return (
    <section className="choose-recvite-section ">
      <h2 className="choose-title">We Choose a Recvite</h2>
      <div className="choose-cards-row">
        {steps.map((step, i) => (
          <div className="choose-card" key={step.label}>
            <div className="choose-icon-wrapper">
              <div className="choose-scribble-bg">
                <Scribble />
              </div>
              <span className="choose-step-num">{String(i+1).padStart(2, '0')}</span>
              <div className="choose-icon">{step.icon}</div>
            </div>
            <div className="choose-card-title">{step.label}</div>
            <div className="choose-card-desc">{step.description}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Clients() {
  return <ChooseRecviteSection />;
}

export default Clients;
