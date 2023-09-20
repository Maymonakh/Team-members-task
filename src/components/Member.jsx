import React from 'react';

const MemberItem = ({ name, isChecked }) => {
  return (
    <li className={`member-item ${isChecked ? '' : 'unchecked'}`}>
      <div className="member-info">
        <i className="fa fa-user"></i>
        {name}
      </div>
      <div className={`check-icon ${isChecked ? 'checked' : 'unchecked'}`}>
        <i className={`fa ${isChecked ? 'fa-check-circle' : 'fa-circle'}`}></i>
      </div>
    </li>
  );
};

export default MemberItem;
