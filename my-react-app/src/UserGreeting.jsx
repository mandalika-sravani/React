// Condition Rendering -- allows to control what gets rendered in the application
//                          based on certain conditions
//                          (show, hide, or change components)

import PropTypes from 'prop-types'

function UserGreeting(props) {

    const welcome = <h2 className="hello"> Welcome {props.username} </h2>

    const log = <h2 className="log"> Please log in to continue </h2>

    return(props.isLoggedIn ? welcome : log);

}

UserGreeting.prototype = {
    isLoggedIn : PropTypes.bool,
    username : PropTypes.string,
}

UserGreeting.defaultProps = {
    isLoggedIn: false,
    username: "Guest",
}

export default UserGreeting