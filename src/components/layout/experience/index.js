import React from 'react';
import JobData from '../../../../content/jobs.json';
import Fade from 'react-reveal/Fade';
import '../layout.scss'

const Experience = () => {
  return (
    <section className="section xp">
      <Fade>
        <div className="section__title">
          <h4>2. <span>experience</span></h4>
        </div>
        <div className="section__content">
          <div className="xp__content">
            {JobData.jobs.map((data, index) => {
              return (
                <div key={index} className="jobs">
                  <div className="job">
                    <div className="place-time">
                      <div className="company">
                          <a
                            href={data.url}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {data.company}
                          </a>
                      </div>

                      <div className="position">{data.position}</div>
                    </div>
                    <p>{data.time}</p>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="link-to">
            <a href="https://github.com/TEE-EMM97" target="_blank" rel="noopener noreferrer">view CV<i className="bi-arrow-right" role="img" aria-label="arrow-right"/></a>
        </div>
        </div>
      </Fade>
    </section>
  );
};

export default Experience;
