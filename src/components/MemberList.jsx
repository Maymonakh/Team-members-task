import React from 'react';
import Member from './Member'; 
import Button from './Button'; 
import './MemberList.css';

const MemberList = () => {
  const teamMembers = [
    { id: 1, name: 'Carolien Bloeme', isChecked: false },
    { id: 2, name: 'Sun Jun', isChecked: true },
    { id: 3, name: 'Song Bao', isChecked:false  },
    { id: 3, name: 'Olivia Arribas', isChecked:false  },
    { id: 3, name: 'Ariana', isChecked:true  },
  ];

  return (
    <div className="team-member-list">
      <div className="search-bar">
        <i className="fa fa-search"></i>
        <input type="text" placeholder="Find members" />
        
      </div>
      <ul className="member-list">
        {teamMembers.map((member) => (
          <Member key={member.id} name={member.name} isChecked={member.isChecked} />
        ))}
      </ul>
      <Button />
    </div>
  );
};

export default MemberList;
