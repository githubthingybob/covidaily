import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../../redux/mapStoreToProps';

// Basic class component structure for React with default state
// value setup. When making a new component be sure to replace
// the component name TemplateClass with the name for the new
// component.
class TemplateClass extends Component {
  state = {
    heading: 'Class Component',
  };

  render() {
    return (
      <div>
        <h2>{this.state.heading}</h2>
      </div>
    );
  }
}

export default connect(mapStoreToProps)(TemplateClass);


//     if (props.store.user.id != null) {
    
//     <>
//       <Link to="/home"><h2 className="nav-title">COVIDaily</h2></Link>
//       <div className="nav-div">
//           <ul className="nav-list">
//             <li className ="inline-li"><Link className="nav-link-li" to="/home">Home</Link></li>
//             <li className ="inline-li"><Link className="nav-link-li" to="/resources">Resources</Link></li>
//             <li className ="inline-li"><Link className="nav-link-li" to="/about">About</Link></li>
//             <li className ="inline-li"><Link className="nav-link" to="/info">Info Page</Link></li>
//             <li className ="inline-li"><LogOutButton className="nav-link" /></li>
//           </ul>
//       </div>

//       <div className="nav-line"></div> 
//       </>
  
// }

// else {
//   <>
//       <Link to="/home"><h2 className="nav-title">COVIDaily</h2></Link>
//       <div className="nav-div">
//           <ul className="nav-list">
//             <li className ="inline-li"><Link className="nav-link-li" to="/home">Home</Link></li>
//             <li className ="inline-li"><Link className="nav-link-li" to="/resources">Resources</Link></li>
//             <li className ="inline-li"><Link className="nav-link-li" to="/about">About</Link></li>
//             <li className ="inline-li"><Link className="nav-link" to="/info">Info Page</Link></li>
//             <li className ="inline-li"><LogOutButton className="nav-link" /></li>
//           </ul>
//       </div>

//       <div className="nav-line"></div> 
//       </>

// }


// export default connect(mapStoreToProps)(Nav);
