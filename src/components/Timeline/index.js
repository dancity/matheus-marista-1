import React from "react";
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { RiArrowDownSLine } from "react-icons/ri";

import { MdSchool } from "react-icons/md";

import { Container } from "./styles";

export default function Timeline() {
  return (
    <Container>
      <h1>Minha História</h1>
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: 'rgb(33, 150, 243)', color: '#000' }} //Card com texto
          contentArrowStyle={{ borderRight: '7px solid  #000' }} //Setinha card apontando pra bolinha
          date="2011 - Hoje" //data das paradas
          iconStyle={{ background: 'rgb(33, 150, 21)', color: '#fff' }} //Cor da bolinha / Cor do ícone
          icon={<MdSchool />} //Icon: https://react-icons.github.io/react-icons/
        >
          <img
            src="https://scontent.fbsb3-1.fna.fbcdn.net/v/t1.0-9/379147_304732659566868_459341197_n.jpg?_nc_cat=111&ccb=3&_nc_sid=cdbe9c&_nc_eui2=AeHlK1oaY2h0y30YLteqnQbe9giI652CZbz2CIjrnYJlvExHe1aQnFYYLh8zzXrNYgUnbC0dBfrBSg0uqY0u8OKf&_nc_ohc=ktrLLqseR20AX-jcU4z&_nc_ht=scontent.fbsb3-1.fna&oh=3896b814fdc48a90b548824e629e69ea&oe=6053AB4E"
            alt="eu"
            style={{ width: 200, height: 200 }}
          />
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2010 - 2011"
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          icon={<RiArrowDownSLine />}
        >
          <h3 className="vertical-timeline-element-title">Art Director</h3>
          <h4 className="vertical-timeline-element-subtitle">San Francisco, CA</h4>
          <p>
            Creative Direction, User Experience, Visual Design, SEO, Online Marketing
        </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2008 - 2010"
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          icon={<RiArrowDownSLine />}
        >
          <h3 className="vertical-timeline-element-title">Web Designer</h3>
          <h4 className="vertical-timeline-element-subtitle">Los Angeles, CA</h4>
          <p>
            User Experience, Visual Design
    </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2006 - 2008"
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          icon={<RiArrowDownSLine />}
        >
          <h3 className="vertical-timeline-element-title">Web Designer</h3>
          <h4 className="vertical-timeline-element-subtitle">San Francisco, CA</h4>
          <p>
            User Experience, Visual Design
    </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="April 2013"
          iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
          icon={<RiArrowDownSLine />}
        >
          <h3 className="vertical-timeline-element-title">Content Marketing for Web, Mobile and Social Media</h3>
          <h4 className="vertical-timeline-element-subtitle">Online Course</h4>
          <p>
            Strategy, Social Media
    </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="November 2012"
          iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
          icon={<RiArrowDownSLine />}
        >
          <h3 className="vertical-timeline-element-title">Agile Development Scrum Master</h3>
          <h4 className="vertical-timeline-element-subtitle">Certification</h4>
          <p>
            Creative Direction, User Experience, Visual Design
    </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2002 - 2006"
          iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
          icon={<RiArrowDownSLine />}
        >
          <h3 className="vertical-timeline-element-title">Bachelor of Science in Interactive Digital Media Visual Imaging</h3>
          <h4 className="vertical-timeline-element-subtitle">Bachelor Degree</h4>
          <p>
            Creative Direction, Visual Design
    </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
          icon={<RiArrowDownSLine />}
        />
      </VerticalTimeline>
    </Container>
  );
}
